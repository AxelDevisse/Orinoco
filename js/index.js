import {apiRequest, requestUrl} from './api.js';

// DOM INDEX HTML
if(window.location.pathname =="/index.html") { 
    apiRequest(requestUrl)
    .then((response) => { 
        createStructureIndex();
        response.forEach(ours => { 
            const container = document.getElementById("container");
            const card = document.createElement("div");
            card.setAttribute("class", "card");
            container.appendChild(card);
        
            const h3 = document.createElement("h1")
            h3.setAttribute("class", "index")
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
function createStructureIndex(){
    const app = document.getElementById("root");
    const header = document.createElement("header");
    header.setAttribute("class", "index")
    app.appendChild(header);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const a1 = document.createElement("a")
    a1.href = "index.html"
    a1.textContent = "ACCUEIL"

    const li2 = document.createElement("li");
    const a2 = document.createElement("a")
    a2.href = "panier.html"
    a2.textContent = "MON PANIER"

    const logo = document.createElement("p")
    logo.textContent = "Orinoco"
    ul.appendChild(logo)

    const bContent = document.createElement("div")
    bContent.setAttribute("class", "header_content")

    const h2 = document.createElement("h2")
    h2.textContent = "SOLDES D'ETE"

    const href = document.createElement("a")
    href.href = "#container"
    href.textContent = "J'EN PROFITE !"

    header.appendChild(nav)
    nav.appendChild(ul)
    ul.appendChild(li1)
    li1.appendChild(a1)
    ul.appendChild(li2)
    li2.appendChild(a2)
    header.appendChild(bContent)
    bContent.appendChild(h2)
    bContent.appendChild(href)

    const root = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute ("id", "container");
    root.appendChild(container);
}


    export default function createStructureOther(){
    const app = document.getElementById("root");
    const header = document.createElement("header");
    header.setAttribute("class", "other")
    app.appendChild(header);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const a1 = document.createElement("a")
    a1.href = "index.html"
    a1.textContent = "ACCUEIL"

    const li2 = document.createElement("li");
    const a2 = document.createElement("a")
    a2.href = "panier.html"
    a2.textContent = "MON PANIER"

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

if(window.location.pathname =="/produit.html") {
    apiRequest("http://localhost:3000/api/teddies/" + currentUrlLocation)
    .then((response) => {
        createStructureOther();
        createSinglePageProduct(response);
    })
}

    function createSinglePageProduct(response) {
        const container = document.getElementById("container")
        const card = document.createElement("div")
        card.setAttribute("class", "content");
        container.appendChild(card);

        const div1 = document.createElement("div")
        div1.setAttribute("class", "show1")
        const div2 = document.createElement("div")
        div2.setAttribute("class", "show2")
        card.appendChild(div1)
        card.appendChild(div2)
        
        const h3 = document.createElement("h1")
        h3.textContent = response.name;
        div1.appendChild(h3);

        const img = document.createElement("img")
        img.src = (response.imageUrl)
        div1.appendChild(img)
        
        const pDescr = document.createElement("p")
        pDescr.textContent = response.description;
        div2.appendChild(pDescr);

        const price = document.createElement("p")
        price.setAttribute("class", "price");
        price.textContent = response.price / 100 + " €"
        div2.appendChild(price)

        const btnAddToCart = document.createElement("button")
        btnAddToCart.textContent = "Ajouter au panier";
        div2.appendChild(btnAddToCart)

        let select = document.createElement("select")
        div2.appendChild(select)
        
        let color;
        const colors = response.colors
        for (color of colors) {
            const colorOptions = document.createElement("option")
            select.appendChild(colorOptions)
            colorOptions.value = color;
            colorOptions.textContent = color;
        }

        btnAddToCart.addEventListener("click", () => {            
        let panier = [];
        // Parse the serialized data back into an aray of objects
        panier = JSON.parse(localStorage.getItem('session')) || [];
        // Push the new data (whether it be an object or anything else) onto the array
        panier.push(response);
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('session', JSON.stringify(panier));
        });
    }

    import createPanierPage from "./panier.js"
    if(window.location.pathname =="/panier.html") { 
        createPanierPage();
    }
