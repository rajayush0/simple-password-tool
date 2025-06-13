const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const selectElement = document.getElementById("mySelect")

// let passwordlength = selectedvalue
let randompass1El = document.getElementById("randompass1")
let randompass2El = document.getElementById("randompass2")

 function getRandomCharacter(){
    let randomindex = Math.floor(Math.random()*characters.length)
    return characters[randomindex]
 }
 function generate1(){
    const passwordlength = parseInt(selectElement.value);
    let pass= ""
    for( let i = 0;i<passwordlength;i++){
        pass += getRandomCharacter()
    }
    randompass1El.textContent=pass
    randompass2El.textContent=pass
    }
    function generate2(){
    const passwordlength = parseInt(selectElement.value);
    let pass= ""
    for( let i = 0;i<passwordlength;i++){
        pass += getRandomCharacter()
    }
    randompass2El.textContent=pass
    }
    
    
