
//Player 1
var randomNumber = Math.floor(Math.random() * 6) + 1;  //1-6

var randomDiceImage = "dice" + randomNumber + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0]; 
image1.setAttribute("src",randomImageSource);

//Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆Player 1 WINS🏆";
    document.querySelector("h1").style.color = "red";

}
else if(randomNumber < randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆Player 2 WINS🏆";
    document.querySelector("h1").style.color = "green";
} 
else {
    document.querySelector("h1").innerHTML = "Draw!!! Refresh Again";
}