import mysql from 'mysql2';

// DB 연결
const conn = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '1234',
	database: 'GusetBookDB'
})

// 연결 상태 체크
conn.connect((err) => {
	if(err) {
		console.error('MySQL 연결 실패', err)
	} else {
		console.log('MySQL 연결 성공');
	}
})

export default conn;