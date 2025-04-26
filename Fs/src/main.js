import fs from 'fs';
// 파일을 읽고 쓰는 기능을 제공하는 기본 내장 모듈

//==========================================
//비동기 방식으로 파일 쓰기, 추가하기, 읽기
//==========================================

//'test.txt' 파일을 생성하고 'Hello'를 작성 (비동기)
fs.writeFile('test.txt', 'Hello', (err) => {
if (err) throw err;
console.log('writeFile 1 Finished'); // 파일 생성/쓰기 완료 후 출력
});

//'test2.txt' 파일을 생성하고 'Hello'를 작성 (비동기)
fs.writeFile('test2.txt', 'Hello', (err) => {
if (err) throw err;
console.log('writeFile 2 Finished'); // 다른 파일에 쓰기 완료 후 출력
});

//'test.txt' 파일에 'Ahn'을 추가 (append) (비동기)
fs.appendFile('test.txt', 'Ahn', (err) => {
if (err) throw err;
console.log('appendFile Finished'); // 추가 작업 완료 후 출력
});

//'test.txt' 파일을 읽어와서 내용을 출력 (비동기)
fs.readFile('test.txt', 'utf8', (err, data) => {
if (err) throw err;
console.log('read file:', data); // 읽은 파일 내용 출력
});

//==========================================
//위 방식은 비동기라 순서가 보장되지 않음!
//(읽기(readFile)가 append보다 먼저 실행될 수도 있음)
//==========================================


//==========================================
//순서를 보장하는 콜백 중첩 버전
//==========================================

/*
fs.writeFile('test.txt', 'Hello', (err) => {
if (err) throw err;
console.log('writeFile 1 Finished');

fs.appendFile('test.txt', 'Ahn', (err) => {
 if (err) throw err;
 console.log('appendFile Finished');

 fs.readFile('test.txt', 'utf8', (err, data) => {
   if (err) throw err;
   console.log('read file:', data); // → 'HelloAhn' 출력
 });
});
});
*/

//==========================================
//async/await 방식 (가독성 좋은 현대적 비동기 처리)
//==========================================

/*
import { promises as fs } from 'fs'; // Promise 기반 fs 모듈 사용

const run = async () => {
await fs.writeFile('test.txt', 'Hello'); // 파일 쓰기
await fs.appendFile('test.txt', 'Ahn');   // 파일 추가
const data = await fs.readFile('test.txt', 'utf8'); // 파일 읽기
console.log('read file:', data); // → 'HelloAhn' 출력
};

run();
*/


//==========================================
//동기(Sync) 방식으로 파일 쓰기, 추가하기, 읽기
//==========================================

//1️'log.txt' 파일을 새로 만들고 'log start\n'을 작성
fs.writeFileSync('log.txt', 'log start\n');
console.log("log.txt 파일 생성 및 작성 완료");

//2️'log2.txt' 파일을 새로 만들고 'log2 start\n'을 작성
fs.writeFileSync('log2.txt', 'log2 start\n');
console.log("log2.txt 파일 생성 및 작성 완료");

//3️'log.txt' 파일 끝에 'log add\n' 문자열을 추가
fs.appendFileSync('log.txt', 'log add\n');
console.log("log.txt 파일에 내용 추가 완료");

//4️'log.txt' 파일을 읽어와서 출력
const content = fs.readFileSync('log.txt', 'utf8');
console.log("\n [log.txt ]\n");
console.log(content);