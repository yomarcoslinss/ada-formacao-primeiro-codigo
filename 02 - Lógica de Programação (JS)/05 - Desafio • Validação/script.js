const btnCadastrarAluno = document.getElementById('btnCadastrarAluno');
const tabelaAlunos = document.getElementById('tabelaAlunos');

const aluno = [] // Abra o console para verificar os alunos sendo adicionados :)

const capturaValor = (id) => {
    const dom = document.getElementById(`${id}`);
    return dom.value;
}


let contador = 0;


btnCadastrarAluno.onclick = function(e) {
    e.preventDefault();
    const formNomeAluno = capturaValor('formNomeAluno');
    const formTurmaAluno = capturaValor('formTurmaAluno');
    const formNotaAluno = capturaValor('formNotaAluno');

    if(!formNomeAluno || !formTurmaAluno || !formNomeAluno) {
        window.alert('Erro! Preencha todos os campos para inserir um aluno a tabela!');
        throw new Error('Erro! Preencha todos os campos para inserir um aluno a tabela!');
    }

    const validarNome = () => {
        const regex = /^[a-zA-Z]+$/;

        if(!regex.test(formNomeAluno) || formNomeAluno.length > 32 || formNomeAluno.length < 3) {
            window.alert('Erro! Insira um nome válido (sem espaços, caracteres especiais e números)');
            throw new Error('Erro! Insira um nome válido (sem espaços, caracteres especiais e números)');
        }
    }

    const validarTurma = () => {
        let turma = parseInt(formTurmaAluno);

        if(isNaN(turma)) {
            window.alert('Insíra uma turma válida! (somente números)');
            throw new Error('Insíra uma turma válida! (somente números)');
        }

        if(turma > 1033 || turma < 0) {
            window.alert('Insíra uma turma válida! (número de 0 a 1033)');
            throw new Error('Insíra uma turma válida! (número de 0 a 1033)');
        }
    }

    const validarNota = () => {
        let nota = parseInt(formNotaAluno);

        const regex = /^(0|1|2|3|4|5|6|7|8|9|10)/;

        if(!regex.test(nota)) {
            window.alert('Insíra uma nota válida! (número de 0 a 10)')
            throw new Error('Insíra uma nota válida! (número de 0 a 10)')
        }

        if(isNaN(nota)) {
            window.alert('Insíra uma nota válida! (somente números)');
            throw new Error('Insíra uma nota válida! (somente números)');
        }

        if(nota > 10 || nota < 0) {
            window.alert('Insíra uma nota válida! (número de 0 a 10)');
            throw new Error('Insíra uma nota válida! (número de 0 a 10)');
        }
    }
    
    validarNome();
    validarTurma();
    validarNota();

    aluno.push({
        'nome': formNomeAluno,
        'turma': formTurmaAluno,
        'nota': formNotaAluno
    })


    tabelaAlunos.innerHTML += `
    <tr> 
        <td>${aluno[contador].nome}</td>
        <td>${aluno[contador].turma}</td>
        <td>${aluno[contador].nota}</td>
    </tr>
    `

    contador++;
}