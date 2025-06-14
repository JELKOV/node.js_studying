// 콘솔에 문자열 출력
console.log("AHN");

// 변수 선언
var a1 = 100;           // 숫자 변수
var a2 = "문자열2";      // 문자열 변수

// printf 스타일 포맷 사용 (%d: 숫자, %s: 문자열)
console.log("a1: %d, a2: %s", a1, a2);

// 쉼표(,)로 여러 값을 나열해서 출력 (자동 띄어쓰기됨)
console.log("a1:", a1, "a2:", a2);

// 모듈 사용하기
import { f2 } from "./second.js"; // 모듈 가져오기
f2();                             // 모듈 내 함수 호출