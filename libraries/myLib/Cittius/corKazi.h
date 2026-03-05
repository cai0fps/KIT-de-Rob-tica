#include <OneWireMod.h>

#define P1 1
#define P2 2
#define P3 3
#define P4 4
#define P5 5
#define P6 6
#define P7 7
#define P8 8
#define PA 9
#define PB 10
#define PC 11
#define PD 12

#define LIDO 13
#define R 14
#define G 15
#define B 16
#define REFLETIVO 0

uint8_t cmd1 [2] = {0x12, 0x15}; //comando para configurar o sensor de cor
uint8_t cmd2 [2] = {0x13, 0x15}; //comando para pedir os valores do código da cor e a cor vermelha em rgb
uint8_t cmd3 [2] = {0x14, 0x15}; //comando para pedir os valores das cores verde e azul em rgb

OneWireMega _P1(A3);
OneWireMega _P2(A4);
OneWireMega _P3(A5);
OneWireMega _P4(A6);
OneWireMega _P5(A15);
OneWireMega _P6(A12);
OneWireMega _P7(A13);
OneWireMega _P8(A14);
OneWireMega _PA(A8);
OneWireMega _PB(A9);
OneWireMega _PC(A10);
OneWireMega _PD(A11);


byte lerSensor_de_Cor(byte pin, byte get_){
     static uint8_t CodigoVermelho [2] = {0x00, 0x00}; 
     static uint8_t VerdeAzul [2] = {0x00, 0x00};
     static uint8_t controle = 0;
  switch (pin) {
    case P1:
      if(_P1.reset_sensorCor()&&controle==0){_P1.write_bytes_cor100us(cmd1,2);_P1.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P1.reset_sensorCor()&&controle==1){_P1.write_bytes_cor100us(cmd2,2);_P1.reset_finalSensorCor();_P1.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P1.reset_sensorCor()&&controle==2){_P1.write_bytes_cor100us(cmd3,2);_P1.reset_finalSensorCor();_P1.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
          
    break;
    case P2:
      if(_P2.reset_sensorCor()&&controle==0){_P2.write_bytes_cor100us(cmd1,2);_P2.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P2.reset_sensorCor()&&controle==1){_P2.write_bytes_cor100us(cmd2,2);_P2.reset_finalSensorCor();_P2.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P2.reset_sensorCor()&&controle==2){_P2.write_bytes_cor100us(cmd3,2);_P2.reset_finalSensorCor();_P2.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;
    case P3:
      if(_P3.reset_sensorCor()&&controle==0){_P3.write_bytes_cor100us(cmd1,2);_P3.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P3.reset_sensorCor()&&controle==1){_P3.write_bytes_cor100us(cmd2,2);_P3.reset_finalSensorCor();_P3.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P3.reset_sensorCor()&&controle==2){_P3.write_bytes_cor100us(cmd3,2);_P3.reset_finalSensorCor();_P3.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;
    case P4:
      if(_P4.reset_sensorCor()&&controle==0){_P4.write_bytes_cor100us(cmd1,2);_P4.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P4.reset_sensorCor()&&controle==1){_P4.write_bytes_cor100us(cmd2,2);_P4.reset_finalSensorCor();_P4.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P4.reset_sensorCor()&&controle==2){_P4.write_bytes_cor100us(cmd3,2);_P4.reset_finalSensorCor();_P4.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case P5:
      if(_P5.reset_sensorCor()&&controle==0){_P5.write_bytes_cor100us(cmd1,2);_P5.reset_finalSensorCor();controle=1;}
          delay(10);
          if(_P5.reset_sensorCor()&&controle==1){_P5.write_bytes_cor100us(cmd2,2);_P5.reset_finalSensorCor();_P5.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P5.reset_sensorCor()&&controle==2){_P5.write_bytes_cor100us(cmd3,2);_P5.reset_finalSensorCor();_P5.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case P6:
      if(_P6.reset_sensorCor()&&controle==0){_P6.write_bytes_cor100us(cmd1,2);_P6.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P6.reset_sensorCor()&&controle==1){_P6.write_bytes_cor100us(cmd2,2);_P6.reset_finalSensorCor();_P6.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P6.reset_sensorCor()&&controle==2){_P6.write_bytes_cor100us(cmd3,2);_P6.reset_finalSensorCor();_P6.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case P7:
      if(_P7.reset_sensorCor()&&controle==0){_P7.write_bytes_cor100us(cmd1,2);_P7.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P7.reset_sensorCor()&&controle==1){_P7.write_bytes_cor100us(cmd2,2);_P7.reset_finalSensorCor();_P7.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P7.reset_sensorCor()&&controle==2){_P7.write_bytes_cor100us(cmd3,2);_P7.reset_finalSensorCor();_P7.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case P8:
      if(_P8.reset_sensorCor()&&controle==0){_P8.write_bytes_cor100us(cmd1,2);_P8.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P8.reset_sensorCor()&&controle==1){_P8.write_bytes_cor100us(cmd2,2);_P8.reset_finalSensorCor();_P8.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P8.reset_sensorCor()&&controle==2){_P8.write_bytes_cor100us(cmd3,2);_P8.reset_finalSensorCor();_P8.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case PA:
      if(_PA.reset_sensorCor()&&controle==0){_PA.write_bytes_cor100us(cmd1,2);_PA.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_PA.reset_sensorCor()&&controle==1){_PA.write_bytes_cor100us(cmd2,2);_PA.reset_finalSensorCor();_PA.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_PA.reset_sensorCor()&&controle==2){_PA.write_bytes_cor100us(cmd3,2);_PA.reset_finalSensorCor();_PA.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case PB:
      if(_PB.reset_sensorCor()&&controle==0){_PB.write_bytes_cor100us(cmd1,2);_PB.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_PB.reset_sensorCor()&&controle==1){_PB.write_bytes_cor100us(cmd2,2);_PB.reset_finalSensorCor();_PB.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_PB.reset_sensorCor()&&controle==2){_PB.write_bytes_cor100us(cmd3,2);_PB.reset_finalSensorCor();_PB.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];

            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case PC:
      if(_PC.reset_sensorCor()&&controle==0){_PC.write_bytes_cor100us(cmd1,2);_PC.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_PC.reset_sensorCor()&&controle==1){_PC.write_bytes_cor100us(cmd2,2);_PC.reset_finalSensorCor();_PC.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_PC.reset_sensorCor()&&controle==2){_PC.write_bytes_cor100us(cmd3,2);_PC.reset_finalSensorCor();_PC.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
               Serial.println("G:");
               Serial.println(VerdeAzul[0]);
              return VerdeAzul[0];
            break;
            case M2:
               Serial.println("B:");
               Serial.println(VerdeAzul[1]);
              return VerdeAzul[1];
            break;
            case R:
               Serial.println("R:");
               Serial.println(CodigoVermelho[1]);
              return CodigoVermelho[1];
             
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case PD:
      if(_PD.reset_sensorCor()&&controle==0){_PD.write_bytes_cor100us(cmd1,2);_PD.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_PD.reset_sensorCor()&&controle==1){_PD.write_bytes_cor100us(cmd2,2);_PD.reset_finalSensorCor();_PD.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_PD.reset_sensorCor()&&controle==2){_PD.write_bytes_cor100us(cmd3,2);_PD.reset_finalSensorCor();_PD.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;
  }
}
