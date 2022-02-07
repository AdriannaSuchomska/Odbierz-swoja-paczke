let btnShow = document.getElementById('myBtn');
let userData = document.getElementById('inputs');
let phone = document.getElementById('phone');
let code = document.getElementById('code');


userData.addEventListener('keyup', () => { 
  if (validatetel(phone.value) !== true || code.value.length !== 4  ) {
    btnShow.disabled = true
  }else {
    btnShow.disabled = false
  }
});

function validatetel(tel) {
  let reg = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$');
  if(reg.test(tel)) {
      return true;
  }else{
      return false;
  }     
};


const alertTel = document.getElementById('phoneAlert');

phone.addEventListener('blur', () => { 
  if (validatetel(phone.value) !== true ) {
    return alertTel.innerHTML='Wprowadź poprawny numer telefonu';
  }else {
    return alertTel.innerHTML=' ';
  }   
});

const alertCode = document.getElementById('codeAlert');

code.addEventListener('blur', () => { 
  if (code.value.length !== 4 ) {
    return alertCode.innerHTML='Wprowadź poprawny kod odbioru';
  }  else {
    return alertCode.innerHTML=' ';
  }   
});





