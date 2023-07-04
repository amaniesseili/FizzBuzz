for (let i=0; i<=100;i++){
    if(i % 3 === 0){
        console.log("fizz")
    } else if (i % 5 === 0 ){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}

// for è da 0 a 100, dentro il ciclo viene 
// effettuato un controllo per verificare 
// se il numero e multiplicato per 3 e 5  usando il modulo %
// se e multiplicato per 3 viene stampato fizz
//  se e multiplicato per 5 viene stampato buzz 
//  altrimenti si stampa i numero (i)

// ------------------bonus2-----------
// le celle da creare 8x8
// e prendo il container dal html
const chessBoardContainer = document.querySelector(".chessboard");
// creo un variabile che mi fa il calcolo e poi la uso dentro il ciclo
const totalSquares = 7 * 7;  


for (let i = 0; i < totalSquares; i++){
    // creao il il div in js dentro il container
    const singleSquare = `<div class="square"></div>`;

    // aggiungo al container giu i siglesquare
    chessBoardContainer.innerHTML += singleSquare;
}