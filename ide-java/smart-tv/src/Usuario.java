public class Usuario {
    public static void main(String[] args) {
        SmartTv smartTv = new SmartTv();

        System.out.println(smartTv.ligada);
        System.out.println(smartTv.canal);
        System.out.println(smartTv.volume);

        smartTv.mudarStatus();
        System.out.println("Novo status: "+ smartTv.ligada);

        smartTv.mudarCanal(10);
    }
}
