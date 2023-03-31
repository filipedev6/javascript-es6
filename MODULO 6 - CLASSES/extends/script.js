class Moto {
    constructor(rodas) {
        this.rodas = rodas;
    }

    acelerar() {
        return 'Acelerou'
    }
}

class Honda extends Moto {
    empinar() {
        return 'Moto com ' + this.rodas + ' rodas acelerou'
    }
}

const honda = new Honda(2)