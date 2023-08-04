const btnSubmit = document.getElementById("btnSubmit");


const calculaMedia = () => {
    const btnResultado = document.getElementById("btnResultado");

    const campoUmaEstrela = document.getElementById("campoUmaEstrela");
    const campoDuasEstrelas = document.getElementById("campoDuasEstrelas");
    const campoTresEstrelas = document.getElementById("campoTresEstrelas");
    const campoQuatroEstrelas = document.getElementById("campoQuatroEstrelas");
    const campoCincoEstrelas = document.getElementById("campoCincoEstrelas");

    let umaEstrela = Number(campoUmaEstrela.value);
    let duasEstrelas = Number(campoDuasEstrelas.value);
    let tresEstrelas = Number(campoTresEstrelas.value);
    let quatroEstrelas = Number(campoQuatroEstrelas.value);
    let cincoEstrelas = Number(campoCincoEstrelas.value);

    const totalVotos =
        umaEstrela + duasEstrelas +
        tresEstrelas + quatroEstrelas +
        cincoEstrelas;
    console.log(totalVotos)

    const formula = () => {
        let resultado = ((umaEstrela * 1) + (duasEstrelas * 2) + (tresEstrelas * 3) + (quatroEstrelas * 4) + (cincoEstrelas * 5)) / totalVotos;
        return `
        <p> Média: ${resultado.toFixed(1)} &#11088; </p>
        <p> Total de ${totalVotos} avaliações</p>
        `;
    }


    
    btnResultado.innerHTML = formula();
};

btnSubmit.onclick = calculaMedia;
