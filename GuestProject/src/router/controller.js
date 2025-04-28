// router/controller.js
import express from 'express';
const router = express.Router();

// db.js에서 MySQL 연결 객체 가져오기
import conn from '../db.js';

// ====================
// 홈 화면 요청 처리 ('/')
// ====================
router.get('/', (req, res) => {
  // index.ejs 렌더링 (로그인 입력 화면)
  res.render('index');
});

// ====================
// 로그인 처리 ('/login')
// ====================
router.post('/login', (req, res) => {
  // 로그인하면 사용자 이름을 세션에 저장
  req.session.user = {
    username: req.body.user_name
  };
  // 로그인 성공 후 메인 페이지로 이동
  res.redirect('main');
});

// ====================
// 메인 페이지 요청 처리 ('/main')
// ====================
router.get('/main', (req, res) => {
  const sql = "SELECT * FROM GuestBookTable";

  // DB에서 방명록 데이터 조회
  conn.query(sql, (error, rows) => {
    if (error) {
      console.error('방명록 데이터 조회 실패', error);
      res.send('DB Error');
      return;
    }
    // 조회된 데이터를 'guestbooks'라는 이름으로 main.ejs에 전달
    res.render('main', { guestbooks: rows });
  });
});

// ====================
// 방명록 저장 처리 ('/save_guestbook')
// ====================
router.post('/save_guestbook', (req, res) => {
  // 세션에서 사용자 이름 가져오기
  const user_name = req.session.user.username;
  // 폼 데이터(방명록 내용) 가져오기
  const content_data = req.body.content;
  
  // DB에 삽입할 SQL문
  const sql = "INSERT INTO GuestBookTable (guestbook_name, guestbook_content) VALUES (?, ?)";

  // 이름과 내용을 DB에 저장
  conn.query(sql, [user_name, content_data], (error) => {
    if (error) {
      console.error('방명록 저장 실패', error);
      res.send('DB Error');
      return;
    }
    // 저장 성공하면 다시 메인 페이지로 이동
    res.redirect('/main');
  });
});

// router 모듈 내보내기
export default router;
