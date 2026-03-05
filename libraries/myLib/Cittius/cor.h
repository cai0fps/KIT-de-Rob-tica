#include <SoftWire.h>
#include <SoftwareSerial.h>

//#define DEBUG

// Novas variáveis dinâmicas para calibração de cor (Substituem os antigos #defines fixos)
uint16_t threshBlack = 30;
uint16_t threshWhite = 100;

// NOVA FUNÇÃO: Permite calibrar o sensor em tempo de execução
void setColorThresholds(uint16_t newBlack, uint16_t newWhite) {
  threshBlack = newBlack;
  threshWhite = newWhite;
}

// NOVA FUNÇÃO: Converte valores RGB separados num formato HEX para o Display TFT
uint32_t getRGBHex(byte r, byte g, byte b) {
  return ((uint32_t)r << 16) | ((uint32_t)g << 8) | b;
}

/*
bool enaI2C1=false,enaI2C2=false,enaI2C3=false,enaI2C5=false,enaI2C6=false,enaI2C7=false,enaI2C8=false,
     enaI2CA=false,enaI2CB=false,enaI2CC=false,enaI2CD=false;
*/

SoftWire I2Csensor1(A3,  22);
SoftWire I2CsensorA(A8,  2);
SoftWire I2CsensorB(A9,  3); 
SoftWire I2CsensorC(A10, 18); 
SoftWire I2CsensorD(A11, 19);
SoftWire I2Csensor5(A15, 4); 
SoftWire I2Csensor6(A12, 53);
SoftWire I2Csensor7(A13, 28);
SoftWire I2Csensor8(A14, 29);


byte getColorSensor1(byte mode){
  uint8_t  clearL,redL,greenL,blueL,lastColor;
  static char swTxBuffer[16];
  static char swRxBuffer[16];
 // if(!enaI2C1){
    I2Csensor1.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
    I2Csensor1.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
    I2Csensor1.setTimeout_ms(2);
    I2Csensor1.beginTransmission(0x39);   
    I2Csensor1.write(0x92);                     
    I2Csensor1.endTransmission();

#ifdef DEBUG
    I2Csensor1.requestFrom(0x39, 1);
    if(I2Csensor1.available()){                 
      Serial.print("ADDR: 0x");           
      Serial.println(I2Csensor1.read(),HEX); 
    }
#endif
    I2Csensor1.beginTransmission(0x39);   
    I2Csensor1.write(0x81);                     
    I2Csensor1.write(0xFF);                      
    I2Csensor1.endTransmission();               

    I2Csensor1.beginTransmission(0x39);   
    I2Csensor1.write(0x8F);                     
    I2Csensor1.write(0x02);                     
    I2Csensor1.endTransmission();                

    I2Csensor1.beginTransmission(0x39);   
    I2Csensor1.write(0x80);                     
    I2Csensor1.write(0x0B);                     
    I2Csensor1.endTransmission();                    
 //   enaI2C1=true;
//  }

    I2Csensor1.beginTransmission(0x39);   
    I2Csensor1.write(0x94);                     
    I2Csensor1.endTransmission();              

    I2Csensor1.requestFrom(0x39, 1);      
    
    if(I2Csensor1.available()){                 
      clearL = I2Csensor1.read();
    }

    I2Csensor1.beginTransmission(0x39);   
    I2Csensor1.write(0x96);                     
    I2Csensor1.endTransmission();               

    I2Csensor1.requestFrom(0x39, 1);      
    
    if(I2Csensor1.available()){                 
      redL = I2Csensor1.read();
    }

    I2Csensor1.beginTransmission(0x39);   
    I2Csensor1.write(0x98);                     
    I2Csensor1.endTransmission();               

    I2Csensor1.requestFrom(0x39, 1);      
    
    if(I2Csensor1.available()){                 
      greenL = I2Csensor1.read();
    }

    I2Csensor1.beginTransmission(0x39);   
    I2Csensor1.write(0x9A);                     
    I2Csensor1.endTransmission();               

    I2Csensor1.requestFrom(0x39, 1);      
    if(I2Csensor1.available()){                 
      blueL = I2Csensor1.read();
    }

    switch(mode){
      case 0x00:
        if (clearL < threshBlack) {
          lastColor = 7; 
        } else if (clearL > threshWhite) {
          lastColor = 6; 
        } else if (greenL > redL && greenL > blueL) {
          if (redL > blueL) {
            lastColor = 4; // Yellow
          } else {
            lastColor = 2; // Green
          }
        } else if (blueL > redL && blueL > greenL && clearL>50 && clearL<70) {
          lastColor = 3; 
        } else if (redL > blueL && greenL > blueL) {
          lastColor = 4; // Yellow
        } else if (redL > blueL && greenL < blueL) {
          lastColor = 1; 
        } else {
          lastColor = 8; // Unknown or Orange
        }
        return lastColor;
      break;        
      case 0x01:
        return clearL;
      break;
      case 0x02:
        return redL;
      break;
      case 0x03:
        return greenL;
      break;
      case 0x04:
        return blueL;
      break;
    }
}

