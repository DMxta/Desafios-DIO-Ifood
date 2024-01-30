class Heroi {

    tipoAtaque = "";

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if (this.tipo === "mago"){
            this.tipoAtaque = "magia"
        } else if (this.tipo === "guerreiro"){
            this.tipoAtaque = "espada"
        } else if (this.tipo === "monge"){
            this.tipoAtaque = "artes marciais"
        } else if (this.tipo === "ninja"){
            this.tipoAtaque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${this.tipoAtaque}`);
    }
}

const heroi1 = new Heroi("Gandalf", 1000, "mago");
heroi1.atacar();
