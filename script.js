var btnPlus= document.querySelectorAll(".btnPlus")
var btnMoin= document.querySelectorAll(".btnMoin")
var trash=document.querySelectorAll(".fa-trash")
var heart = document.querySelectorAll(".fa-heart")




for ( let i=0 ; i< btnPlus.length; i++) {
    btnPlus[i].addEventListener("click", function(){
        btnPlus[i].previousElementSibling.innerText++
        SommeTotal()
    })
}
for( let i=0 ; i< btnMoin.length; i++){
    btnMoin[i].addEventListener("click", function() {

        if(btnMoin[i].nextElementSibling.innerText>0){
            btnMoin[i].nextElementSibling.innerText --
            SommeTotal()
        }
               
    })
}

for( let i=0 ; i< trash.length; i++) {
    trash[i].addEventListener("click", function() {
        trash[i].parentElement.parentElement.parentElement.remove()
        SommeTotal()
    })
} 

for(let i = 0 ; i<heart.length;i++){
    heart[i].addEventListener("click",function(){
        heart[i].classList.toggle("red")
    })
}

function SommeTotal(){
    var price = document.querySelectorAll(".price")
    var qte = document.querySelectorAll(".qte")
    var somm = document.querySelector("#somm")

    var sum = 0

    for(let i =0; i < qte.length;i++){
        sum = sum + price[i].innerText * qte[i].innerText
    }

    somm.innerText = sum
}