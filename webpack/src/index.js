import _ from 'lodash';
import './style.css';
import Logo from './logo.png';
import printmodal from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button'); 

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 添加图像到div
  const myLogo = new Image();
  myLogo.src = Logo;
  element.appendChild(myLogo);

  // 添加button
  btn.innerHTML = '点击打印';
  btn.onclick = printmodal;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());