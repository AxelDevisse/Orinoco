const requestUrl = "http://localhost:3000/api/teddies";

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

// Structure is #root's header and then a container class :)
function createStructure(){
    const app = document.getElementById("root");
    const header = document.createElement("header");
    app.appendChild(header);

    const img = document.createElement("img");
    img.src = "images/logo.jpg"
    img.alt = "Superbe logo de notre site Orinoco" // :DDD
    header.appendChild(img);

    const root = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute ("id", "container");
    root.appendChild(container);
}





