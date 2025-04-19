function alterarNumero(delta) {
    const input = document.getElementById('meuNumero');
    input.value = parseInt(input.value || 0) + delta;
  }

  let navbar = document.querySelector('nav');

  navbar.innerHTML = ` <div class="logo">
            <a href="index.html">
                <p>Ana Souza</p>
                <p class="mea-culpa">Moda Artezanal</p>
            </a>
        </div>
        <div>
            <ul>
                <li><a href="./index.html">Loja</a></li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="login.html"><img src="assets/img/user.png" alt=""></a></li>
                <li><a href="#"><img src="assets/img/cart.png" alt="" id="open"></a></li>
            </ul>
        </div>
        <div class="conteiner-carrinho close">
            <div class="carrinho">
                <div>
                    <h2>Resumo da sacola</h2>
                    <img class="fechar" id="close" src="assets/img/close.png" alt="">
                </div>
                <p>Sua sacola tem 2 itens</p>
                <div class="box-carrinho">
                    <img src="assets/img/vestido-rosa2.jpg" alt="">
                    <div>
                        <h2>Vestido Rosa</h2>
                        <p>R$ 200,00</p>
                        <p>Tamanho: P</p>
                        <p>Quantidade: 1</p>
                        <img class="trash" src="assets/img/trash.png" alt="">                        
                    </div>

                </div>
                <div class="box-carrinho">
                    <img src="assets/img/vestido-rosa2.jpg" alt="">
                    <div>
                        <h2>Vestido Rosa</h2>
                        <p>R$ 200,00</p>
                        <p>Tamanho: P</p>
                        <p>Quantidade: 1</p>
                        <img class="trash" src="assets/img/trash.png" alt="">                        
                    </div>

                </div>
                
                
                
            </div>
        </div>`;


let footer = document.querySelector('footer');

footer.innerHTML = `<a href="index.html">
            <div class="box logo">
                <h2>Ana Souza</h2>
                <p class="mea-culpa">Moda Artezanal</p>
            </div>
        </a>
        <div class="box">
            <h3>Endereço:</h3>
            <p>Rua dos Vestidos, 1000, São Paulo, SP</p>
        </div>
        <div class="box">
            <h3>Redes sociais:</h3>
            <a href="">
                <img src="assets/img/instagram.png" alt="">
                <p>Instagram</p>
            </a>
            <a href="">
                <img src="assets/img/facebook.png" alt="">
                <p>Facebook</p>
            </a>
            <a href="">
                <img src="assets/img/whatsapp.png" alt="">
                <p>Whatsapp</p>
            </a>
        </div>`


close = document.querySelector("#close");

close.addEventListener("click", function () {
    const carrinho = document.querySelector(".conteiner-carrinho");
    carrinho.classList.add("close");
});

open = document.querySelector("#open");

open.addEventListener("click", function () {
    const carrinho = document.querySelector(".conteiner-carrinho");
    carrinho.classList.remove("close");
});