import { posts } from "./data.js";

let conteiner = document.querySelector(".posts-conteiner");

posts.forEach((post) => {
    const div = document.createElement("div");
    div.className = "posts-box";

    div.innerHTML = `
    <a href="post.html?id=${post.id}">
    <img src="assets/img/${post.image}" alt="" />
    <h3>${post.titulo}</h3>
    </a>
    `;
    conteiner.appendChild(div);
});





