class Prisma {
    constructor(lados) {
        this.lados = lados;
        this.perimetro = this.calcularPerimetro();
    }

    calcularPerimetro() {
        return this.lados.reduce((acc, lado) => acc + lado, 0);
    }
}

class Triangulo extends Prisma {
    constructor(lados) {
        if(lados.length !== 3) {
            throw new Error("Um triangulo precisa ter 3 lados");
        }
        super(lados)
    }

    calcularArea() {
        const area = this.lados[0] * this.lados[1] / 2;
        return area;
    }
}

class Retangulo extends Prisma {
    constructor(lados) {
        if(lados.length !== 4) {
            throw new Error("Um retângulo precisa ter 3 lados");
        }
        super(lados)
    }

    calcularArea() {
        const area = this.lados[0] * this.lados[1];
        return area;
    }
}

class Quadrado extends Retangulo {
    constructor(lados) {
        if(lados.some(lado => lado !== lados[0])) {
            throw new Error("Um quadrado precisa ter 4 lados iguais");
        }
        super(lados)
    }
}

class Pentagono extends Prisma {
    constructor(lados) {
        if(lados.length !== 5) {
            throw new Error("Um pentagono precisa ter 5 lados");
        }
        super(lados)
    }

    calcularArea() {
        throw new Error("Não é possível calcular a área de um pentagono")
    }
}

const meuRetangulo = new Retangulo ([10, 5, 5, 10])
const meuTriangulo = new Triangulo ([10, 5, 5, 10])

console.log(meuRetangulo.calcularArea());
console.log(meuTriangulo.calcularArea());