const requestUrl = "http://localhost:3000/api/teddies/";

// Liaison
const apiRequest = (param) => {
    return new Promise((resolve)=>{
        let appel = new XMLHttpRequest();
        appel.onload = function() {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                resolve(JSON.parse(this.responseText));
                //console.log("Liaison API OK !");
            }else{
                alert("Erreur du chargement de l'API...");
            }
        };
        appel.open("GET", param); //GET pour recuperation données
        appel.send();
    });
}

// DOM INDEX HTML

if(window.location.pathname =="/index.html")
{ 
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

function createStructureOther(){
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

const singleProduit = () => {
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

        let select = document.createElement("select")
        div2.appendChild(select)

        const btnAddToCart = document.createElement("button")
        btnAddToCart.textContent = "Ajouter au panier";
        div2.appendChild(btnAddToCart)

        const colors = response.colors
        for (color of colors) {
            const colorOptions = document.createElement("option")
            colorOptions.value = color
            colorOptions.textContent = color;
            select.appendChild(colorOptions)
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

// Page Mon panier
function createPanierPage()  {
createStructureOther(); //header

const body = document.querySelector("body")
body.style.textAlign = "left"

// Creation Div mon panier
const container = document.getElementById("container")
container.style.display = "block"
const divPanier = document.createElement("div")
divPanier.setAttribute("class", "panier")
container.appendChild(divPanier)
const panierState = document.createElement("h1")
panierState.setAttribute("class", "panierStatement")
divPanier.appendChild(panierState)

// On get le local storage
let items = localStorage.getItem("session");
items = JSON.parse(items)

// Check si quelque chose dans le localS
if(items === null){
    panierState.textContent = "Votre panier est vide !"
    } else {
        panierState.textContent = "Recapitulatif de votre panier !"
        const ul = document.createElement("ul")
        divPanier.appendChild(ul)

        var totalPrice = 0;

        for(var allItems of items){
            const li = document.createElement ("li")
            li.textContent = allItems.name + " - " + allItems.price / 100 + " euros"
            ul.appendChild(li)
            totalPrice += allItems.price / 100
        }

    const panierPrice = document.createElement("h3")
    panierPrice.setAttribute("class", "total_price")
    divPanier.appendChild(panierPrice)
    panierPrice.textContent = "Montant total de votre panier : " + totalPrice + " euros"

    // Creation du formulaire
    const form = document.createElement("fieldset")
    container.appendChild(form)
    const labelChoice = ["Prénom","Nom", "Adresse de livraison","Ville", "Email"]

    for(let labels of labelChoice) {
        const label = document.createElement("label")
        const input = document.createElement("input")

        if(labels === "Email"){
            input.setAttribute("type", "email")
        } else
        input.setAttribute("type", "text")
        input.setAttribute("placeholder", `Entrez votre ${labels}`)
        input.setAttribute("required", "true")
        label.textContent = labels

        form.appendChild(label)
        form.appendChild(input)
        }
    }
}
