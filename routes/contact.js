import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

export default () => {
  router.post('/', (req, res, next) => {
    const {
      GMAIL_USER,
      GMAIL_PASS
    } = process.env;
    const {
      firstname,
      lastname,
      email,
      country,
      subject,
      message
    } = req.body;
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    });
    const mailOpts = {
      from: 'Henya Adler Design',
      to: GMAIL_USER,
      subject: 'Новое сообщение с сайта Henya Adler Design',
      html: `
      <h2>Новое сообщение с сайта Henya Adler Design!</h2>
      <p>Отправитель: ${firstname} ${lastname}, ${country}.</p>
      <p>Адрес отправителя: ${email}</p>
      <p>Тема: ${subject}</p>
      <p>Текст сообщения: <br>${message}</p>
      `
    };
    smtpTrans.sendMail(mailOpts, (er, r) => {
      if (er) {
        r.send(er);
      }
    });
  });
  return router;
};
