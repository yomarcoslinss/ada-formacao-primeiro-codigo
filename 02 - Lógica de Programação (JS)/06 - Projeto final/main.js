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

const cadastrarAluno = ({ nome, sobrenome, email, turma, nascimento, notas, ativo = true}) => {
    if (!nome || !sobrenome || !email || !turma || !nascimento || !notas) {
        throw new Error(
            "Sintaxe inválida! verifique se você inseriu todos os parâmetros necessários para cadastrar um aluno."
        );
    }

    const alunoExistente = alunos.find((aluno) => aluno.email === email);

    const validarNome = () => {
        const regex = /^[a-zA-Z]+$/;

        if (!regex.test(nome) || nome.length > 32 || nome.length < 3) {
            throw new Error("O nome que você informou é inválido!");
        }

        nome = nome.toLowerCase();
        nome = nome[0].toUpperCase() + nome.slice(1);
    };

    const validarSobrenome = () => {
        const regex = /^[a-zA-Z]+$/;

        if (!regex.test(sobrenome) || sobrenome.length > 32) {
            throw new Error("O sobrenome que você informou é inválido!");
        }

        sobrenome = sobrenome.toLowerCase();
        sobrenome = sobrenome[0].toUpperCase() + sobrenome.slice(1);
    };

    const validarEmail = () => {
        const regex = /^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2 ||6}$/;
        if (!regex.test(email)) {
            throw new Error("O email que você informou é inválido!");
        }
    };

    const validarTurma = () => {
        const turmaExistente = turmas.find((t) => turma === t.id);
        const quantidadeAlunosNaTurma = alunos.filter(aluno => aluno.turma === turma).length;

        if (!turmaExistente) {
            throw new Error(`A turma ${turma} não existe!`);
        }

        if(quantidadeAlunosNaTurma === turmaExistente.capacidadeAlunos) {
            throw new Error(`A turma ${turmaExistente.id} já atingiu a capacidade máxima de alunos!`)
        }

        if (isNaN(turma)) {
            throw new Error(
                "O ID da turma é composto somente por números! (0 - 10)"
            );
        }

        
    };

    const validarDataNascimento = () => {
        const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-2])\/(19|20)[0-9]{2}$/;
        const dataAtual = new Date();

        if (!regex.test(nascimento)) {
            throw new Error(
                "A data de nascimento que você ionformou é inválida!"
            );
        }

        const anoNascimento = nascimento.slice(6, 10);

        if(dataAtual.getFullYear() - anoNascimento  <= 16) {
            throw new Error('O aluno precisa ter pelo menos 16 anos!')
        }
    };

    const validarNotas = () => {
        const arrayNotas = notas.split(" ");
        let media = 0;

        for (let i = 0; i < arrayNotas.length; i++) {
            arrayNotas[i] = parseInt(arrayNotas[i]);
            media += arrayNotas[i]

            if (arrayNotas[i] > 10 || arrayNotas[i] < 0) {
                throw new Error("Insira uma nota válida! (0 - 10)");
            }

            if (isNaN(arrayNotas[i])) {
                throw new Error(
                    "Você deve inserir pelo menos uma nota de 0 a 10 (separadas por 1 espaço)"
                );
            }
        }

        if (arrayNotas.length > 5 || arrayNotas.length < 1) {
            throw new Error("Você deve inserir 1 a 5 notas!");
        }

        notas = arrayNotas;
        media = media / notas.length;

        notas.push({media});
    };

    const ehAtivo = () => {
        if (ativo !== true && ativo !== false) {
            throw new Error(
                "O campo [ativo] deve ser preenchido com true ou false (o valor padrão é true)"
            );
        }
    };

    validarNome();
    validarSobrenome();
    validarEmail();
    validarTurma();
    validarDataNascimento();
    validarNotas();
    ehAtivo();

    if (!alunoExistente) {
        alunos.push({
            nome,
            sobrenome,
            email,
            turma,
            nascimento,
            notas,
            ativo,
        });
    } else {
        throw new Error("O aluno já existe! verifique o email informado.");
    }
};

const removerAluno = (email) => {
    const alunoExistente = alunos.find((aluno) => aluno.email === email);

    if (alunoExistente) {
        alunos.splice(alunoExistente, 1);
    } else {
        throw new Error("O aluno não existe! verifique o email informado.");
    }
};

