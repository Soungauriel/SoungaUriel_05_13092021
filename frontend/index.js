main ()

function main (){
    const teddies = getTeddies()
    displayDiv(teddies)
}

function getTeddies() {
    fetch("http://localhost:3000/api/teddies")
    .then(function(httpBodyResponse){
        return httpBodyResponse.json()
    })
    .then(function(response) {
         console.log(response);
         return response
      
    })
    .catch(function(error) {
        alert(error)
    })
    
}
function displayTeddies(teddiesArray) {
    document.querySelector("main").innerHTML +=
    `<div class="P-5 mx-5">
            <h1 class="text-center fs-2">Bienvenue sur Orinoco</h1>
            <p class="text-center text-lignt">Retrouvez notre sélection de caméra vintage </p>
        </div>`
}