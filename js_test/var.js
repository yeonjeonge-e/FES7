var hello = "hello";

// (함수 스코프)
// function sayhello() {
//   var hello = "hi hi";
//   console.log(hello);    hi hi
// }
// sayhello();


if (true) {
  var hello = "hi hi";
}

console.log(hello);
//  1. 함수 스코프가 아닌 중괄호 안에 변수가 선언되어 있어서 함수 스코프가 아님
//  2. if문 안에 있는 hello와 밖에 있는 var hello는 같은 변수가 됨
//  3. 밖에 있는 hello 변수는 함수 스코프 안에 있는게 아니므로 기존의 hello (밖에 있는 변수)를 배치함
// 4. "hi hi" 라는 문자열을 다시 if문 안의 변수 안에 초기화 시켜 줌
// 5. 그래서 "hi hi"라 출력됨



// 함수 스코프가 아닌 곳에서는 지금처럼 변수 선언을 동일하게 두번 해도 오류 발생 안함

// 예시
var yeon = "disend";
var yeon = "disend_disend";

console.log(yeon);    //  disend_disend   출력됨



//  이런 유연한 변수 선언 방식이 자스 특징인데
//  동일 변수 두번 초기화 시 잘못된 코드 작성하기 쉬움 - 지양해야함
//  자스에서 변수 선언에 많은 문제점 생김
//  es6 문법 이후에 let과 const라는 변수가 나와서 var는 안씀



//  let
//  값을 재정의 할 수 있는 변수 선언 방식
//  == 변수

//  const
//  값을 재정의 할 수 없는 변수 선언 방식
//  == 상수 (변하지 않는 수)