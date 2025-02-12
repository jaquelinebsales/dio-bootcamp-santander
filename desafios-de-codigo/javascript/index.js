const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

const valorImposto = calcularImposto(valorSalario);

const saida = valorSalario + valorBeneficios;

print(saida.toFixed(2))

function calcularImposto(salario){
    let aliquota;
    if(salario >= 0 && salario <=1100){
        aliquota = 0.05;
    }else if(salario >= 0 && salario <=1100){
        aliquota = 0.10;
    }else{
        aliquota = 0.15;
    }
    return aliquota * salario;

}