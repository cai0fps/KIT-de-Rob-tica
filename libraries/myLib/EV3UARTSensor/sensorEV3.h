#include"variaveis.h"
#include <SoftWire.h>

#include <CorUltra.h>
#include <SoftwareSerial.h>

SoftWire swD(A11, 19);

//medidor de Temperatura.
byte getTemperatureEV3(){
  static byte temperatura[2]={0,0};
  static char swTxBuffer[16];
  static char swRxBuffer[16];


  if(!enableTemp){
    swD.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
    swD.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
    swD.setDelay_us(50);
    swD.setTimeout(100);
    swD.begin();
    enableTemp=true;
  }


  swD.beginTransmission(0x4c); 
  swD.write(0x00); 
  swD.endTransmission();    

  swD.requestFrom(0x4c, 2);    

  for(byte i=0;i<=2;i++){
    if (swD.available()) { temperatura[i] = swD.read();  }  
    else{ 
      temperatura[i] = 0;
    } 
  }
  return temperatura[0];
}

//Função para leitura do Controle Remoto
void updateSensorEV3(){
    sensor5.check_for_data();
    sensor6.check_for_data();
    sensor7.check_for_data();
    sensor8.check_for_data(); 
    sensorA.check_for_data();
    sensorB.check_for_data();
    sensorC.check_for_data();
    sensorD.check_for_data();  
}


byte sensorInfra5(byte mode){
  static bool enableMode = false;
  sensor5.listen_sensor();
  sensor5.check_for_data();
  if(!flag5){sensor5.begin(); flag5=true;}

  if(mode==0){
    if (sensor5.get_status() == DATA_MODE /*&& (millis() - lastMessageEV3) > 150 */) {
      if(!enableMode){
        sensor5.set_mode(0);
        enableMode=true;
      }
      

      float sample[sensor5.sample_size()];
      sensor5.fetch_sample(sample, 0);
      return unsigned(sample[0]);
  //    lastMessageEV3 = millis();
    }
  }else{
     if (sensor5.get_status() == DATA_MODE && sensor5.get_type() == 33/*&& (millis() - lastMessageEV3) > 150 */) {
      if(!enableMode){
        sensor5.set_mode(1);
        enableMode=true;
      }

      float sample[sensor5.sample_size()];
      sensor5.fetch_sample(sample, 0);
      return unsigned(sample[0]);
  //    lastMessageEV3 = millis();
    }   
  }
}

byte sensorDis6(){

  sensor6.listen_sensor();
  sensor6.check_for_data();
  if(!flag6){   for(byte x=0; x<20; x++){sensor6.reset();} sensor6.begin(); flag6=true;}


    if (sensor6.get_status() == DATA_MODE && sensor6.get_type() == 30/*&& (millis() - lastMessageEV3) > 150 */) {
      if(!enableMode){
        sensor6.set_mode(0);
        enableMode=true;
      }
    
      float sample[sensor6.sample_size()];
      sensor6.fetch_sample(sample, 0);
      return unsigned(sample[0])/10;
  //    lastMessageEV3 = millis();
  }
}

byte sensorEV3(byte mode, byte chennel){

  sensor6.listen_sensor();
  sensor6.check_for_data();
  if(!flag6){ sensor6.begin(); flag6=true;}

  if(sensor6.get_type() == 30){
    if (sensor6.get_status() == DATA_MODE/*&& (millis() - lastMessageEV3) > 150 */) {

      float sample[sensor6.sample_size()];
      sensor6.fetch_sample(sample, 0);

      if(!enableMode){
        sensor6.set_mode(0);
        enableMode=true;
      }

      return unsigned(sample[0])/10;
    }
  }else if(sensor6.get_type() == 29){
    if (sensor6.get_status() == DATA_MODE/*&& (millis() - lastMessageEV3) > 150 */) {

      float sample[sensor6.sample_size()];
      sensor6.fetch_sample(sample, 0);

      if(!enableMode){
        sensor6.set_mode(mode);
        enableMode=true;
      }
    

      return unsigned(sample[0]);
    }
  }else if(sensor6.get_type() == 33){
    if (sensor6.get_status() == DATA_MODE/*&& (millis() - lastMessageEV3) > 150 */) {

      float sample[sensor6.sample_size()];
      sensor6.fetch_sample(sample, 0);

      if(!enableMode){
        sensor6.set_mode(mode);
        enableMode=true;
      }
    
      if(mode==2){
        switch(chennel){
          case 1:
          return sample[0];
          break;
          case 2:
          return sample[1];
          break;
          case 3:
          return sample[2];
          break;
          case 4:
          return sample[3];
          break;
        }
      }else{
        return unsigned(sample[0]);
      }
    }
  }

  
}

