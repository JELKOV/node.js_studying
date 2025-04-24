/**
 * 버퍼 생성
 */
// 10바이트 짜리 버퍼를 0으로 초기화 -> 10바이트짜리 기억공간을 만든거라고 생각하면 됨
const buf1 = Buffer.alloc(10);

// 초기화하지 않음 (성능은 빠르나 보안 이슈 가능)
const buf2 = Buffer.allocUnsafe(10);

// byteLength
const size1 = Buffer.byteLength(buf1);
console.log('size1 :', size1 );
console.log('bytes:', buf1.length);

//문자열을 버퍼로
const buf3 = Buffer.from("Hello");

console.log(buf3); // <Buffer 48 65 6c 6c 6f>
console.log(buf3.toString()); // "Hello" 

//=== compare: 두 버퍼의 내용을 비교 (값 기준 정렬용) ===
//같으면 0, 첫 번째가 작으면 -1, 크면 1 반환
const buf5 = Buffer.from('cccc');
const buf6 = Buffer.from('cccc');
const buf7 = Buffer.from('aaaa');
const buf8 = Buffer.from('dddd');

const v1 = Buffer.compare(buf5, buf6);  // 같음 → 0
console.log("buf5 buf6:", v1)

const v2 = Buffer.compare(buf5, buf7);  // buf5 > buf7 → 1
console.log("buf5, buf7:", v2)

const v3 = Buffer.compare(buf5, buf8);  // buf5 < buf8 → -1
console.log("buf5, buf8:", v3)

// === concat: 여러 버퍼를 하나로 결합 ===
const bufA = Buffer.from('Node');
const bufB = Buffer.from('.js');
const result = Buffer.concat([bufA, bufB]);

console.log("Concat: ",result.toString()); // Node.js


//=== copy: 한 버퍼의 일부를 다른 버퍼에 복사 ===
const src = Buffer.from('copy this'); // 원본 버퍼
console.log("Copy src: ",src);
const target = Buffer.alloc(10); // 10바이트 크기의 빈 버퍼

//src.copy(대상, 대상 시작 인덱스, 원본 시작 인덱스, 원본 끝 인덱스)
src.copy(target, 0, 0, 4); // 'copy'만 복사
console.log("Copy target: ", target) // target 원본 <Buffer 63 6f 70 79 ...>
console.log("Copy target to String: ", target.toString()); // 'copy'

//=== entries: 버퍼의 [index, value] 쌍 반복 ===
const bufc = Buffer.alloc(5).fill('a'); // 'aaaaa' → ASCII 97
// 버퍼가 16진수로 된 바이트 배열처럼 출력됨
console.log("Entries bufc:", bufc);
console.log("Entries bufc toString: ",bufc.toString()); // 'aaaaa'

//구조분해할당 사용 → i: 인덱스, val: 아스키값(숫자)
for (const [i, val] of bufc.entries()) {
  console.log(`Index ${i} = ${val}`); // 인덱스/값 확인
}

//=== equals: 버퍼 내용이 완전히 동일한지 비교 (Boolean 반환) ===
const buf11 = Buffer.from('abcd');
const buf12 = Buffer.from('abcd');
const buf13 = Buffer.from('zzzz');

const v4 = buf11.equals(buf13); // false
console.log('equals (buf11 vs buf13):', v4);

const v5 = buf11.equals(buf12); // true
console.log('equals (buf11 vs buf12):', v5);



// === fill: 버퍼 전체를 특정 값으로 채움 ===
const buf14 = Buffer.from('aaaa'); // 초기값: aaaa
console.log("Original buf14:", buf14);

buf14.fill('c'); // → 'cccc'
console.log("Filled with 'c':", buf14);

buf14.fill('abc'); // → 'abca' (지정한 문자열을 순환해서 채움)
console.log("Filled with 'abc':", buf14);

//=== includes: 해당 문자열이 버퍼 내에 포함되어 있는지 확인 (Boolean 반환) ===
const buf15 = Buffer.from('Hello Node.js');

const v6 = buf15.includes("Node");   // 'Node'가 포함되어 있음
console.log("includes 'Node':", v6); // true

const v7 = buf15.includes("javascript"); // 없음
console.log("includes 'javascript':", v7); // false



// === indexOf: 버퍼 내에서 문자열이 **처음 등장하는 인덱스**를 반환 ===
const buf16 = Buffer.from('Buffer buffer BUFFER');

const i1 = buf16.indexOf('Buffer');  // 대소문자 구분 → 첫 'Buffer' 위치
console.log("indexOf 'Buffer':", i1); // 0

const i2 = buf16.indexOf('buffer');  // 두 번째 등장, 소문자 'buffer'
console.log("indexOf 'buffer':", i2); // 7

const i3 = buf16.indexOf('buffer', 8); // 8번 인덱스 이후 검색
console.log("indexOf 'buffer' after 8:", i3); // -1 (해당 없음)

const i4 = buf16.indexOf('notfound'); // 없는 문자열
console.log("indexOf 'notfound':", i4); // -1



// === lastIndexOf: 문자열이 **마지막으로 등장한 인덱스** 반환 ===
const i5 = buf16.lastIndexOf('Buffer');
console.log("lastIndexOf 'Buffer':", i5); // 0 (세 번째 'BUFFER'은 대소문자 다름)

const i6 = buf16.lastIndexOf('buffer');
console.log("lastIndexOf 'buffer':", i6); // 7

const i7 = buf16.lastIndexOf('zzz');
console.log("lastIndexOf 'zzz':", i7); // -1 (없음)

//=== isBuffer: 해당 값이 Buffer 인스턴스인지 확인 ===
const v11 = Buffer.isBuffer(buf16);
console.log("isBuffer:", v11); // true (buf16은 Buffer 객체)

const notBuf = "just string";
const v12 = Buffer.isBuffer(notBuf);
console.log("isBuffer (notBuf):", v12); // false (문자열은 Buffer가 아님)

//=== keys: 버퍼에 저장된 각 바이트의 인덱스를 반환 ===
//entries는 [index, value] 쌍을 반환하고,
//keys는 인덱스만 반복(iterable 객체)으로 반환

const buf17 = Buffer.from('abcde');

for (const i of buf17.keys()) {
console.log(`Key index: ${i}`); 
}
//출력:
//Key index: 0
//Key index: 1
//Key index: 2
//Key index: 3
//Key index: 4

//=== toString: 버퍼 내용을 문자열로 반환 ===
const buf18 = Buffer.from('Hello Buffer');
console.log("Buffer toString:", buf18.toString()); 
// 'Hello Buffer' 출력
