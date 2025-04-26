// ES6 기준 __filename과 __dirname은 Global 객체는 아니다.
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 현재 실행중인 파일의 경로와 파일명을 가지고 있음
console.log(__filename)
// 현재 실행중인 파일의 경로를 가지고 있음
console.log(__dirname)

//setTimeout:지정 시간 후 한 번 실행
const a4 = setTimeout(function(){
	console.log('Timeout Log')
},1000)

//clearTimeout(a4);

//setImmediate: 이벤트 루프 끝난 직후 실행될 코드 등록
console.log("node.js code");
// 작업이 완료되고 각각 호출1
setImmediate(function(){
	console.log("immediate action 1");
})
console.log("node.js code");
// 작업이 완료되고 호출 2
const a1 = setImmediate(function(){
	console.log("immediate action 2");
})
console.log("node.js code");
clearImmediate(a1);



//setInterval: 주어진 함수를 시간마다 호출함
let a2 = 0;
const a3 = setInterval(function(){
	console.log("Interval Log");
	a2++;
	console.log('a2', a2);
	if(a2 >= 5){
		clearInterval(a3);
	}
},1000);



console.log("Done Projcet");