byte getColorSensorA(byte mode){
  uint8_t  clearL,redL,greenL,blueL,lastColor;
  static char swTxBuffer[16];
  static char swRxBuffer[16];
//  if(!enaI2C2){
    I2CsensorA.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
    I2CsensorA.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
    I2CsensorA.setTimeout_ms(2);

    uint8_t errors = 0;

    errors += I2CsensorA.repeatedStart(0X39, SoftWire::readMode);
    I2CsensorA.stop();

    if(errors==0){

    I2CsensorA.beginTransmission(0x39);   
    I2CsensorA.write(0x92);                     
    I2CsensorA.endTransmission();

#ifdef DEBUG
    I2CsensorA.requestFrom(0x39, 1);
    if(I2CsensorA.available()){                 
      Serial.print("ADDR: 0x");           
      Serial.println(I2CsensorA.read(),HEX); 
    }
#endif
    I2CsensorA.beginTransmission(0x39);   
    I2CsensorA.write(0x81);                     
    I2CsensorA.write(0xFF);                      
    I2CsensorA.endTransmission();               

    I2CsensorA.beginTransmission(0x39);   
    I2CsensorA.write(0x8F);                     
    I2CsensorA.write(0x02);                     
    I2CsensorA.endTransmission();                

    I2CsensorA.beginTransmission(0x39);   
    I2CsensorA.write(0x80);                     
    I2CsensorA.write(0x0B);                     
    I2CsensorA.endTransmission();                    
  //  enaI2C2=true;
 // }

    I2CsensorA.beginTransmission(0x39);   
    I2CsensorA.write(0x94);                     
    I2CsensorA.endTransmission();              

    I2CsensorA.requestFrom(0x39, 1);      
    
    if(I2CsensorA.available()){                 
      clearL = I2CsensorA.read();
    }

    I2CsensorA.beginTransmission(0x39);   
    I2CsensorA.write(0x96);                     
    I2CsensorA.endTransmission();               

    I2CsensorA.requestFrom(0x39, 1);      
    
    if(I2CsensorA.available()){                 
      redL = I2CsensorA.read();
    }

    I2CsensorA.beginTransmission(0x39);   
    I2CsensorA.write(0x98);                     
    I2CsensorA.endTransmission();               

    I2CsensorA.requestFrom(0x39, 1);      
    
    if(I2CsensorA.available()){                 
      greenL = I2CsensorA.read();
    }

    I2CsensorA.beginTransmission(0x39);   
    I2CsensorA.write(0x9A);                     
    I2CsensorA.endTransmission();               

    I2CsensorA.requestFrom(0x39, 1);      
    if(I2CsensorA.available()){                 
      blueL = I2CsensorA.read();
    }

    switch(mode){
      case 0x00:
        if (clearL < threshBlack) {
          lastColor = 7; 
        } else if (clearL > threshWhite) {
          lastColor = 6; 
        } else if (greenL > redL && greenL > blueL) {
          if (redL > blueL) {
            lastColor = 4; // Yellow
          } else {
            lastColor = 2; // Green
          }
        } else if (blueL > redL && blueL > greenL) {
          lastColor = 3; 
        } else if (redL > blueL && greenL > blueL) {
          lastColor = 4; // Yellow
        } else if (redL > blueL && greenL < blueL) {
          lastColor = 1; 
        } else {
          lastColor = 8; // Unknown or Orange
        }

      if(errors == 0 ){
        return lastColor;
      }else{
        lastColor = 8;
        return lastColor;
      }
      
      break;        
      case 0x01:
        return clearL;
      break;
      case 0x02:
        return redL;
      break;
      case 0x03:
        return greenL;
      break;
      case 0x04:
        return blueL;
      break;
    }
  }else{
    lastColor = 8;
    return lastColor;
  }
}

