import { useState } from 'react'

function AllFunctions () {
  let passwordButtonText = "Generate Your Password";
  let securePassword = "Your Secure Password";

  let lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

  const [text, setText] = useState(passwordButtonText);
  const [password, setPassword] = useState(securePassword);
  
  function handleClick(){
    setText("Re-Generate Your Password");
    let radios = document.getElementsByName("length");
    let characterArray = [];
    let passwordArray = [];
    let loopLength;
    for (const radio of radios) {
      if (radio.checked) {
        setPassword(radio.value);

        let lowercaseCharacters = document.getElementById("lowercaseChars");
        if (lowercaseCharacters.checked) {
          characterArray = characterArray.concat(lowerCaseChars);
        }
        let uppercaseCharacters = document.getElementById("uppercaseChars");
        if (uppercaseCharacters.checked) {
          characterArray = characterArray.concat(upperCaseChars);
        }
        let numericCharacters = document.getElementById("numericChars");
        if (numericCharacters.checked) {
          characterArray = characterArray.concat(numericChars);
        }
        let specialCharacters = document.getElementById("specialChars");
        if (specialCharacters.checked) {
          characterArray = characterArray.concat(specialChars);
        }
        loopLength = radio.value;
      }
    }

    if (loopLength == 'short') {
      loopLength = 8;
    } else {
      loopLength = 16;
    }

    for (var i = 0; i < loopLength; i++) {
      let random = Math.floor(Math.random() * characterArray.length);
      let character = characterArray[random];
      passwordArray.push(character);
    }
    passwordArray = passwordArray.join("");
    if (passwordArray.length != 0) {
      setPassword(passwordArray);
    } else {
      let passwordMessage = `please select 'options' above ^`;
      setPassword(passwordMessage);
    } 
  }
}

export default AllFunctions;