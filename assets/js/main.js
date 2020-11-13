//variabili
var kilometers = Number(prompt("Quanti kilometri vuoi percorrere?"));
if(Number.isNaN(kilometers) || kilometers == "" || kilometers === null){
  alert("Devi inserire un numero piciu!!");
}

var age = Number(prompt ("Quanto sei vecchio?"));
if(Number.isNaN(age) || age == "" || age === null){
  alert("Devi inserire un numero piciu!!");
}

var name = prompt("Qual è il tuo nome?");
var surname = prompt("Qual è il tuo Cognome?");
var price;


document.getElementById("kilometri").innerHTML="I kilometri che vuoi percorrere sono: " + kilometers;
document.getElementById("anni").innerHTML="La tua età è: " + age;
document.getElementById("nome").innerHTML="Ciao " + name + " " + surname;

//condizionale
if (age < 18) {
  price = (kilometers * 0.21) - (kilometers * 0.21 * 0.2);
} else if (age < 65) {
  price = kilometers * 0.21;
} else {
  price = (kilometers * 0.21) - (kilometers * 0.21 * 0.4);
}
document.getElementById("prezzo_biglietto").innerHTML="Quindi il prezzo del tuo biglietto è di: " + price + " scellini";