byte controleRemoto(byte pin,byte chennel){
  updateSensorEV3();
  switch (pin) {
    case P5:
        if(!flag5){sensor5.begin(); flag5=true;}
        if (sensor5.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 300 ) {
          for (int i = 0; i < sensor5.get_number_of_modes(); i++) {
            EV3UARTMode* mode = sensor5.get_mode(i);   
        }

          //Configura para o modo controle remoto
          if ((sensor5.get_current_mode() != 2) && (sensor5.get_type() == 33)) {
              byte mode = 0;     
              if (mode >= 0 && mode < sensor5.get_number_of_modes()) {
                sensor5.set_mode(0);
              }}


        if((sensor5.get_current_mode() == 2)&& (sensor5.get_type() == 33)){
          float sample[sensor5.sample_size()];
          sensor5.fetch_sample(sample, 0);

          for (int i = 0; i < sensor5.sample_size(); i++) {
          }

      
          switch(chennel){
            case 1:
            return sample[0];
            break;
            case 2:
            return sample[1];
            break;
            case 3:
            return sample[2];
            break;
            case 4:
            return sample[3];
            break;
          }
          
        }
          lastMessageEV3 = millis();
        }

    break;

    case P6:
        if(!flag6){sensor6.begin(); flag6=true;}
        if (sensor6.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
          for (int i = 0; i < sensor6.get_number_of_modes(); i++) {
            EV3UARTMode* mode = sensor6.get_mode(i);   
        }

          //Configura para o modo controle remoto
          if ((sensor6.get_current_mode() != 2) && (sensor6.get_type() == 33)) {
              byte mode = 2;     
              if (mode >= 0 && mode < sensor6.get_number_of_modes()) {
                sensor6.set_mode(mode);
              }}


        if((sensor6.get_current_mode() == 2)&& (sensor6.get_type() == 33)){
          float sample[sensor6.sample_size()];
          sensor6.fetch_sample(sample, 0);

          for (int i = 0; i < sensor6.sample_size(); i++) {
          }

      
          switch(chennel){
            case 1:
            return sample[0];
            break;
            case 2:
            return sample[1];
            break;
            case 3:
            return sample[2];
            break;
            case 4:
            return sample[3];
            break;
          }
          
        }
          lastMessageEV3 = millis();
        }

    break;

    case P7:
        if(!flag7){sensor7.begin(); flag7=true;}
        if (sensor7.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
          for (int i = 0; i < sensor7.get_number_of_modes(); i++) {
            EV3UARTMode* mode = sensor7.get_mode(i);   
        }

          //Configura para o modo controle remoto
          if ((sensor7.get_current_mode() != 2) && (sensor7.get_type() == 33)) {
              byte mode = 0;     
              if (mode >= 0 && mode < sensor7.get_number_of_modes()) {
                sensor7.set_mode(mode);
              }}


        if((sensor7.get_current_mode() == 2)&& (sensor7.get_type() == 33)){
          float sample[sensor7.sample_size()];
          sensor7.fetch_sample(sample, 0);

          for (int i = 0; i < sensor7.sample_size(); i++) {
          }

      
          switch(chennel){
            case 1:
            return sample[0];
            break;
            case 2:
            return sample[1];
            break;
            case 3:
            return sample[2];
            break;
            case 4:
            return sample[3];
            break;
          }
          
        }
          lastMessageEV3 = millis();
        }

    break;

    case P8:
        if(!flag8){sensor8.begin(); flag8=true;}
        if (sensor8.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
          for (int i = 0; i < sensor8.get_number_of_modes(); i++) {
            EV3UARTMode* mode = sensor8.get_mode(i);   
        }

          //Configura para o modo controle remoto
          if ((sensor8.get_current_mode() != 2) && (sensor8.get_type() == 33)) {
              byte mode = 0;     
              if (mode >= 0 && mode < sensor8.get_number_of_modes()) {
                sensor8.set_mode(mode);
              }}


        if((sensor8.get_current_mode() == 2)&& (sensor8.get_type() == 33)){
          float sample[sensor8.sample_size()];
          sensor8.fetch_sample(sample, 0);

          for (int i = 0; i < sensor8.sample_size(); i++) {
          }

      
          switch(chennel){
            case 1:
            return sample[0];
            break;
            case 2:
            return sample[1];
            break;
            case 3:
            return sample[2];
            break;
            case 4:
            return sample[3];
            break;
          }
          
        }
          lastMessageEV3 = millis();
        }

    break;

    case PA:
        if(!flagA){sensorA.begin(); flagA=true;}
        if (sensorA.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
          for (int i = 0; i < sensorA.get_number_of_modes(); i++) {
            EV3UARTMode* mode = sensorA.get_mode(i);   
        }

          //Configura para o modo controle remoto
          if ((sensorA.get_current_mode() != 2) && (sensorA.get_type() == 33)) {
              byte mode = 0;     
              if (mode >= 0 && mode < sensorA.get_number_of_modes()) {
                sensorA.set_mode(mode);
              }}


        if((sensorA.get_current_mode() == 2)&& (sensorA.get_type() == 33)){
          float sample[sensorA.sample_size()];
          sensorA.fetch_sample(sample, 0);

          for (int i = 0; i < sensorA.sample_size(); i++) {
          }

      
          switch(chennel){
            case 1:
            return sample[0];
            break;
            case 2:
            return sample[1];
            break;
            case 3:
            return sample[2];
            break;
            case 4:
            return sample[3];
            break;
          }
          
        }
          lastMessageEV3 = millis();
        }

    break;

    case PB:
        if(!flagB){sensorB.begin(); flagB=true;}
        if (sensorB.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
          for (int i = 0; i < sensorB.get_number_of_modes(); i++) {
            EV3UARTMode* mode = sensorB.get_mode(i);   
        }

          //Configura para o modo controle remoto
          if ((sensorB.get_current_mode() != 2) && (sensorB.get_type() == 33)) {
              byte mode = 0;     
              if (mode >= 0 && mode < sensorB.get_number_of_modes()) {
                sensorB.set_mode(mode);
              }}


        if((sensorB.get_current_mode() == 2)&& (sensorB.get_type() == 33)){
          float sample[sensorB.sample_size()];
          sensorB.fetch_sample(sample, 0);

          for (int i = 0; i < sensorB.sample_size(); i++) {
          }

      
          switch(chennel){
            case 1:
            return sample[0];
            break;
            case 2:
            return sample[1];
            break;
            case 3:
            return sample[2];
            break;
            case 4:
            return sample[3];
            break;
          }
          
        }
          lastMessageEV3 = millis();
        }

    break;

    case PC:
        if(!flagC){sensorC.begin(); flagC=true;}
        if (sensorC.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
          for (int i = 0; i < sensorC.get_number_of_modes(); i++) {
            EV3UARTMode* mode = sensorC.get_mode(i);   
        }

          //Configura para o modo controle remoto
          if ((sensorC.get_current_mode() != 2) && (sensorC.get_type() == 33)) {
              byte mode = 0;     
              if (mode >= 0 && mode < sensorC.get_number_of_modes()) {
                sensorC.set_mode(mode);
              }}


        if((sensorC.get_current_mode() == 2)&& (sensorC.get_type() == 33)){
          float sample[sensorC.sample_size()];
          sensorC.fetch_sample(sample, 0);

          for (int i = 0; i < sensorC.sample_size(); i++) {
          }

      
          switch(chennel){
            case 1:
            return sample[0];
            break;
            case 2:
            return sample[1];
            break;
            case 3:
            return sample[2];
            break;
            case 4:
            return sample[3];
            break;
          }
          
        }
          lastMessageEV3 = millis();
        }

    break;

    case PD:
        if(!flagD){sensorD.begin(); flagD=true;}
        if (sensorD.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
          for (int i = 0; i < sensorD.get_number_of_modes(); i++) {
            EV3UARTMode* mode = sensorD.get_mode(i);   
        }

          //Configura para o modo controle remoto
          if ((sensorD.get_current_mode() != 2) && (sensorD.get_type() == 33)) {
              byte mode = 0;     
              if (mode >= 0 && mode < sensorD.get_number_of_modes()) {
                sensorD.set_mode(mode);
              }}


        if((sensorD.get_current_mode() == 2)&& (sensorD.get_type() == 33)){
          float sample[sensorD.sample_size()];
          sensorD.fetch_sample(sample, 0);

          for (int i = 0; i < sensorD.sample_size(); i++) {
          }

      
          switch(chennel){
            case 1:
            return sample[0];
            break;
            case 2:
            return sample[1];
            break;
            case 3:
            return sample[2];
            break;
            case 4:
            return sample[3];
            break;
          }
          
        }
          lastMessageEV3 = millis();
        }

    break;
  }
}

