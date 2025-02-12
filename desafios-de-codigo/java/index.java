import java.util.Scanner;

public class Desafio {
    public static void main(String[] args){
        Scanner leitorDeEntradas = new Scanner(System.in);
        float valorSalario = leitorDeEntradas.nextFloat();
        float valorBeneficios = leitorDeEntrada.nextFloat();

        float valorImposto = 0;
        if(valorSlario >= 0 && valorSalario <= 1100){
            valorImposto = 0.05F * valorSalario;
        } else if(valorSalario >= 1100.01 && valorSalario <= 2500){
            valorImposto = 0.10F * valorSalario;
        } else if(valorSalario > 2500){
            valorImposto = 0.15F * valorSalario;
        } else {
            System.out.println("Valor de salário inválido");
        }

        float saida = valorSalario - valorImposto + valorBeneficios;
        System.out.println(String.format("%.2f", saida));
    }
}