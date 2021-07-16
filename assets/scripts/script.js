const frente = "cartaFrente";
const costas = "cartaCostas";

times = [
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


criarCartas = (time) =>{
    cartas = [];

    for(let time of times){
        cartas.push(cartaTime(time));
    }

    return (cartas.flatMap(pair => pair))
}

cartaTime = (time) =>{
    return [{id: criarId(time),icon: time, flipped:false},{id: criarId(time),icon:time,flipped:false}];
}

criarId = (time) =>{
    return time + parseInt(Math.random() * 1000);
}

