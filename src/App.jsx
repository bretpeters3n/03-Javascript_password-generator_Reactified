import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
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
        console.log(radio.value + " is your password length");
        setPassword(radio.value);

        // create array from selected checkboxes
        // let characterArray = [];
        let lowercaseCharacters = document.getElementById("lowercaseChars");
        if (lowercaseCharacters.checked) {
          console.log("lowercase selected")
          characterArray = characterArray.concat(lowerCaseChars);
        }
        let uppercaseCharacters = document.getElementById("uppercaseChars");
        if (uppercaseCharacters.checked) {
          console.log("uppercase selected")
          characterArray = characterArray.concat(upperCaseChars);
        }
        let numericCharacters = document.getElementById("numericChars");
        if (numericCharacters.checked) {
          console.log("numeric selected")
          characterArray = characterArray.concat(numericChars);
        }
        let specialCharacters = document.getElementById("specialChars");
        if (specialCharacters.checked) {
          console.log("numeric selected")
          characterArray = characterArray.concat(specialChars);
        }
        loopLength = radio.value;
      }
      // break;
    }

    if (loopLength == 'short') {
      loopLength = 8;
    } else {
      loopLength = 16;
    }

    for (var i = 0; i < loopLength; i++) {
      console.log('loopLength: ' + loopLength);
      let random = Math.floor(Math.random() * characterArray.length);
      let character = characterArray[random];
      passwordArray.push(character);
    }
    // console.log('passwordArray.join: ' + passwordArray.join(""));
    passwordArray = passwordArray.join("");
    if (passwordArray.length != 0) {
      setPassword(passwordArray);
    } else {
      setPassword("select 'options' above ^");
    }
    
  }
  
 

  return (
    <>
      <header>
        <h1>Password Generator</h1>
      </header>
      <main>
        <h2>Generate a Password</h2>
        <div className="password-options">
          <fieldset>
            <legend>Choose a length:</legend>

            <div className="list-item">
              <input type="radio" id="short" name="length" value="short" defaultChecked />
              <label htmlFor="short">short <small>(8 characters)</small></label>
            </div>

            <div className="list-item">
              <input type="radio" id="long" name="length" value="long" />
              <label htmlFor="long">long <small>(16 characters)</small></label>
            </div>

          </fieldset>

          <fieldset>
            <legend>Other options:</legend>

            <div className="list-item">
              <input type="checkbox" id="lowercaseChars" name="options" value="lowercaseChars" defaultChecked />
              <label htmlFor="lowercaseChars">lowercase</label>
            </div>

            <div className="list-item">
              <input type="checkbox" id="uppercaseChars" name="options" value="uppercaseChars" defaultChecked />
              <label htmlFor="uppercaseChars">uppercase</label>
            </div>

            <div className="list-item">
              <input type="checkbox" id="numericChars" name="options" value="numericChars" defaultChecked />
              <label htmlFor="numericChars">numeric</label>
            </div>

            <div className="list-item">
              <input type="checkbox" id="specialChars" name="options" value="specialChars" defaultChecked />
              <label htmlFor="specialChars">special characters</label>
            </div>

          </fieldset>

        </div>
        <div className="divider" />
        <section id="password-area" className="exported-password">{password}</section>
        <div className="divider" />
        {/* <input type="button" className="button2" name="Submit" value="Generate Password" onClick={handleClick()} /> */}
        <button onClick={() => {
          // setAllowNext(true);
          handleClick();
      }}>
          {text}
        </button>
        {/* <button onClick={() => setPassword("Re-Generate Your Password")}>
          {password}
        </button> */}
      </main>
    </>
  )
}

export default App
