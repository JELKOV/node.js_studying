import express from 'express';
const router = express.Router();

// 홈 화면
router.get('/', (req, res) => {
  const darkMode = req.cookies.darkMode || 'off'; // 쿠키에서 darkMode 값 읽기 (없으면 'off')
  res.render('index', { darkMode }); // index.ejs 렌더링하면서 darkMode 값 넘기기
});

// GET 요청: '/parameter' (쿼리스트링 처리)
router.get('/parameter', (req, res) => {
  const render_data = {
    data1: req.query.data1, // URL 쿼리스트링에서 data1 가져오기
    data2: req.query.data2  // URL 쿼리스트링에서 data2 가져오기
  };
  res.render("parameter", render_data); // parameter.ejs 렌더링 + 데이터 전달
});

// POST 요청: '/parameter' (폼 데이터 처리)
router.post('/parameter', (req, res) => {
  const render_data = {
    data1: req.body.data1, // POST 요청 body에서 data1 가져오기
    data2: req.body.data2  // POST 요청 body에서 data2 가져오기
  };
  res.render("parameter", render_data); // parameter.ejs 렌더링 + 데이터 전달
});

// 다크모드 켜기
router.get('/darkmode/on', (req, res) => {
  res.cookie('darkMode', 'on', { maxAge: 7 * 24 * 60 * 60 * 1000 }); // 쿠키 저장 (1주일 유지)
  res.redirect('/'); // 다시 메인페이지로 이동
});

// 다크모드 끄기
router.get('/darkmode/off', (req, res) => {
  res.cookie('darkMode', 'off', { maxAge: 7 * 24 * 60 * 60 * 1000 });
  res.redirect('/');
});

// 세션 저장
router.get('/save-session', (req, res) => {
  req.session.user = {
    username: 'Gram', // 사용자명
    role: 'admin'     // 역할
  };
  res.send('세션이 저장되었습니다!');
});

// 세션 불러오기
router.get('/load-session', (req, res) => {
  if (req.session.user) {
    res.send(`세션 사용자: ${req.session.user.username}, 역할: ${req.session.user.role}`);
  } else {
    res.send('저장된 세션 정보가 없습니다.');
  }
});

// 세션 삭제
router.get('/destroy-session', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('세션 삭제 에러:', err);
    }
    res.send('세션이 삭제되었습니다.');
  });
});

export default router;
