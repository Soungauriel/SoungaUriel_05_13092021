// récupération de l'id du produit
const searchParams = new URLSearchParams(location.search);
const newId = searchParams.get("id");
console.log(newId)

//modification de l'adresse d'appel à l'API
const newUrl = `http://localhost:3000/api/teddies/${newId}`
   
fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
        addCard(data);
    })
 // fonction pour la création de la card de la page produit
 function addCard(product) {
     console.log(product)

    // insertion des information de la card du produit
    const selectionProductImage = document.getElementById("productImage");
    selectionProductImage.innerHTML += `
    <img src="${product.imageUrl}" class="img-fluid img-thumbnail" alt="${product.name}">
    `;
    const selectionProductName = document.getElementById("produitName");
    selectionProductName.innerHTML += `
    <h5 class="card-title">${product.name}</h5>
    `;
    const selectionProductPrice = document.getElementById("prodduitPrice");
    selectionProductPrice.innerHTML += `
    <h5 class="card-title">${convertPrice(product.price)}</h5>
   `;
   const selectionProductDescription = document.getElementById("productDescription");
   selectionProductDescription.innerHTML += `
<p class="card-text">${product.description}</p>
`;
 }
 