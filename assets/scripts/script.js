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
    "potugal"
];

let cartas = null;
iniciarJogo();

function iniciarJogo(){
    cartas = criarCartas(times);
    embaralhar(cartas);
    console.log(cartas)
}

function embaralhar (cartas) {
    let currentindex = 10;
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



