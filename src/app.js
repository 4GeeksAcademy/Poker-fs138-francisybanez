import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  const cards   = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  const symbols = ["Hearts", "Spades", "Clubs", "Diamonds"];

  function getSuiteClass(symbol) {
    switch (symbol) {
      case "Diamonds": return "symbol-diamonds";
      case "Spades":   return "symbol-spades";
      case "Hearts":   return "symbol-hearts";
      case "Clubs":    return "symbol-clubs";
    }
  }

    function newCard() {
    let randomCardNumber = Math.floor(Math.random() * cards.length);
    let randomSymbol     = Math.floor(Math.random() * symbols.length);
    let finalSymbol      = symbols[randomSymbol];

    document.getElementById('cardContent').innerHTML = cards[randomCardNumber];
    document.getElementById('theCard').className = "";
    document.getElementById('theCard').classList.add("card");
    document.getElementById('theCard').classList.add(getSuiteClass(finalSymbol));
  }

  newCard();

  document.getElementById("btn-new").addEventListener("click", newCard);
  setInterval(newCard, 10000);

  document.getElementById("input-wide").addEventListener("input", e => {
    document.getElementById("theCard").style.width = e.target.value + "px";
  });
  document.getElementById("input-high").addEventListener("input", e => {
    document.getElementById("theCard").style.height = e.target.value + "px";
  });

};