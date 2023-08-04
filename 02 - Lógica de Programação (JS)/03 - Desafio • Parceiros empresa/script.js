const listaParceiros = [
    { parceirosId: "19660156627897", nome: "Fernanda Santos" },
    { parceirosId: "23998058019370", nome: "Rafael Souza" },
    { parceirosId: "92291338611", nome: "Maria Silva" },
    { parceirosId: "55443795656", nome: "Maria Souza" },
    { parceirosId: "77743761456", nome: "Ana Costa" },
    { parceirosId: "47202302326", nome: "Maria Ferreira" },
    { parceirosId: "58017232567", nome: "Sofia Costa" },
    { parceirosId: "16733009491247", nome: "Lucas Silva" },
    { parceirosId: "63351859919", nome: "Rafael Souza" },
    { parceirosId: "84297701780", nome: "Carlos Oliveira" },
];

const parceirosAgrupados = {};

const formataLista = (lista) => {
    parceirosAgrupados.PF = [];
    parceirosAgrupados.PJ = [];

    lista.forEach((item) => {
        switch (item.parceirosId.length) {
            case 11:
                parceirosAgrupados.PF.push({
                    parceirosId: item.parceirosId,
                    nome: item.nome,
                });

                break;
            case 14:
                parceirosAgrupados.PJ.push({
                    parceirosId: item.parceirosId,
                    nome: item.nome,
                });

            default:
                break;
        }
    });
};

formataLista(listaParceiros);
console.log(JSON.stringify(parceirosAgrupados));

/*
 *
 *  ## Resultado copiado e colado do console de cima
 *
 * const resultado = {
 *     PF: [
 *         { parceirosId: "92291338611", nome: "Maria Silva" },
 *         { parceirosId: "55443795656", nome: "Maria Souza" },
 *         { parceirosId: "77743761456", nome: "Ana Costa" },
 *         { parceirosId: "47202302326", nome: "Maria Ferreira" },
 *         { parceirosId: "58017232567", nome: "Sofia Costa" },
 *         { parceirosId: "63351859919", nome: "Rafael Souza" },
 *         { parceirosId: "84297701780", nome: "Carlos Oliveira" },
 *     ],
 *     PJ: [
 *         { parceirosId: "19660156627897", nome: "Fernanda Santos" },
 *         { parceirosId: "23998058019370", nome: "Rafael Souza" },
 *         { parceirosId: "16733009491247", nome: "Lucas Silva" },
 *     ],
 * };
 */
