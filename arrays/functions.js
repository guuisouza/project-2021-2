function exe0(){
    let vet =[]
    let soma = 0
    for (i=0; i<10;i++){
        vet[i] = Number(prompt(`Informe a nota ${i+1}`)) 
    }

    for (i=0;i<10;i++){
        soma = soma + vet[i]
    }
    alert(`A média é ${(soma/10).toFixed(2)}`)
}

function exe1(){
    // declarar os vetores
    let vetor = []
    let impares = []
    let pares = []
    // entrada de dados
    for(let i=0;i<6;i++){
        vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }
    // alimentar os vetores pares e impares
    // para não precisarmos controle o índice dos vetores destinos, usamos push()
    // push() já sabe a primeira posição vazia do vetor
    for(let i=0;i<6;i++){
        if (vetor[i] % 2 == 0) {
            // elemento par
            pares.push(vetor[i])            
        }
        else {
            // elemento ímpar
            impares.push(vetor[i])       
        }
    }
    console.log(`Elementos pares ${pares} e qtde ${pares.length}`)
    console.log(`Elementos ímpares ${impares} e qtde ${impares.length}`)
}
function exe2(){
    let vet = []
    let m2 = []
    let m3 = []
    let m2m3 = []

    for(let i=0; i<7;i++){
        vet[i] = Number(prompt(`Digite o ${i}° número`))
    }

    for(let i=0; i<7;i++){
        if (vet[i] % 2 == 0){
            m2.push(vet[i])
        }
        if (vet[i] % 3 == 0){
            m3.push(vet[i])
        }
        if ((vet[i] % 2 == 0) && (vet[i] % 3 == 0))
            m2m3.push(vet[i])
    }
    alert(`Múltiplos de 2: ${m2} `)
    alert(`Múltiplos de 3: ${m3} `)
    alert(`Múltiplos de 2 e 3: ${m2m3} `)
}
function exe3(){
    let vetCodigos = []
    let vetEstoque = []

    for (i=0;i<10;i++){
        vetCodigos[i] = Number(prompt(`Informe o código do produto ${i+1}`))
        vetEstoque[i] = Number(prompt(`Informe o estoque do produto ${i+1}`))
    }
    let cliente = Number(prompt(`Informe o código do cliente`))
    do{
        let codigoCompra = Number(`Informe o código do produto para a compra`)
        //verifica se achou
        let achou = false //ela é false quando nao encontra o produto, e true qnd encontrou
        
        for(let i=0;i<10;i++){
            if(codigoCompra == vetCodigos[i])
            achou = true
            //atualiza o estoque
            let qtdeCompra = Number(prompt(`Informe a quantidade da compra`))
            if (vetEstoque[i] - qtdeCompra >=0){//tem estoque suficiente
                vetEstoque[i] = vetEstoque[i] - qtdeCompra
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
    alert (`Estoque atualizado ${vetEstoque}`)
}
function exe4(){
    let vetor = new Array(15) //vetor com tamanho estático - fixado
    let vetorR = []

    for (let i=0; i<15;i++){
        vetor[i] = Number(prompt(`Informe o valor do elemento ${i+1}`))
    }
    //construi o vetor resultante
    for (let i=0;i<15;i++){
        if(vetor[i]==30){
            vetorR.push(i)//adicionamos a posição
        }
    }
    alert(`As posições de elementos igual a 30 é ${vetorR}`)
}
function exe5(){

    let vetLogica = new Array(15)
    let vetLp = new Array(10)
    let interseccao = []

    // entrada de dados
    for(let i=0;i<15;i++){
        vetLogica[i] = Number(prompt(`Informe código de matrícula do aluno que faz Lógica`))
    }
     // entrada de dados
     for(let i=0;i<10;i++){
        vetLp[i] = Number(prompt(`Informe código de matrícula do aluno que faz Linguagem de Programação`))
    }

    // intersecção
    for(let i=0;i<15;i++){ // percorre o vetor de lógica
        for(let j=0;j<10;j++){// percorre o vetor de linguagem de programação
            if (vetLogica[i] == vetLp[j]){
                interseccao.push(vetLogica[i])
            }
        } 
    }
    alert(`Alunos que fazem ambas as disciplinas ${interseccao}`)
}

function exe6() {
    // declaração dos vetores
    let vetNomes = new Array(5) // operador new aloca espaço na memória
    let vetVendas = new Array(5) // operador new aloca espaço na memória
    let vetComissao = new Array(5) // operador new aloca espaço na memória

    for(let i=0;i<5;i++){
        vetNomes[i] = prompt(`Informe o nome do vendedor ${i+1}`)
        vetVendas[i] = Number(prompt(`Informe o total de vendas do vendedor ${i+1}`))
        vetComissao[i] = Number(prompt(`Informe o % de comissão do vendedor ${i+1}`))
    }
    let totalVendas = 0
    let maior = 0
    let nomeMaior = ""
    let menor = 100000
    let nomeMenor = ""
    for(let i=0;i<5;i++){
        let receber = (vetVendas[i] * vetComissao[i]) / 100 // calcular o valor a receber do vendedor
        if (receber > maior){
            maior = receber // atualizar valor maior
            nomeMaior = vetNomes[i]
        }
        if (receber < menor){
            menor = receber // atualizar valor menor
            nomeMenor = vetNomes[i]
        }
        alert(`O vendedor ${vetNomes[i]} vai receber ${receber}`) // mostra o relatório
        totalVendas = totalVendas + vetVendas[i] // calcula o total de vendas
    }

    alert(`O total de vendas foi de ${totalVendas}`)
    alert(`O maior valor a receber é ${maior} do vendedor ${nomeMaior}`)
    alert(`O menor valor a receber é ${menor} do vendedor ${nomeMenor}`)
}
function exe7() {
    let vet = new Array(10)
    let contNeg = 0 //contagem dos números negativos
    let somaPos = 0 //soma dos números positivos

    for(let i = 1; i <= 10; i++) {
        vet[i] = Number(prompt(`Digite o ${i}º número:`))
    }
    for(let i = 1; i <= 10; i++) {
        if (vet[i] >= 0) {
            somaPos += vet[i]
        }
        if(vet[i] < 0) {
            contNeg++
        }
    }
    alert(`A quantidade de números negativos é ${contNeg} e a soma dos números positivos é ${somaPos}`)
}

function exe8() {
    let vetNomes = new Array(7)
    let vetMedia = new Array(7)
    let nomeMenor = []
    let notaMenor = []
    let nomeMaiorMedia 
    let notaExame = 0
    let maiorMedia = 0

    for(let i = 1; i <= 7; i++) {
        vetNomes[i] = prompt(`Digite o nome do ${i}º aluno:`)
        vetMedia[i] = Number(prompt(`Digite a média do ${i}º aluno:`))
    }
    for(let i = 1; i <= 7; i++) {
        if (vetMedia[i] > maiorMedia) {
        maiorMedia = Math.max(vetMedia[i])
        nomeMaiorMedia = vetNomes[i]
    }
}
    alert(`O(a) aluno(a) ${nomeMaiorMedia} obteve a maior média final com ${maiorMedia}!!`)

    for(let i = 1; i <= 7; i++) {
        if (vetMedia[i] < 7) {
            notaMenor.push(vetMedia[i])
            nomeMenor.push(vetNomes[i])
            notaExame == (10 - notaMenor[i])
        }
        alert(`O(a) aluno(a) ${nomeMenor} precisa tirar ${notaExame} no exame! `)
    }  
}

function exe9() {
    let vetProdutos = new Array(4)
    let vetCodigos = new Array(4)
    let vetPrecos = new Array(4)
    let novoPreco = []

    for(let i = 1; i <= 4; i++) {
        vetProdutos[i] = prompt(`Digite o nome do produto:`)
        vetCodigos[i] = Number(prompt(`Digite o código do produto:`))
        vetPrecos[i] = Number(prompt(`Digite o preço do produto:`))
    }
    for(let i = 1; i <= 4; i++) {
        if (vetPrecos[i] > 1000) {
            novoPreco[i] == (vetPrecos[i] * (10 / 100))
        }
        if (vetCodigos[i] % 2 === 0) {
            novoPreco[i] == (vetPrecos[i] * (15 / 100))
        }
        if ((vetCodigos[i] % 2 === 0) && (vetPrecos[i] > 1000)) {
            novoPreco[i] == (vetPrecos[i] * (20 / 100))
        }
        alert(`O produto ${vetProdutos} que custava R$${vetPrecos}, sofreu aumento e foi para R$${novoPreco}.`)
    }
    for(let i = 1; i <= 4; i++) {
        if ((vetPrecos[i] < 1000) && (vetCodigos[i] % 2 !== 0)) {
            alert(`O produto ${vetProdutos} não sofreu alteração no preço!!!`)
        }
    }
}

