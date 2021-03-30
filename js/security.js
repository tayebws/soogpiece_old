//Securit code generator
let code = document.querySelector('.code');
let input = document.querySelector('.inputCode');
let btn = document.querySelector('.lg-btn');

//changing text on clicking on reloading page
window.addEventListener('load', () => {
  code.textContent = createCaptcha();
});

//function reponsible to generate random code
function createCaptcha() {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let a = letters[Math.floor(Math.random() * letters.length)];
  let b = letters[Math.floor(Math.random() * letters.length)];
  let c = letters[Math.floor(Math.random() * letters.length)];
  let d = letters[Math.floor(Math.random() * letters.length)];
  let e = letters[Math.floor(Math.random() * letters.length)];
  let f = letters[Math.floor(Math.random() * letters.length)];
  let code = a + b + c + d + e + f;
  return code;
}

btn.addEventListener('click', () => {
  let val = input.value;
  if (val == '') {
    alert('Please Enter Security Code');
  } else if (val === code.textContent) {
    alert('Security Code is matched');
  } else {
    alert('Security Code do not match');
  }
});