const btn = document.getElementById("button");
const input = document.querySelector("#password");
const length = 20;
const select = document.getElementById("img");
let snum= document.querySelector("#c1");
let schar = document.querySelector("#c2");
let range = document.querySelector("#range")


 const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 const lowerCase = "abcdefghijklmnopqrstuvwxyz"
 const num = "0123456789"
 const char = "!@#$%^&*()"

 let passwordLength = range.value;
 
 

 function createPass(){
    let password = '';
    let allowChar = upperCase + lowerCase;
    password+= upperCase[Math.floor(Math.random()*upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    
    

    if(snum.checked){
      allowChar += num
      // password+= num[Math.floor(Math.random()*num.length)];
    }
    if(schar.checked){
      allowChar += char
      // password+= char[Math.floor(Math.random()*char.length)];
    }
    

    for(let i = 1; i<passwordLength-2;i++){
        password+=allowChar[Math.floor(Math.random()*allowChar.length)];
    }
    input.value=password
 }

 function copyPass(){
    input.select();
    document.execCommand("copy")
    
 }
 select.addEventListener("click", copyPass)
 range.addEventListener("input", ()=>{
   passwordLength = Number(range.value);
 })


 btn.addEventListener("click",createPass)
