let inptxt = document.getElementById("inptxt");
let upperCasebtn = document.getElementById("upperCasebtn");
let lowerCasebtn = document.getElementById("lowerCasebtn");
let clear = document.getElementById("clear");
let result = document.getElementById("result");
let black = document.getElementById("black")
let blue = document.getElementById("blue")
let logo = document.getElementById("logo")
let navbar = document.getElementById("navbar")
let isBackgroundDark = false;
let isBackgroundBlue = false;

black.onclick = () =>{
   if(isBackgroundDark){
    document.body.style.background = "#f0f0f0bf";
    navbar.style.background = '#fff';
    logo.style.color = "#000"

   }
   else{
    document.body.style.background = "#1e1b1b";
    logo.style.color = "#fff"
    navbar.style.background = '#2b2624';
   }
   isBackgroundDark = !isBackgroundDark;
   
}
blue.onclick = () =>{
    if(isBackgroundBlue){
     document.body.style.background = "#f0f0f0bf";
     logo.style.color = "#000"
     navbar.style.background = '#fff';
    }
    else{
     document.body.style.background = "#12dcea";
     logo.style.color = "#fff"
     navbar.style.background = '#076c73';
    }
    isBackgroundBlue = !isBackgroundBlue;
 }
upperCasebtn.onclick = () =>{
    let txt = inptxt.value;
    let uppercase = txt.toUpperCase();
    result.innerHTML = uppercase;
}
lowerCasebtn.onclick = () =>{
    let txt = inptxt.value;
    let lowercase = txt.toLowerCase();
    result.innerHTML = lowercase;
}

clear.onclick = () =>{
    result.innerHTML = "";
    inptxt.value = "";
}



// // Get references to the input and output textarea elements
// const inputTextElement = document.getElementById('inptxt');
// const outputTextElement = document.getElementById('result');
// const myButton = document.getElementById('uppperCasebtn');

// // Function to convert input text to uppercase
// function convertToUppercase() {
//   const inputText = inputTextElement.value;
//   const uppercaseText = inputText.toUpperCase();
//   outputTextElement.value = uppercaseText;
// }

// // Attach the click event listener to the button
// myButton.onclick = convertToUppercase;
