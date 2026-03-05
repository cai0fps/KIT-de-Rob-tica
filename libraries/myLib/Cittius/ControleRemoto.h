#include <SoftwareSerial.h>

SoftwareSerial _mySerial5(A15, 4);     // RX, TX
SoftwareSerial _mySerial6(A12, 53);    // RX, TX
SoftwareSerial _mySerial7(A13, 28);    // RX, TX
SoftwareSerial _mySerial8(A14, 29);    // RX, TX
SoftwareSerial _mySerialA(A8, 2);      // RX, TX
SoftwareSerial _mySerialB(A9, 3);      // RX, TX
SoftwareSerial _mySerialC(A10, 18);    // RX, TX
SoftwareSerial _mySerialD(A11, 19);    // RX, TX

unsigned long _previousTime5 = 0;
unsigned long _previousTime6 = 0;
unsigned long _previousTime7 = 0;
unsigned long _previousTime8 = 0;
unsigned long _previousTimeA = 0;
unsigned long _previousTimeB = 0;
unsigned long _previousTimeC = 0;
unsigned long _previousTimeD = 0;
const unsigned long _interval = 35; // Intervalo de 5 segundos


byte getInfravermelho5(byte channel) {
  unsigned long currentTime = millis();
      _mySerial5.begin(57600);

      if (currentTime - _previousTime5 >= _interval) {
        _previousTime5 = currentTime;

        _mySerial5.listen();
        _mySerial5.write(0x08);

        delay(5); // Dê tempo para o sensor responder
        if (_mySerial5.available()) {
          byte receivedByte = _mySerial5.read();

          // Pegar os 3 primeiros bits do byte
          byte tresPrimeirosBits = receivedByte & 0b00000111;

          // Pegar os 5 últimos bits do byte
          byte cincoUltimosBits = (receivedByte >> 3) & 0b00011111;

          if(channel == 1 && cincoUltimosBits==4){
            return tresPrimeirosBits;
          }else if(channel == 2 && cincoUltimosBits==8){
            return tresPrimeirosBits;
          }else if(channel == 3 && cincoUltimosBits==12){
            return tresPrimeirosBits;
          }else if(channel == 4 && cincoUltimosBits==16){
            return tresPrimeirosBits;
          }else{
            return 0;
          }
        }
    }
}

byte getInfravermelho6(byte channel) {
  unsigned long currentTime = millis();
      _mySerial6.begin(57600);

      if (currentTime - _previousTime6 >= _interval) {
        _previousTime6 = currentTime;

        _mySerial6.listen();
        _mySerial6.write(0x08);

        delay(5); // Dê tempo para o sensor responder
        if (_mySerial6.available()) {
          byte receivedByte = _mySerial6.read();

          // Pegar os 3 primeiros bits do byte
          byte tresPrimeirosBits = receivedByte & 0b00000111;

          // Pegar os 5 últimos bits do byte
          byte cincoUltimosBits = (receivedByte >> 3) & 0b00011111;

          if(channel == 1 && cincoUltimosBits==4){
            return tresPrimeirosBits;
          }else if(channel == 2 && cincoUltimosBits==8){
            return tresPrimeirosBits;
          }else if(channel == 3 && cincoUltimosBits==12){
            return tresPrimeirosBits;
          }else if(channel == 4 && cincoUltimosBits==16){
            return tresPrimeirosBits;
          }else{
            return 0;
          }
        }
    }
}

byte getInfravermelho7(byte channel) {
  unsigned long currentTime = millis();
      _mySerial7.begin(57600);

      if (currentTime - _previousTime7 >= _interval) {
        _previousTime7 = currentTime;

        _mySerial7.listen();
        _mySerial7.write(0x08);

        delay(5); // Dê tempo para o sensor responder
        if (_mySerial7.available()) {
          byte receivedByte = _mySerial7.read();

          // Pegar os 3 primeiros bits do byte
          byte tresPrimeirosBits = receivedByte & 0b00000111;

          // Pegar os 5 últimos bits do byte
          byte cincoUltimosBits = (receivedByte >> 3) & 0b00011111;

          if(channel == 1 && cincoUltimosBits==4){
            return tresPrimeirosBits;
          }else if(channel == 2 && cincoUltimosBits==8){
            return tresPrimeirosBits;
          }else if(channel == 3 && cincoUltimosBits==12){
            return tresPrimeirosBits;
          }else if(channel == 4 && cincoUltimosBits==16){
            return tresPrimeirosBits;
          }else{
            return 0;
          }
        }
    }
}

byte getInfravermelho8(byte channel) {
  unsigned long currentTime = millis();
      _mySerial8.begin(57600);

      if (currentTime - _previousTime8 >= _interval) {
        _previousTime8 = currentTime;

        _mySerial8.listen();
        _mySerial8.write(0x08);

        delay(5); // Dê tempo para o sensor responder
        if (_mySerial8.available()) {
          byte receivedByte = _mySerial8.read();

          // Pegar os 3 primeiros bits do byte
          byte tresPrimeirosBits = receivedByte & 0b00000111;

          // Pegar os 5 últimos bits do byte
          byte cincoUltimosBits = (receivedByte >> 3) & 0b00011111;

          if(channel == 1 && cincoUltimosBits==4){
            return tresPrimeirosBits;
          }else if(channel == 2 && cincoUltimosBits==8){
            return tresPrimeirosBits;
          }else if(channel == 3 && cincoUltimosBits==12){
            return tresPrimeirosBits;
          }else if(channel == 4 && cincoUltimosBits==16){
            return tresPrimeirosBits;
          }else{
            return 0;
          }
        }
    }
}

byte getInfravermelhoB(byte channel) {
  unsigned long currentTime = millis();
      _mySerialB.begin(57600);

      if (currentTime - _previousTimeB >= _interval) {
        _previousTimeB = currentTime;

        _mySerialB.listen();
        _mySerialB.write(0x08);

        delay(5); // Dê tempo para o sensor responder
        if (_mySerialB.available()) {
          byte receivedByte = _mySerialB.read();

          // Pegar os 3 primeiros bits do byte
          byte tresPrimeirosBits = receivedByte & 0b00000111;

          // Pegar os 5 últimos bits do byte
          byte cincoUltimosBits = (receivedByte >> 3) & 0b00011111;

          if(channel == 1 && cincoUltimosBits==4){
            return tresPrimeirosBits;
          }else if(channel == 2 && cincoUltimosBits==8){
            return tresPrimeirosBits;
          }else if(channel == 3 && cincoUltimosBits==12){
            return tresPrimeirosBits;
          }else if(channel == 4 && cincoUltimosBits==16){
            return tresPrimeirosBits;
          }else{
            return 0;
          }
        }
    }
}

