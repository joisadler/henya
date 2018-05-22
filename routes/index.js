import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  // res.render('index', {
  //   title: 'Express'
  // });
  res.render('public/index.html');
});

export default router;