const atualizarAluno = ({aluno, nome, sobrenome, email, turma, nascimento, notas, ativo}) => {
    const alunoExistente = alunos.find((a) => a.email === aluno);


    if (!aluno) {
        throw new Error("Insira um endereço de email para localizar o aluno.");
    }

    if (alunoExistente) {
        if (nome) {
            const validarNome = () => {
                const regex = /^[a-zA-Z]+$/;

                if (!regex.test(nome) || nome.length > 32 || nome.length < 3) {
                    throw new Error("O nome que você informou é inválido!");
                }

                nome = nome.toLowerCase();
                nome = nome[0].toUpperCase() + nome.slice(1);
            };

            validarNome();
            alunoExistente.nome = nome;
        }

        if (sobrenome) {
            const validarSobrenome = () => {
                const regex = /^[a-zA-Z]+$/;

                if (
                    !regex.test(sobrenome) ||
                    sobrenome.length > 32 ||
                    sobrenome.length < 3
                ) {
                    throw new Error(
                        "O sobrenome que você informou é inválido!"
                    );
                }

                sobrenome = sobrenome.toLowerCase();
                sobrenome = sobrenome[0].toUpperCase() + sobrenome.slice(1);
            };

            validarSobrenome();
            alunoExistente.sobrenome = sobrenome;
        }

        if (email) {
            const emailDuplicado = alunos.find(aluno => aluno.email === email);

            if(emailDuplicado) {
                throw new Error('O aluno já existe! verifique o email informado.');
            }

            const validarEmail = () => {
                const regex =
                    /^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2 ||6}$/;
                if (!regex.test(email)) {
                    throw new Error("O email que você informou é inválido!");
                }
            };

            validarEmail();
            alunoExistente.email = email;
        }

        if (turma) {
            const validarTurma = () => {
                const turmaExistente = turmas.find((t) => turma === t.id);

                if (isNaN(turma)) {
                    throw new Error(
                        "O ID da turma é composto somente por números! (0 - 10)"
                    );
                }

                if (!turmaExistente) {
                    throw new Error(`A turma ${turma} não existe!`);
                }
            };

            validarTurma();
            alunoExistente.turma = turma;
        }

        if (nascimento) {
            const validarDataNascimento = () => {
                const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-2])\/(19|20)[0-9]{2}$/;
                const dataAtual = new Date();
        
                if (!regex.test(nascimento)) {
                    throw new Error(
                        "A data de nascimento que você ionformou é inválida!"
                    );
                }
        
                const anoNascimento = nascimento.slice(6, 10);
        
                if(dataAtual.getFullYear() - anoNascimento  <= 16) {
                    throw new Error('O aluno precisa ter pelo menos 16 anos!')
                }
            };

            validarDataNascimento();
            alunoExistente.nascimento = nascimento;
        }

        if (notas) {
            const validarNotas = () => {
                const arrayNotas = notas.split(" ");
                let media = 0;
        
                for (let i = 0; i < arrayNotas.length; i++) {
                    arrayNotas[i] = parseInt(arrayNotas[i]);
                    media += arrayNotas[i]
        
                    if (arrayNotas[i] > 10 || arrayNotas[i] < 0) {
                        throw new Error("Insira uma nota válida! (0 - 10)");
                    }
        
                    if (isNaN(arrayNotas[i])) {
                        throw new Error(
                            "Você deve inserir pelo menos uma nota de 0 a 10 (separadas por 1 espaço)"
                        );
                    }
                }
        
                if (arrayNotas.length > 5 || arrayNotas.length < 1) {
                    throw new Error("Você deve inserir 1 a 5 notas!");
                }
        
                notas = arrayNotas;
                media = media / notas.length;
        
                notas.push({media});
            };

            validarNotas();
            alunoExistente.notas = notas;
        }

        if (ativo) {
            const ehAtivo = () => {
                if (ativo !== true && ativo !== false) {
                    throw new Error(
                        "O campo [ativo] deve ser preenchido com true ou false (o valor padrão é true)"
                    );
                }
            };

            ehAtivo();
            alunoExistente.ativo = ativo;
        }
    } else {
        throw new Error("O aluno não existe! verifique o email informado.");
    }

};

