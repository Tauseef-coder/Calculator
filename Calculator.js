//get all buttons 
const screenButtons = document.querySelectorAll(".button")
//console.log(screenButtons)
const equalButton = document.querySelector("#equal")

//get screen 
const screen = document.querySelector("#screen")
//crating the clicking trigger/ input for screen 
/// once you click the fucntion is executed 
function inputChange(event){
  //console.log(event)
  //dig in deeper adding specificity to the apporptate elelment 
  // takes you direclty ot the target 
  var buttonElement = event.target
  //this line of code target the apporprate div tag pointing direclty to inner text 
  var buttonTxt = buttonElement.innerText
  //if button text is equal to = print to screen / consol.log
  // if(buttonTxt === "="){
  //   console.log(screen.innerText)
  // }else{  
    screen.innerText += buttonTxt
  //} 
  //this line o code change screen .  innertext to buttontext adding button out put to screen div tag 
  // screen.innerText += buttonTxt
  //console.log(screen.innerText, typeof screen.innerText)
}


//use for loop to iterate over buttons  
function belowScreen(array){
for (let i = 0; i < array.length; i++){
  //click is a mouse event type
  array[i].addEventListener("click",inputChange)
  // refering back to input chabge on line number 8 
  }
}
// this ins the invocation of my fucntion 
belowScreen(screenButtons)

function calculatorMath() {
  const calcScreen = screen.innerText
  for (let i = 0; i < calcScreen.length; i++) {
      if (calcScreen[i] === "+") {
          const numbers = calcScreen.split("+")
          const num1 = numbers[0];
          const num2 = numbers[1];
          screen.innerText = parseInt(num1) + parseInt(num2);
          /// how can i look and check if an additional operator has been added tobe calculated example 1+2+3 which has two plus signs 
          // could i look through operator or perform some check then do additional calculation. chained together

      }
      if (calcScreen[i] === "-") {
          const numbers = calcScreen.split("-")
          const num1 = numbers[0];
          const num2 = numbers[1];
          return parseInt(num1) - parseInt(num2);

      }
      if (calcScreen[i] === "*") {
          const numbers = calcScreen.split("*") 
          const num1 = numbers[0];
          const num2 = numbers[1];
          return parseInt(num1) * parseInt(num2);

      }
      if (calcScreen[i] === "/") {
          const numbers = calcScreen.split("/")
          const num1 = numbers[0];
          const num2 = numbers[1];
          return parseInt(num1) / parseInt(num2);
      }
      // how can we push addtional fucntion on calcualtion .push
      // push result to screen

      // console.log(calculation[1])
  }

}
equalButton.addEventListener("click",calculatorMath)
// create a delete button fucntion  that will remove 
const clear = document.querySelector("#clear")

// this is the fucntion that will delete / clear numbers form the screen
function clearButton(AC){
  //this section will clear the screen 
  screen.innerText = "";

}
//this is adding event lister on clear button this take on two argument the click  and event type the clear button  call back  fcuntion 
clear.addEventListener("click",clearButton)




function clock() {// We create a new Date object and assign it to a variable called "time".
var time = new Date(),
    
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),
    
    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),
    
    seconds = time.getSeconds();

document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
  
  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);