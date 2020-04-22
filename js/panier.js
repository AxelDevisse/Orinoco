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

    // Check si quelque chose dans le localStorage
    if(items === null) {
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

    //Affichage du montant total du panier
    const panierPrice = document.createElement("h3")
    panierPrice.setAttribute("class", "total_price")
    divPanier.appendChild(panierPrice)
    panierPrice.textContent = "Montant total de votre panier : " + totalPrice + " euros"

    // Creation du formulaire
    const form = document.createElement("form")
    container.appendChild(form)
    const labelChoice = ["Prénom","Nom", "Adresse","Ville", "Email"]

    for(let labels of labelChoice) {
        const label = document.createElement("label")
        const input = document.createElement("input")

        

        if(labels === "Email"){
            label.setAttribute("for", "email")
            input.setAttribute("type", "email")
            input.setAttribute("required", "true")
            input.setAttribute("placeholder", `Entrez votre ${labels}`)
            label.textContent = labels
            form.appendChild(label)
            form.appendChild(input)
        }else if (labels === "Prénom"){
            label.setAttribute("for", "prenom")
            input.setAttribute("type", "text")
            input.setAttribute("placeholder", `Entrez votre ${labels}`)
            input.setAttribute("required", "true")
            label.textContent = labels
            form.appendChild(label)
            form.appendChild(input)
        }else if (labels === "Nom") {
            label.setAttribute("for", "nom")
            input.setAttribute("type", "text")
            input.setAttribute("placeholder", `Entrez votre ${labels}`)
            input.setAttribute("required", "true")
            label.textContent = labels
            form.appendChild(label)
            form.appendChild(input)
        }else if (labels === "Adresse") {
            label.setAttribute("for", "adress")
            input.setAttribute("type", "text")
            input.setAttribute("placeholder", `Entrez votre ${labels}`)
            input.setAttribute("required", "true")
            label.textContent = labels
            form.appendChild(label)
            form.appendChild(input)
        } else if (labels === "Ville") {
            label.setAttribute("for", "ville")
            input.setAttribute("type", "text")
            input.setAttribute("placeholder", `Entrez votre ${labels}`)
            input.setAttribute("required", "true")
            label.textContent = labels
            form.appendChild(label)
            form.appendChild(input)
        }
    }


    const submit = document.createElement("input")
    submit.type = "submit"
    submit.setAttribute("value", "Valider ma commande")

    form.appendChild(submit)

}
}
//Page mon panier