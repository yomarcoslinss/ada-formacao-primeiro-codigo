const turmas = [],
    alunos = [];

const cadastrarTurma = ({ id, capacidadeAlunos }) => {
    id = parseInt(id);
    capacidadeAlunos = parseInt(capacidadeAlunos);

    const turmaExistente = turmas.find((turma) => turma.id === id);

    if (isNaN(id)) {
        throw new Error("O código da turma deve possuir somente números!");
    }

    if (!id || !capacidadeAlunos) {
        throw new Error(`
            Para cadastrar uma turma, use a seguinte sintaxe:

            cadastrarTurma({id, capacidadeAlunos})

            OBS: O código da turma deve ser um número inteiro de 1 a 10!
            OBS: A turma deve possuir no mínimo cinco, e no máximo dez alunos!
            `);
    }

    if (id < 1 || id > 10) {
        throw new Error(
            "O código da turma deve ser um número inteiro de 1 a 10!"
        );
    }

    if (capacidadeAlunos < 5 || capacidadeAlunos > 10) {
        throw new Error(
            "A turma deve possuir no mínimo cinco, e no máximo dez alunos!"
        );
    }

    if (!turmaExistente) {
        turmas.push({
            id,
            capacidadeAlunos,
        });
    } else {
        throw new Error(`A turma ${id} já existe! Insira outro ID.`);
    }

};

const cadastrarAluno = ({nome, sobrenome, email, turma, nascimento, notas, ativo = true}) => {

    if(!nome || !sobrenome || !email || !turma || !nascimento || !notas) {
        throw new Error('Sintaxe inválida! verifique se você inseriu todos os parâmetros necessários para cadastrar um aluno.')
    }

    const alunoExistente = alunos.find(aluno => aluno.email === email);

    const validarNome = () => {
        const regex = /^[a-zA-Z]+$/;

        if(!regex.test(nome) || nome.length > 32 || nome.length < 3) {
            throw new Error('O nome que você informou é inválido!')
        }

        nome = nome.toLowerCase();
        nome = nome[0].toUpperCase() + nome.slice(1);
    }

    const validarSobrenome = () => {
        const regex = /^[a-zA-Z]+$/;

        if(!regex.test(sobrenome) || sobrenome.length > 32) {
            throw new Error('O sobrenome que você informou é inválido!')
        }

        sobrenome = sobrenome.toLowerCase();
        sobrenome = sobrenome[0].toUpperCase() + sobrenome.slice(1);
    }

    const validarEmail = () => {
        const regex = /^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2 ||6}$/;
        if (!regex.test(email)) {
            throw new Error("O email que você informou é inválido!");
        }
    }

    const validarTurma = () => {
        const turmaExistente = turmas.find(t => turma === t.id );

        if(isNaN(turma)) {
            throw new Error('O ID da turma é composto somente por números! (0 - 10)');
        }

        if(!turmaExistente) {
            throw new Error(`A turma ${turma} não existe!`);
        }
    }

    const validarDataNascimento = () => {
        const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-2])\/(19|20)[0-9]{2}$/;
        if(!regex.test(nascimento)) {
            throw new Error('A data de nascimento que você ionformou é inválida!');   
        }
    }

    const validarNotas = () => {
        const arrayNotas = notas.split(' ');

        for(let i = 0; i < arrayNotas.length; i++) {
            
            arrayNotas[i] = parseInt(arrayNotas[i]);
            
            if(arrayNotas[i] > 10 || arrayNotas[i] < 0) {
                throw new Error('Insira uma nota válida! (0 - 10)')
            }

            if(isNaN(arrayNotas[i])) {
                throw new Error('Você deve inserir pelo menos uma nota de 0 a 10 (separadas por 1 espaço)')
            }
        }

        if(arrayNotas.length > 5 || arrayNotas.length < 1) {
            throw new Error('Você deve inserir 1 a 5 notas!')
        }

        notas = arrayNotas;
    }

    const ehAtivo = () => {
        if(ativo !== true && ativo !== false) {
            throw new Error('O campo [ativo] deve ser preenchido com true ou false (o valor padrão é true)');
        }
    }
    
    validarNome();
    validarSobrenome();
    validarEmail();
    validarTurma();
    validarDataNascimento();
    validarNotas();
    ehAtivo();

    if(!alunoExistente) {
        alunos.push({
            nome,
            sobrenome,
            email,
            turma,
            nascimento,
            notas,
            ativo
        })
    } else {
        throw new Error('O aluno já existe! verifique o email informado.');
    }
};

const removerAluno = (email) => {
    const alunoExistente = alunos.find(aluno => aluno.email === email);

    if(alunoExistente) {
        alunos.splice(alunoExistente, 1);
    } else {
        throw new Error('O aluno não existe! verifique o email informado.');
    }
}

const atualizarAluno = ({email, nome, sobrenome, email}) => {
    const alunoExistente = alunos.find(aluno => aluno.email === email);

    if(alunoExistente) {

        if(nome) {
            const validarNome = () => {
                const regex = /^[a-zA-Z]+$/;
        
                if(!regex.test(nome) || nome.length > 32 || nome.length < 3) {
                    throw new Error('O nome que você informou é inválido!')
                }
        
                nome = nome.toLowerCase();
                nome = nome[0].toUpperCase() + nome.slice(1);
            }

            validarNome();
            alunoExistente.nome = nome;
        }

        if(sobrenome) {
            const validarSobrenome = () => {
                const regex = /^[a-zA-Z]+$/;
        
                if(!regex.test(sobrenome) || sobrenome.length > 32 || sobrenome.length < 3) {
                    throw new Error('O sobrenome que você informou é inválido!')
                }
        
                sobrenome = sobrenome.toLowerCase();
                sobrenome = sobrenome[0].toUpperCase() + sobrenome.slice(1);
            }

            validarSobrenome();
            alunoExistente.sobrenome = sobrenome;
        }

        if(email) {
            const validarEmail = () => {
                const regex = /^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2 ||6}$/;
                if (!regex.test(email)) {
                    throw new Error("O email que você informou é inválido!");
                }
            }

            validarEmail();
            alunoExistente.email = email;
        }

        /*
        #
        #
        #   CONTINUAR AQUI !!!!!!!!!!!!
        #
        #
        */

    } else {
        throw new Error('O aluno não existe! verifique o email informado.');
    }
}

const buscarAluno = (email) => {
    const alunoExistente = alunos.find(aluno => aluno.email === email);

    if(alunoExistente) {
        console.log(JSON.stringify(alunoExistente));
        return alunoExistente;
    } else {
        throw new Error('O aluno não existe! verifique o email informado.');
    }
}

cadastrarTurma({id: 10, capacidadeAlunos: 10})
cadastrarAluno({nome: 'Marcos', sobrenome: 'Vinicius', email: 'vinicius.gzm0@gmail.com', turma: 10, nascimento: '08/12/2002', notas: '10 10 10 9'})