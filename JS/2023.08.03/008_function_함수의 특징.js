function add(a, b) {
  let answer = a + b
}

let result = add(10, 20)

///////////////

function add(a, b) {
  let answer = a + b
  return
}

let result = add(10, 20)

///////////////

function add(a, b) {
  let answer = a + b
  return undefined
}

let result = add(10, 20)





function test() {
  console.log('hello')
  console.log('hello')
  console.log('hello')
  return
  //  이렇게 에러가 나는 코드가 있어도 JavaScript 엔진이 보지 않는 공간에서는 에러를 출력하지 않음
  //  단락평가에서도 마찬가지 !
  console.log('hello')
  console.log('hello')
  console.log('hello')
}


///////////////

// 잊으셔도 됩니다!
// 어려운데 심지어 중요하지도 않습니다.
// 단락 평가에서도 마찬가지입니다!
function errorCode() {
  console.loghojun('hello')
}
let value = true
// errorCode 실행시키지 않았다
let result = true || errorCode()

///////////////

// return(반환보다는 종료에 느낌으로 쓰는 코드)
function test() {
  if (true) {
    if (false) {
      console.log('1')
      return
    }
  }
  console.log('2')
  // 여러 코드...
  return
}

///////////////

// 함수의 이름은 결국 변수이다!
console.log('hello') // 'hello'는 아규먼트
let leehojun = console.log
leehojun('hello')

function test() {
  console.log('hello')
}
test()
let hojun = test
hojun()

///////////////

// 함수의 이름은 결국 변수이기 때문에 아규먼트로도 전달할 수 있을까요?
// 또는 리턴값으로도 전달할 수 있을까요?
// 답은 '네'입니다!





function add(a, b) {
  return a + b
}

let x = 10
let y = 20
console.log(add(x, y))





//  1.  함수를 아규먼트로 전달
//      아래와 같이 전달된 함수를 '콜백함수'라고 부릅니다
//      why?  내가 어딘가에서 너를 호출했어 라는 뜻을 가짐
function add(x, y) {
  return x + y
}

function addAndMultiply(x, y, z) {
  let sum = z(x, y) * z(x, y)
  return sum
}

addAndMultiply(1, 2, add)                 //  9 출력





//  2.  함수를 리턴값으로 전달(스코프와 클로저를 배우고 나서 다시 다룰 예정임)
//      지금 이해하려 하지 마세요
//      (이렇게 이중 함수를 사용하는 이유는 -- 보안 & 견고한 코드를 사용하기 위해서임)
function one(x) {
  function two(y) {
    return x + y
  }
  return two
}

let result = one(10)

result(100)                               //  110


//  왜 110이 나올까?
//  아래와 같이 동작해서 110이 출력됨
function result(y) {
  return 10 + y
}