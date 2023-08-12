const btnCadastrarAluno = document.getElementById('btnCadastrarAluno');
const tabelaAlunos = document.getElementById('tabelaAlunos');

const aluno = {} // Abra o console para verificar os alunos sendo adicionados :)

const capturaValor = (id) => {
    const dom = document.getElementById(`${id}`);
    return dom.value;
}


btnCadastrarAluno.onclick = function(e) {
    e.preventDefault();
    const formNomeAluno = capturaValor('formNomeAluno');
    const formTurmaAluno = capturaValor('formTurmaAluno');
    const formNotasAluno = capturaValor('formNotasAluno');

    aluno['Nome'] = formNomeAluno;
    aluno['Turma'] = formTurmaAluno;
    aluno['Notas'] = formNotasAluno;

    tabelaAlunos.innerHTML += `
    <tr> 
        <td>${aluno.Nome}</td>
        <td>${aluno.Turma}</td>
        <td>${aluno.Notas}</td>
    </tr>
    `
}