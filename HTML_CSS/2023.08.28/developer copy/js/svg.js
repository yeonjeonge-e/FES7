// 이 파일 설정 전에는 선이 그어진 채로 스크롤 내려감

const path = document.querySelector("#path");
//  id값인 path를 path 라는 변수로 지정
const openBtn = document.querySelector('.btn-open');
//  클래스인 btn-open을 openBtn 이라는 변수로 지정


// 1. 그리려고 하는 선의 전체 길이 구하기
const pathLength = path.getTotalLength();
//  path.getTotalLength()
//  - path의 총 길이를 구하는 자바스크립트 함수
// console.log(pathLength);
//  2507.61328125
//  반응형과 상관 없이 길이는 고정적임



//  2. dash의 길이와 공백
// path.style.strokeDasharray = `${pathLength} ${pathLength}`;
path.style.strokeDasharray = pathLength + " " + pathLength;
//  선 + 공백 + 선    이런 순서로 반복됨



//  3. dash를 어디서 부터 그릴지
path.style.strokeDashoffset = pathLength;
//  strokeDashoffset : dasharray의 시작 위치를 설정
// console.log(innerHeight, outerHeight);
//  472 597

//  ★★★
//  dashoffset 값 = dasharray 값 = path 길이
//  dashoffset의 값을 점점 0으로 줄여가면 - 라인 드로잉 애니메이션

//  ★★★
//  client-
//  - 눈에 보이는 content + padding의 크기값
//  offset-
//  - 눈에 보이는 content + padding + border + scrollbar의 크기값
//  scroll-
//  -눈에 보이지 않는 영역까지 포함한 전체 content + padding의 크기값

// console.log('clientHeight', document.documentElement.clientHeight)
//  clientHeight 472     viewport 스크린 height
//  눈에 보이는 페이지의 높이 === 472
// console.log('scrollHeight', document.documentElement.scrollHeight)
//  scrollHeight 3000    window 창 테두리까지 height
//  눈에 보이지 않는 영역을 포함한 높이 === 3000 (내가 지정한 값)



//  4. 스크롤 시 보이는 선 구현
function scrollHandler() {

  // 현재 스크롤의 위치
  const scrollTop = document.documentElement.scrollTop;
  // console.log(scrollTop);     2528

  // 전체 스크롤의 길이
  const scrollHeight = document.documentElement.scrollHeight;
  // console.log(scrollHeight);     3000

  // 뷰포트의 높이
  const clientHeight = document.documentElement.clientHeight;
  // console.log(clientHeight);      472


  //  스크롤의 위치 => % 로 변경      0 - 1 의 값을 가짐
  //  전체 스크롤 영역 높이에서 뷰포트(눈에 보이는) 크기 만큼을 빼줌.
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
  //  1 = 2528 / (3000 - 472)
  // 제일 하단에서 viewport 높이가 빠졌있다.
  console.log(scrollPercentage);
  //  위의 계산식 때문에 0 - 1 사이의 값이 나옴



  //  이 식은 뭐지 ? 써준 이유 ? - 이 식이 없으면 선이 안보임 ◆◆◆
  const drawLength = pathLength * scrollPercentage;
  //  drawLength = 전체 길이 * 1
  console.log(drawLength);
  //  0 ~ 2507.61328125

  // pathLength -> 0
  //  안빼주면 길이가 거꾸로 줄어듦
  path.style.strokeDashoffset = pathLength - drawLength;

  // button opacity 조절 0 - 1
  // openBtn.style.opacity = scrollPercentage;  ?
  // btnOpen.style.opacity = scrollPercentage;  ?

  //  전체 80% 스크롤이 내려가야만 버튼이 보이도록
  //  opacity가 0.8 이상일ㄹ 때 enabled
  if (scrollPercentage > 0.8) {
    openBtn.disabled = false;
  } else {
    openBtn.disabled = true;
  }
}

window.addEventListener('scroll', scrollHandler);
// 이벤트를 처리하는 것은 동일하지만 윈도우랑 문서객체 차이
// window
// 전체 브라우저 창에 대한 이벤트를 처리
// ex) 리사이즈, 스크롤

// document
// 문서 내 요소에 대한 이벤트 처리
// ex) click

//  ★ scrollHandler 에서 () 붙여주면 선 안나오는 이유는 ?



// ---------o---------o---------o---------


// //svg 전체 선택
// const purse = document.querySelector(".pursing");
// //svg 내부의 path 선택
// const path = document.querySelector("#path");
// const pathLength = path.getTotalLength();
// const totalLength = `${pathLength} ${pathLength}`;
// path.style.strokeDasharray = pathLength / 2;
// path.style.strokeDashoffset = totalLength;
// const pursing = {
//   strokeDashoffset: [pathLength, -pathLength],
// };
// const timing = {
//   duration: 2000,
//   iterations: Infinity,
// };
// purse.animate(pursing, timing);

// 이지현님이 보내주신 코드
//  무한 재생을 위해 animate