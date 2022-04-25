// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

document.querySelector("#wallet").innerHTML = JSON.parse(localStorage.getItem("amount"))

let details = JSON.parse(localStorage.getItem("movies"))
console.log(details)

let name = document.createElement("h1")
name.innerHTML = details[0]
let poster  = document.createElement("img")
poster.src = details[1]

document.querySelector("#movie").append(name,poster)

document.querySelector("#confirm").addEventListener("click",calculate)

function calculate(){

    console.log("in")

    let walletbal = document.querySelector("#wallet").innerHTML
    
    let paybal = document.querySelector("#number_of_seats").value * 100;
   
    if(walletbal < paybal){
        alert("Insufficient Balance!")
    }else if(walletbal > paybal){
        alert("Booking successful!")

        walletbal = walletbal - paybal
        localStorage.setItem("amount",JSON.stringify(walletbal))

        document.querySelector("#wallet").innerHTML = JSON.parse(localStorage.getItem("amount"))
    }else if(walletbal = paybal){

        alert("Booking successful!")

        walletbal = walletbal - paybal
        localStorage.setItem("amount",JSON.stringify(walletbal))

        document.querySelector("#wallet").innerHTML = JSON.parse(localStorage.getItem("amount"))

    }
}
