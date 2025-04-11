class Carro {
    #velocidade;
    constructor() {
        this.#velocidade = 0;
    }
    acelerar() {
        this.#velocidade += 10;
        console.log("Acelerando...");
    }
    frear() {
        this.#velocidade = Math.max(0, this.#velocidade - 10);
        console.log("Freando...");
    }
    getVelocidade() {
        return this.#velocidade;
    }
    exibirVelocidade() {
        console.log(`Velocidade atual: ${this.getVelocidade()} km/h`);
    }
}

const meuCarro = new Carro();

meuCarro.exibirVelocidade(); 
meuCarro.acelerar(); 
meuCarro.acelerar(); 
meuCarro.exibirVelocidade(); 
meuCarro.frear(); 
meuCarro.exibirVelocidade();