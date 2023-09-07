const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
const dim = document.querySelector('.dim');

//  key 입력 시 포커스 이동
const modalEl = modal.querySelectorAll('a, button');
const firstEl = modalEl[0];
const lastEl = modalEl[modalEl.length - 1];


// const as = modal.querySelector('.a, button');
// console.log(as);



//  1. 모달 창 열기
btnOpen.addEventListener('click', () => {
  modal.classList.add('active');
  // document.body.style.overflow = 'hidden';
});

//  2. 모달 창 닫기
btnClose.addEventListener('click', () => {
  modal.classList.remove('active');
  // document.body.style.removeProperty('overflow');
});

//  3. dim 눌렀을 때 모달 창 닫기
dim.addEventListener('click', () => {
  modal.classList.remove('active');
  // document.body.style.overflow = 'auto';
});



//  4. Tab키, Shuft+Tab키 눌렀을 때도 반응(포커스 이동)해야 함
modal.addEventListener('keydown', (e) => {
  const activeEl = document.activeElement;
  // console.log('e.key');
  // console.log(activeEl);

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