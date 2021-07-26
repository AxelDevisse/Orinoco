const requestUrl = "http://localhost:3000/api/teddies/";

// Liaison
const apiRequest = (param) => {
    return new Promise((resolve)=>{
        let appel = new XMLHttpRequest();
        appel.onload = function() {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                resolve(JSON.parse(this.responseText));
                // console.log("Liaison API OK !");
            }else{
                alert("Erreur du chargement de l'API...");
            }
        };
        appel.open("GET", param); //GET pour recuperation données
        appel.send();
    });
}

const ajaxRequestPost = (data, url) => {
    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();
        //retour de la requette si tout c'est bien passé
        request.onreadystatechange = function() {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                var response = JSON.parse(this.responseText);
                 resolve(response);
            }else if (this.readyState == XMLHttpRequest.DONE && this.status != 201) {
              reject("la requette:  " + url + " revoie une erreur: " + this.status );
            }
        };
        request.open("POST", url);
        request.setRequestHeader("Content-Type", "application/json");//Envoi au format JSON
        request.send(JSON.stringify(data));//data est un objet JS
    })
  }

export {apiRequest, ajaxRequestPost, requestUrl};