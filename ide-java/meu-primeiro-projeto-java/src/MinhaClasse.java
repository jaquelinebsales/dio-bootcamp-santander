public class MinhaClasse {

    public static void main (String [] args){
        System.out.print("Olá mundo");

        String primeiroNome = "Jaqueline";
        String segundoNome = "Sales";

        String nomeCompleto = nomeCompleto(primeiroNome, segundoNome);
        System.out.println(nomeCompleto);
    }

    public static String nomeCompleto (String primeiroNome, String segundoNome){
        return "Resultdo do método:" + primeiroNome.concat(" ").concat(segundoNome);
        
    }
}
