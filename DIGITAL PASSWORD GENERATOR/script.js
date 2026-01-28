let input  = document.querySelector("#input");
let msg = document.querySelector(".msg");


alert("js connected")

input.addEventListener("input",()=>{
    if(input.value.length<6){
        msg.style.display = "flex"
        msg.innerText = "weak password"
        msg.style.color = "red";
       
    }else if(input.value.length<8){
        msg.innerText="medium password";
        msg.style.color = "orange";
    }else if(input.value.length<10){
         msg.innerText="strong password";
      msg.style.color = "green";
    }
    else{
        msg.innerText="very strong password";
    }
})
