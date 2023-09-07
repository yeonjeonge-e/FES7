//  문제 1)
//  더하기, 빼기, 나누기, 곱하기를 하는 함수 만들기

//  덧셈
function add(x, y) {
  return x + y
}
add(10, 5)



//  뺄셈
function minus(x, y) {
  return x - y
}
minus(10, 5)



//  곱셈
function multiply(x, y) {
  return x * y
}
multiply(10, 5)



//  나눗셈
function divide(x, y) {
  return x / y
}
divide(10, 5)





//  --------------------------------------------------------------





//  문제 2)
//  '10,000,000,000'와 같은 문자를 입력받아 10000000000와 같은 숫자를 반환하는 함수를 만들어라
//    (콤마 제거하는 함수)

//  이지현님 코드 복사해 옴
function stringToNumber(x) {
  const str = x.split(",").join("");
  if (parseInt(str).length === x.length) {
    return parseInt(str)
  }
  return '숫자가 아닙니다'
}


//  강사님 코드
function stringToNumber(str) {
  // 방법 1
  const answer = str.split(",").join("");
  return answer

  // 방법 2
  let answer2 = parseInt(str.replaceAll(',', ''))
  return answer2
}

//  함수명 선언시 주의할 점
//  stringToNumber    이런식으로 --^--^-- 낙타 등 모양 같은 함수명을 선호함
//  string_to_number  이런식인 함수명은 안쓰는게 좋음





//  --------------------------------------------------------------





//  문제 3)
//  hello를 3번 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어라
//  입력 값 : world
//  출력 값 : ['w', 'o', 'r', 'l', 'd']
//  console.log()는 함수의 기능이지, 입 출력 값은 함수의 입 출력을 나타내는 것 !

function printAndSplit(str) {
  console.log(str)
  return str.split('')
}
printAndSplit('world')





//  --------------------------------------------------------------





//  문제 4)
//  2개의 숫자가 입력되면 2개의 숫자를 더하고,
//    더한 숫자를 곱하는 함수를 만들어라
//  - 입력 : 1, 2
//  - 출력 : (1 + 2) * (1 + 2) = 9

// 한혜지 님 풀이
function addAndMult(x, y) {
  return ((x + y) * (x + y))
}
addAndMult(1, 2)


//  4-1 풀이
function addAndMultiply(x, y) {
  let sum = x + y
  let multiply = sum * sum
  return multiply
}
addAndMultiply(1, 2)


//  4-2 풀이
function add(x, y) {
  return x + y
}

function addAndMultiply(x, y) {
  let sum = add(x, y) * add(x, y)
  return sum
}
addAndMultiply(1, 2)


//  4-3 풀이
function addAndMultiply(x, y) {
  function add(x, y) {
    return x + y
  }
  let sum = add(x, y) * add(x, y)
  return sum
}
addAndMultiply(1, 2)





//  --------------------------------------------------------------





//  문제 5)
//  x**2 + 4x - 12를 구해주는 함수를 만들어주세요
//  입력 : 3
//  출력 : 9 + 12 - 12 = 9

function QuadraticEquation(x) {
  answer = x ** 2 + 4 * x - 12
  return answer
}
QuadraticEquation(3)