byte getColorSensorB(byte mode){
  uint8_t  clearL,redL,greenL,blueL,lastColor;
  static char swTxBuffer[16];
  static char swRxBuffer[16];

 // if(!enaI2C3){
    I2CsensorB.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
    I2CsensorB.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
    I2CsensorB.setTimeout_ms(2);

    I2CsensorB.beginTransmission(0x39);   
    I2CsensorB.write(0x92);                     
    I2CsensorB.endTransmission();

#ifdef DEBUG
    I2CsensorB.requestFrom(0x39, 1);
    if(I2CsensorB.available()){                 
      Serial.print("ADDR: 0x");           
      Serial.println(I2CsensorB.read(),HEX); 
    }
#endif
    I2CsensorB.beginTransmission(0x39);   
    I2CsensorB.write(0x81);                     
    I2CsensorB.write(0xFF);                      
    I2CsensorB.endTransmission();               

    I2CsensorB.beginTransmission(0x39);   
    I2CsensorB.write(0x8F);                     
    I2CsensorB.write(0x02);                     
    I2CsensorB.endTransmission();                

    I2CsensorB.beginTransmission(0x39);   
    I2CsensorB.write(0x80);                     
    I2CsensorB.write(0x0B);                     
    I2CsensorB.endTransmission();                    
  //  enaI2C3=true;
  //}

    I2CsensorB.beginTransmission(0x39);   
    I2CsensorB.write(0x94);                     
    I2CsensorB.endTransmission();              

    I2CsensorB.requestFrom(0x39, 1);      
    
    if(I2CsensorB.available()){                 
      clearL = I2CsensorB.read();
    }

    I2CsensorB.beginTransmission(0x39);   
    I2CsensorB.write(0x96);                     
    I2CsensorB.endTransmission();               

    I2CsensorB.requestFrom(0x39, 1);      
    
    if(I2CsensorB.available()){                 
      redL = I2CsensorB.read();
    }

    I2CsensorB.beginTransmission(0x39);   
    I2CsensorB.write(0x98);                     
    I2CsensorB.endTransmission();               

    I2CsensorB.requestFrom(0x39, 1);      
    
    if(I2CsensorB.available()){                 
      greenL = I2CsensorB.read();
    }

    I2CsensorB.beginTransmission(0x39);   
    I2CsensorB.write(0x9A);                     
    I2CsensorB.endTransmission();               

    I2CsensorB.requestFrom(0x39, 1);      
    if(I2CsensorB.available()){                 
      blueL = I2CsensorB.read();
    }

    switch(mode){
      case 0x00:
        if (clearL < threshBlack) {
          lastColor = 7; 
        } else if (clearL > threshWhite) {
          lastColor = 6; 
        } else if (greenL > redL && greenL > blueL) {
          if (redL > blueL) {
            lastColor = 4; // Yellow
          } else {
            lastColor = 2; // Green
          }
        } else if (blueL > redL && blueL > greenL) {
          lastColor = 3; 
        } else if (redL > blueL && greenL > blueL) {
          lastColor = 4; // Yellow
        } else if (redL > blueL && greenL < blueL) {
          lastColor = 1; 
        } else {
          lastColor = 8; // Unknown or Orange
        }

        return lastColor;
      break;        
      case 0x01:
        return clearL;
      break;
      case 0x02:
        return redL;
      break;
      case 0x03:
        return greenL;
      break;
      case 0x04:
        return blueL;
      break;
    }
}

