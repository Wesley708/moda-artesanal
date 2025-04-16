import { vestidos } from "./data.js";

function obterParametro(id) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(id);
  }

let produtoId = obterParametro("id");

let produto = document.querySelector(".container-product");

let vestido = vestidos.find((vestido) => vestido.id == produtoId);

produto.innerHTML = 
  `
    <div>
        <img src="assets/img/${vestido.image}" alt="" />
        <button class="left"><img src="assets/img/seta-esquerda.png" alt="" ></button>
        <button class="right">  
          <img src="assets/img/seta-direita.png" alt="" >
        </button>
        <div class="imagens">
            <img src="assets/img/${vestido.image}" alt="" />
            <img src="assets/img/${vestido.image}" alt="" />
            <img src="assets/img/${vestido.image}" alt="" />
        </div>
    </div>
      <div>
        <h2>${vestido.nome}</h2>
        <h2>R$ ${vestido.preco},00</h2>
        <label for="tamanho">Tamanho:</label>
        <select id="tamanho" name="tamanho">
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </select>

        <label for="quantidade">Quantidade:</label>
        <div name="quantidade" class="number-input">
            <button onclick="alterarNumero(-1)">–</button>
            <input type="number" id="meuNumero" value="0">
            <button onclick="alterarNumero(1)">+</button>
          </div>
        
        <p>
            ${vestido.descricao}
        </p>
        <button><img src="assets/img/cart.png" alt="">Adicionar ao carrinho</button>
        <button><img src="assets/img/buy.png" alt="">Comprar</button>
        <button><img src="assets/img/whatsapp.png" alt="">Dúvidas sobre o produto?</button>
      </div>
  `
  ;