const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const button=document.getElementById("btn-id")
const hexValue=document.querySelector(".color")

button.addEventListener("click",function(){
    console.log("clicked")
    let hexColor="#"
    for(let i=0; i<6;i++){
        hexColor +=hex[getRandomNumber()]
    }
    hexValue.textContent=hexColor;
    document.body.style.backgroundColor=hexColor
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length)
}