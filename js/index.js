import {apiRequest, requestUrl} from './api.js';
import "../sass/main.scss"

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

    import createPanierPage from "./panier.js"
    if(window.location.pathname =="/panier.html") { 
        createPanierPage();
    }

    import createPageProduct from "./product.js"
    if(window.location.pathname =="/produit.html"){
        createPageProduct();
    }
