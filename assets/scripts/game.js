let game = {

    modo: false,
    primeiraCarta: null,
    segundaCarta: null,

    escolhaCarta: function(id){
        let carta = this.cartas.filter(carta=>carta.id==id)[0];
        
        if(carta.flipped || this.modo){
            return false;
        }

        if(!this.primeiraCarta){
            this.primeiraCarta = carta;
            this.primeiraCarta.flipped = true;
            return true;
        }
        else{
            this.segundaCarta = carta;
            this.segundaCarta.flipped = true;
            this.mode = true;
            return true;
        }
    },

    checar: function(){

        if(!this.primeiraCarta || !this.segundaCarta){
            return false;
        }
        return this.primeiraCarta.icon == this.segundaCarta.icon;

    },

    limparCartas: function (){
        this.primeiraCarta = null;
        this.segundaCarta = null;
        modo = false;
    },

    cartaVirada: function (){
        this.primeiraCarta.flipped = false;
        this.segundaCarta.flipped = false;
        this.limparCartas();
    },  

    fim(){
        
        return this.cartas.filter(carta=>!carta.flipped).length == 0;
    },

    times: [
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
    ],

    
    cartas : null,

    criarCartas: function (times) {
        this.cartas = [];
    
        for(let time of times){
            this.cartas.push(this.cartaTime(time));
        }
    
        this.cartas = (this.cartas.flatMap(pair => pair))
        this.embaralhar();
    
    },
    
    cartaTime: function (time) {
        return [{id: this.criarId(time),icon: time, flipped:false},{id: this.criarId(time),icon:time,flipped:false}];
    },
    
    criarId: function (time) {
        return time + parseInt(Math.random() * 1000);
    },

     embaralhar: function () {
        var currentindex = 20;
        var randomindex = 0;
    
        while (currentindex !== 0) {
            randomindex = Math.floor(Math.random() * currentindex);
            currentindex --;
            [this.cartas[randomindex],this.cartas[currentindex]] = [this.cartas[currentindex],this.cartas[randomindex]];
        }
    
        
    }
    
}