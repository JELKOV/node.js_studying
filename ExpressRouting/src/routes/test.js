import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Test 페이지');
});

export default router;