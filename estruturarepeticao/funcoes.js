function exe0(){
let contador = 1
let soma = 0
while (contador <=10){
    let preco = Number(prompt("Digite o preço de 10 produtos"))
    soma = soma + preco
    contador = contador + 1
}
media = soma / 10
alert(`A média dos 10 produtos digitado é ${media}`)
}

function exe3(){
    let i = 1
    let cont1 = 0
    let cont2 = 0
    let cont3 = 0
    let cont4 = 0
    let cont5 = 0
    let idade

    while(i<=8){
        idade = Number(prompt(`Digite a idade ${i}`))

        if (idade<15){
            cont1 = cont1+1
        }       
        else if ((idade>16) && (idade<30)) {
            cont2 = cont2 + 1 
        }
        else if ((idade>31) && (idade<45)) {
            cont3 = cont3 + 1 
        }
        else if ((idade>46) && (idade<60)) {
            cont4 = cont4 + 1 
        }
        else {
            cont5 = cont5 + 1
        }
        i = i+ 1
    }
    alert(`Faixa 1 = ${cont1} Faixa 2 = ${cont2} Faixa 3 = ${cont3} Faixa 4 = ${cont4} Faixa 5 = ${cont5}`)
    alert(`Porcentual da faixa1 ${cont1/8*100} Porcentual da faixa5 ${cont5/8*100}`)
}
function exe4(){
    let cod 
    let contador = 1
    somap = 0
    somav = 0

    while (contador<=5){
        cod = prompt(`Digite o ${contador}° código V para compra a Vista e P para compra a prazo`).toUpperCase()
        valor = Number(prompt(`Digite o valor da ${contador}° transação`))

        contador = contador+1
        switch(cod){
            case 'P': somap += valor
                    break
            case 'V': somav += valor
                break
            default: alert(`Forma de pagamento invalido`)
        }
        alert(`Total a vista ${somav.toFixed(2)} Total a prazo ${somap.toFixed(2)} Total geral ${somap + somav.toFixed(2)}`)
        alert(`Primeira parcela do valor a prazo ${(somap/3).toFixed(2)}`)
    }
}  

function exe23(){
    let opcao
    do {    
        opcao = Number(prompt(`Digite \n1. Novo salário \n2. Férias \n3. Décimo terceiro \n4. Sair`))
        switch(opcao){
            case 1: 
                    let salario = Number(prompt(`Informe o salário`))
                    let novoSalario
                    if (salario < 210){
                        novoSalario = salario + (15*salario)/100
                    }
                    else if (salario <= 600){
                        novoSalario = salario + (10*salario)/100
                    }
                    else {
                        novoSalario = salario + (5*salario)/100
                    }
                    alert(`O novo salário é de ${novoSalario}`)
                    break
            case 2: salario = Number(prompt(`Informe o salário`))
                    alert(`As férias serão ${salario + salario / 3}`)
                    break
            case 3: salario = Number(prompt(`Informe o salário`))
                    let meses = Number(prompt(`Informe qts meses foram trabalhados`))
                    alert(`Décimo terceiro ${salario * meses / 12}`)
                    break
            case 4: alert(`O programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 4)
}
function exe1(){
    let a, b, c, d, aux
    a = Number(prompt(`Digite o primeiro número`))
    b = Number(prompt(`Digite o segundo número`))
    c = Number(prompt(`Digite o terceiro número`))
    d = Number(prompt(`Digite o quarto número`))

    for (let cont=1;cont<=3;cont++){
        if (a>b){
            aux = a
            a = b
            b = aux
        }
        if (b>c){
            aux = b
            b = c
            c = aux
        }
        if (c>d){
            aux = c
            c = d
            d = aux
        }
    }
    alert (`Ordem crescente ${a}, ${b}, ${c}, ${d}`)
    alert (`Ordem decrescente ${d}, ${c}, ${b}, ${a}`)
}
function exe2(){
    let qtde = 120
    let lucro
    let resultado = ""
    let maiorlucro = 0

    for (let ingresso= 5.0; ingresso>=1.0; ingresso = ingresso - 0.50){
        lucro = (ingresso * qtde) - 200
        resultado = resultado + (` \nCom o ingresso valendo ${ingresso}, vendendo ${qtde}, o lucro será de ${lucro}`) + "\n"
        qtde = qtde + 26
        
        if (lucro > maiorlucro) {
            maiorlucro = lucro  
        }
    }
    resultado = resultado + (`\n O maior lucro é de ${maiorlucro}`)
    alert(resultado)
}
function exe21(){
    let cont1 = 0
    let cont2 = 0
    let cont3 = 0
    let cont4 = 0
    let cont5 = 0
    let cont6 = 0
    do {
        opcao = Number(prompt(`Digite \n1. Candidato 1 \n2. Candidato 2 \n3. Candidato 3 \n4. Candidato 4 \n5. Voto nulo \n6.Voto em branco \n0. Sair`))
        switch (opcao){
        case 1:
            cont1 = cont1 + 1
            break
        case 2:
            cont2 = cont2 + 1
            break    
        case 3:
            cont3 = cont3 + 1
            break  
        case 4:
            cont4 = cont4 + 1
            break       
        case 5:
            cont5 = cont5 + 1
            break
        case 6: 
            cont6 = cont6 + 1   
            break 
        case 0:
            alert(`Encerrando as votações`)
            break
        default: 
            alert(`Opção Inválida!`)
        }
    }
    while(opcao != 0)
    let totalvotos = cont1 + cont2 + cont3 + cont4 + cont5 + cont6 

    alert(`Qtd votos candt 1: ${cont1}\nQtd votos candt 2: ${cont2}\nQtd votos candt 3: ${cont3}\nQtd votos candt 4: ${cont4}\nQtd votos nulos: ${cont5}\nQtd votos brancos: ${cont6}`)
    alert(`Porcentagem votos nulos ${(cont5/totalvotos*100).toFixed(2)}%\nPorcentagem votos brancos ${(cont6 / totalvotos * 100).toFixed(2)}%`)
}