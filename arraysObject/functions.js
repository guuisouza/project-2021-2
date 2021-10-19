function exe3(){
    let vetor = new Array (10)

    for (i=0;i<10;i++){
        let object = {
            codigo: Number(prompt(`Informe o código do produto ${i+1}`)),
            estoque: Number(prompt(`Informe o estoque do produto ${i+1}`)),
        }
        vetor[i] = object
    }
    let cliente = Number(prompt(`Informe o código do cliente`))
    do{
        let codigoCompra = Number(`Informe o código do produto para a compra`)
        //verifica se achou
        let achou = false //ela é false quando nao encontra o produto, e true qnd encontrou
        
        for(let i=0;i<10;i++){
            if(codigoCompra == vetor[i].codigo)
            achou = true
            //atualiza o estoque
            let qtdeCompra = Number(prompt(`Informe a quantidade da compra`))
            if (vetor[i].estoque - qtdeCompra >=0){//tem estoque suficiente
                vetor[i].estoque = vetor[i].estoque - qtdeCompra
            }
            else{
                alert(`Qtde em estoque é insuficiente`)
            }
        }
        if(!achou){
            alert(`Produto não comprado para venda`)
        }
        cliente = Number(prompt(`Informe o novo código do cliente. Digite 0 para encerrar`))
    }
    while(cliente!=0)
    for (i=0;i<10;i++){
        alert(`Código do produto ${vetor[i].codigo} tem estoque ${vetor[i].estoque}`)
    }
}

function exe6(){
    let vetor = new Array (5)

    for (i=1;i<5;i++){
        let object = {
            nome: prompt(`Informe o nome do vendedor ${i+1}`),
            vendas: Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)),
            comissao: Number(prompt(`Informe o % de comissão do vendedor ${i+1}`)),
        }
        vetor[i] = object
    }
    let totalVendas = 0
    let maior = 0
    let nomeMaior = ""
    let menor = 100000
    let nomeMenor = ""

    for(let i=0;i<5;i++){
        let receber = (vetor[i].vendas * vetor[i].comissao) / 100 // calcular o valor a receber do vendedor
        if (receber > maior){
            maior = receber // atualizar valor maior
            nomeMaior = vetor[i].nome
        }
        if (receber < menor){
            menor = receber // atualizar valor menor
            nomeMenor = vetor[i].nome
        }
        alert(`O vendedor ${vetor[i].nome} vai receber ${receber}`) // mostra o relatório
        totalVendas = totalVendas + vetor[i].vendas // calcula o total de vendas
    }
    alert(`O total de vendas foi de ${totalVendas}`)
    alert(`O maior valor a receber é ${maior} do vendedor ${nomeMaior}`)
    alert(`O menor valor a receber é ${menor} do vendedor ${nomeMenor}`)
}

function exe8(){
    let vetor = new Array(7)
    for(let i=0;i<7;i++){
        let objeto = {
            nome: prompt(`Informe o nome do aluno ${i+1}`),
            media: Number(prompt(`Informe a média do aluno ${i+1}`))
        }
        vetor[i] = objeto
    }
    // assume que o primeiro aluno tem a maior média
    let nomeMaiorMedia = vetor[0].nome
    let maiorMedia = vetor[0].media
    for(let i=0;i<7;i++){ // percorre o vetor
        if (vetor[i].media > maiorMedia){
            maiorMedia = vetor[i].media
            nomeMaiorMedia = vetor[i].nome
        }
        if (vetor[i].media < 7){
            alert(`O aluno ${vetor[i].nome} está de exame e precisa tirar ${10 - vetor[i].media}` )
        }
    }
    alert(`Nome do aluno com maior média ${nomeMaiorMedia} com média ${maiorMedia}`)
}

function exe9() {
    let vetor = new Array (4)
    let novoPreco = []

    for(let i = 1; i <= 4; i++) {
        let object = {
            produto: prompt(`Digite o nome do produto:`),
            codigo: Number(prompt(`Digite o código do produto:`)),
            preco: Number(prompt(`Digite o preço do produto:`)),
        }
        vetor[i] = object
    }
    for(let i = 1; i <= 4; i++) {
        if (vetor[i].preco > 1000) {
            vetor[i].novoPreco == (vetor[i].preco * (10 / 100))
        }
        if (vetor[i].codigo % 2 == 0) {
            vetor[i].novoPreco == (vetor[i].preco * (15 / 100))
        }
        if ((vetor[i].codigo % 2 == 0) && (vetor[i].preco > 1000)) {
            vetor[i].novoPreco == (vetor[i].preco * (20 / 100))
        }
        else {
         vetor[i].novo = -1 // indica que não teve aumento
        }
    }
    for(let i = 1; i <= 4; i++) {
        if (vetor[i].novoPreco != -1) {
            alert(`O produto ${vetor[i].produto} que custava R$${vetor[i].preco}, sofreu aumento e foi para R$${vetor[i].novoPreco}.`)
        }
    }
}

