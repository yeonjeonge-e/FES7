// index.html에서 바로 plus.js 파일을 부르는게 아닌
// app.js를 경유해서 함수를 부름
// import plus from "./plus.js";
// import './style.css';

// console.log(plus(2,3));

import './style.css';
import bg from './background.png';

let env;

if (process.env.NODE_ENV === 'development') {
    env = dev;
} else {
    env = pro;
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${bg}"/>`;
})