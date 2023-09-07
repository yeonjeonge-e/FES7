//  NaN : Not a Number
//  잘못 된 입력으로 인해 계산을 할 수 없음을 나타내는 기호

// isNaN() 함수는 어떤 값이 NaN인지 판별합니다
// isNaN() 함수는 어떤 값이 숫자가 아닌지 판별합니다
// 숫자로 판별되는 것들은 false를 반환하고
// 숫자로 판별되지 않는 것들은 true를 반환합니다.

/* https://en.wikipedia.org/wiki/IEEE_754 Because 'Not a Number' is not a number, and is not equal to anything, including Not a Number. */

//isNaN
isNaN(NaN); //true
isNaN(10); //false
isNaN('10'); //false
isNaN('a'); //true
isNaN('10px'); //true
isNaN([]); //true
isNaN({}); //true

//Number.isNaN 사용을 권고해드립니다.
Number.isNaN(NaN); //true
Number.isNaN(10); //false
Number.isNaN('10'); //false
Number.isNaN('a'); //false
Number.isNaN('10px'); //false
Number.isNaN([]); //false
Number.isNaN({}); //false

// isNaN은 내부적으로 Number() 함수를 사용합니다.
// Number() 함수는 인수를 숫자로 변환할 수 없으면 NaN을 반환합니다.





// 활용법
// https://school.programmers.co.kr/learn/courses/30/lessons/120850
// "p2o4i8gj2"

// 쉽게 푸는 방법
//  ★  암기 ★
//  1.  isNaN은 Number로 숫자 변환이 가능한 값을 false로 준다
//  2.  !isNaN(value[0]) : 숫자를 걸러내는 방법

isNaN(value[0])   //  p, true
isNaN(value[1])   //  2, false
isNaN(value[2])   //  0, true
//  ... 생략 ...

//  문제 변경 !
//  문제를 정렬이 아닌 다 더하는 것으로 고치겠음 !
//  - 정렬을 아직 안배웠기 때문 !

//  [방법 1]
let value = p2o4i8gj2;
let sum = 0;
if (!isNaN(value[0])) {
  sum += parseInt(value[0]);
}
if (!isNaN(value[1])) {
  sum += parseInt(value[1]);
}
if (!isNaN(value[2])) {
  sum += parseInt(value[2]);
}
if (!isNaN(value[3])) {
  sum += parseInt(value[3]);
}
console.log(sum);                 //  6 출력


//  [방법 2]
//  위 코드를 아래처럼도 표현할 수 있음
let value_1 = p2o4;
let sum_1 = 0;
if (!isNaN(value[0])) {
  sum += parseInt(value[0]);
}
if (!isNaN(value[1])) {
  sum += parseInt(value[1]);
}
if (!isNaN(value[2])) {
  sum += parseInt(value[2]);
}
if (!isNaN(value[3])) {
  sum += parseInt(value[3]);
}
console.log(sum);


//  [방법 3]
//  안배운 것으로 풀어보자면 ?!
"p2o4i8gj2".split("").filter(v => !isNaN(v));





// --------------------------------------------------------------------





////////////////////위 지식만 아셔도 충분합니다!//////////////////////

// console.log(NaN === NaN);          false
// 표현해드리자면 '숫자가 아님'은 '숫자가 아님'과 동일한가?

// javascript 내부적으로는 비교 x === y(여기서 x와 y는 값)는 true 또는 false를 생성합니다. 이러한 비교는 다음과 같이 수행됩니다.

/* 
Type(x)가 NaN이면 false를 반환합니다. y가 NaN이면 false를 반환합니다. 이것은 알고리즘이 먼저 피연산자 중하나가 NaN유형을 확인하기 전에 있는지 확인하고 그렇다면 false어쨌든 반환할 것임을 의미합니다.
*/

console.log(0 / 0); // NaN
console.log(10 / 0); // Infinity
console.log('hello world' - 100) // NaN
console.log('hello world' / 100) // NaN
console.log('hello world' * 100) // NaN
console.log('2' * 10) // 20
console.log("---");


// 암기
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log("---");

console.log(isNaN(undefined)); // true
console.log(isNaN(null)); // false
console.log(isNaN(NaN)); // true
console.log("---");

// ES6에서 추가 도입(암기)(*)
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(NaN)); // true

/*
// https://www.designcise.com/web/tutorial/what-is-the-difference-between-isnan-and-number-isnan-in-javascript

x               Number(x)       isNaN(x)
undefined         NaN            true
{}                NaN            true
'foo'             NaN            true
new Date('')      NaN            true
new Number(0/0)   NaN            true


x               typeof x === 'number'     Number.isNaN(x)
undefined               false                 false
{}                      false                 false
'foo'                   false                 false
new Date('')            false                 false
new Number(0/0)         false                 false
*/