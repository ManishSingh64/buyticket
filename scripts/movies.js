// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
document.querySelector("#wallet").innerHTML = JSON.parse(localStorage.getItem("amount"))

let id;

function main(){
    let query = document.querySelector("#search").value

    const url = (`https://www.omdbapi.com/?apikey=5c7dd27e&s=${query}`)

fetch (url)
.then(function(res){
    res.json().then(function(res){

        console.log(res.Search)
        append(res.Search)
    })
})
}


function append(data){

    data.map(( {Title , Poster} ) => {

        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src= Poster;

        let name = document.createElement("h2")
        name.innerText = Title

        let button = document.createElement("button")
        button.innerText = "Book Now"
        button.setAttribute("class","book_now")
        button.addEventListener("click",book)

        function book(){

            let arr = []

            let name = Title
            let image = Poster

            arr.push(Title,Poster)

            localStorage.setItem("movies",JSON.stringify(arr))

            window.location.href = "checkout.html"
            console.log(Title)       
            console.log(Poster)    
            
            
         }

        div.append(image,name,button)
        document.querySelector("#movies").append(div)

    })
}

function debounce(func,delay)  //main,1000
{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    },delay)
}
