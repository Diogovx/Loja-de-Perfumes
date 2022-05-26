const barsIcon = document.getElementById("barsIcon");

const closeIcon = document.getElementById("closeIcon");

barsIcon.onclick = () => {
  document.getElementById("overlay").style.display = "block";
};
closeIcon.onclick = () => {
  document.getElementById("overlay").style.display = "none";
};


const openLogin = document.querySelector('#openLogin');

const openLogin2 = document.querySelector('#openLogin2');

const closeLogin = document.querySelector('#closeLogin');


openLogin.onclick = () => {
  document.querySelector('#overlayLogin').style.display = 'flex';
}
openLogin2.onclick = () => {
  document.querySelector('#overlayLogin').style.display = 'flex';
}
closeLogin.onclick = () => {
  document.querySelector('#overlayLogin').style.display = 'none';
}


const password = document.querySelector('#password');

const passwordEye = document.querySelector('#passwordEye');

passwordEye.onclick = () => {
  if(passwordEye.className == 'fa-solid fa-eye'){
    passwordEye.className = 'fa-solid fa-eye-slash'
    password.type = 'text';
  }
  else{
    passwordEye.className = 'fa-solid fa-eye';
    password.type = 'password';
  }
}