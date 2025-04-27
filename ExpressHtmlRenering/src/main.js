import express from 'express';
import ejs from 'ejs';

import controllerRouter from './routers/controller.js';

const app = express();

//뷰 엔진을 ejs로 설정
app.set('view engine', 'ejs');

//views 폴더 설정 (생략 가능, 기본값이 'views')
app.set('views', './views');

//"html 파일을 ejs처럼 해석해라" 설정
app.engine('html', ejs.renderFile);

app.use('/', controllerRouter);

//5. 정적 파일 서빙
app.use(express.static("public"));

app.listen(3000, () => {
console.log('서버가 3000번 포트에서 실행 중입니다.');
});