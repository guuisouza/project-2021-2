function principal2(){ // exercicio 02
    let op
    let vetor = []
    let matriz = []
    
    do {
        op = Number(prompt(`
            1. Cadastrar Carros
            2. Verificar média de notas de cada carro (Informe marca e modelo junto)
            3. Verificar Carro com menor nota em cada avaliaçao
            4. Verificar qual das cinco avaliações teve menor média
            5. Sair
        `))
        switch(op){
            case 1: cadastraCarro(vetor, matriz)
                    break
            case 2: calculaMediaCarros(vetor, matriz)
                    break
            case 3: calculaMenorNota(vetor, matriz)
                    break
            case 4: calculaMenorMedia(matriz)
                    break
            default: alert(`Opção Inválida`)                                    
        }
    }
    while(op!=5)
}

function cadastraCarro(vetor, matriz){
    for(let i=0;i<4;i++){
        let object = {
            marca: prompt(`Informe a marca do ${i+1}° carro`),
            modelo: Number(prompt(`Informe o número do modelo`)),
            ano: Number(prompt(`Informe o ano do carro`)),
            valor: Number(prompt(`Informe o valor do carro`)),
            mediaNotas: 0
        }
        matriz[i] = []
        vetor[i] = object
        
        for (let j=0; j<5; j++){
            matriz[i][j] = Number(prompt(`Digite a ${j+1}° nota do carro ${vetor[i].marca}`))
        }
    }
}
function calculaMediaCarros(vetor, matriz){
    for (let i=0;i<4;i++){
        let soma = 0
        for (let j=0;j<5;j++){
            soma = soma + matriz[i][j]
        }
        alert(`A média de notas do carro ${vetor[i].marca} do modelo ${vetor[i].modelo} é de ${soma/5}`)
        vetor[i].mediaNotas = soma/5
    }
}
function calculaMenorNota(vetor, matriz){
    for (let j=0;j<5;j++){
        let menorNota = 10
        for(let i=0;i<4;i++){
            if(matriz[i][j] < menorNota){
                menorNota = matriz[i][j]
            }
        }
    }
    for (let j=0;j<5;j++){
        alert(`O modelo de carro com a menor nota na avaliação ${j+1} é o modelo ${vetor[i].modelo}`)
    }    
}
function calculaMenorMedia(matriz){
    for (let j=0;j<5;j++){
        let soma = 0
        let menorNotaAvaliacao = 10
        for(let i=0;i<4;i++){
            soma = soma + matriz[i][j]
        }
        media = soma/4 
        if(media < menorNotaAvaliacao){
            menorNotaAvaliacao = media
        }
    }
}

//-----------------------------------------------------------------------------------------------------

function principal1(){ // exerc 01
    var pessoa = [];
    var imovel = [];

    const menu = `Escolha uma das opções:
    1- Cadastrar pessoa
    2- Cadastrar imóvel
    3- Valor total imóveis
    4- Imóvel mais caro
    5- Sair
    `;

    let sair = true;
    while (sair){
        let opcao = prompt(menu);

        switch (opcao) {
            case '1':
                pessoa.push(o1());
                break;
            case '2':
                imovel.push(o2());
                break;
            case '3':
                o3();
                break;
            case '4':
                o4();
                break;
            case '5':
                sair = false;
                break;
            case '6':
                console.log(pessoa);
                console.log(imovel);
                alert(`Pessoas ${pessoa} \nImoveis ${imovel}`);
                break;
            default:
                alert('Opção invalida, tente novamente!');
                break;
        };
    };

    function o1(){
        let nome = prompt("Cadastro de pessoa\nDigite o nome: ");
        let rg = prompt("Cadastro de pessoa\nDigite o RG: ");
        let cpf = prompt("Cadastro de pessoa\nDigite o CPF: ");

        return {nome, rg, cpf};
    };

    function o2(){
        let rg = ''
        let codigo = prompt("Cadastro de imóvel\nDigite o codigo: ");
        let endereco = prompt("Cadastro de imóvel\nDigite o endereço do imovel: ");
        let tamanho = prompt("Cadastro de imóvel\nDigite o tamanho: ");
        let tipo = prompt("Cadastro de imóvel\nDigite o tipo do imovel: ");
        let valor = Number(prompt("Cadastro de imóvel\nDigite o valor do imovel: "));

        let rgInvalido = true

        while(rgInvalido){
            rg = prompt("Cadastro de imóvel\nDigite o RG do dono: ");


            pessoa.map(p => {
                if (rg == p.rg){
                    rgInvalido = false;
                };
            });

            if(rgInvalido){
                alert('RG invalido! Coloque um RG valido!');
            }
            
        }

        return {codigo, endereco, tamanho, tipo, valor, rg}; // retornar valores..
    };

    function o3(){
        let rg = prompt("Consulta de imóveis\nInforme o RG: ");
        let total = 0
        let nome = 'RG não encontrado'


        pessoa.map(p => {
            if(p.rg == rg){
                nome = p.nome
            }
        });

        imovel.map(i => {
            if(i.rg == rg){
                total += i.valor
            }
        });

        alert(`O usuário(a): ${nome} tem o valor total de: ${total}
        `)
    };

    function o4(){
        let caro = 0
        let rg = ''
        let nome = ''

        imovel.map(i => {
            if(i.valor > caro){
                caro = i.valor
                rg = i.rg
            }
        })

        pessoa.map(p => {
            if(p.rg == rg){
                nome = p.nome
            }
        });

        alert(`Valor do imóvel mais caro: ${caro}\nNome do proprietario: ${nome}`)
    };
}