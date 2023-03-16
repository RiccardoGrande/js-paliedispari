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
