import express from 'express';
const router = express.Router();

import conn from '../db.js';

//홈화면 
router.get('/', (req, res) => {
	res.render('index');
})

//Login Post 요청: '/login' : 폼 데이터 처리
router.post('/login', (req, res) => {
	req.session.user = {
		username: req.body.user_name
	};
	res.redirect('main');
})

// main 페이지
router.get('/main', (req, res) => {
	const sql = "SELECT * FROM GuestBookTable";
	  conn.query(sql, (error, rows) => {
	    if (error) {
	      console.error('방명록 데이터 조회 실패', error);
	      res.send('DB Error');
	      return;
	    }
	    res.render('main', { guestbooks: rows });
	  });
});

//Content Post 요청: '/save_guestbook : 폼 데이터처리
router.post('/save_guestbook', (req, res) => {
	// 작성자 정보
	const user_name = req.session.user.username;
	const content_data = req.body.content;
	
    const sql = "INSERT INTO GuestBookTable (guestbook_name, guestbook_content) VALUES (?, ?)";
	
    conn.query(sql, [user_name, content_data], (error) => {
        if (error) {
          console.error('방명록 저장 실패', error);
          res.send('DB Error');
          return;
        }
        res.redirect('/main');
    });
});

export default router;