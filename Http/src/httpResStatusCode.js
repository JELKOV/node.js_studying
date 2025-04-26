import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/ok') {
    res.writeHead(200);
    res.end('200 OK');
  } else if (req.url === '/forbidden') {
    res.writeHead(403);
    res.end('403 Forbidden');
  } else if (req.url === '/notfound') {
    res.writeHead(404);
    res.end('404 Not Found');
  } else {
    res.writeHead(500);
    res.end('500 Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
