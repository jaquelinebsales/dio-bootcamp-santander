
public class SmartTv {
    boolean ligada = false;
    int canal = 1;
    int volume = 10;

    public void mudarStatus(){
        ligada = !(ligada);
    }
    
    public void aumentarVolume(){
        volume++;
        System.out.println("Aumentando o volume para: ", volume);
    }

    public void diminuirVolume(){
        volume--;
        System.out.println("Diminuindo o volume para: ", volume);
    }

    public void mudarCanal(int novoCanal){
        canal = novoCanal;
    }
}