byte getColorSensorC(byte mode){
  uint8_t  clearL,redL,greenL,blueL,lastColor;
  static char swTxBuffer[16];
  static char swRxBuffer[16];

 // if(!enaI2C3){
    I2CsensorC.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
    I2CsensorC.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
    I2CsensorC.setTimeout_ms(2);

    I2CsensorC.beginTransmission(0x39);   
    I2CsensorC.write(0x92);                     
    I2CsensorC.endTransmission();

#ifdef DEBUG
    I2CsensorC.requestFrom(0x39, 1);
    if(I2CsensorC.available()){                 
      Serial.print("ADDR: 0x");           
      Serial.println(I2CsensorC.read(),HEX); 
    }
#endif
    I2CsensorC.beginTransmission(0x39);   
    I2CsensorC.write(0x81);                     
    I2CsensorC.write(0xFF);                      
    I2CsensorC.endTransmission();               

    I2CsensorC.beginTransmission(0x39);   
    I2CsensorC.write(0x8F);                     
    I2CsensorC.write(0x02);                     
    I2CsensorC.endTransmission();                

    I2CsensorC.beginTransmission(0x39);   
    I2CsensorC.write(0x80);                     
    I2CsensorC.write(0x0B);                     
    I2CsensorC.endTransmission();                    
  //  enaI2C3=true;
  //}

    I2CsensorC.beginTransmission(0x39);   
    I2CsensorC.write(0x94);                     
    I2CsensorC.endTransmission();              

    I2CsensorC.requestFrom(0x39, 1);      
    
    if(I2CsensorC.available()){                 
      clearL = I2CsensorC.read();
    }

    I2CsensorC.beginTransmission(0x39);   
    I2CsensorC.write(0x96);                     
    I2CsensorC.endTransmission();               

    I2CsensorC.requestFrom(0x39, 1);      
    
    if(I2CsensorC.available()){                 
      redL = I2CsensorC.read();
    }

    I2CsensorC.beginTransmission(0x39);   
    I2CsensorC.write(0x98);                     
    I2CsensorC.endTransmission();               

    I2CsensorC.requestFrom(0x39, 1);      
    
    if(I2CsensorC.available()){                 
      greenL = I2CsensorC.read();
    }

    I2CsensorC.beginTransmission(0x39);   
    I2CsensorC.write(0x9A);                     
    I2CsensorC.endTransmission();               

    I2CsensorC.requestFrom(0x39, 1);      
    if(I2CsensorC.available()){                 
      blueL = I2CsensorC.read();
    }

    switch(mode){
      case 0x00:
        if (clearL < threshBlack) {
          lastColor = 7; 
        } else if (clearL > threshWhite) {
          lastColor = 6; 
        } else if (greenL > redL && greenL > blueL) {
          if (redL > blueL) {
            lastColor = 4; // Yellow
          } else {
            lastColor = 2; // Green
          }
        } else if (blueL > redL && blueL > greenL) {
          lastColor = 3; 
        } else if (redL > blueL && greenL > blueL) {
          lastColor = 4; // Yellow
        } else if (redL > blueL && greenL < blueL) {
          lastColor = 1; 
        } else {
          lastColor = 8; // Unknown or Orange
        }

        return lastColor;
      break;        
      case 0x01:
        return clearL;
      break;
      case 0x02:
        return redL;
      break;
      case 0x03:
        return greenL;
      break;
      case 0x04:
        return blueL;
      break;
    }
}

