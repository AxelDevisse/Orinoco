import {apiRequest, requestUrl} from './api.js';
import createStructureOther from "./index.js"

var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var currentUrlLocation = url_array[url_array.length-1];  // Get the last part of the array (-1)

 export default function createProductPage() {
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