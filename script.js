document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
  };
  
  // generate password function
function generatePassword(length, useUpperCase, useLowerCase, useNumbers, useSymbols) {
  let result = '';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-=;:,.<>/?';

  let chars = '';
  if (useUpperCase) {
    chars += upperCaseChars;
  }
  if (useLowerCase) {
    chars += lowerCaseChars;
  }
  if (useNumbers) {
    chars += numberChars;
  }
  if (useSymbols) {
    chars += symbolChars;
  }

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

// generate password when button is clicked
document.getElementById('create').addEventListener('click', function() {
  const length = document.getElementById('myRange').value;
  const useUpperCase = document.getElementById('upper-case').checked;
  const useLowerCase = document.getElementById('lower-case').checked;
  const useNumbers = document.getElementById('numbers').checked;
  const useSymbols = document.getElementById('symbols').checked;

  const password = generatePassword(length, useUpperCase, useLowerCase, useNumbers, useSymbols);

  document.getElementById('password').value = password;
});

// copy password to clipboard when button is clicked
document.getElementById('copy').addEventListener('click', function() {
  const passwordInput = document.getElementById('password');
  navigator.clipboard.writeText(passwordInput.value)
    .then(() => {
      console.log('Password copied to clipboard');
      alert('Password copied to clipboard!');
    })
    .catch(err => {
      console.error('Error copying password: ', err);
    });
});





});



  



  