byte getColorSensorD(byte mode){
  uint8_t  clearL,redL,greenL,blueL,lastColor;
  static char swTxBuffer[16];
  static char swRxBuffer[16];

 // if(!enaI2C3){
    I2CsensorD.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
    I2CsensorD.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
    I2CsensorD.setTimeout_ms(2);

    I2CsensorD.beginTransmission(0x39);   
    I2CsensorD.write(0x92);                     
    I2CsensorD.endTransmission();

#ifdef DEBUG
    I2CsensorD.requestFrom(0x39, 1);
    if(I2CsensorD.available()){                 
      Serial.print("ADDR: 0x");           
      Serial.println(I2CsensorD.read(),HEX); 
    }
#endif
    I2CsensorD.beginTransmission(0x39);   
    I2CsensorD.write(0x81);                     
    I2CsensorD.write(0xFF);                      
    I2CsensorD.endTransmission();               

    I2CsensorD.beginTransmission(0x39);   
    I2CsensorD.write(0x8F);                     
    I2CsensorD.write(0x02);                     
    I2CsensorD.endTransmission();                

    I2CsensorD.beginTransmission(0x39);   
    I2CsensorD.write(0x80);                     
    I2CsensorD.write(0x0B);                     
    I2CsensorD.endTransmission();                    
  //  enaI2C3=true;
  //}

    I2CsensorD.beginTransmission(0x39);   
    I2CsensorD.write(0x94);                     
    I2CsensorD.endTransmission();              

    I2CsensorD.requestFrom(0x39, 1);      
    
    if(I2CsensorD.available()){                 
      clearL = I2CsensorD.read();
    }

    I2CsensorD.beginTransmission(0x39);   
    I2CsensorD.write(0x96);                     
    I2CsensorD.endTransmission();               

    I2CsensorD.requestFrom(0x39, 1);      
    
    if(I2CsensorD.available()){                 
      redL = I2CsensorD.read();
    }

    I2CsensorD.beginTransmission(0x39);   
    I2CsensorD.write(0x98);                     
    I2CsensorD.endTransmission();               

    I2CsensorD.requestFrom(0x39, 1);      
    
    if(I2CsensorD.available()){                 
      greenL = I2CsensorD.read();
    }

    I2CsensorD.beginTransmission(0x39);   
    I2CsensorD.write(0x9A);                     
    I2CsensorD.endTransmission();               

    I2CsensorD.requestFrom(0x39, 1);      
    if(I2CsensorD.available()){                 
      blueL = I2CsensorD.read();
    }

    switch(mode){
      case 0x00:
        if (clearL < threshBlack) {
          lastColor = 7; 
        } else if (clearL > threshWhite) {
          lastColor = 6; 
        } else if (greenL > redL && greenL > blueL) {
          if (redL > blueL) {
            lastColor = 4; // Yellow
          } else {
            lastColor = 2; // Green
          }
        } else if (blueL > redL && blueL > greenL) {
          lastColor = 3; 
        } else if (redL > blueL && greenL > blueL) {
          lastColor = 4; // Yellow
        } else if (redL > blueL && greenL < blueL) {
          lastColor = 1; 
        } else {
          lastColor = 8; // Unknown or Orange
        }

        return lastColor;
      break;        
      case 0x01:
        return clearL;
      break;
      case 0x02:
        return redL;
      break;
      case 0x03:
        return greenL;
      break;
      case 0x04:
        return blueL;
      break;
    }
}

