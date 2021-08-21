function exe01(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if(media >=7){
        document.getElementById("resultado").innerHTML = `A média é ${media} está aprovado`
    }
    else{
        document.getElementById("resultado").innerHTML = `A média é ${media} está reprovado`
    }
}
function exe02(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

    let media = (nota1 + nota2) / 2

    if ((media >= 0) && (media<3)){
        resultado = `Aluno reprovado com média ${media}`
    }
    else if ((media >= 3 ) && (media<7)){
        resultado = `Aluno em Exame com média ${media}`
    }
    else if ((media>=7) && (media <=10)){
        resultado = `Aluno aprovado com média ${media}`
    }
    else {
        resultado = `Notas inválidas`
    }
    document.getElementById("resultado").innerHTML = resultado

}

function exe03(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    if (n1 > n2){
        resultado = `O menor número é ${n2}`
    }
    else if (n2>n1){
        resultado = `O menor número é ${n1}`
    }
    else{
        resultado = `Os números são IGUAIS`
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe04(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)

    if ((n1>n2) && (n1>n3)){
        resultado = `O maior número é ${n1}`
    }
    else if ((n2>n1) && (n2>n3)){
        resultado = `O maior número é ${n2}`
    }
    else if ((n3>n1) && (n3>n2)){
        resultado = `O maior número é ${n3}`
    }
    else{
        resultado="Números Iguais"
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe05(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let op = Number(document.getElementById("op").value)

    if(op == 1){
        media = (n1 + n2) / 2
        resultado = `A média entre os dois números é ${media}`
    }
    else if (op == 2){
        if (n1>n2){
            maior = n1
            menor = n2
        }
        else{
            maior = n2
            menor = n1
        }
        subtracao = maior - menor
        resultado = `A diferença do maior para o menor é ${subtracao}`
    }
    else if (op == 3){
        produto = n1 * n2
        resultado = `O produto entre os dois números é ${produto}`
    }
    else if (op == 4){
        divisao = n1 / n2
        resultado = `A divisão do primeiro número pelo segundo é ${divisao.toFixed(2)}`
        if (n2 == 0){
        resultado = `Não é possível dividir por 0`
        }
    }
    document.getElementById("resultado").innerHTML= resultado
}