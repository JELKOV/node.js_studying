import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/download') {
    res.writeHead(200, {
      'Content-Disposition': 'attachment; filename="example.txt"',
      'Content-Type': 'text/plain'
    });

    const readStream = fs.createReadStream('example.txt');
    readStream.pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