byte getColorSensor5(byte mode){
  uint8_t  clearL,redL,greenL,blueL,lastColor;
  static char swTxBuffer[16];
  static char swRxBuffer[16];
 // if(!enaI2C5){
    I2Csensor5.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
    I2Csensor5.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
    I2Csensor5.setTimeout_ms(2);
    I2Csensor5.beginTransmission(0x39);   
    I2Csensor5.write(0x92);                     
    I2Csensor5.endTransmission();

#ifdef DEBUG
    I2Csensor5.requestFrom(0x39, 1);
    if(I2Csensor5.available()){                 
      Serial.print("ADDR: 0x");           
      Serial.println(I2Csensor5.read(),HEX); 
    }
#endif
    I2Csensor5.beginTransmission(0x39);   
    I2Csensor5.write(0x81);                     
    I2Csensor5.write(0xFF);                      
    I2Csensor5.endTransmission();               

    I2Csensor5.beginTransmission(0x39);   
    I2Csensor5.write(0x8F);                     
    I2Csensor5.write(0x02);                     
    I2Csensor5.endTransmission();                

    I2Csensor5.beginTransmission(0x39);   
    I2Csensor5.write(0x80);                     
    I2Csensor5.write(0x0B);                     
    I2Csensor5.endTransmission();                    
  //  enaI2C5=true;
  //}

    I2Csensor5.beginTransmission(0x39);   
    I2Csensor5.write(0x94);                     
    I2Csensor5.endTransmission();              

    I2Csensor5.requestFrom(0x39, 1);      
    
    if(I2Csensor5.available()){                 
      clearL = I2Csensor5.read();
    }

    I2Csensor5.beginTransmission(0x39);   
    I2Csensor5.write(0x96);                     
    I2Csensor5.endTransmission();               

    I2Csensor5.requestFrom(0x39, 1);      
    
    if(I2Csensor5.available()){                 
      redL = I2Csensor5.read();
    }

    I2Csensor5.beginTransmission(0x39);   
    I2Csensor5.write(0x98);                     
    I2Csensor5.endTransmission();               

    I2Csensor5.requestFrom(0x39, 1);      
    
    if(I2Csensor5.available()){                 
      greenL = I2Csensor5.read();
    }

    I2Csensor5.beginTransmission(0x39);   
    I2Csensor5.write(0x9A);                     
    I2Csensor5.endTransmission();               

    I2Csensor5.requestFrom(0x39, 1);      
    if(I2Csensor5.available()){                 
      blueL = I2Csensor5.read();
    }

    switch(mode){
      case 0x00:
        if(clearL < threshBlack){
          lastColor = 7;
        }else{
          if(clearL >= threshWhite){
            lastColor = 6;
          }else{
          if (greenL > redL && greenL > blueL) {
            if (redL > blueL) {
              lastColor = 4; // Yellow
            } else {
              lastColor = 2; // Green
            }
          } else if (blueL > redL && blueL > greenL) {
            lastColor = 3; 
          } else if (redL > blueL && greenL > blueL) {
            lastColor = 4; // Yellow
          } else if (redL > blueL && greenL < blueL) {
            lastColor = 1; 
          } else {
            lastColor = 8; // Unknown or Orange
          } 
        }       
       }
      return lastColor;
      break;        
      case 0x01:
        return clearL;
      break;
      case 0x02:
        return redL;
      break;
      case 0x03:
        return greenL;
      break;
      case 0x04:
        return blueL;
      break;
    }
}

byte getColorSensor6(byte mode){
  uint8_t  clearL,redL,greenL,blueL,lastColor;
  static char swTxBuffer[16];
  static char swRxBuffer[16];
  //if(!enaI2C6){
    I2Csensor6.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
    I2Csensor6.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
    I2Csensor6.setTimeout_ms(2);
    I2Csensor6.beginTransmission(0x39);   
    I2Csensor6.write(0x92);                     
    I2Csensor6.endTransmission();

#ifdef DEBUG
    I2Csensor6.requestFrom(0x39, 1);
    if(I2Csensor6.available()){                 
      Serial.print("ADDR: 0x");           
      Serial.println(I2Csensor6.read(),HEX); 
    }
#endif
    I2Csensor6.beginTransmission(0x39);   
    I2Csensor6.write(0x81);                     
    I2Csensor6.write(0xFF);                      
    I2Csensor6.endTransmission();               

    I2Csensor6.beginTransmission(0x39);   
    I2Csensor6.write(0x8F);                     
    I2Csensor6.write(0x02);                     
    I2Csensor6.endTransmission();                

    I2Csensor6.beginTransmission(0x39);   
    I2Csensor6.write(0x80);                     
    I2Csensor6.write(0x0B);                     
    I2Csensor6.endTransmission();                    
  //  enaI2C6=true;
  //}

    I2Csensor6.beginTransmission(0x39);   
    I2Csensor6.write(0x94);                     
    I2Csensor6.endTransmission();              

    I2Csensor6.requestFrom(0x39, 1);      
    
    if(I2Csensor6.available()){                 
      clearL = I2Csensor6.read();
    }

    I2Csensor6.beginTransmission(0x39);   
    I2Csensor6.write(0x96);                     
    I2Csensor6.endTransmission();               

    I2Csensor6.requestFrom(0x39, 1);      
    
    if(I2Csensor6.available()){                 
      redL = I2Csensor6.read();
    }

    I2Csensor6.beginTransmission(0x39);   
    I2Csensor6.write(0x98);                     
    I2Csensor6.endTransmission();               

    I2Csensor6.requestFrom(0x39, 1);      
    
    if(I2Csensor6.available()){                 
      greenL = I2Csensor6.read();
    }

    I2Csensor6.beginTransmission(0x39);   
    I2Csensor6.write(0x9A);                     
    I2Csensor6.endTransmission();               

    I2Csensor6.requestFrom(0x39, 1);      
    if(I2Csensor6.available()){                 
      blueL = I2Csensor6.read();
    }

    switch(mode){
      case 0x00:
        if (clearL < threshBlack) {
          lastColor = 7; 
        } else if (clearL > threshWhite) {
          lastColor = 6; 
        } else if (greenL > redL && greenL > blueL) {
          if (redL > blueL) {
            lastColor = 4; // Yellow
          } else {
            lastColor = 2; // Green
          }
        } else if (blueL > redL && blueL > greenL) {
          lastColor = 3; 
        } else if (redL > blueL && greenL > blueL) {
          lastColor = 4; // Yellow
        } else if (redL > blueL && greenL < blueL) {
          lastColor = 1; 
        } else {
          lastColor = 8; // Unknown or Orange
        }

        return lastColor;
      break;        
      case 0x01:
        return clearL;
      break;
      case 0x02:
        return redL;
      break;
      case 0x03:
        return greenL;
      break;
      case 0x04:
        return blueL;
      break;
    }
}

