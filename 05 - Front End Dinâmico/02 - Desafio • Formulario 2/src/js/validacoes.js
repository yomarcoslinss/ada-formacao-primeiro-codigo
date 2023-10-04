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

    static validarPreco = (preco) => {
        preco = parseFloat(preco);

        try {

            if(!preco) {
                throw new Error('O preço não pode estar em branco!');
            }

            if (isNaN(preco)) {
                throw new Error('A preço não é um número válido!');
            }

            if (preco < 0 || preco > 10000000) {
                throw new Error('Insira uma preço válido!');
            }
        } catch (err) {
            alert(err.message);
            throw err
        }
    };
      
}