function exe1(){
    let op
    let vetorCadastro = []
    let vetorVendas = []
    do {
        op = Number(prompt(` 
            1. Cadastrar Vendedor
            2. Cadastrar Venda
            3. Consultar vendas de um funcionário em determinado mês
            4. Consultar o total das vendas de determinado vendedor
            5. Mostrar o número do vendedor que mais vendeu em determinado mês
            6. Mostrar o número do mês com mais vendas 
            7. Finalizar
        `))
        switch(op){
            case 1: 
                let object = {
                    codigoCadastro: prompt(`Digite o código do vendedor a ser cadastrado`),
                    nomeCadastro: (prompt(`Digite o nome do usuário a ser cadastrado`))
                }
                let achou1 = false
                for (let i=0;i<vetorCadastro.length;i++){
                    if (vetorCadastro[i].codigoCadastro == object.codigoCadastro){
                        achou1 = true
                        }
                    if (achou1){
                        alert(`Já foi encontrado um vendedor cadastrado com esse código`)
                    }
                    else {
                        vetorCadastro.push(object)
                        alert(`Cadastro realizado com sucesso`)
                    }
                }
                break
            case 2:
                let object2 = {
                    codigoVendedor: prompt(`Informe o código do vendedor para registrar a venda`),
                    valor: Number(prompt(`Informe o valor da venda feita pelo vendedor`)),
                    mes: Number(prompt(`Infome o mês que foi feita a venda`)),
                }

                let achou22 = false 
                for (let i=0;i<vetorCadastro.length;i++){
                    if(vetorCadastro[i].codigoCadastro == object2.codigoVendedor){
                        achou22 = true
                    }
                }       
                if (achou22 = false){
                    alert(`Esse usuário ainda não foi cadastrado`)
                }
                else {
                    let achou2 = false
                    for (let i=0;i<vetorVendas.length;i++){
                        if((vetorVendas[i].codigoVendedor == object2.codigoVendedor) && (vetorVendas[i].mes == object2.mes)){
                            achou2 = true
                            }    
                        if(achou2){
                            alert(`Já existe uma venda desse vendedor nesse mês`)
                        }
                        else{
                            vetorVendas.push(object2)
                            alert(`Venda cadastrada com sucesso`)
                        }
                    }
                }    
                break
            case 3:
                let codigoInteresse = prompt(`Informe o código do vendedor a ser consultado`)
                let mesInteresse = Number(prompt(`Digite o mês a ser consultado`))
                
                let achou3 = false
                for(let i=0;i<vetorVendas.length;i++){
                    if((vetorVendas[i].codigoVendedor == codigoInteresse) && (vetorVendas[i].mes == mesInteresse)){
                        achou3 = true
                        alert(`O valor de vendas do vendedor ${codigoInteresse} no mês ${mesInteresse} foi de ${vetorVendas[i].valor}`)
                    }
                    else{
                        alert(`Vendedor não encontrado`)
                    }
                }
                break
            case 4:
                let codigoInteresse2 = prompt(`Informe o código do vendedor a ser consultado`)
                let achou4 = false
                let soma = 0
                for(let i=0;i<vetorVendas.length;i++){
                    if(vetorVendas[i].codigoVendedor == codigoInteresse2){
                        soma = soma + vetorVendas[i].valor
                        achou4 = true
                    }
                    if(!achou4){
                        alert(`Vendedor não encontrado`)
                    }
                    else{
                        alert(`O vendedor realizou no total ${soma} vendas`)
                    }
                }
                break    
            case 5: 
                let mesInteresse2 = Number(prompt(`Informe o mês de venda que deseja consultar`))
                let achou5 = false
                let maisvendeu = ""
                let maiorvenda = 0

                for(let i=0;i<vetorVendas.length;i++){
                    if(vetorVendas[i].mes = mesInteresse2){
                    achou5 = true
                        if(vetorVendas[i].valor > maiorvenda){
                            maiorvenda = vetorVendas[i].valor
                            maisvendeu = vetorVendas[i].codigoVendedor
                        }
                    }
                    if(achou5){
                        alert(`A maior venda no mês ${mesInteresse2} foi de ${maiorvenda} pelo ${maisvendeu}`)
                    }
                    else{
                        alert(`Não foram encontradas vendas nesse mês`)
                    }
                }
                break
            case 6:
                let mesesMaiorvenda = [0,0,0,0,0,0,0,0,0,0,0,0]
                for(let i=0;i<vetorVendas.length;i++){
                    let posicao = vetorVendas[i].mes - 1
                    mesesMaiorvenda[posicao] = vetorVendas[i].valor
                }
                let maiorvendames = 0
                let mesmaiorvenda = 0
                for(let i=0;i<vetorVendas.length;i++){
                    if(mesesMaiorvenda[i] > maiorvendames){
                        maiorvendames = mesesMaiorvenda[i]
                        mesmaiorvenda = i +1
                    }
                }
                alert(`O mês com maior venda foi o mês ${mesmaiorvenda} com um total de ${maiorvendames} vendas.`)
                break
            case 7: 
                alert(`Encerrando o programa`)
                break
            default: alert(`Opção inválida`)
        }
    }
    while (op != 7)
}
function exe2(){
    let vetor = new Array (5)
    for (i=0;i<5;i++){
        let object = {
            idade: Number(prompt(`Digite sua idade`)),
            salario: Number(prompt(`Digite seu salário`)),
            filhos: Number(prompt(`Digite a sua quantidade de filhos`)),
            genero: Number(prompt(`Digite seu Gênero: 1 para Masculino e 2 para Feminino`)),
        }
        vetor[i] = object
    }
    let somaSal = 0
    let mediaSal = 0
    let somaFil = 0
    let mediaFil = 0
    let maiorSal = 0
    let contMulheres = 0
    for (i=0;i<5;i++){
        somaSal = somaSal + vetor[i].salario
        mediaSal = somaSal / 5

        somaFil = somaFil + vetor[i].filhos
        mediaFil = somaFil / 5

        if (vetor[i].salario > maiorSal){
            maiorSal = vetor[i].salario
        }
        if ((vetor[i].genero == 2) && (vetor[i].salario > 1000)){
            contMulheres = contMulheres + 1
            percM = (contMulheres *  100) / 5
        }
    }
    alert (` A média de salário da população é ${mediaSal}\n A média do número de filhos ${mediaFil}\n O maior salário ${maiorSal}\n Percentual de mulheres com mais de 1000 de salário${percM}%`)
}
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
function exe08(){
    let vetor = new Array (4)

    for (i=0;i<4;i++){
        let object = {
            nomeEstado: prompt(`Digite o nome do Estado`),
            numCircularam2012: Number(prompt(`Digite o número de veículos que circularam nesse estado em 2012`)),
            numAcidentes2012: Number(prompt(`Digite o número de acidentes quee ocorreram em 2012`))
        }
        vetor[i] = object
    }
    maiorInd = 0
    nomeMaiorInd = ""
    nomeMenorInd = ""
    menorInd = 5000000
    
    for (i=0;i<4;i++){
        if (vetor[i].numAcidentes2012 < menorInd){
            menorInd = vetor[i].numAcidentes2012
            nomeMenorInd = vetor[i].nomeEstado
        }
        if (vetor[i].numAcidentes2012 > maiorInd){
            maiorInd = vetor[i].numAcidentes2012
            nomeMaiorInd = vetor[i].nomeEstado
        }
    }
    alert (`O estado com maior indice é  ${nomeMaiorInd} com ${maiorInd} acidentes e
    o estado com menor indice é ${nomeMenorInd} com ${menorInd} acidentes`)
}