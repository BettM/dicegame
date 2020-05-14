function  rollDice() {
 const die1 = document.getElementById("die1");
 const die2 = document.getElementById("die2");
 const status = document.getElementById("status");

 let math;
 let d1 = math.floor(math.random() * 6) + 1;
 let d2 = math.floor(math.random() * 6) + 1;

 const diceTotal = d1 + d2;
 die1.innerHTML=d1;
 die2.innerHTML=d2;
 status.innerHTML = "You rolled " + diceTotal + ".";
 if (d1 === d2) {
  status.innerHTML += "what a tie!!";
 }
function winner(d1,d2) {
if (d1 < d2) {
return"looser.gif";
}
if(d1>d2){
 return"winner.gif";
}
if(d1==d2){
 return"we all won";
}
}}