// http 모듈은 웹 애플리케이션을 개발할 수 있도록 제공되는 모듈이다.
//import http from 'http';
//import url from 'url';

//(1) 서버 생성 (요청 URL 분석해서 응답하는 방식)

/*const server = http.createServer((req, res) => {
  // 요청 URL을 파싱함 (true를 주면 쿼리 스트링을 객체로 변환)
  const parsedUrl = url.parse(req.url, true);

  console.log('요청 경로:', parsedUrl.pathname); // 요청한 경로 출력
  console.log('요청 파라미터:', parsedUrl.query); // 요청한 쿼리 스트링 출력

  // 응답 헤더 설정 (JSON 데이터 전송을 명시)
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // JSON 형식으로 응답 데이터 전송
  res.end(JSON.stringify({ message: '요청을 받았습니다.' }));
});

// 서버 실행 (3000번 포트)
server.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다!');
});*/


/*// (2) 기본적인 서버 생성 (텍스트 응답하는 방식)
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // 응답 헤더 설정
  res.end("Hello World!"); // 응답 본문 작성 후 종료
});

server.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
*/


/*// (3) 서버 객체 생성 (본문을 나눠서 전송하는 방식)
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // 응답 헤더 설정
  res.write('Hello '); // 본문 일부 전송
  res.write('World!'); // 본문 추가 전송
  res.end(); // 응답 종료
});

server.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다!');
});
*/

/*//(4)서버 생성
const server = http.createServer((req, res) => {
  // 응답 헤더 설정 (Content-Type을 HTML로 명시하고 문자 인코딩은 UTF-8로 설정)
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // HTML 문서 시작 부분 작성
  res.write("<!DOCTYPE html>"); // HTML5 문서 타입 선언
  res.write("<html>");          // HTML 문서 시작
  res.write("<head>");          // head 태그 시작
  res.write("<meta charset='utf-8' />"); // 문자 인코딩 설정
  res.write("<title>Node.js 웹 애플리케이션</title>"); // 웹 페이지 제목 설정
  res.write("</head>");         // head 태그 종료

  // HTML 본문 작성
  res.write("<body>");          // body 태그 시작
  res.write("<h1>Node.js 웹 애플리케이션</h1>"); // 본문에 제목 추가
  res.write("</body>");         // body 태그 종료
  res.write("</html>");         // HTML 문서 종료

  // 응답 종료
  res.end();
});

// 서버 실행 (포트 3000번에서 서버를 시작)
server.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다!');
});*/


import http from 'http';
import url from 'url';

// 서버 생성
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // URL과 쿼리 파싱
  const pathname = parsedUrl.pathname;
  const method = req.method;

  console.log('요청 경로:', pathname);
  console.log('요청 메서드:', method);

  // 1. GET / 요청 → HTML 응답
  if (method === 'GET' && pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>Node.js 서버</title></head>
      <body>
        <h1>Welcome to Node.js HTTP Server</h1>
      </body>
      </html>
    `);
  
  // 2. GET /api 요청 → JSON 응답
  } else if (method === 'GET' && pathname === '/api') {
    const query = parsedUrl.query;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'API 요청 성공',
      query: query  // 쿼리스트링을 그대로 보여줌
    }));

  // 3. POST /data 요청 → JSON 바디 받기
  } else if (method === 'POST' && pathname === '/data') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      console.log('POST 데이터:', body);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        message: 'POST 데이터 수신 성공',
        data: JSON.parse(body)
      }));
    });

  // 4. 그 외 경로 → 404 Not Found
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// 서버 실행
server.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다!');
});



