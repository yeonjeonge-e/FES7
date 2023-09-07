function test(a, b, c) {
  console.log(a, b, c)
  return a + b + c
}
test(10, 20)
//  10 20 undefined 출력됨
//  모자라면 undefined로 채워짐
test(10, 20, 30, 40)
//  초과해도 제대로 작동 - 40은 계산에 포함 안됨





function test(a = 10, b = 20, c = 30) {
  console.log(a, b, c)
  return a + b + c
}
test(100, 200)
//  100 200 30 출력됨
//  c의 값을 입력 안해도 자동으로 c=30이라고 기본값으로 출력됨

test()
//  10 20 30  출력됨
//  아무것도 안넣어 기본값이 있으므로 값이 나옴


// 혼란의 도가니
// 기억을 해주세요.
test(a = 100, b = 200)
test(b = 100, c = 200)
//  둘 다 330 출력됨
//  JavaScript는 값을 순서대로 넣음
//  - 그래서 b와 c의 값을 지정해줘도 순서대로 a=100, b=200 이라는 값이 들어가게 됨
//  Q.  그럼 a랑 c만 넣고 b는 디폴트로 넣는 게 안되나요?
//      안됨 !





// 이것을 해결하기 위해 RORO로 기법이 등장합니다.
// RORO: 객체로 받고 객체로 반환한다(Receive an object, return an object)

function mob(scene, x, y, texture, animKey, initHp, dropRate) {
  //  scene : 스토리신, 플레이신, 엔딩신
  //  x, y  : 몹의 위치
  //  texture : 몹의 이름
  //  animKey : 몹의 애니메이션
  //  initHp  : 몹의 체력
  //  dropRate  : 몹이 아이템을 떨어뜨리는 확률
  return
}

// 위 문제와 아래 문제를 해결하기 위해 RORO을 사용할 수 있습니다.

mob('플레이신', 100, 200, '슬라임', '슬라임_애니', 100, 0.1)
//  mob('플레이신', ...뭐가 들어가야 하지?)
//  이런식으로 값만 주르륵 나열되면 100이 뜻하는건 뭐지?
//    0.1은 체력을 나타내는건가 ?
//    이런식으로 정확한 위치의 값을 모르므로 js에서는 값을 순서대로 넣어줌 !

function player({ scene, x, y, texture, animKey, initHp, dropRate }) {
  console.log(scene, x, y, texture, animKey, initHp, dropRate)
  return
}



// 아래와 같이 작성되기 때문에 2번째 문제 해결, 순서도 상관없습니다.
player({
  scene: '플레이신',
  y: 200,
  x: 100,
  texture: '슬라임',
  animKey: '슬라임_애니',
  initHp: 100,
  dropRate: 0.1
})

// 아래와 같이 작성되기 때문에 1번째 문제 해결
player({
  scene: '플레이신',
  y: 200,
  initHp: 100,
})



//  기본값 설정하는 방법
function player({ scene = '플레이신', x = 0, y = 0, texture, animKey, initHp, dropRate = 0.1 }) {
  console.log(scene, x, y, initHp)
}

player({
  initHp: 100,
})