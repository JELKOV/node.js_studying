import express from 'express';
const router = express.Router();

// "/" 경로 요청이 오면 home.ejs를 렌더링하고 데이터를 함께 전달
router.get('/', (req, res) => {
	const now = new Date(); // 현재 시간 객체 생성
	
  res.render('home', {
    username: 'Gram',         // 사용자 이름
    isLoggedIn: true,          // 로그인 여부
    fruits: ['apple', 'banana', 'strawberry'], // 과일 리스트
    currentDate: now.toDateString() // 날짜를 보기 좋게 변환해서 넘김 (ex: Mon Apr 29 2025)
  });
});

// "/test" 경로는 테스트용 페이지 렌더링
router.get('/test', (req, res) => {
  res.render('test'); // test.ejs 파일도 필요해!
});

export default router;
