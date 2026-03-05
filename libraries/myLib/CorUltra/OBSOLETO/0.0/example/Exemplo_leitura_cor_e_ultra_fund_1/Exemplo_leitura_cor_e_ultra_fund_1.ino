#include <CorUltra.h>


CorUltra sensorA; //cor
CorUltra sensorB; //ultrassom

byte dataA = 0;
byte dataB = 0;
int cor;
float ultra = 0;
void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
Serial1.begin(9600);
Serial2.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  while (Serial1.available()>0){ 
    dataA = byte(Serial1.read());
    sensorA.Handler_SoftSerial(dataA);
    }
  cor = sensorA.PegarCor();  
  while (Serial2.available()>0){
    dataB = byte(Serial1.read());
    sensorB.Handler_SoftSerial(dataB);
    }
  ultra = sensorB.PegarUltra();  
    

   


    delay(500);

}