//Função para leitura do Sensor de Cor
boolean flagCor5=false,flagCor6=false,flagCor7=false,flagCor8=false,
        flagCorA=false,flagCorB=false,flagCorC=false,flagCorD=false;
        
byte sensorCorEV3(byte pin, byte mode){
  //updateSensorEV3();

  switch (mode) {
    case REFLETIVO:
    switch (pin){
        case P5:
          if(!flagCor5){sensor5.begin(); flagCor5=true;}
            if (sensor5.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor5.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor5.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor5.get_current_mode() != 0) && (sensor5.get_type() == 29)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensor5.get_number_of_modes()) {
                    sensor5.set_mode(mode);
                    
                  }}


            if((sensor5.get_current_mode() == 0)&& (sensor5.get_type() == 29)){
              float sample[sensor5.sample_size()];
              sensor5.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor5.sample_size(); i++) {}


            return sample[0];
            
            }
              lastMessageEV3 = millis();
          }

        break;
        case P6:
          if(!flagCor6){sensor6.begin(); flagCor6=true;}
            if (sensor6.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor6.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor6.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor6.get_current_mode() != 0) && (sensor6.get_type() == 29)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensor6.get_number_of_modes()) {
                    sensor6.set_mode(mode);
                  }}


            if((sensor6.get_current_mode() == 0)&& (sensor6.get_type() == 29)){
              float sample[sensor6.sample_size()];
              sensor6.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor6.sample_size(); i++) {}


              return sample[0];
              
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case P7:
          if(!flagCor7){sensor7.begin(); flagCor7=true;}
            if (sensor7.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor7.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor7.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor7.get_current_mode() != 0) && (sensor7.get_type() == 29)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensor7.get_number_of_modes()) {
                    sensor7.set_mode(mode);
                  }}


            if((sensor7.get_current_mode() == 0)&& (sensor7.get_type() == 29)){
              float sample[sensor7.sample_size()];
              sensor7.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor7.sample_size(); i++) {}


              return sample[0];
              
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case P8:
          if(!flagCor8){sensor8.begin(); flagCor8=true;}
            if (sensor8.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor8.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor8.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor8.get_current_mode() != 0) && (sensor8.get_type() == 29)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensor8.get_number_of_modes()) {
                    sensor8.set_mode(mode);
                  }}


            if((sensor8.get_current_mode() == 0)&& (sensor8.get_type() == 29)){
              float sample[sensor8.sample_size()];
              sensor8.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor8.sample_size(); i++) {}
              return sample[0];
            }
              lastMessageEV3 = millis();
          }

        break;
        case PA:
          if(!flagCorA){sensorA.begin(); flagCorA=true;}
            if (sensorA.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorA.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorA.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorA.get_current_mode() != 0) && (sensorA.get_type() == 29)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensorA.get_number_of_modes()) {
                    sensorA.set_mode(mode);
                  }}


            if((sensorA.get_current_mode() == 0)&& (sensorA.get_type() == 29)){
              float sample[sensorA.sample_size()];
              sensorA.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorA.sample_size(); i++) {}


              return sample[0];
          
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PB:
          if(!flagCorB){sensorB.begin(); flagCorB=true;}
            if (sensorB.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorB.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorB.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorB.get_current_mode() != 0) && (sensorB.get_type() == 29)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensorB.get_number_of_modes()) {
                    sensorB.set_mode(mode);
                  }}


            if((sensorB.get_current_mode() == 0)&& (sensorB.get_type() == 29)){
              float sample[sensorB.sample_size()];
              sensorB.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorB.sample_size(); i++) {}


              return sample[0];
            
            }
              lastMessageEV3 = millis();
          }

        break;
        case PC:
          if(!flagCorC){sensorC.begin(); flagCorC=true;}
            if (sensorC.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorC.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorC.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorC.get_current_mode() != 0) && (sensorC.get_type() == 29)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensorC.get_number_of_modes()) {
                    sensorC.set_mode(mode);
                  }}


            if((sensorC.get_current_mode() == 0)&& (sensorC.get_type() == 29)){
              float sample[sensorC.sample_size()];
              sensorC.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorC.sample_size(); i++) {}

              return sample[0];
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PD:
          if(!flagCorD){sensorD.begin(); flagCorD=true;}
            if (sensorD.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorD.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorD.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorD.get_current_mode() != 0) && (sensorD.get_type() == 29)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensorD.get_number_of_modes()) {
                    sensorD.set_mode(mode);
                  }}


            if((sensorD.get_current_mode() == 0)&& (sensorD.get_type() == 29)){
              float sample[sensorD.sample_size()];
              sensorD.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorD.sample_size(); i++) {}

              return sample[0];
              
            }
              lastMessageEV3 = millis();
          }

        break;
      }
    break;
    case AMBIENTE:
    switch (pin){
        case P5:
          if(!flagCor5){sensor5.begin(); flagCor5=true;}
            if (sensor5.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor5.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor5.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor5.get_current_mode() != 1) && (sensor5.get_type() == 29)) {
                  byte mode = 1;      
                  if (mode >= 0 && mode < sensor5.get_number_of_modes()) {
                    sensor5.set_mode(mode);
                    
                  }}


            if((sensor5.get_current_mode() == 1)&& (sensor5.get_type() == 29)){
              float sample[sensor5.sample_size()];
              sensor5.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor5.sample_size(); i++) {}


            return sample[0];
            
            }
              lastMessageEV3 = millis();
          }

        break;
        case P6:
          if(!flagCor6){sensor6.begin(); flagCor6=true;}
            if (sensor6.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor6.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor6.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor6.get_current_mode() != 1) && (sensor6.get_type() == 29)) {
                  byte mode = 1;      
                  if (mode >= 0 && mode < sensor6.get_number_of_modes()) {
                    sensor6.set_mode(mode);
                  }}


            if((sensor6.get_current_mode() == 1)&& (sensor6.get_type() == 29)){
              float sample[sensor6.sample_size()];
              sensor6.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor6.sample_size(); i++) {}


              return sample[0];
              
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case P7:
          if(!flagCor7){sensor7.begin(); flagCor7=true;}
            if (sensor7.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor7.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor7.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor7.get_current_mode() != 1) && (sensor7.get_type() == 29)) {
                  byte mode = 1;      
                  if (mode >= 0 && mode < sensor7.get_number_of_modes()) {
                    sensor7.set_mode(mode);
                  }}


            if((sensor7.get_current_mode() == 1)&& (sensor7.get_type() == 29)){
              float sample[sensor7.sample_size()];
              sensor7.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor7.sample_size(); i++) {}


              return sample[0];
              
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case P8:
          if(!flagCor8){sensor8.begin(); flagCor8=true;}
            if (sensor8.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor8.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor8.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor8.get_current_mode() != 1) && (sensor8.get_type() == 29)) {
                  byte mode = 1;      
                  if (mode >= 0 && mode < sensor8.get_number_of_modes()) {
                    sensor8.set_mode(mode);
                  }}


            if((sensor8.get_current_mode() == 1)&& (sensor8.get_type() == 29)){
              float sample[sensor8.sample_size()];
              sensor8.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor8.sample_size(); i++) {}
              return sample[0];
            }
              lastMessageEV3 = millis();
          }

        break;
        case PA:
          if(!flagCorA){sensorA.begin(); flagCorA=true;}
            if (sensorA.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorA.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorA.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorA.get_current_mode() != 1) && (sensorA.get_type() == 29)) {
                  byte mode = 1;      
                  if (mode >= 0 && mode < sensorA.get_number_of_modes()) {
                    sensorA.set_mode(mode);
                  }}


            if((sensorA.get_current_mode() == 1)&& (sensorA.get_type() == 29)){
              float sample[sensorA.sample_size()];
              sensorA.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorA.sample_size(); i++) {}


              return sample[0];
          
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PB:
          if(!flagCorB){sensorB.begin(); flagCorB=true;}
            if (sensorB.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorB.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorB.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorB.get_current_mode() != 1) && (sensorB.get_type() == 29)) {
                  byte mode = 1;      
                  if (mode >= 0 && mode < sensorB.get_number_of_modes()) {
                    sensorB.set_mode(mode);
                  }}


            if((sensorB.get_current_mode() == 1)&& (sensorB.get_type() == 29)){
              float sample[sensorB.sample_size()];
              sensorB.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorB.sample_size(); i++) {}


              return sample[0];
            
            }
              lastMessageEV3 = millis();
          }

        break;
        case PC:
          if(!flagCorC){sensorC.begin(); flagCorC=true;}
            if (sensorC.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorC.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorC.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorC.get_current_mode() != 1) && (sensorC.get_type() == 29)) {
                  byte mode = 1;      
                  if (mode >= 0 && mode < sensorC.get_number_of_modes()) {
                    sensorC.set_mode(mode);
                  }}


            if((sensorC.get_current_mode() == 1)&& (sensorC.get_type() == 29)){
              float sample[sensorC.sample_size()];
              sensorC.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorC.sample_size(); i++) {}

              return sample[0];
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PD:
          if(!flagCorD){sensorD.begin(); flagCorD=true;}
            if (sensorD.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorD.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorD.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorD.get_current_mode() != 1) && (sensorD.get_type() == 29)) {
                  byte mode = 1;      
                  if (mode >= 0 && mode < sensorD.get_number_of_modes()) {
                    sensorD.set_mode(mode);
                  }}


            if((sensorD.get_current_mode() == 1)&& (sensorD.get_type() == 29)){
              float sample[sensorD.sample_size()];
              sensorD.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorD.sample_size(); i++) {}

              return sample[0];
              
            }
              lastMessageEV3 = millis();
          }

        break;
      }
    break;
    case COR:
    switch (pin){
        case P5:
          if(!flagCor5){sensor5.begin(); flagCor5=true;}
            if (sensor5.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor5.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor5.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor5.get_current_mode() != 2) && (sensor5.get_type() == 29)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensor5.get_number_of_modes()) {
                    sensor5.set_mode(mode);
                  }}


            if((sensor5.get_current_mode() == 2)&& (sensor5.get_type() == 29)){
              float sample[sensor5.sample_size()];
              sensor5.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor5.sample_size(); i++) {}

              if(sample[0]==2){
                return 3;
              }else if(sample[0]==3){
                return 2;
              }else{
                return sample[0];
              }
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case P6:
          if(!flagCor6){sensor6.begin(); flagCor6=true;}
            if (sensor6.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor6.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor6.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor6.get_current_mode() != 2) && (sensor6.get_type() == 29)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensor6.get_number_of_modes()) {
                    sensor6.set_mode(mode);
                  }}


            if((sensor6.get_current_mode() == 2)&& (sensor6.get_type() == 29)){
              float sample[sensor6.sample_size()];
              sensor6.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor6.sample_size(); i++) {}

              if(sample[0]==2){
                return 3;
              }else if(sample[0]==3){
                return 2;
              }else{
                return sample[0];
              }
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case P7:
          if(!flagCor7){sensor7.begin(); flagCor7=true;}
            if (sensor7.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor7.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor7.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor7.get_current_mode() != 2) && (sensor7.get_type() == 29)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensor7.get_number_of_modes()) {
                    sensor7.set_mode(mode);
                  }}


            if((sensor7.get_current_mode() == 2)&& (sensor7.get_type() == 29)){
              float sample[sensor7.sample_size()];
              sensor7.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor7.sample_size(); i++) {}

              if(sample[0]==2){
                return 3;
              }else if(sample[0]==3){
                return 2;
              }else{
                return sample[0];
              }
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case P8:
          if(!flagCor8){sensor8.begin(); flagCor8=true;}
            if (sensor8.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor8.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor8.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor8.get_current_mode() != 2) && (sensor8.get_type() == 29)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensor8.get_number_of_modes()) {
                    sensor8.set_mode(mode);
                  }}


            if((sensor8.get_current_mode() == 2)&& (sensor8.get_type() == 29)){
              float sample[sensor8.sample_size()];
              sensor8.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor8.sample_size(); i++) {}

              if(sample[0]==2){
                return 3;
              }else if(sample[0]==3){
                return 2;
              }else{
                return sample[0];
              }
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PA:
          if(!flagCorA){sensorA.begin(); /*sensorA.reset();*/ flagCorA=true;}
            if (sensorA.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 800 ) {
              for (int i = 0; i < sensorA.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorA.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorA.get_current_mode() != 2) && (sensorA.get_type() == 29)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensorA.get_number_of_modes()) {
                    sensorA.set_mode(mode);
                  }}


            if((sensorA.get_current_mode() == 2)&& (sensorA.get_type() == 29)){
              float sample[sensorA.sample_size()];
              sensorA.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorA.sample_size(); i++) {}

              if(sample[0]==2){
                return 3;
              }else if(sample[0]==3){
                return 2;
              }else{
                return sample[0];
              }
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PB:
          if(!flagCorB){/*sensorB.reset();*/ sensorB.begin(); flagCorB=true;}
            if (sensorB.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorB.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorB.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorB.get_current_mode() != 2) && (sensorB.get_type() == 29)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensorB.get_number_of_modes()) {
                    sensorB.set_mode(mode);
                  }}


            if((sensorB.get_current_mode() == 2)&& (sensorB.get_type() == 29)){
              float sample[sensorB.sample_size()];
              sensorB.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorB.sample_size(); i++) {}

              if(sample[0]==2){
                return 3;
              }else if(sample[0]==3){
                return 2;
              }else{
                return sample[0];
              }
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PC:
          if(!flagCorC){sensorC.begin(); flagCorC=true;}
            if (sensorC.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorC.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorC.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorC.get_current_mode() != 2) && (sensorC.get_type() == 29)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensorC.get_number_of_modes()) {
                    sensorC.set_mode(mode);
                  }}


            if((sensorC.get_current_mode() == 2)&& (sensorC.get_type() == 29)){
              float sample[sensorC.sample_size()];
              sensorC.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorC.sample_size(); i++) {}

              if(sample[0]==2){
                return 3;
              }else if(sample[0]==3){
                return 2;
              }else{
                return sample[0];
              }
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PD:
          if(!flagCorD){sensorD.begin(); flagCorD=true;}
            if (sensorD.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorD.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorD.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorD.get_current_mode() != 2) && (sensorD.get_type() == 29)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensorD.get_number_of_modes()) {
                    sensorD.set_mode(mode);
                  }}


            if((sensorD.get_current_mode() == 2)&& (sensorD.get_type() == 29)){
              float sample[sensorD.sample_size()];
              sensorD.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorD.sample_size(); i++) {}

              if(sample[0]==2){
                return 3;
              }else if(sample[0]==3){
                return 2;
              }else{
                return sample[0];
              }
              
            }
              lastMessageEV3 = millis();
          }

        break;
      }
    break;
  }
}

