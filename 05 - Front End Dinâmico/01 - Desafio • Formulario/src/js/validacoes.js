export class Validacoes {
    static validarNome = (nome) => {
        try {
            const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

            if (!nome) {
                throw new Error('O nome não pode estar em branco!');
            }

            if (!regex.test(nome)) {
                throw new Error('Insira um nome válido!');
            }

            if(nome.length > 150) {
                throw new Error('Insira um nome válido!');
            }

            nome = nome.trim();
        } catch (err) {
            alert(err.message);
            throw err
        }
    };

    static validarIdade = (idade) => {
        idade = parseInt(idade);

        try {

            if(!idade) {
                throw new Error('A idade não pode estar em branco!');
            }

            if (isNaN(idade)) {
                throw new Error('A idade não é um número válido!');
            }

            if (idade < 8 || idade > 100) {
                throw new Error('Insira uma idade válida!');
            }
        } catch (err) {
            alert(err.message);
            throw err
        }
    }

    static validarCrime = (crime) => {
        try {
            if(!crime) {
                throw new Error('Você deve informar o crime desse criminoso');
            }

            if(crime.length < 5) {
                throw new Error('Insira um crime válido!');
            }
        } catch(err) {
            alert(err.message)
            throw err;
        }
    }

    static validarDataCrime = (data) => {
        try {
            const dataAtual = new Date();
            const dataCrime = new Date(data);
            console.log(typeof dataCrime);

            if (isNaN(dataCrime.getTime())) {
                throw new Error('Insira uma data de crime válida!');
            }

            const diferencaEmMilissegundos = dataAtual - dataCrime;
            const anosDiferenca = diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25);

            if (anosDiferenca > 100 || anosDiferenca < 0) {
                throw new Error('A data do crime deve estar dentro de 100 anos a partir da data atual!');
            }
        } catch (err) {
            alert(err.message);
            throw err;
        }
    }

    static validarRecompensa = (recompensa) => {
        recompensa = parseInt(recompensa);

        try {
            if (isNaN(recompensa)) {
                throw new Error('Insira uma recompensa válida!');
            }

            if(recompensa < 20) {
                throw new Error('O valor mínimo da recompensa é de $20');
            }
        } catch(err) {
            alert(err.message);
            throw err;
        }
    }

    static validarVivoOuMorto = (estado) => {

        estado = parseInt(estado);

        if(estado === 1) {
            return "Somente vivo";
        } else {
            return "Vivo ou morto";
        }
    }
}
