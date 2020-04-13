// 

const apiRequest = (attenteUrl) => {
    return new Promise((resolve)=>{
        let appel = new XMLHttpRequest();
        appel.onload = function() {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                resolve(JSON.parse(this.responseText));
            }else{
                alert("Erreur ! L'API n'a pas pu etre chargée !!!");
            }
        };
        appel.open("GET", attenteUrl);
        appel.send();
    });
}

    apiRequest("http://localhost:3000/api/teddies")
    .then((response) => { 
            response.forEach(objetDuTableau => { 
            createProductCard(objetDuTableau);
        })
    })

function createProductCard(objetDuTableau) {
    const cardContainer = createCardContainer();
    createCardImage(cardContainer, objetDuTableau.imageUrl);
    createCardDetail(cardContainer, objetDuTableau.name);
  }
  
  function createCardContainer() {
    const container = createElement("div", "product_detail");
    document.getElementById("main").appendChild(container);
    return container;
  }

  function createCardDetail (cardContainer) {
    const detail = createElement("div", "product_detail_text");
    cardContainer.appendChild(detail);
}

function createP (){
    const p = document.createElement("p")
    p.textContent = objetDuTableau.name;
    detail.appendChild(p);
    return p;
}
  
  function createCardImage(cardContainer, imageUrl) {
    const imageContainer = createElement("div", "roduct_imgp");
    cardContainer.appendChild(imageContainer);
  
    const img = createImage(imageUrl);
    imageContainer.appendChild(img);
  }

  function createImage(src) {
    const img = document.createElement("img");
    img.setAttribute("src", src);
    return img;
}
  
  function createElement(type, className) {
    let element = document.createElement(type);
    element.setAttribute("class", className);
    return element;
  }