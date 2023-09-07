const foo = () => {
  console.log("arrow function");
};

//  위와 아래는 동일한 코드의 함수

// function foo() {
//   console.log("arrow function");
// }

foo();    //  arrow function





//  매개변수 있는 함수

const foo1 = (x) => {
  return x;
};

console.log(foo1("arrow"));    //  arrow
//  리턴값에 적용 후  foo1("arrow")
//  콘솔에 출력됨     console.log()





//  매개변수가 2개 인 함수

const foo2 = (x, y) => {
  console.log("두 줄 이상 코드");   //  두 줄 이상 코드
  return x + y;
};

console.log(foo2(1, 5));      //  6