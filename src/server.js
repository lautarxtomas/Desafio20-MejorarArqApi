import express from "express";
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';
import userRouter from './routes/user.route.js';
import otherRouter from './routes/other.route.js';
import session from 'express-session';
import {engine} from 'express-handlebars';
import path from 'path';
import {fileURLToPath} from 'url';
import mongoStore from 'connect-mongo';
import compression from 'compression';
import minimist from 'minimist';
import logger from "./utils/loggers/Log4jsLogger.js";
import loggerMiddleware from "./middlewares/routesLogger.middleware.js";
const app = express();

import dotenv from 'dotenv'
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(loggerMiddleware);
// app.use(express.static('public'));
app.use(compression());

// handlebars config
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))
app.set('views', './views');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(
    session({
        store: mongoStore.create({
            mongoUrl: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/terceraEntrega',
            options: {
                userNewParser: true,
                useUnifiedTopology: true,
            }
        }),
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {maxAge: 600000} //10 min.
        
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/productos', productRouter);
app.use('/api/carrito', cartRouter);
app.use('/api/usuario', userRouter);
app.use('/test', otherRouter);


app.all("*", (req, res) => {
    res.status(404).json({"error": "ruta no existente"})
  });

/* --------------- Leer el puerto por consola o setear default -------------- */

const options = {
    alias: {
        "p": "PORT"
    },
    default: {
        "PORT": 8080
    }
};

app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
      console.log(r.route.path)
    }
  });

const { PORT } = minimist(process.argv.slice(2), options);

const server = app.listen(PORT, () => {
    logger.info(`🚀 Server started at http://localhost:${PORT}`)
    })
    
server.on('error', (err) => logger.error(err));

