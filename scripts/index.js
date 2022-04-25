// Store the wallet amount to your local storage with key "amount"

let newmoney = JSON.parse(localStorage.getItem("amount")) || 0;

document.querySelector("#wallet").innerHTML = JSON.parse(localStorage.getItem("amount"))

document.querySelector("#add_to_wallet").addEventListener("click",add)

function add(){
   console.log("in")
   const money = document.querySelector("#amount").value  //0

   
   newmoney = newmoney + +(money)
   localStorage.setItem("amount",JSON.stringify(newmoney))

   document.querySelector("#wallet").innerHTML = newmoney

   
}