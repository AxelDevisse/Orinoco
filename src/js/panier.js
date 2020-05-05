import createStructureOther from "./index.js"
import {ajaxRequestPost} from "./api.js"

// Page Mon panier
export default function createPanierPage() {
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
    console.log(items);

    // Check si quelque chose dans le localStorage
    if(items === null) {
        panierState.textContent = "Votre panier est vide !"
        } else {
        panierState.textContent = "Recapitulatif de votre panier !"
        const ul = document.createElement("ul")
        divPanier.appendChild(ul)

        let totalPrice = 0;

        for(var allItems of items){
            const li = document.createElement ("li")
            li.textContent = allItems.name + " - " + allItems.price / 100 + " euros"
            ul.appendChild(li)
            totalPrice += allItems.price / 100
        }

    //Affichage du montant total du panier
    const panierPrice = document.createElement("h3")
    panierPrice.setAttribute("class", "total_price")
    divPanier.appendChild(panierPrice)
    panierPrice.textContent = "Montant total de votre panier : " + totalPrice + " euros"

    // Creation du formulaire
    const form = document.createElement("form")
    // form.setAttribute("target", "#")
    container.appendChild(form)
    // const labelChoice = ["Prénom","Nom", "Adresse","Ville", "Email"]

    function createField(name, type, labels, required, pattern, placeholder){
        const label = document.createElement("label")
        const input = document.createElement("input")
        label.setAttribute("for", name)
        input.setAttribute("type", type)
        input.setAttribute("name", name)
        input.setAttribute("pattern", pattern)
        if (required)
            input.setAttribute("required", required)
        input.setAttribute("placeholder", placeholder)
        label.textContent = labels
        form.appendChild(label)
        form.appendChild(input)
        return input;
    }
     
    let firstNameInput  = createField("prenom", "text", "Prenom", "true", "[A-Za-z]{3,}", `Entrez votre prénom`);
    let secondNameInput = createField("nom", "text", "Nom", "true", "[A-Za-z]{2,}", `Entrez votre nom`);
    let adressInput     = createField("adress", "text", "Adresse", "true", "[A-Za-z]{5,}", `Entrez votre adresse`);
    let cityInput       = createField("city", "text", "Ville", "true", "[A-Za-z]{3,}", `Entrez votre ville`);
    let mailInput       = createField("email", "email", "Email", "true", "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$", `Entrez votre mail`);

    const submit = document.createElement("input")
    submit.type = "submit"
    submit.setAttribute("value", "Valider ma commande")
    submit.setAttribute("id", "submit")

    form.appendChild(submit)

    submit.addEventListener("submit", (event) => {

        event.preventDefault();

        let order ={
            contact: {
                firstName : firstNameInput.value,
                lastName : secondNameInput.value,
                address: adressInput.value,
                city: cityInput.value,
                email: mailInput.value,
            },
            products: items
        };

        ajaxRequestPost(order, "http://localhost:3000/api/teddies/order")
        .then((res) => {
        console.log(res);
        })

        
    });
    
}
}




