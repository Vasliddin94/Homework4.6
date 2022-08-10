function move() {
  let left=document.querySelector('.left');
  left.style.transform='translateX(200%)';
  let right=document.querySelector('.right');
  right.style.transform='translateX(-50%)';
  let signin=document.querySelector('.signin');
  signin.style.display='none';
  let signup=document.querySelector('.signup');
  signup.style.display='inline';
  signup.style.textAlign='center';
  let righthead=document.querySelector('.right-head');
  righthead.innerHTML='Welcome back';
  let lefthead=document.querySelector('.left-head');
  lefthead.innerHTML='New here?';
  let leftp=document.querySelector('.left-p');
  leftp.innerHTML='Sign up and discover great amount of new opportunities';
}

function moveback() {
  let left=document.querySelector('.left');
  left.style.transform='translateX(0px)';
  let right=document.querySelector('.right');
  right.style.transform='translateX(0px)';
  let signin=document.querySelector('.signin');
  signin.style.display='inline';
  signin.style.textAlign='center'
  let signup=document.querySelector('.signup');
  signup.style.display='none';
  let righthead=document.querySelector('.right-head');
  righthead.innerHTML='Time to fell like home';
  let lefthead=document.querySelector('.left-head');
  lefthead.innerHTML='One of us?';
  let leftp=document.querySelector('.left-p');
  leftp.innerHTML='If you already have an account just sign in. We missed you!';
}
