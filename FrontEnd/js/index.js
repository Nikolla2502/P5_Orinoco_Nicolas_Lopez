"use strict";

let containerTeddy = document.getElementById("item_container");

fetch('http://localhost:3000/api/teddies')
.then(response => response.json())
.then(teddies => {
    
    for(let i = 0; i < teddies.length; i++){

        let divContainer = document.createElement("div");
        divContainer.classList.add("cardProductItem");
        divContainer.classList.add("col-lg-3");
        divContainer.classList.add("m-2");
        divContainer.classList.add("mb-5");
        containerTeddy.appendChild(divContainer);
        
        let linkTeddy = document.createElement("a");
        linkTeddy.classList.add("stretched-link");
        linkTeddy.href = "order.html?id_teddy="+teddies[i]._id;
        divContainer.appendChild(linkTeddy);
        
        let nameTeddy = document.createElement("h2");
        nameTeddy.classList.add("card-name");
        nameTeddy.innerHTML = teddies[i].name;
        divContainer.appendChild(nameTeddy);
         
        let imgTeddy = document.createElement("img");
        imgTeddy.classList.add("card-img");
        imgTeddy.classList.add("img-fluid");
        imgTeddy.setAttribute('src', teddies[i].imageUrl);
        divContainer.appendChild(imgTeddy);


        let priceTeddy = document.createElement("h4");
        priceTeddy.classList.add("card-price");
        priceTeddy.classList.add("text-center");
        priceTeddy.innerHTML = (teddies[i].price / 100) + " €";
        divContainer.appendChild(priceTeddy);
        
    }
})
// .catch(error => console.log(error));
.catch(error => {
    document.getElementById('serverError').style.display = "contents";
    
    document.getElementById('teddyChoice').style.display ="none";
})

displayArticleNumber();