import express from 'express';
import homeRouter from './routes/home.js';
import testRouter from './routes/test.js';

const app = express();

app.use('/', homeRouter); // '/' 경로에 대해 homeRouter 사용
app.use('/test', testRouter); // '/test' 경로에 대해 testRouter 사용

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
