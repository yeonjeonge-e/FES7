//  let 특징 1

let hello = "first hi";
hello = "second hi";

console.log(hello);   //  second hi

//  let이 재정의할 수 있는 변수 선언 방식
//  let은 한번 정의한 변수를 다시 한번 정의할 수 있는 변수

//  ★ 아래 처럼 let을 중복으로 두번 초기화하여 작성 할 수 없음 - 오류 발생
// let hello = "first hi";
// let hello = "second hi";



//  let 특징 2
//  함수 스코프가 아닌 중괄호 스코프를 갖고 있음

let hi = "one hi";

if (true) {
  let hi = "two hi";
  console.log(hi);    //  two hi
}

console.log(hi);      //  one hi