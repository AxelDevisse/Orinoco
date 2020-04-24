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

export {apiRequest, requestUrl};