import nodemailer from 'nodemailer'
import logger from '../loggers/Log4jsLogger.js'

// Nodemailer config

const mailConfig = ({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jillian.harvey@ethereal.email', // para testear ir a https://ethereal.email/create y generar un nuevo mail y nueva pw.
        pass: 'ZPzQCZ93JpTWBhGbYX'
    }
})

const testAccount = 'jillian.harvey@ethereal.email'
const subject = "Nueva cuenta activada"
const htmlMessage = "<h1> Congratulations! Your account was created successfully </h1>"

export const transporter = nodemailer.createTransport(mailConfig)

export const options = { from: testAccount, to: testAccount, subject: subject, text: "Hola coder", html: htmlMessage}

export const sendMail = async (transporter, options) => {
    try {
        await transporter.sendMail(options)
        logger.info('E-mail sent successfully!')
    } catch (err) {
        logger.error(err)
    }
}