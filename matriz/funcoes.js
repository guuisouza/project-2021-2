function principal(){
    let vetor = []
    let matriz = []
    entradaDados(matriz, vetor)
    calculaMediaAlunos(matriz, vetor)
    calculaMediaBimestre(matriz)
}

function entradaDados(matriz, vetor){
    for (let i=0; i<4;i++){ //para cada aluno
        let object = {
            ra: Number(prompt(`Digite o R.A do aluno`)),
            nome: prompt(`Digite o nome do aluno`),
            media: 0
        }
        matriz[i] = []
        vetor[i] = object

        for (let j=0; j<4;j++){
            matriz[i][j] = Number(prompt(`Digite a nota do bimestre ${j+1}`))
        }
    }   
}

function calculaMediaAlunos(matriz, vetor){
    for(let i=0;i<4;i++){
        let soma = 0
        for(let j=0;j<4;j++){
            soma = soma + matriz[i][j] 
        }
        alert(`A média do aluno ${vetor[i].nome} é ${soma/4}`)
        vetor[i].media = soma/4
    }
}
function calculaMediaBimestre(matriz){
    for(let j=0;j<4;j++){
        let soma = 0
        for(let i=0;i<4;i++){
            soma = soma + matriz[i][j]
        }
        alert(`A média do bimestre ${j+1} é ${soma/4}`)
    }
}

function principal2(){
    let vetor = []
    let matriz = []
    entradaDados(vetor, matriz)
    totalSoma(vetor, matriz)
}
function entradaDados(vetor, matriz){
    for(i=0; i<4;i++){
        let object = {
            codigo: Number(prompt(`Informe o código do carro`)),
            marca: prompt(`Informe a marca do carro`),
            modelo: Number(prompt(`Digite o modelo do carro`)),
            soma: 0
        }
        matriz[i] = []
        vetor[i] = object

        for(let j=0;j<4;j++){
           matriz[i][j] = Number(prompt(`Informe a quantidade de vendas realizadas`)) 
        }
    }
}
function totalSoma(vetor, matriz){
    for (let i=0; i<4;i++){
        for (let j=0;j<4;j++){
            soma = soma + matriz[i][j]
        }
        alert(`O carro ${vetor.codigo} teve uma venda total de ${soma}`)
        vetor[i].totalSoma = soma
    }
}