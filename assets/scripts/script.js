const frente = "cartaFrente";
const costas = "cartaCostas";

iniciarJogo();

function iniciarJogo(){
    game.criarCartas(game.times);
    mostrarCartas(game.cartas);
}

function mostrarCartas(cartas){
    let mesa = document.getElementById("mesa");

    for(let carta of game.cartas){
    
        let cartaElemento = document.createElement("div");
        cartaElemento.id = carta.id;
        cartaElemento.classList.add("carta");
        cartaElemento.dataset.icon = carta.icon;

        cirarConteudoCarta(carta,cartaElemento);

        cartaElemento.addEventListener("click",virarCarta)
        mesa.appendChild(cartaElemento);
     }
}

function cirarConteudoCarta(carta,cartaElemento)  {
        criarApaCarta(frente,carta,cartaElemento);
        criarApaCarta(costas,carta,cartaElemento);
}

function criarApaCarta(tipo,carta,elemento){
    let tipoCarta = document.createElement("div");
    tipoCarta.classList.add(tipo);
    
    if(tipo === frente){
        let iconeElemento = document.createElement("img");
        iconeElemento.classList.add("icone");
        iconeElemento.src = "./assets/images/" + carta.icon + ".png";
        tipoCarta.appendChild(iconeElemento);
    }
    else if(tipo === costas){
        let iconeElemento = document.createElement("img");
        iconeElemento.classList.add("icone");
        iconeElemento.src = "./assets/images/tf.png";
        tipoCarta.appendChild(iconeElemento);
    }

    elemento.appendChild(tipoCarta);
}


function virarCarta(){
    this.classList.add("flip");
}

