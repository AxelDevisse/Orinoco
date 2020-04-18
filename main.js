const requestUrl = "http://localhost:3000/api/teddies/";

// Liaison
const apiRequest = (param) => {
    return new Promise((resolve)=>{
        let appel = new XMLHttpRequest();
        appel.onload = function() {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                resolve(JSON.parse(this.responseText));
                console.log("Liaison API OK !");
            }else{
                alert("Erreur du chargement de l'API...");
            }
        };
        appel.open("GET", param); //GET pour recuperation données
        appel.send();
    });
}

// DOM INDEX HTML
const index = () => {
    apiRequest(requestUrl)
    .then((response) => { 
        createStructure();
        response.forEach(ours => { 
            const container = document.getElementById("container");
            const card = document.createElement("div");
            card.setAttribute("class", "card");
            container.appendChild(card);
        
            const h3 = document.createElement("h1")
            h3.textContent = ours.name;
            card.appendChild(h3);

            const img = document.createElement("img")
            img.src = (ours.imageUrl)
            card.appendChild(img)
        
            const pDescr = document.createElement("p")
            pDescr.textContent = ours.description;
            card.appendChild(pDescr);

            const price = document.createElement("p")
            price.setAttribute("class", "price");
            price.textContent = ours.price / 100 + " €"
            card.appendChild(price)

            const btn = document.createElement("a")
            btn.setAttribute('href', 'produit.html?id=' + ours._id);
            btn.textContent = "Voir";
            card.appendChild(btn)

        })
    })
}

// Structure is #root's header and then a container class :)
function createStructure(){
    const app = document.getElementById("root");
    const header = document.createElement("header");
    app.appendChild(header);

    const img = document.createElement("img");
    const a = document.createElement("a")
    a.href = "index.html"
    img.src = "images/logo.jpg"
    img.alt = "Superbe logo de notre site Orinoco" // :DDD
    header.appendChild(a)
    a.appendChild(img);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const a1 = document.createElement("a")
    a1.href = "index.html"
    a1.textContent = "Acceuil"

    const li2 = document.createElement("li");
    const a2 = document.createElement("a")
    a2.href = "panier.html"
    a2.textContent = "Mon Panier"

    header.appendChild(nav)
    nav.appendChild(ul)
    ul.appendChild(li1)
    li1.appendChild(a1)
    ul.appendChild(li2)
    li2.appendChild(a2)

    const root = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute ("id", "container");
    root.appendChild(container);
}

var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var currentUrlLocation = url_array[url_array.length-1];  // Get the last part of the array (-1)

const singleProduit = () => {
    apiRequest("http://localhost:3000/api/teddies/" + currentUrlLocation)
    .then((response) => {
        createStructure();
        createSinglePageProduct(response);
    })
}

    function createSinglePageProduct(response) {
        const container = document.getElementById("container")
        const card = document.createElement("div")
        card.setAttribute("class", "card bigger");
        container.appendChild(card);
        
        const h3 = document.createElement("h1")
        h3.textContent = response.name;
        card.appendChild(h3);

        const img = document.createElement("img")
        img.src = (response.imageUrl)
        card.appendChild(img)
        
        const pDescr = document.createElement("p")
        pDescr.textContent = response.description;
        card.appendChild(pDescr);

        const price = document.createElement("p")
        price.setAttribute("class", "price");
        price.textContent = response.price / 100 + " €"
        card.appendChild(price)

        const btnAddToCart = document.createElement("button")
        btnAddToCart.textContent = "Ajouter au panier";
        card.appendChild(btnAddToCart)

        let select = document.createElement("select")
        card.appendChild(select)

        const colors = response.colors
        for (color of colors) {
            const colorOptions = document.createElement("option")
            colorOptions.value = color
            colorOptions.textContent = color;
            select.appendChild(colorOptions)
        }

        let panier = [];

        btnAddToCart.addEventListener("click", function(){
            panier.push({
            id: response._id})
            localStorage.setItem("cart", JSON.stringify(panier));
            console.log(JSON.parse(localStorage.getItem("cart")));
        })
    }

        /*
        GET if cart in local storage
            true: store it inside var
            false: create it inside var
        */
