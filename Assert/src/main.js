/**
 * https://nodejs.org/api/assert.html
 */

import assert from 'assert';

// 단순변수 비교
let v1 = 10;
let v2 = 10;
let v3 = 20;

assert(v1 < v3);
console.log('v1은 v3보다 작습니다.');

// assert(v1 == v3);  // AssertionError 발생
// console.log('v1은 v3과 같습니다.');

assert(v1 == v2);
console.log('v1은 v2와 같습니다.');


// assert.equal(a, b): 값만 비교 (타입 무시)
assert.equal(100, '100');
console.log('100과 "100"은 == 같다고 간주됩니다.');

// assert.strictEqual(a, b): 값과 타입까지 비교
// assert.strictEqual(100, '100');  // AssertionError
assert.strictEqual(100, 100);
console.log('strictEqual: 숫자 100과 100은 같음');


// assert.notEqual(a, b): 값이 다르면 통과
// assert.notEqual(123, '123'); // AssertionError
// 같으니깐 실패
assert.notEqual(123, 456);
console.log('123과 456은 같지 않음');

// assert.notStrictEqual(a, b): 값과 타입이 같으면 실패
// assert.notStrictEqual(123, 123);  // AssertionError
console.log('notStrictEqual은 둘이 같으면 실패시킴');
assert.notStrictEqual(123,'123');
console.log('123과 "123"은 같지 않음');
assert.notStrictEqual(123, 456);
console.log('123과 456은 같지 않음');

// 객체 비교
const obj1 = { a: 1 };
const obj2 = { a: '1' };
const obj3 = { a: 1 };

// assert.deepEqual: 값만 비교
assert.deepEqual(obj1, obj2); // 통과 (타입 무시)
console.log('deepEqual: obj1과 obj2는 값이 같음 (타입 무시)');

//assert.notDeepEqual(obj1, obj2);// AssertionError 
//console.log('notDeepEqual: obj1과 obj2는 값이 같아서 실패 (타입 무시)');

// assert.deepStrictEqual: 값과 타입 모두 비교
assert.deepStrictEqual(obj1, obj3); // 통과
console.log('deepStrictEqual: obj1과 obj3는 완전히 동일함');

// ❌ 값은 같지만 타입이 달라서 실패
// assert.deepStrictEqual(obj1, obj2); // AssertionError


// 배열 비교
const arr1 = [1, 2];
const arr2 = [1, 2];
const arr3 = [1, '2'];

assert.deepStrictEqual(arr1, arr2);
console.log('배열 arr1과 arr2는 동일');

// 타입이 다르면 실패
// assert.deepStrictEqual(arr1, arr3); // AssertionError


// 논리 비교 직접 활용
function isAdult(age) {
  return age >= 18;
}

const age = 21;
assert(isAdult(age) === true);
console.log('나이는 성인입니다.');

// 조건이 거짓일 경우 AssertionError 발생
// assert(isAdult(13) === true); // AssertionError

