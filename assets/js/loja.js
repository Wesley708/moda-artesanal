import { vestidos } from "./data.js";

let conteiner = document.querySelector(".container-products");


vestidos.forEach((vestido) => {
    const div = document.createElement("div");
    div.className = "box-products";

    div.innerHTML = `
        <a href="post.html?id=${vestido.id}">
            <img src="assets/img/${vestido.image}" alt="">
            <div class="overlay-product"></div>
            <h3>${vestido.nome} - R$ ${vestido.preco}</h3>
        </a>
    `;
    conteiner.appendChild(div);
});