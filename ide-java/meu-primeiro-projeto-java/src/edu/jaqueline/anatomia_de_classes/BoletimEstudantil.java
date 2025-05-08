package edu.jaqueline.anatomia_de_classes;
public class BoletimEstudantil{

    public static void main(String[] args) {
        int mediaFinal = 3;

        if (mediaFinal >= 6){
            System.out.println("APROVADO");
        }else if (mediaFinal < 6){
            System.out.println("REPROVADO");
        }
    }
}