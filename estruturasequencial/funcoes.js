function exe1(){
    //pegar os dados
    let n1= Number(document.getElementById("n1").value)
    let n2= Number(document.getElementById("n2").value)
    //processamento
    let resultado = n1 - n2
    //mostrar
    document.getElementById("resultado").innerHTML = resultado


}

function exe2(){
    let n1= Number(document.getElementById("n1").value)
    let n2= Number(document.getElementById("n2").value)
    let n3= Number(document.getElementById("n3").value)
    //processamento
    let resultado = n1 * n2 * n3
    //mostrar
    document.getElementById("resultado").innerHTML = resultado
}

function exe3(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    if (n2 == 0){
        document.getElementById("resultado").innerHTML = "Impossivel dividir por zero"
    }
    else{
        let resultado = n1/n2
        document.getElementById("resultado").innerHTML = resultado
    }
}

function exe20(){
    let angulo = Number (document.getElementById("angulo").value)
    let distancia = Number(document.getElementById("distancia").value)

    let hipotenusa = distancia / Math.cos(angulo)

    document.getElementById("resultado").innerHTML = hipotenusa
}

function exe15(){
    let salario = Number (document.getElementById("salario").value)
    let conta1 = Number (document.getElementById("conta1").value)
    let conta2 = Number (document.getElementById("conta2").value)

    let multa1 = conta1 * (2/100)
    let multa2 = conta2 * (2/100)

    resultado = salario - (conta1 + multa1) - (conta2 + multa2)
    document.getElementById("resultado").innerHTML = resultado
}

function exe5(){
    let preco = Number (document.getElementById("preco").value)

    resultado = preco - (preco * (10/100))
    document.getElementById("resultado").innerHTML = `O novo preço do produto é: ${resultado.toFixed(2)} R$` 
}

 function exe13() {
    let num = Number (document.getElementById("num").value);
    let resultado = document.getElementById("resultado");
      var tabuada='';
  
      for(let count=1; count<=10 ; count++)
      tabuada += num+" x "+count+" = "+
        num*count+"<br />";
  
      resultado.innerHTML = tabuada;
    }
    
function exe14(){
    let anon = Number (document.getElementById("anon").value)
    let anoa = Number (document.getElementById("anoa").value)

    idadeano = anoa - anon
    idademes = idadeano * 12
    idadedias = idademes * 30
    idadesemana = idadedias / 7 

    document.getElementById("resultado").innerHTML = `A sua idade em anos é ${idadeano}<br> A sua idade em meses é ${idademes}<br> A sua idade em dias é ${idadedias}<br> A sua idade em semanas é${idadesemana.toFixed(2)}`

}    
function exe04(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)

    resultado= ((2 * n1) + (3 * n2)) / (2+3)

    document.getElementById("resultado").innerHTML= `A sua média ponderdada é ${resultado}`

}