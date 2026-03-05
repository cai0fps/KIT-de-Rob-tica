#include <SoftwareSerial.h>

SoftwareSerial mySerial5(A15, 4);     // RX, TX
SoftwareSerial mySerial6(A12, 53);    // RX, TX
SoftwareSerial mySerial7(A13, 28);    // RX, TX
SoftwareSerial mySerial8(A14, 29);    // RX, TX
SoftwareSerial mySerialA(A8, 2);      // RX, TX
SoftwareSerial mySerialB(A9, 3);      // RX, TX
SoftwareSerial mySerialC(A10, 18);    // RX, TX
SoftwareSerial mySerialD(A11, 19);    // RX, TX

unsigned long previousTime5 = 0;
unsigned long previousTime6 = 0;
unsigned long previousTime7 = 0;
unsigned long previousTime8 = 0;
unsigned long previousTimeA = 0;
unsigned long previousTimeB = 0;
unsigned long previousTimeC = 0;
unsigned long previousTimeD = 0;
const unsigned long interval = 30; // Intervalo de 5 segundos

byte getDistancia(byte port){
 unsigned long currentTime = millis();

  switch(port){
      case 5:
      mySerial5.begin(57600);
      mySerial5.listen();
      mySerial5.write(0x01);

      delay(30); 
      if (mySerial5.available()) {
        return mySerial5.read();
      }
  break;


  case 6:
    mySerial6.begin(57600);
    mySerial6.listen();
    mySerial6.write(0x01);

    delay(30); 
    if (mySerial6.available()) {
      return mySerial6.read();
    }
  break;

  case 7:
    mySerial7.begin(57600);
    mySerial7.listen();
    mySerial7.write(0x01);

    delay(30); // Dê tempo para o sensor responder
    if (mySerial7.available()) {
      return mySerial7.read();
    }
  break;

  case 8:
    mySerial8.begin(57600);
    mySerial8.listen();
    mySerial8.write(0x01);

    delay(30); // Dê tempo para o sensor responder
    if (mySerial8.available()) {
      return mySerial8.read();
    }
  break;
  case 9:
    mySerialA.begin(57600);
    mySerialA.listen();
    mySerialA.write(0x01);

    delay(30); // Dê tempo para o sensor responder
    if (mySerialA.available()) {
      return mySerialA.read();
    }
  break;
  case 10:
    mySerialB.begin(57600);
    mySerialB.listen();
    mySerialB.write(0x01);

    delay(30); // Dê tempo para o sensor responder
    if (mySerialB.available()) {
      return mySerialB.read();
    }
  break;
  case 11:
    mySerialC.begin(57600);
    mySerialC.listen();
    mySerialC.write(0x01);

    delay(30);  //Dê tempo para o sensor responder
    if (mySerialC.available()) {
      return mySerialC.read();
    }
  break;

  case 12:
    mySerialD.begin(57600);
    mySerialD.listen();
    mySerialD.write(0x01);
    delay(30); // Dê tempo para o sensor responder
    if (mySerialD.available()) {
      return mySerialD.read();
    }
      
  break;
  }

}