//Palidroma


//Chiedere all’utente di inserire una parola 
const word = prompt('inserisci una parola');
console.log(word);

//Creare una funzione per capire se la parola inserita è palindroma

function palWord() {
    
    for (let i = 0; i < word.length / 2; i++) {

         if (word[i] !== word[word.length - 1 - i]) {  
                alert( 'It is not a palindrome');  
            }  else { 
                alert( 'It is a palindrome');  
                } 
        } 
           
    }

    const value = palWord();  
  
    console.log(value); 




//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const numberPlayer = Number( prompt('inserisci un numero da 1 a 5'))
console.log(numberPlayer);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

const numberComputer = Math.floor(Math.random() * 5) + 1;
console.log(numberComputer);
//Sommiamo i due numeri 

const totalNumber = numberPlayer + numberComputer
console.log(totalNumber);
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
if (totalNumber % 2 === 0) {
    alert('il numero è pari')
} else {

    alert('il numero è dispari')
}

//Dichiariamo chi ha vinto.

if ((totalNumber % 2 === 0) === true) {

    alert('il giocatore ha vinto')
    
} else {
    
    alert('il giocatore ha perso')
}