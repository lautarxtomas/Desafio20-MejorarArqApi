export default function auth(req, res, next) {
    if (req.headers.authorization === process.env.TOKEN) {
        next();
    } else {
        return res.status(401).send('No autorizado');
    }
}
