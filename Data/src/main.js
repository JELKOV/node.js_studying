import express from "express";
const app = express();

// ejs 템플릿 엔진 등록
import ejs from 'ejs';
app.set('views', './views');            // 뷰 파일 위치 지정
app.set('view engine', 'ejs');           // 사용할 뷰 엔진 지정
app.engine('ejs', ejs.renderFile);       // ejs 파일 렌더링 방식 설정

// body-parser 등록 (요청 body 데이터 파싱용)
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true })); // 폼 데이터 파싱 (application/x-www-form-urlencoded)
app.use(bodyParser.json());                          // JSON 데이터 파싱 (application/json)

// cookie-parser 등록 (쿠키 파싱용)
import cookieParser from "cookie-parser";
app.use(cookieParser()); // 요청의 Cookie 헤더를 읽어 객체 형태로 변환해줌

// session 등록
import session from 'express-session';
app.use(session({
  secret: 'secret-ahn',     // 세션 암호화에 사용할 비밀 키
  resave: false,             // 요청이 들어올 때마다 세션을 강제로 저장할지 여부
  saveUninitialized: true,   // 초기화되지 않은 세션을 저장할지 여부 (오타: Unintialized -> Uninitialized)
}));

// 라우터 등록
import router from './router/controller.js';
app.use('/', router); // '/' 경로에 대해 라우터 연결

// 서버 실행 (포트 3000)
app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
