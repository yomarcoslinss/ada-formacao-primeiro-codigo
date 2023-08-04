const reciboDeVenda =
    "régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;";

const listaDaVenda = [
    {
        produto: "Nome do produto formatado", 
        valor: 99,
        cupom: 4, 
        quantidade: 1,
    },
];

const  formataVenda = (venda) => {
    let dividirProduto = venda.split(";");

    for (let i = 0; i < dividirProduto.length; i++) {
        if (dividirProduto[i]) {
            let produto = dividirProduto[i].split("/")[0];            
            produto = produto[0].toUpperCase() + produto.slice(1);

            let valor = Number(
                dividirProduto[i].split("valor")[1].split("=")[0]
            );

            let cupom = Number(dividirProduto[i].split("cupom")[1]);

            let quantidade = 1;

            const itemExistente = listaDaVenda.find((item) => item.produto === produto);

            if (itemExistente) {

                itemExistente.quantidade++;
                itemExistente.valor += valor;

            } else {
                listaDaVenda.push({
                    produto: produto,
                    valor: valor,
                    cupom: cupom,
                    quantidade: quantidade,
                });
            }
        }
    }

    let valorTotal = 0, valorTotalDesconto = 0, quantidadeDeProdutos = 0;
    const totais = {};

    listaDaVenda.forEach((venda) => {
        let valorComDesconto = venda.valor - (venda.valor / 100) * venda.cupom;

        valorTotal += venda.valor;
        valorTotalDesconto += valorComDesconto;
        quantidadeDeProdutos += venda.quantidade;

        totais.valorTotal = valorTotal;
        totais.valorTotalDesconto = valorTotalDesconto;
        totais.quantidadeDeProdutos = quantidadeDeProdutos;
    });

    listaDaVenda.push(totais);
}

formataVenda(reciboDeVenda);
console.table(listaDaVenda);