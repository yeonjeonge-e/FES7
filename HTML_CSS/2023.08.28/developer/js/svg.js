// console.log("연결");
// js 파일 연결된 것 확인함

// dom에서 path 찾기
const path = document.querySelector("#path");
const openBtn = document.querySelector('.btn-open');

// path의 전체 길이 구하기
const pathLength = path.getTotalLength();
// console.log(pathLength);
//  2507.61328125
//  반응형과 상관 없이 길이는 고정적임

// dash 의 길이와 공백
// path.style.strokeDasharray = 1000 + " " + 1000;
// path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDasharray = `${pathLength} ${pathLength}`;

// dash를 어디서 부터 그릴지
path.style.strokeDashoffset = pathLength;

// console.log(innerHeight, outerHeight);
//  382 508


// console.log('clientHeight', document.documentElement.clientHeight)
// clientHeight 382     viewport 스크린 height
// console.log('scrollHeight', document.documentElement.scrollHeight)
// scrollHeight 5000    window 창 테두리까지 height


function scrollHandler() {
  // 현재 스크롤의 위치
  const scrollTop = document.documentElement.scrollTop;

  // 전체 스크롤의 길이
  const scrollHeight = document.documentElement.scrollHeight;

  // 뷰포트의 높이
  const clientHeight = document.documentElement.clientHeight;

  //  스크롤의 위치 => % 로 변경      0 - 1 의 값을 가짐
  // 전체 스크롤 영역 높이에서 뷰포트 크기만큼을 빼줌.
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
  // 제일 하단에서 viewport 높이가 빠졌있다.
  // console.log(scrollPercentage);

  const drawLength = pathLength * scrollPercentage;
  // console.log(drawLength);
  //  0 ~ 2507.61328125

  // pathLength -> 0
  //  안빼주면 길이가 거꾸로 줄어듦
  path.style.strokeDashoffset = pathLength - drawLength;

  // button opacity 조절 0 - 1
  // openBtn.style.opacity = scrollPercentage;
  btnOpen.style.opacity = scrollPercentage;

  //  전체 80% 스크롤이 내려가야만 버튼이 보이도록
  //  opacity가 0.8 이상일ㄹ 때 enabled
  // if (scrollPercentage > 0.8) {
  //   openBtn.disabled = false;
  // } else {
  //   openBtn.disabled = true;
  // }

  if (btnOpen.style.opacity > 0.8) {
    btnOpen.disabled = false;
  } else {
    btnOpen.disabled = true;
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