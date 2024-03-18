// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names) {
    let newcard = [];
    for (let i = 0; i < names.length; i++) {
      newcard.push( `Thank you, ${names[i]}, for the wonderful surprise gift!`);
      //debugger;
    }
    return newcard;
  }

function countDown(n){
    while(n >= 0) {
        console.log(n--);
      }
} 

//countDown(6);