import express from 'express';
const app = express();

import ejs from 'ejs';

// views 폴더 경로 설정 (뷰 파일들의 기본 위치)
app.set('views', './views');
// 뷰 엔진을 ejs로 설정 (템플릿 파일 확장자는 .ejs)
app.set('view engine', 'ejs');
// ejs 파일을 렌더링할 때 사용할 엔진 설정 (사실 기본값이라 생략 가능하지만 명시)
app.engine('ejs', ejs.renderFile);

// 라우터 불러오기
import controllerRouter from './router/controller.js';

// 메인 경로('/') 요청은 controllerRouter가 처리
app.use('/', controllerRouter);
// public 폴더 내의 정적 파일(css, js, 이미지 등)을 서빙
app.use(express.static('public'));
// 서버 실행 (포트 3000번에서 대기)
app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
