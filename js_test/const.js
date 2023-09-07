//  const
//  재정의 할 수 없는 선언 방식

const hello = "first hi"
hello = "second hi"

console.log(hello);

// 오류 발생



const hi = "one hi";

if (true) {
  const hi = "two hi";
  console.log(hi);    //  two hi
}

console.log(hi);      //  one hi