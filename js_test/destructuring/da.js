const object = { a: 1, b: 2 };

// const a = object.a;
// const b = object.b;

//  위와 아래는 같은 코드
//  비구조화 할당
//  안에 값이 많은 경우 코드가 너무 길어지는걸 방지
//  object 안에 있는 키 값과 동일한 값이 출력됨
//  객체 안에 있는 값을 쉽게 할당시킴

const { a, b } = object;

console.log(a);   //  1
console.log(b);   //  2