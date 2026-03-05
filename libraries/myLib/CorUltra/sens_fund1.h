#include <CorUltra.h>
#include <SoftwareSerial.h>

SoftwareSerial sens_cor5(A12, 22); 
SoftwareSerial sens_cor6(A12, 53); 
SoftwareSerial sens_cor7(A13, 28); 
SoftwareSerial sens_cor8(A4, 29);
SoftwareSerial sens_corA(A8, 2);
SoftwareSerial sens_corB(A9, 3);
SoftwareSerial sens_corC(A10, 18);
SoftwareSerial sens_corD(A11, 19);

CorUltra sensor5; 
CorUltra sensor6; 
CorUltra sensor7; 
CorUltra sensor8;
CorUltra sensorA;
CorUltra sensorB;
CorUltra sensorC;
CorUltra sensorD;

byte getSensorColor_F1_5(){
    static boolean flag_escrita = 0, flagSetupF1=false;
    static byte CodigoVermelhoF1 = 0;
    static byte data = 0, over = 0;

      if(!flagSetupF1){
        sens_cor5.begin(9600);
        flagSetupF1=true;
      }

      sens_cor5.listen();
      //delay(150);
              
  //    while (sens_cor5.available()>15){
   //     while (sens_cor5.available()>0){
   //       over = byte(sens_cor5.read());
    //    }
   //   }
   //               if (sens_cor5.overflow()) {
              // Serial.println("Porta1 overflow!");
   //         }
            
      while((sens_cor5.available()>0)&&(sens_cor5.available()==13)||(sens_cor5.available()>0)&&(flag_escrita == 1)){
        flag_escrita = 1;
        data = byte(sens_cor5.read());
        sensor5.Handler_SoftSerial(data);
      }

      flag_escrita = 0;

      if(sensor5.PegarCor()!=9000){    
        CodigoVermelhoF1 = sensor5.PegarCor(); 
      }  
      else CodigoVermelhoF1 = 999;
                  
      return CodigoVermelhoF1;
}

byte getSensorColor_F1_6(){
    static boolean flag_escrita = 0, flagSetupF1=false;
    static byte CodigoVermelhoF1 = 0;
    static byte data = 0, over = 0;

      if(!flagSetupF1){
        sens_cor6.begin(9600);
        flagSetupF1=true;
      }

      sens_cor6.listen();

      while((sens_cor6.available()>0)&&(sens_cor6.available()==13)||(sens_cor6.available()>0)&&(flag_escrita == 1)){
        flag_escrita = 1;
        data = byte(sens_cor5.read());
        sensor6.Handler_SoftSerial(data);
      }

      flag_escrita = 0;

      if(sensor6.PegarCor()!=9000){    
        CodigoVermelhoF1 = sensor6.PegarCor(); 
      }  
      else CodigoVermelhoF1 = 999;
                  
      return CodigoVermelhoF1;
}
