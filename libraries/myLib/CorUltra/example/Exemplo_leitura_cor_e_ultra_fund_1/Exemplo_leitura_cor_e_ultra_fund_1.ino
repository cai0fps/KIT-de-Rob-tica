#include <CorUltra.h>
#include <SoftwareSerial.h>

SoftwareSerial mySerial(A15, 4); // RX, TX

CorUltra sensorA; //cor

byte dataA = 0;
byte dataB = 0;
int cor;
float ultra = 0;
void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
mySerial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  while (mySerial.available()>0){ 
    dataA = byte(mySerial.read());
    sensorA.Handler_SoftSerial(dataA);
    }
  cor = sensorA.PegarCorCinza();  
  Serial.println(cor);  

   




}
