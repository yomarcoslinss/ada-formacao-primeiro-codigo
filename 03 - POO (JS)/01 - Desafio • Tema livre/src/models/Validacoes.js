import Pessoa from "./Pessoa.js";
import Suite from "./Suite.js";

export default class Validacoes {
    validarNome(nome) {
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
        
        if(!nome) {
            throw new Error('Para continuar, insira os parâmetros: Nome, Sobrenome')
        }

        if(!regex.test(nome)) {
            throw new Error("Informe um nome válido!");
        } else {
            nome = nome.toLowerCase();
            nome = nome[0].toUpperCase() + nome.slice(1);

            return nome;
        }
    }

    validarSobrenome(sobrenome) {
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;

        if(!sobrenome) {
            throw new Error('Para continuar, insira o parâmetro: Sobrenome')
        }

        if(!regex.test(sobrenome)) {
            throw new Error("Informe um sobrenome válido!");
        } else {
            sobrenome = sobrenome.toLowerCase();
            sobrenome = sobrenome[0].toUpperCase() + sobrenome.slice(1);

            return sobrenome;
        }
    }

    validarTipoSuite(tipoSuite) {
        switch(tipoSuite) {
            case 'basica':
                console.log('Você escolheu uma suite Básica!')
                break;
            case 'premium':
                console.log('Você escolheu uma suite Premium!')
                break;
            case 'executiva':
                console.log('Você escolheu uma suite Executiva!')
                break;
            case 'spa':
                console.log('Você escolheu uma suite SPA!')
                break;
            default:
                throw new Error('Insira uma suite válida! (basica, premium, executiva ou spa)');
        }

        return tipoSuite;
    }

    validarCapacidadeSuite(capacidadeSuite) {
        if(typeof capacidadeSuite !== "number") {
            throw new Error('Insira uma capacidade válida!')
        }

        if(capacidadeSuite < 1 || capacidadeSuite > 50) {
            throw new Error('Insira uma capacidade válida!')
        }

        return capacidadeSuite;
    }

    validarValorDiaria(valorDiaria) {
        if(typeof valorDiaria !== "number") {
            throw new Error('Insira um valor válido!')
        }

        if(valorDiaria < 1 || valorDiaria > 355000) {
            throw new Error('Insira um valor válido!')
        }

        return valorDiaria;
    }

    validarHospede(hospede) {
        if(hospede instanceof Pessoa) {
            return hospede;
        } else {
            throw new Error("Insira um hospede existente no banco de dados!");
        }
    }

    validarSuite(suite) {
        if(suite instanceof Suite) {
            return suite;
        } else {
            throw new Error("Insira uma suite existente no banco de dados!");
        }
    }
}