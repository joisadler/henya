import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import favicon from 'serve-favicon';
import nodemailer from 'nodemailer';
import index from './routes/index';

require('dotenv').config();

const app = express();
const debug = Debug('henya:app');

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');
// app.use(favicon(path.join(__dirname, 'public/images/favicon', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.post('/contact', (req, res) => {
  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_PASS = process.env.GMAIL_PASS;
  const country = req.body.country ? `, ${req.body.country},` : '';
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
    from: `${req.body.firstname} &lt; ${req.body.email}&gt;`,
    to: GMAIL_USER,
    subject: 'Новое сообщение из контактной формы на сайте henya.me',
    html: `
    <h2>${req.body.firstname} ${req.body.lastname} (${req.body.email})${country} отправил вам сообщение!</h1>
    <h3>Тема сообщения:</h2>
    <p>${req.body.subject}</p>
    <h3>Текст сообщения:</h3>
    <p>${req.body.message}</p>
    `
  };
  // console.log(mailOpts)
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.send(error);
    }
  });
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
