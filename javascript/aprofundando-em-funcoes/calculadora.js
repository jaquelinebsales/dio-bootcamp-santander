/*function calculadora(){
    const operação = prompt('Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (%)\n 5 - Resto da divisão (/)\n 6 - Potenciação(**)')

    const n1 = Number(prompt('Escolha um número'))
    const n2 = Number(prompt('Escolha outro número'))
    /*let resultado
    var operaçãoValue = Number(operação);

    function somar(){
        alert(`O resultado é ${n1+n2}`)
    }
    function subtrair(){
        alert(`O resultado é ${n1-n2}`)
    }
    function dividirResto(){
        alert(`O resultado é ${n1%n2}`)
    }
    function dividirReal(){
        alert(`O resultado é ${n1/n2}`)
    }
    function potenciacao(){
        alert(`O resultado é ${n1**n2}`)
    }
    function multiplicar(){
        alert(`O resultado é ${n1*n2}`)
    }


    switch(operaçãoValue){
        case 1 :
            somar();
        break;
        case 2 :
            subtrair();
        break;
        case 3 :
            multiplicar();
        break;
        case 4 :
            dividirReal();
        break;
        case 5 :
            dividirResto();
        break;
        case 6 :
            potenciacao();
        break;
    }
}
calculadora()*/

function escopoLocal() { 
    let escopoLocalInterno = 'local'; } 
console.log(escopoLocalInterno);