byte getColorSensor7(byte mode){
  uint8_t  clearL,redL,greenL,blueL,lastColor;
  static char swTxBuffer[16];
  static char swRxBuffer[16];
  //if(!enaI2C7){
    I2Csensor7.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
    I2Csensor7.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
    I2Csensor7.setTimeout_ms(2);
    I2Csensor7.beginTransmission(0x39);   
    I2Csensor7.write(0x92);                     
    I2Csensor7.endTransmission();

#ifdef DEBUG
    I2Csensor7.requestFrom(0x39, 1);
    if(I2Csensor7.available()){                 
      Serial.print("ADDR: 0x");           
      Serial.println(I2Csensor7.read(),HEX); 
    }
#endif
    I2Csensor7.beginTransmission(0x39);   
    I2Csensor7.write(0x81);                     
    I2Csensor7.write(0xFF);                      
    I2Csensor7.endTransmission();               

    I2Csensor7.beginTransmission(0x39);   
    I2Csensor7.write(0x8F);                     
    I2Csensor7.write(0x02);                     
    I2Csensor7.endTransmission();                

    I2Csensor7.beginTransmission(0x39);   
    I2Csensor7.write(0x80);                     
    I2Csensor7.write(0x0B);                     
    I2Csensor7.endTransmission();                    
  //  enaI2C7=true;
  //}

    I2Csensor7.beginTransmission(0x39);   
    I2Csensor7.write(0x94);                     
    I2Csensor7.endTransmission();              

    I2Csensor7.requestFrom(0x39, 1);      
    
    if(I2Csensor7.available()){                 
      clearL = I2Csensor7.read();
    }

    I2Csensor7.beginTransmission(0x39);   
    I2Csensor7.write(0x96);                     
    I2Csensor7.endTransmission();               

    I2Csensor7.requestFrom(0x39, 1);      
    
    if(I2Csensor7.available()){                 
      redL = I2Csensor7.read();
    }

    I2Csensor7.beginTransmission(0x39);   
    I2Csensor7.write(0x98);                     
    I2Csensor7.endTransmission();               

    I2Csensor7.requestFrom(0x39, 1);      
    
    if(I2Csensor7.available()){                 
      greenL = I2Csensor7.read();
    }

    I2Csensor7.beginTransmission(0x39);   
    I2Csensor7.write(0x9A);                     
    I2Csensor7.endTransmission();               

    I2Csensor7.requestFrom(0x39, 1);      
    if(I2Csensor7.available()){                 
      blueL = I2Csensor7.read();
    }

    switch(mode){
      case 0x00:
        if (clearL < threshBlack) {
          lastColor = 7; 
        } else if (clearL > threshWhite) {
          lastColor = 6; 
        } else if (greenL > redL && greenL > blueL) {
            lastColor = 2; // Green
   
        } else if (blueL > redL && blueL > greenL && clearL) {
          lastColor = 3; 
        } else if (redL > blueL && greenL > blueL && greenL > 25) {
          lastColor = 4; // Yellow
        } else if (redL > blueL && greenL > blueL &&  greenL < 20) {
          lastColor = 5; // Yellow
        } else if (redL > blueL && redL > greenL) {
          lastColor = 1; 
        } else {
          lastColor = 8; // Unknown or Orange
        }

        return lastColor;
      break;        
      case 0x01:
        return clearL;
      break;
      case 0x02:
        return redL;
      break;
      case 0x03:
        return greenL;
      break;
      case 0x04:
        return blueL;
      break;
    }
}

