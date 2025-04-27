import express from 'express'; // Express 모듈 가져오기

//express 객체 생성
const app = express();

//Get 요청 처리
app.get('/', (req, res) => {
	res.send('Hello Express'); // 클라이언트에 응
});

// Post 요청 처리
app.post('/submit', (req, res) => {
	res.send('Post 요청 받음'); 
});

// 서버 실행 (포트 3000)
app.listen(3000, () => {
	console.log('서버가 3000번 포트에서 실행 중입니다.')
})