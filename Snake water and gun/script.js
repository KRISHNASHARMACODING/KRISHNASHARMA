
let value = ["snake","water","gun"];
let playAgain = true;
while(playAgain){
    let random = value[Math.floor(0+Math.random()*3)]
 let userValue  = prompt("enter w,s or g");

 if(userValue=== random){
    alert("draw");
 }
 else if((userValue==="snake" && random==="water") ||
 (userValue==="water" && random==="gun") ||
 (userValue==="gun" && random==="snake"))
 {
    alert("you win \n you:"+user+"\nrandom:"+random);
 }else{
    alert("you lose\n you:"+user+"\nrandom:"+random);
 }
 playAgain=confirm("do you want play again");
}