byte getColorSensor8(byte mode){
  uint8_t  clearL,redL,greenL,blueL,lastColor;
  static char swTxBuffer[16];
  static char swRxBuffer[16];
  //if(!enaI2C8){
    I2Csensor8.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
    I2Csensor8.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
    I2Csensor8.setTimeout_ms(2);
    I2Csensor8.beginTransmission(0x39);   
    I2Csensor8.write(0x92);                     
    I2Csensor8.endTransmission();

#ifdef DEBUG
    I2Csensor8.requestFrom(0x39, 1);
    if(I2Csensor8.available()){                 
      Serial.print("ADDR: 0x");           
      Serial.println(I2Csensor8.read(),HEX); 
    }
#endif
    I2Csensor8.beginTransmission(0x39);   
    I2Csensor8.write(0x81);                     
    I2Csensor8.write(0xFF);                      
    I2Csensor8.endTransmission();               

    I2Csensor8.beginTransmission(0x39);   
    I2Csensor8.write(0x8F);                     
    I2Csensor8.write(0x02);                     
    I2Csensor8.endTransmission();                

    I2Csensor8.beginTransmission(0x39);   
    I2Csensor8.write(0x80);                     
    I2Csensor8.write(0x0B);                     
    I2Csensor8.endTransmission();                    
  //  enaI2C8=true;
 // }

    I2Csensor8.beginTransmission(0x39);   
    I2Csensor8.write(0x94);                     
    I2Csensor8.endTransmission();              

    I2Csensor8.requestFrom(0x39, 1);      
    
    if(I2Csensor8.available()){                 
      clearL = I2Csensor8.read();
    }

    I2Csensor8.beginTransmission(0x39);   
    I2Csensor8.write(0x96);                     
    I2Csensor8.endTransmission();               

    I2Csensor8.requestFrom(0x39, 1);      
    
    if(I2Csensor8.available()){                 
      redL = I2Csensor8.read();
    }

    I2Csensor8.beginTransmission(0x39);   
    I2Csensor8.write(0x98);                     
    I2Csensor8.endTransmission();               

    I2Csensor8.requestFrom(0x39, 1);      
    
    if(I2Csensor8.available()){                 
      greenL = I2Csensor8.read();
    }

    I2Csensor8.beginTransmission(0x39);   
    I2Csensor8.write(0x9A);                     
    I2Csensor8.endTransmission();               

    I2Csensor8.requestFrom(0x39, 1);      
    if(I2Csensor8.available()){                 
      blueL = I2Csensor8.read();
    }

    switch(mode){
      case 0x00:
        if (clearL < threshBlack) {
          lastColor = 7; 
        } else if (clearL > threshWhite) {
          lastColor = 6; 
        } else if (greenL > redL && greenL > blueL) {
            lastColor = 2; // Green
   
        } else if (blueL > redL && blueL > greenL) {
          lastColor = 3; 
        } else if (redL > blueL && greenL > blueL && greenL > 25) {
          lastColor = 4; // Yellow
        } else if (redL > blueL && greenL > blueL &&  greenL < 20) {
          lastColor = 5; // Yellow
        } else if (redL > blueL && redL > greenL) {
          lastColor = 1; 
        } else {
          lastColor = 8; // Unknown or Orange
        }

        return lastColor;
      break;        
      case 0x01:
        return clearL;
      break;
      case 0x02:
        return redL;
      break;
      case 0x03:
        return greenL;
      break;
      case 0x04:
        return blueL;
      break;
    }
}
