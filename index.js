function writeCards(namesArray){
    let thankYouCards = []
    for(let i = 0; i < namesArray.length; i++){
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`)
    }
return thankYouCards;
}
function countDown (number){
    for(let i = 10; i >= 0; i--){
      console.log(i)  
    }
}
 
