function alterarNumero(delta) {
    const input = document.getElementById('meuNumero');
    input.value = parseInt(input.value || 0) + delta;
  }

  let navbar = document.querySelector('nav');

  navbar.innerHTML = `<div class="logo">
            <a href="">
                <p>Ana Souza</p>
                <p class="mea-culpa">Moda Artezanal</p>
            </a>
        </div>
        <div>
            <ul>
                <li><a href="./index.html">Loja</a></li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="#"><img src="assets/img/cart.png" alt=""></a></li>
                <li><a href="#"><img src="assets/img/user.png" alt=""></a></li>
            </ul>
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