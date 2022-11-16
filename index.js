let randomNum1 = Math.floor(Math.random()*6+1);
//console.log(randomNum1);
let imgRandomSrc1 = "images/dice" + randomNum1 + ".png";

let rollDice1 = document.querySelectorAll("img")[0].setAttribute("src", imgRandomSrc1)
let randomNum2 =  Math.floor(Math.random() * 6 + 1)
//console.log(randomNum2);
let imgRandomSrc2 = "images/dice" + randomNum2 + ".png";
let rollDice2 = document.querySelectorAll("img")[1].setAttribute("src", imgRandomSrc2);

if(randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = "Player 1 Wins"
} else if (randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins"
} else {
  document.querySelector("h1").innerHTML = "Its a tie..🕺"
}