const buscarAluno = (email) => {
    const alunoExistente = alunos.find((aluno) => aluno.email === email);

    if (alunoExistente) {
        console.log(JSON.stringify(alunoExistente));
        return alunoExistente;
    } else {
        throw new Error("O aluno não existe! verifique o email informado.");
    }
};

const listarAlunos = () => {
    return alunos;
};

const totalTurmas = () => {
    return `Quantidade total de turmas na escola: ${turmas.length}`;
};

const calcularMedia = (aluno) => {
    const alunoExistente = alunos.find((a) => a.email === aluno);

    if (alunoExistente) {
        let notas = alunoExistente.notas,
            total = 0;

        notas.forEach((nota) => {
            total += nota;
        });

        return total / notas.length;
    } else {
        throw new Error('O aluno não existe! verifique o email informado.');
    }
};

const desativarAluno = (aluno) => {
    const alunoExistente = alunos.find((a) => a.email === aluno);

    if(alunoExistente) {
        if(alunoExistente.ativo === false) {
            throw new Error('Erro! O aluno já está inativo.')
        }

        alunoExistente.ativo = false;
    } else {
        throw new Error('O aluno não existe! verifique o email informado.');
    }
}

const listarAlunosAtivos = () => {
    const alunosAtivos = alunos.filter(aluno => aluno.ativo === true );

    if(alunosAtivos.length === 0){
        throw new Error('Nenhum resultado encontrado!');
    }

    return alunosAtivos;
}

const listarAlunosInativos = () => {
    const alunosInativos = alunos.filter(aluno => aluno.ativo === false);
    
    if(alunosInativos.length === 0){
        throw new Error('Nenhum resultado encontrado!');
    }

    return alunosInativos;
}

const listarAlunosComMediaEsperada = () => {
    const alunosComMediaEsperada = alunos.filter(aluno => aluno.notas[aluno.notas.length - 1].media >= 6);

    if(alunosComMediaEsperada) {
        return alunosComMediaEsperada
    } else {
        throw new Error('Nenhum resultado encontrado!');
    }
}

const listarAlunosAbaixoDaMediaEsperada = () => {
    const alunosAbaixoDaMediaEsperada = alunos.filter(aluno => aluno.notas[aluno.notas.length - 1].media < 6);

    if(alunosAbaixoDaMediaEsperada) {
        return alunosAbaixoDaMediaEsperada;
    } else {
        throw new Error('Nenhum resultado encontrado!');
    }
}


const retornaMediaAlunos = () => {
    let arrayAlunos = [];

    alunos.forEach(aluno => {
        arrayAlunos.push({
            'Nome': aluno.nome,
            'Email': aluno.email,
            'Media': aluno.notas[aluno.notas.length - 1].media
        });
    });

    return arrayAlunos;
}

const gerarRelatorio = () => {
    const mediaAlunos = retornaMediaAlunos();

    return {
        'Quantidade de Alunos': alunos.length,
        'Quantidade de Turmas': turmas.length,
        'Alunos com a média esperada': listarAlunosComMediaEsperada(),
        'Alunos abaixo da média esperada': listarAlunosAbaixoDaMediaEsperada(),
        'Média dos alunos': mediaAlunos 
        }
};



cadastrarTurma({ id: 10, capacidadeAlunos: 10 });
cadastrarTurma({ id: 9, capacidadeAlunos: 5 });
cadastrarTurma({ id: 4, capacidadeAlunos: 5 });


cadastrarAluno({
    nome: "Marcos",
    sobrenome: "Santos",
    email: "vinicius.gzm0@gmail.com",
    turma: 10,
    nascimento: "08/12/2002",
    notas: "10 10 0 0",
});

cadastrarAluno({
    nome: "Biroliro",
    sobrenome: "Pereira",
    email: "vinicius.gzm1@gmail.com",
    turma: 9,
    nascimento: "08/12/2002",
    notas: "5 5 3 7",
});

cadastrarAluno({
    nome: "Vinicius",
    sobrenome: "Barbosa",
    email: "vinicius.gzm2@gmail.com",
    turma: 10,
    nascimento: "08/12/2002",
    notas: "10 10 10 10",
});

cadastrarAluno({
    nome: "Maicon",
    sobrenome: "Kuster",
    email: "vinicius.gzm3@gmail.com",
    turma: 4,
    nascimento: "08/12/2002",
    notas: "7 4 8 9",
});