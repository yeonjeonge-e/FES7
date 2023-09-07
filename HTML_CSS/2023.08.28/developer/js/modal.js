const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
const dim = document.querySelector('.dim');
const modalEl = modal.querySelectorAll('a, button');
const firstEl = modalEl[0];
const lastEl = modalEl[modalEl.length - 1];

const as = modal.querySelector('.a, button');
console.log(as);

// 1. 모달창 열기
btnOpen.addEventListener('click', () => {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
})

// 2. 모달창 닫기
btnClose.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.removeProperty('overflow');
})

// 3. dim 눌렀을 때 창 닫기
//  dim : 모달 창 떴을 때 배경색이 어두워지는 것
//        dim 클릭 시 창 닫히게 하기
dim.addEventListener('click', () => {
  modal.classList.remove('active');
  // document.documentElement.style.overflow = 'auto';
  //  document.documentElement : document 안에 있는 요소 전체
  document.body.style.overflow = 'auto';
})

// 4. tab 눌렀을 때 포커스 => 웹 접근성
modal.addEventListener('keydown', (e) => {
  console.log(e.key);
  //  1.  tab
  //  2.  tab -> shift
  //  3.  first / last 에 따라 focus 위치

  const activeEl = document.activeElement;
  console.log(activeEl);
  if (e.key === 'Escape') {
    modal.classList.remove('active');
    // window.close(); -> 탭이 닫힘..ㄷㄷ;;
  }
  if (e.key === 'Tab') {
    if (e.shiftKey) {
      if (activeEl === firstEl) {
        e.preventDefault();
        lastEl.focus();
      }
    }
    else {
      if (activeEl === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  }
})

document.addEventListener('keydown', (e) => {
  if (modal.classList.contains('active') && e.key === 'Escape') {
    modal.classList.remove('active');
  }
})
