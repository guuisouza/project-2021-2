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

    if ((n1 == n2) && (n2 == n3)){
        resultado = `Todos os números são iguais`
    }
    else if ((n1 >n2) && (n1 >n3)){
        resultado = `O maior número é ${n1}`
    }
    else if (n2>n3){
        resultado = `O maior número é ${n2}`
    }
    else {
        resultado = `O maior número é ${n3}`
    }

    document.getElementById("resultado").innerHTML = resultado
}

function exe05(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let opcao = Number(document.getElementById("opcao").value)

    switch(opcao){
        case 1:
            media = (n1 + n2) / 2
            resultado = `A média entre os dois números é ${media}`
                break
        case 2:
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
                break
        case 3:
            produto = n1 * n2
            resultado = `O produto entre os dois números é ${produto}`
                break
        case 4:
            if (n2 !=0){
                divisao = n1/n2
                resultado = `A divisão entre os dois números é ${divisao}`
            }
            else {
                resultado = "Impossível dividir por 0"
            }
                break
        default: resultado = "Opcão inválida" 
    }
    document.getElementById("resultado").innerHTML= resultado
}

function exe06(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let op = Number(document.getElementById("op").value)
    let potencia
    let raizq1
    let raizq2
    let raizc1
    let raizc2

    if (op == 1){
        potencia = n1**n2
        resultado = `A potência entre os dois números é ${potencia}`
    }
    else if (op==2){
        raizq1 = Math.sqrt(n1)
        raizq2 = Math.sqrt(n2)
        resultado = `A raiz quadrada dos números são reespectivamente ${raizq1} e ${raizq2}`
    }

    else if (op==3){
        raizc1 = Math.cbrt(n1)
        raizc2 = Math.cbrt(n2)
        resultado = `A raiz quadrada dos números são reespectivamente ${raizc1} e ${raizc2}`
    }
    document.getElementById("resultado").innerHTML = resultado 
}

function exe07(){
    let salario = Number(document.getElementById("salario").value)
    let aumento
    let novosal

    if (salario<500){
        aumento = salario * (30/100)
        novosal = salario + aumento
        resultado = `O seu novo salário com o aumento será R$${novosal.toFixed(2)}`
    }
    else{
        resultado = `Você não tem direito a aumento por ter salário maior que R$500,00`
    }
    document.getElementById("resultado").innerHTML= resultado
}

function exe08(){
    let salario = Number(document.getElementById("salario").value)
    let aumento
    let novosal

    if (salario<300){
        aumento = salario * (35/100)
        novosal = salario + aumento
        resultado = `O seu novo salário com o aumento de 35% será R$${novosal.toFixed(2)}`
    }
    else if (salario>300){
        aumento = salario * (15/100)
        novosal = salario + aumento
        resultado = `O seu novo salário com o aumento de 15% será R$${novosal.toFixed(2)}`
    }
    document.getElementById("resultado").innerHTML= resultado
}
function exe09(){
    let saldo = Number(document.getElementById("saldo").value)
    let credito

    if (saldo>400){
        credito = saldo * (30/100)
        resultado = `O seu saldo médio é R$${saldo} e seu crédito é de R$${credito.toFixed(2)}`
    }
    else if ((saldo <= 400) && (saldo >300)){
        credito = saldo * (25/100)
        resultado = `O seu saldo médio é R$${saldo} e seu crédito é de R$${credito.toFixed(2)}`
    }
    else if ((saldo <= 300) && (saldo >200)){
        credito = saldo * (20/100)
        resultado = `O seu saldo médio é R$${saldo} e seu crédito é de R$${credito.toFixed(2)}`
    }
    else if (saldo<=200){
        credito = saldo * (10/100)
        resultado = `O seu saldo médio é R$${saldo} e seu crédito é de R$${credito.toFixed(2)}`
    }
    document.getElementById("resultado").innerHTML= resultado
}
function exe10(){
    let preco_fabrica = Number(document.getElementById("preco_fabrica").value)
    let distribuidor
    let impostos
    let preco_final

    if (preco_fabrica<12000) {
        distribuidor = preco_fabrica * (5/100)
        preco_final = preco_fabrica + distribuidor
        resultado = `O preço do carro será de R$${preco_final.toFixed(2)}`  
    }
    else if ((preco_fabrica>12000) && (preco_fabrica <25000)){
        distribuidor = preco_fabrica * (10/100)
        impostos = preco_fabrica * (15/100)
        preco_final = preco_fabrica + impostos + distribuidor
        resultado = `O preço do carro será de R$${preco_final.toFixed(2)}` 
    }
    else if (preco_fabrica > 25000){
        distribuidor = preco_fabrica * (15/100)
        impostos = preco_fabrica * (20/100)
        preco_final = preco_fabrica + impostos + distribuidor
        resultado = `O preço do carro será de R$${preco_final.toFixed(2)}` 
    }
    document.getElementById("resultado").innerHTML = resultado 
}