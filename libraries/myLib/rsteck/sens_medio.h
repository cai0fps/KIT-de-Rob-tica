#include <EV3UARTSensor.h>
#include <SoftwareSerial.h>
#include <BricktronicsMegashield.h>

EV3UARTSensor sens_cor(BricktronicsMegashield::SENSOR_5);
EV3UARTSensor sens_ultra(BricktronicsMegashield::SENSOR_6);


//String COR [9] = {"Sem cor", "Preto", "Azul", "Verde", "Amarelo", "Vermelho", "Branco", "Marrom"};

unsigned long lastMessage = 0;
unsigned long lastMessage2 = 0;
unsigned long RES = 0;
boolean um = 0;

long dist = 0;
byte CodigoVermelho = 0;

void atualiza_sens(){
  //sens_cor.listen_sensor();
  sens_cor.check_for_data();
  
  //sens_ultra.listen_sensor();
  sens_ultra.check_for_data();
  //Serial.println("acabou");
}
  
byte getSensorColor(){

  //sens_cor.check_for_data();
  
  sens_cor.listen_sensor();
  
  if (sens_cor.get_status() == DATA_MODE) {     
    if ((sens_cor.get_current_mode() != 2) && (sens_cor.get_type() == 29)) {
        int mode = 2;      
        if (mode >= 0 && mode < sens_cor.get_number_of_modes()) {
          sens_cor.set_mode(mode);
        }}

    float sample[sens_cor.sample_size()];
    sens_cor.fetch_sample(sample, 0);
    if(sens_cor.get_type() == 29){
    for (int i = 0; i < sens_cor.sample_size(); i++) {
      //Serial.println(COR[int(sample[i])]);
      //Serial.println(byte(sample[i]));
      CodigoVermelho = sample[i];
    }}
    
  }
  
  return CodigoVermelho;
}

//-----------------------------------------------------------------
float getSensorUtrasson(){
  

//sens_ultra.check_for_data();

  sens_ultra.listen_sensor();

  if (sens_ultra.get_status() == DATA_MODE) {        

    float sample2[sens_ultra.sample_size()];
    sens_ultra.fetch_sample(sample2, 0);

    if(sens_ultra.get_type() == 30){
    for (int i = 0; i < sens_ultra.sample_size(); i++) {
      //Serial.print("Distancia = ");
      Serial.println(long(sample2[i]));
      dist = sample2[i];
    }}
    
  }

return dist;
}
