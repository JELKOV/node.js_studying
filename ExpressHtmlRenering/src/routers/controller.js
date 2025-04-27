import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
//  res.send('home 페이지');
  res.render('home.html');
});

router.get('/test', (req, res) => {
//  res.send('Test 페이지');
	res.render('test.html');
});

export default router;
