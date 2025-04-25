// Node.js에서 데이터 암호화 기능을 제공하는 모듈
import crypto from 'crypto';

const cipers = crypto.getCiphers();

for(let x of cipers) {
	console.log(x);
}

// 암호화하기 위해서는 키값이 필요하다.

//사용 알고리즘: AES (256비트 키) + CBC (Cipher Block Chaining) 모드
const algorithm = 'aes-256-cbc';
// 256비트(32바이트) 길이의 키 생성 (랜덤 값)
const key = crypto.randomBytes(32);     
// 초기화 벡터(IV): 블록 암호화를 시작할 때 사용하는 랜덤한 값 (16바이트 필요)
const iv = crypto.randomBytes(16);      
// 암호화 대상 평문
const text = 'Secret Message AHN';

// === 암호화 단계 ===
// 1. cipher 객체 생성 (알고리즘, 키, IV 지정)
const cipher = crypto.createCipheriv(algorithm, key, iv);
// 2. 평문을 암호문으로 변환 (UTF-8 → HEX)
let encrypted = cipher.update(text, 'utf8', 'hex');
// 3. 암호화 종료 블록 추가 (마지막 데이터 처리)
encrypted += cipher.final('hex');

console.log('Encrypted:', encrypted); // 암호문 출력

// === 복호화 단계 ===
// 1. decipher 객체 생성 (암호화와 동일한 키와 IV 사용)
const decipher = crypto.createDecipheriv(algorithm, key, iv);
// 2. 암호문을 평문으로 변환 (HEX → UTF-8)
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
// 3. 복호화 종료 처리
decrypted += decipher.final('utf8');

console.log('Decrypted:', decrypted); // 복호화된 원문 출력
