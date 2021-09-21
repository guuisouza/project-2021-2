function exe01(){
    let m = Number(document.getElementById("m").value)
    let garagens = Number(document.getElementById("garagens").value)
    let andar = Number(document.getElementById("andar").value)
    let pos = String(document.getElementById("pos").value)

    if ((m < 80) && (garagens == 1)){
        valorbase = 300000
    }
    else if ((m < 80) && (garagens == 2)){
        valorbase = 320000
    }
    else if ((m < 80) && (garagens == 3)){
        valorbase = 340000
    }
    else if (((m > 80) && (m < 120)) &&  (garagens == 1)){
        valorbase = 400000
    }
    else if (((m > 80) && (m < 120)) &&  (garagens == 2)){
        valorbase = 420000
    }
    else if (((m > 80) && (m < 120)) &&  (garagens == 3)){
        valorbase = 440000
    }
    else if ((m> 120) &&  (garagens == 1)){
        valorbase = 500000
    }
    else if ((m> 120) &&  (garagens == 2)){
        valorbase = 520000
    }
    else if ((m> 120) &&  (garagens == 3)){
        valorbase = 540000
    }

    if (andar == 1){
        acrescimo = valorbase + 10000
    }
    else if (andar == 2){
        acrescimo = valorbase + 20000
    }
    else if (andar == 3){
        acrescimo = valorbase + 30000
    }

    if (pos == "M") {
        acrescimoporc = 5 * (valorbase/100)
    } 
    else if (pos == "T"){
        acrescimoporc = 8 * (valorbase/100)
    }

    total = acrescimo + acrescimoporc
    document.getElementById("resultado").innerHTML = `O valor total do apartamento é ${total}`
}

function exe02(){
    let cod 
    let cont1 = 0
    let cont2 = 0
    let cont3 = 0
    let cont4 = 0
    let cont5 = 0
    let cont01 
    let cont02
    let cont03 
    let cont04 
    let cont05 
   
    do{
        cod = Number(prompt(`1. Entregas apenas pelo teams \n2. Entregas apenas em papel \n3. Entregas apenas pelo WhatsApp \n4. Entregas apenas por email \n5. Tanto faz \n0. Encerra o programa`))
        switch (cod){
            case 1: cont1 = cont1 + 1
                break
            case 2: cont2 = cont2 + 1
                break
            case 3: cont3 = cont3 + 1
                break
            case 4: cont4 = cont4 + 1
                break
            case 5: cont5 = cont5 + 1  
                break
            case 0: alert(`Encerrando o programa`)
                break       
            default : alert(`Entrada inválida`)
        }   
    }
    while (cod != 0)
    cont01 = `Teams:${cont1} `
    cont02 = `Papel:${cont2} `
    cont03 = `WhatsApp:${cont3} `
    cont04 = `Email:${cont4} `
    cont05 = `Tantofaz:${cont5} `
    let ordem = [
        cont01, cont02, cont03, cont04, cont05    ];
        ordem.sort((a, b) => b - a);
        
    


    total = cont1 + cont2 + cont3 + cont4 + cont5
    porc = (100 * (cont5/total))

    alert(`Quantidade de votos para Teams = ${cont1} \nQuantidade de votos para Papel = ${cont2} \nQuantidade de votos para WhatsApp = ${cont3} \nQuantidade de votos para Email = ${cont4} \nQuantidade de votos para Tanto Faz = ${cont5}`)
    alert(`Porcentagem de pessoas que votaram na opção 'Tanto Faz' = ${porc.toFixed(2)}%`)
    alert (`Ordem decrescente ${ordem}`)
}