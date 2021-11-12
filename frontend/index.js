
    getTeddies()
    
    
function getTeddies() {
    fetch("http://localhost:3000/api/teddies")
    .then(function (response) {
        return response.json()
       
        
    })
    .then(function (data) {
        addCards(data)
        
    })
    .catch(function (error) {
        alert(error)
        return error
    })
    
}
// fonction pour la création des cards de la page d'accueil
function addCards(teddiesArray) {
    console.log(teddiesArray)
     //recupère l'élément de la liste dans le HTML
     const parent = document.getElementById("liste");
    //boucle pour chaque interation d'un produit
    teddiesArray.forEach(produit => {
        //convertir le prix
        console.log(produit)
        const price = produit.price /100
        const desrip = produit.description.substring(0,50)
        const teddiehtml = ` <article class="P-6 mx-6">
        <h2 class="teddiesTitle">
               ${produit.name}
        </h2>
        <figure class="teddiesFigure">
            <img src="${produit.imageUrl}" alt="">
            <figcaption>
                <p>
                    ${desrip} ...
                </p>
                <p>${price}€</p>
                <a href="frontend/produit.html?id=${produit._id}">
                    Voir le produit
                </a>
            </figcaption>
        </figure>
        
    </article>`;
    parent.insertAdjacentHTML("beforeend",teddiehtml)
   
    })

    
}
