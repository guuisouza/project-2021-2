function case1(vetorCadastro){
    let object = {
        codigoCadastro: prompt(`Digite o código do vendedor a ser cadastrado`),
        nomeCadastro: (prompt(`Digite o nome do usuário a ser cadastrado`))
    }
    let achou = false
    for (let i=0;i<vetorCadastro.length;i++){
        if (vetorCadastro[i].codigoCadastro == object.codigoCadastro){
            achou = true
        }
    }        
    if (achou){
        alert(`Já foi encontrado um vendedor cadastrado com esse código`)
    }
    else {
        vetorCadastro.push(object)
        alert(`Cadastro realizado com sucesso`)
    }
}
function case2(vetorCadastro, vetorVendas){
    let object = {
        codigoVendedor: prompt(`Informe o código do vendedor para registrar a venda`),
        valor: Number(prompt(`Informe o valor da venda feita pelo vendedor`)),
        mes: Number(prompt(`Infome o mês que foi feita a venda`))
    }
    let achou = false 
    for (let i=0;i<vetorCadastro.length;i++){
        if(vetorCadastro[i].codigoCadastro == object.codigoVendedor){
            achou = true
        }
    }       
    if (!achou){
        alert(`Esse usuário ainda não foi cadastrado`)
    }
    else {
        achou = false
        for (let i=0;i<vetorVendas.length;i++){
            if((vetorVendas[i].codigoVendedor == object.codigoVendedor) && (vetorVendas[i].mes == object.mes)){
               achou = true
            }
        }        
        if(achou){
            alert(`Já existe uma venda desse vendedor nesse mês`)
        }
        else{
            vetorVendas.push(object)
            alert(`Venda cadastrada com sucesso`)
        }
    }    
}
function case3(vetorVendas, codigoInteresse, mesInteresse){                
    let achou = false
    for(let i=0;i<vetorVendas.length;i++){
        if((vetorVendas[i].codigoVendedor == codigoInteresse) && (vetorVendas[i].mes == mesInteresse)){
            alert(`O valor de vendas do vendedor ${codigoInteresse} no mês ${mesInteresse} foi de ${vetorVendas[i].valor}`)
            achou = true
        }
    }    
    if (!achou){
        alert(`Vendedor não encontrado`)
    }
}
function case4(vetorVendas, codInteresse){
    let achou = false
    let soma = 0
    for(let i=0;i<vetorVendas.length;i++){
        if((vetorVendas[i].codigoVendedor == codInteresse)){
            soma = soma + vetorVendas[i].valor
            achou = true
        }
    }    
    if(!achou){
        alert(`Vendedor não encontrado`)
    }
    else{
        alert(`O vendedor realizou no total ${soma} vendas`)
    }
}
function case5(vetorVendas, mesInteresse2){
    let achou = false
    let maisvendeu = ""
    let maiorvenda = 0

    for(let i=0;i<vetorVendas.length;i++){
        if(vetorVendas[i].mes = mesInteresse2){
           achou = true
            if(vetorVendas[i].valor > maiorvenda){
                maiorvenda = vetorVendas[i].valor
                maisvendeu = vetorVendas[i].codigoVendedor
            }
        }
    }    
    if(achou){
        alert(`A maior venda no mês ${mesInteresse2} foi de ${maiorvenda} pelo ${maisvendeu}`)
    }
    else{
        alert(`Não foram encontradas vendas nesse mês`)
    }
}
function case6(vetorVendas){
    let mesesMaiorvenda = [0,0,0,0,0,0,0,0,0,0,0,0]
    for(let i=0;i<vetorVendas.length;i++){
        let posicao = vetorVendas[i].mes - 1
        mesesMaiorvenda[posicao] = mesesMaiorvenda[posicao] + vetorVendas[i].valor
    }
    let maiorvendames = 0
    let mesmaiorvenda = 0
    for(let i=0;i<mesesMaiorvenda.length;i++){
        if(mesesMaiorvenda[i] > maiorvendames){
            maiorvendames = mesesMaiorvenda[i]
            mesmaiorvenda = i +1
        }
    }
    alert(`O mês ${mesmaiorvenda} teve a maior venda de ${maiorvendames}`)
}

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
            case 1: case1(vetorCadastro)
                    break
            case 2: case2(vetorCadastro, vetorVendas)
                    break
            case 3: let codigoInteresse = prompt(`Informe o código do vendedor a ser consultado`)
                    let mesInteresse = Number(prompt(`Digite o mês a ser consultado`))
                    case3(vetorVendas, codigoInteresse, mesInteresse)
                    break
            case 4: let codigoInteresse2 = prompt(`Informe o código do vendedor a ser consultado`)
                    case4(vetorVendas,codigoInteresse2)
                    break    
            case 5: let mesInteresse2 = Number(prompt(`Informe o mês de venda que deseja consultar`))
                    case5(vetorVendas, mesInteresse2)    
                    break
            case 6: case6(vetorVendas)
                    break
            case 7: 
                alert(`Encerrando o programa`)
                break
            default: alert(`Opção inválida`)
        }
    }
    while (op != 7)
}