//Função para leitura do Sensor de Cor
boolean flagDis5=false,flagDis6=false,flagDis7=false,flagDis8=false,
        flagDisA=false,flagDisB=false,flagDisC=false,flagDisD=false;
/*
void sensorDisEV3(){
    if (sensor5.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
      for (int i = 0; i < sensor5.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor5.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor5.get_current_mode() != 0) && (sensor5.get_type() == 30)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensor5.get_number_of_modes()) {
                    sensor5.set_mode(mode);
                    
                  }}


            if((sensor5.get_current_mode() == 0)&& (sensor5.get_type() == 30)){
              float sample[sensor5.sample_size()];
              sensor5.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor5.sample_size(); i++) {}


            valueUtra = sample[0]/10;
            
            }
              lastMessageEV3 = millis();
          }
}*/

          
byte sensorDisEV3(byte pin, byte mode){
  updateSensorEV3();

  switch (mode) {
    case CENTIMETROS:
    switch (pin){
        case P5:
          if(!flagCor5){sensor5.begin(); flagCor5=true;}
            if (sensor5.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor5.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor5.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor5.get_current_mode() != 0) && (sensor5.get_type() == 30)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensor5.get_number_of_modes()) {
                    sensor5.set_mode(mode);
                    
                  }}


            if((sensor5.get_current_mode() == 0)&& (sensor5.get_type() == 30)){
              float sample[sensor5.sample_size()];
              sensor5.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor5.sample_size(); i++) {}


            return sample[0]/10;
            
            }
              lastMessageEV3 = millis();
          }

        break;
        case P6:
          if(!flagCor6){sensor6.begin(); flagCor6=true;}
            if (sensor6.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor6.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor6.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor6.get_current_mode() != 0) && (sensor6.get_type() == 30)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensor6.get_number_of_modes()) {
                    sensor6.set_mode(mode);
                  }}


            if((sensor6.get_current_mode() == 0)&& (sensor6.get_type() == 30)){
              float sample[sensor6.sample_size()];
              sensor6.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor6.sample_size(); i++) {}


              return sample[0]/10;
              
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case P7:
          if(!flagCor7){sensor7.begin(); flagCor7=true;}
            if (sensor7.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor7.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor7.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor7.get_current_mode() != 0) && (sensor7.get_type() == 30)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensor7.get_number_of_modes()) {
                    sensor7.set_mode(mode);
                  }}


            if((sensor7.get_current_mode() == 0)&& (sensor7.get_type() == 29)){
              float sample[sensor7.sample_size()];
              sensor7.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor7.sample_size(); i++) {}


              return sample[0]/10;
              
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case P8:
          if(!flagCor8){sensor8.begin(); flagCor8=true;}
            if (sensor8.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor8.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor8.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor8.get_current_mode() != 0) && (sensor8.get_type() == 30)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensor8.get_number_of_modes()) {
                    sensor8.set_mode(mode);
                  }}


            if((sensor8.get_current_mode() == 0)&& (sensor8.get_type() == 30)){
              float sample[sensor8.sample_size()];
              sensor8.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor8.sample_size(); i++) {}
              return sample[0]/10;
            }
              lastMessageEV3 = millis();
          }

        break;
        case PA:
          if(!flagCorA){sensorA.begin(); flagCorA=true;}
            if (sensorA.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorA.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorA.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorA.get_current_mode() != 0) && (sensorA.get_type() == 30)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensorA.get_number_of_modes()) {
                    sensorA.set_mode(mode);
                  }}


            if((sensorA.get_current_mode() == 0)&& (sensorA.get_type() == 30)){
              float sample[sensorA.sample_size()];
              sensorA.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorA.sample_size(); i++) {}


              return sample[0]/10;
          
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PB:
          if(!flagCorB){sensorB.begin(); flagCorB=true;}
            if (sensorB.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorB.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorB.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorB.get_current_mode() != 0) && (sensorB.get_type() == 30)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensorB.get_number_of_modes()) {
                    sensorB.set_mode(mode);
                  }}


            if((sensorB.get_current_mode() == 0)&& (sensorB.get_type() == 30)){
              float sample[sensorB.sample_size()];
              sensorB.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorB.sample_size(); i++) {}


              return sample[0]/10;
            
            }
              lastMessageEV3 = millis();
          }

        break;
        case PC:
          if(!flagCorC){sensorC.begin(); flagCorC=true;}
            if (sensorC.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorC.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorC.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorC.get_current_mode() != 0) && (sensorC.get_type() == 30)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensorC.get_number_of_modes()) {
                    sensorC.set_mode(mode);
                  }}


            if((sensorC.get_current_mode() == 0)&& (sensorC.get_type() == 30)){
              float sample[sensorC.sample_size()];
              sensorC.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorC.sample_size(); i++) {}

              return sample[0]/10;
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PD:
          if(!flagCorD){sensorD.begin(); flagCorD=true;}
            if (sensorD.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorD.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorD.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorD.get_current_mode() != 0) && (sensorD.get_type() == 30)) {
                  byte mode = 0;      
                  if (mode >= 0 && mode < sensorD.get_number_of_modes()) {
                    sensorD.set_mode(mode);
                  }}


            if((sensorD.get_current_mode() == 0)&& (sensorD.get_type() == 30)){
              float sample[sensorD.sample_size()];
              sensorD.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorD.sample_size(); i++) {}

              return sample[0]/10;
              
            }
              lastMessageEV3 = millis();
          }

        break;
      }
    break;

    case ESCUTA:
    switch (pin){
        case P5:
          if(!flagCor5){sensor5.begin(); flagCor5=true;}
            if (sensor5.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor5.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor5.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor5.get_current_mode() != 2) && (sensor5.get_type() == 30)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensor5.get_number_of_modes()) {
                    sensor5.set_mode(mode);
                  }}


            if((sensor5.get_current_mode() == 2)&& (sensor5.get_type() == 30)){
              float sample[sensor5.sample_size()];
              sensor5.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor5.sample_size(); i++) {}


            return sample[0];
              
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case P6:
          if(!flagCor6){sensor6.begin(); flagCor6=true;}
            if (sensor6.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor6.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor6.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor6.get_current_mode() != 2) && (sensor6.get_type() == 30)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensor6.get_number_of_modes()) {
                    sensor6.set_mode(mode);
                  }}


            if((sensor6.get_current_mode() == 2)&& (sensor6.get_type() == 30)){
              float sample[sensor6.sample_size()];
              sensor6.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor6.sample_size(); i++) {}


            return sample[0];
              
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case P7:
          if(!flagCor7){sensor7.begin(); flagCor7=true;}
            if (sensor7.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor7.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor7.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor7.get_current_mode() != 2) && (sensor7.get_type() == 30)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensor7.get_number_of_modes()) {
                    sensor7.set_mode(mode);
                  }}


            if((sensor7.get_current_mode() == 2)&& (sensor7.get_type() == 30)){
              float sample[sensor7.sample_size()];
              sensor7.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor7.sample_size(); i++) {}


            return sample[0];
              
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case P8:
          if(!flagCor8){sensor8.begin(); flagCor8=true;}
            if (sensor8.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensor8.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensor8.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensor8.get_current_mode() != 2) && (sensor8.get_type() == 30)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensor8.get_number_of_modes()) {
                    sensor8.set_mode(mode);
                  }}


            if((sensor8.get_current_mode() == 2)&& (sensor8.get_type() == 30)){
              float sample[sensor8.sample_size()];
              sensor8.fetch_sample(sample, 0);

            // for (int i = 0; i < sensor8.sample_size(); i++) {}


            return sample[0];
              
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PA:
          if(!flagCorA){sensorA.begin(); flagCorA=true;}
            if (sensorA.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorA.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorA.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorA.get_current_mode() != 2) && (sensorA.get_type() == 30)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensorA.get_number_of_modes()) {
                    sensorA.set_mode(mode);
                  }}


            if((sensorA.get_current_mode() == 2)&& (sensorA.get_type() == 30)){
              float sample[sensorA.sample_size()];
              sensorA.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorA.sample_size(); i++) {}

                return sample[0];
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PB:
          if(!flagCorB){sensorB.begin(); flagCorB=true;}
            if (sensorB.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorB.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorB.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorB.get_current_mode() != 2) && (sensorB.get_type() == 30)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensorB.get_number_of_modes()) {
                    sensorB.set_mode(mode);
                  }}


            if((sensorB.get_current_mode() == 2)&& (sensorB.get_type() == 30)){
              float sample[sensorB.sample_size()];
              sensorB.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorB.sample_size(); i++) {}

            return sample[0];
              
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PC:
          if(!flagCorC){sensorC.begin(); flagCorC=true;}
            if (sensorC.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorC.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorC.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorC.get_current_mode() != 2) && (sensorC.get_type() == 30)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensorC.get_number_of_modes()) {
                    sensorC.set_mode(mode);
                  }}


            if((sensorC.get_current_mode() == 2)&& (sensorC.get_type() == 30)){
              float sample[sensorC.sample_size()];
              sensorC.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorC.sample_size(); i++) {}

            return sample[0];
              
            }
              lastMessageEV3 = millis();
          }

        break;
        case PD:
          if(!flagCorD){sensorD.begin(); flagCorD=true;}
            if (sensorD.get_status() == DATA_MODE && (millis() - lastMessageEV3) > 1000 ) {
              for (int i = 0; i < sensorD.get_number_of_modes(); i++) {
                EV3UARTMode* mode = sensorD.get_mode(i);   
            }

              
              //Configura para o modo controle remoto
              if ((sensorD.get_current_mode() != 2) && (sensorD.get_type() == 30)) {
                  byte mode = 2;      
                  if (mode >= 0 && mode < sensorD.get_number_of_modes()) {
                    sensorD.set_mode(mode);
                  }}


            if((sensorD.get_current_mode() == 2)&& (sensorD.get_type() == 30)){
              float sample[sensorD.sample_size()];
              sensorD.fetch_sample(sample, 0);

            // for (int i = 0; i < sensorD.sample_size(); i++) {}

            return sample[0];
              
            }
              lastMessageEV3 = millis();
          }

        break;
      }
    break;
  }
}

SoftwareSerial sens_cor5(A15, 4); 

CorUltra _sensorA; //cor
CorUltra _sensorB; //ultrassom

byte _dataA = 0;
byte _dataB = 0;
byte cor5;
boolean flagInitF1 = false;
byte getColorF1(boolean mode){
  if(!flagInitF1){
    sens_cor5.begin(9600);
    flagInitF1 =true;

  }

  if(!mode){
    while (sens_cor5.available()>0){ 
      _dataA = byte(sens_cor5.read());
      _sensorA.Handler_SoftSerial(_dataA);
      }
    return  _sensorA.PegarCorCinza(); 
  }else{
    while (sens_cor5.available()>0){ 
      _dataA = byte(sens_cor5.read());
      _sensorA.Handler_SoftSerial(_dataA);
      }
    return  _sensorA.PegarCor();
  }
  
}