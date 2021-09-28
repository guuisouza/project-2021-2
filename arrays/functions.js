function exe1(){
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

function exe2(){
    let vet = []
    let par =[]
    let impar = []
    let contpar = 0
    let contimpar = 0
    for (i=0; i<6;i++){
        vet[i] = Number(prompt(`Digite o ${i+1}° número`))

        if (vet[i] % 2 == 0){
            contpar = contpar+1 
        }
        else 
            contimpar = contimpar+1
    }
    //para nao precisarmos controlar o indice dos vetores destinos, usaremos push()
    //push já sabe a primeira posição vazia do vetor
    for(let i = 0; i<6;i++){
        if (vet[i] % 2 == 0){
            par.push(vet[i])
            contpar = contpar+1 
        }
        else 
            impar.push(vet[i])
            contimpar = contimpar+1
    }
    alert(`Quantidades de pares ${contpar}, quantidades de impares ${contimpar}`)
    alert(`Números pares ${par}\n Números impares ${impar}`)
}
function exe3(){
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
