const fila1 = document.getElementById("fila1");

const container = document.createElement("div");
container.classList.add("container");
fila1.appendChild(container);

let row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);

let col = document.createElement("div");
col.classList.add("col-md-3");
row.appendChild(col);

let card = document.createElement("div");
card.classList.add("card");
col.appendChild(card);

let img = document.createElement("img");
img.classList.add("img-fluid");
img.setAttribute("src","images/hamburguesa-1.webp");
card.appendChild(img);

let cardbody = document.createElement("div");
cardbody.classList.add("d-flex flex-colum");
img.appendChild(cardbody);
cardbody.innerHTML=`<h2>$ 8.900</h2>`

