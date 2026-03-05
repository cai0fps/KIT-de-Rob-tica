#ifndef TEMPERATURE_H
#define TEMPERATURE_H

#include <SoftWire.h>

SoftWire sensor1(A3,  22);
SoftWire sensor5(A15,  4);
SoftWire sensor6(A12,  53);
SoftWire sensor7(A13,  28);
SoftWire sensor8(A14,  29);
SoftWire sensorA(A8,  2);
SoftWire sensorB(A9,  3);
SoftWire sensorC(A10,  18);
SoftWire sensorD(A11,  19);


byte getTemperatureD(){
  static byte temperatura[2]={0,0};
  static char swTxBuffer[16];
  static char swRxBuffer[16];

  sensorD.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
  sensorD.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
  sensorD.setTimeout(10);
  sensorD.begin();

  sensorD.beginTransmission(0x4c); 
  sensorD.write(0x00); 
  sensorD.endTransmission();   

  sensorD.requestFrom(0x4c, 2);   

  for(byte i=0;i<=2;i++){
    if (sensorD.available()>1) { temperatura[i] = sensorD.read();  }  
    else{ 
      temperatura[i] = 0;
    } 
  }
  return temperatura[0];
}

byte getTemperature1(){
  static byte temperatura[2]={0,0};
  static char swTxBuffer[16];
  static char swRxBuffer[16];

  sensor1.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
  sensor1.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
  sensor1.setDelay_us(5);
  sensor1.setTimeout(10);
  sensor1.begin();

  sensor1.beginTransmission(0x4c); 
  sensor1.write(0x00); 
  sensor1.endTransmission();   

  sensor1.requestFrom(0x4c, 2);   

  for(byte i=0;i<=2;i++){
    if (sensor1.available()>1) { temperatura[i] = sensor1.read();  }  
    else{ 
      temperatura[i] = 0;
    } 
  }
  return temperatura[0];
}

byte getTemperature5(){
  static byte temperatura[2]={0,0};
  static char swTxBuffer[16];
  static char swRxBuffer[16];

  sensor5.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
  sensor5.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
  sensor5.setDelay_us(8);
  sensor5.setTimeout(10);
  sensor5.begin();

  sensor5.beginTransmission(0x4c); 
  sensor5.write(0x00); 
  sensor5.endTransmission();   

  sensor5.requestFrom(0x4c, 2);   

  for(byte i=0;i<=2;i++){
    if (sensor5.available()>1) { temperatura[i] = sensor5.read();  }  
    else{ 
      temperatura[i] = 0;
    } 
  }
  return temperatura[0];
}

byte getTemperature6(){
  static byte temperatura[2]={0,0};
  static char swTxBuffer[16];
  static char swRxBuffer[16];

  sensor6.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
  sensor6.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
  sensor6.setDelay_us(5);
  sensor6.setTimeout(10);
  sensor6.begin();

  sensor6.beginTransmission(0x4c); 
  sensor6.write(0x00); 
  sensor6.endTransmission();   

  sensor6.requestFrom(0x4c, 2);   

  for(byte i=0;i<=2;i++){
    if (sensor6.available()>1) { temperatura[i] = sensor6.read();  }  
    else{ 
      temperatura[i] = 0;
    } 
  }
  return temperatura[0];
}

byte getTemperature7(){
  static byte temperatura[2]={0,0};
  static char swTxBuffer[16];
  static char swRxBuffer[16];

  sensor7.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
  sensor7.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
  sensor7.setDelay_us(5);
  sensor7.setTimeout(10);
  sensor7.begin();

  sensor7.beginTransmission(0x4c); 
  sensor7.write(0x00); 
  sensor7.endTransmission();   

  sensor7.requestFrom(0x4c, 2);   

  for(byte i=0;i<=2;i++){
    if (sensor7.available()>1) { temperatura[i] = sensor7.read();  }  
    else{ 
      temperatura[i] = 0;
    } 
  }
  return temperatura[0];
}

byte getTemperature8(){
  static byte temperatura[2]={0,0};
  static char swTxBuffer[16];
  static char swRxBuffer[16];

  sensor8.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
  sensor8.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
  sensor8.setDelay_us(5);
  sensor8.setTimeout(10);
  sensor8.begin();

  sensor8.beginTransmission(0x4c); 
  sensor8.write(0x00); 
  sensor8.endTransmission();   

  sensor8.requestFrom(0x4c, 2);   

  for(byte i=0;i<=2;i++){
    if (sensor8.available()>1) { temperatura[i] = sensor8.read();  }  
    else{ 
      temperatura[i] = 0;
    } 
  }
  return temperatura[0];
}

byte getTemperatureA(){
  static byte temperatura[2]={0,0};
  static char swTxBuffer[16];
  static char swRxBuffer[16];

  sensorA.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
  sensorA.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
  sensorA.setTimeout(10);
  sensorA.begin();

  sensorA.beginTransmission(0x4c); 
  sensorA.write(0x00); 
  sensorA.endTransmission();   

  sensorA.requestFrom(0x4c, 2);   

  for(byte i=0;i<=2;i++){
    if (sensorA.available()>1) { temperatura[i] = sensorA.read();  }  
    else{ 
      temperatura[i] = 0;
    } 
  }
  return temperatura[0];
}

byte getTemperatureB(){
  static byte temperatura[2]={0,0};
  static char swTxBuffer[16];
  static char swRxBuffer[16];

  sensorB.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
  sensorB.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
  sensorB.setDelay_us(5);
  sensorB.setTimeout(10);
  sensorB.begin();

  sensorB.beginTransmission(0x4c); 
  sensorB.write(0x00); 
  sensorB.endTransmission();   

  sensorB.requestFrom(0x4c, 2);   

  for(byte i=0;i<=2;i++){
    if (sensorB.available()>1) { temperatura[i] = sensorB.read();  }  
    else{ 
      temperatura[i] = 0;
    } 
  }
  return temperatura[0];
}

byte getTemperatureC(){
  static byte temperatura[2]={0,0};
  static char swTxBuffer[16];
  static char swRxBuffer[16];

  sensorC.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
  sensorC.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
  sensorC.setTimeout(10);
  sensorC.begin();

  sensorC.beginTransmission(0x4c); 
  sensorC.write(0x00); 
  sensorC.endTransmission();   

  sensorC.requestFrom(0x4c, 2);   

  for(byte i=0;i<=2;i++){
    if (sensorC.available()>1) { temperatura[i] = sensorC.read();  }  
    else{ 
      temperatura[i] = 0;
    } 
  }
  return temperatura[0];
}

// NOVA FUNCAO: Wrapper unificado para gerir as portas de forma limpa no ficheiro principal
byte getTempUnificada(byte porta){
  switch(porta){
    case 1: return getTemperature1();
    case 5: return getTemperature5();
    case 6: return getTemperature6();
    case 7: return getTemperature7();
    case 8: return getTemperature8();
    case 9: return getTemperatureA();
    case 10: return getTemperatureB();
    case 11: return getTemperatureC();
    case 12: return getTemperatureD();
    default: return 0;
  }
}

#endif
