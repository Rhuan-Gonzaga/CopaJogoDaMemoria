const frente = "cartaFrente";
const costas = "cartaCostas";

const times = [
    "alemanha",
    "argentina",
    "brasil",
    "espanha",
    "franca",
    "inglaterra",
    "italia",
    "japao",
    "mexico",
    "portugal"
];

let cartas = null;
iniciarJogo();

function iniciarJogo(){
    cartas = criarCartas(times);
    embaralhar(cartas);
    mostrarCartas(cartas);
}

function mostrarCartas(cartas){
    let mesa = document.getElementById("mesa");

    for(let carta of cartas){
    
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

function embaralhar (cartas) {
    let currentindex = 20;
    let randomindex = 0;

    while (currentindex !== 0) {
        randomindex = Math.floor(Math.random() * currentindex);
        currentindex --;
        [cartas[randomindex],cartas[currentindex]] = [cartas[currentindex],cartas[randomindex]];
    }

    
}

function criarCartas () {
    let cartas = [];

    for(let time of times){
        cartas.push(cartaTime(time));
    }

    return (cartas.flatMap(pair => pair))
}

function cartaTime (time) {
    return [{id: criarId(time),icon: time, flipped:false},{id: criarId(time),icon:time,flipped:false}];
}

function criarId (time) {
    return time + parseInt(Math.random() * 1000);
}

function virarCarta(){
    this.classList.add("flip");
}

