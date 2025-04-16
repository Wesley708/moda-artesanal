import { posts } from "./data.js";

function obterParametro(id) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(id);
  }

let postId = obterParametro("id");

let conteiner = document.querySelector(".post-conteiner");

let post = posts.find((post) => post.id == postId);


conteiner.innerHTML = `
  <h2>${post.titulo}</h2>
        <img src="assets/img/${post.image}" alt="">
        <p>
            ${post.conteudo}          
        </p>
        
        <h2>Comentários</h2>
        <div class="comentarios">
            <form action="">
                <img src="assets/img/user.png" alt="">
                <textarea name="" placeholder="Deixe seu comentário..." id=""></textarea>
                <button>Enviar</button>
            </form>
        </div>

`