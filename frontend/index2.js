// Une fonction pour renvoyer une promesse 
const getTeddies = async function () {
    //appel get fetch sur l'Api des teddies
    let response = await fetch ('http://localhost:3000/api/teddies')
    // Plutot que d'utilise le then on peut attendre la résolution
    let teddiesArray = await response.json()
    teddiesToHtml(teddiesArray)
}

/*
*teddiestoHtml genère et injecte l'htlm des teddies passé en parametre
*/
const teddiesToHtml = function (teddies) {
        //définition du parent des teddies
        const element = document.getElementById("liste");
        //boucle pour chaque itération d'un produit
        teddies.forEach(produit => {
            console.log(produit)
            //convertit le prix
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
    element.insertAdjacentHTML("beforeend",teddiehtml)
            
        });
        
    }
getTeddies();