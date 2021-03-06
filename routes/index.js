import express from 'express';

const router = express.Router();

export default () => {
  router.get('/', (req, res) => {
    res.render('index', {
      pretty: true,
      title: 'Henya Adler Design'
    });
  });
  return router;
};
