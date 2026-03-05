/*
Sketch usa 6.198 bytes (2%) de espaço de armazenamento do programa. O máximo é 253.952 bytes.
As variáveis globais usam 701 bytes (8%) de memória dinâmica, deixando 7.491 bytes para variáveis locais. O máximo é 8.192 bytes.
*/

#include "initSotWire.h"

int16_t sensorMovimento(uint8_t PORT, uint8_t mode){
  switch(PORT){

    case 1:
      int16_t accelX_1, accelY_1, accelZ_1; 
      int16_t gyroX_1, gyroY_1, gyroZ_1;

      I2C_1.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
      I2C_1.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
      I2C_1.begin();
      I2C_1.setTimeout_ms(10);

      I2C_1.beginTransmission(MPU6050_ADDRESS);
      I2C_1.write(MPU6050_PWR_MGMT_1);
      I2C_1.write(0x00); // Ativa o MPU6050 (desativa o modo de suspensão)
      I2C_1.endTransmission();

      // Leitura dos valores da aceleração
      I2C_1.beginTransmission(MPU6050_ADDRESS);
      I2C_1.write(MPU6050_ACCEL_XOUT_H);
      I2C_1.endTransmission(false);
      I2C_1.requestFrom(MPU6050_ADDRESS, 6, true);

      accelX_1 = (I2C_1.read() << 8) | I2C_1.read();
      accelY_1 = (I2C_1.read() << 8) | I2C_1.read();
      accelZ_1 = (I2C_1.read() << 8) | I2C_1.read();

      // Leitura dos valores dos giros
      I2C_1.beginTransmission(MPU6050_ADDRESS);
      I2C_1.write(MPU6050_GYRO_XOUT_H);
      I2C_1.endTransmission(false);
      I2C_1.requestFrom(MPU6050_ADDRESS, 6, true);

      gyroX_1 = (I2C_1.read() << 8) | I2C_1.read();
      gyroY_1 = (I2C_1.read() << 8) | I2C_1.read();
      gyroZ_1 = (I2C_1.read() << 8) | I2C_1.read();

      // Inverter os valores dos eixos X e Y
      accelX_1 *= -1;
      accelY_1 *= -1;

      accelX_1 = map(accelX_1,16300,-16300,90,-90);
      accelY_1 = map(accelY_1,16300,-16300,90,-90);

      if(mode==0){
        return accelX_1;
      }else{
        return accelY_1;
      }
    break;

    case 2:
      int16_t accelX_2, accelY_2, accelZ_2; 
      int16_t gyroX_2, gyroY_2, gyroZ_2;

      I2C_2.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
      I2C_2.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
      I2C_2.begin();
      I2C_2.setTimeout_ms(10);

      I2C_2.beginTransmission(MPU6050_ADDRESS);
      I2C_2.write(MPU6050_PWR_MGMT_1);
      I2C_2.write(0x00); // Ativa o MPU6050 (desativa o modo de suspensão)
      I2C_2.endTransmission();

      // Leitura dos valores da aceleração
      I2C_2.beginTransmission(MPU6050_ADDRESS);
      I2C_2.write(MPU6050_ACCEL_XOUT_H);
      I2C_2.endTransmission(false);
      I2C_2.requestFrom(MPU6050_ADDRESS, 6, true);

      accelX_2 = (I2C_2.read() << 8) | I2C_2.read();
      accelY_2 = (I2C_2.read() << 8) | I2C_2.read();
      accelZ_2 = (I2C_2.read() << 8) | I2C_2.read();

      // Leitura dos valores dos giros
      I2C_2.beginTransmission(MPU6050_ADDRESS);
      I2C_2.write(MPU6050_GYRO_XOUT_H);
      I2C_2.endTransmission(false);
      I2C_2.requestFrom(MPU6050_ADDRESS, 6, true);

      gyroX_2 = (I2C_2.read() << 8) | I2C_2.read();
      gyroY_2 = (I2C_2.read() << 8) | I2C_2.read();
      gyroZ_2 = (I2C_2.read() << 8) | I2C_2.read();

      // Inverter os valores dos eixos X e Y
      accelX_2 *= -1;
      accelY_2 *= -1;

      accelX_2 = map(accelX_2,16300,-16300,90,-90);
      accelY_2 = map(accelY_2,16300,-16300,90,-90);

      if(mode==0){
        return accelX_2;
      }else{
        return accelY_2;
      }
    break;

    case 3:
      int16_t accelX_3, accelY_3, accelZ_3; 
      int16_t gyroX_3, gyroY_3, gyroZ_3;

      I2C_3.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
      I2C_3.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
      I2C_3.begin();
      I2C_3.setTimeout_ms(10);

      I2C_3.beginTransmission(MPU6050_ADDRESS);
      I2C_3.write(MPU6050_PWR_MGMT_1);
      I2C_3.write(0x00); // Ativa o MPU6050 (desativa o modo de suspensão)
      I2C_3.endTransmission();

      // Leitura dos valores da aceleração
      I2C_3.beginTransmission(MPU6050_ADDRESS);
      I2C_3.write(MPU6050_ACCEL_XOUT_H);
      I2C_3.endTransmission(false);
      I2C_3.requestFrom(MPU6050_ADDRESS, 6, true);

      accelX_3 = (I2C_3.read() << 8) | I2C_3.read();
      accelY_3 = (I2C_3.read() << 8) | I2C_3.read();
      accelZ_3 = (I2C_3.read() << 8) | I2C_3.read();

      // Leitura dos valores dos giros
      I2C_3.beginTransmission(MPU6050_ADDRESS);
      I2C_3.write(MPU6050_GYRO_XOUT_H);
      I2C_3.endTransmission(false);
      I2C_3.requestFrom(MPU6050_ADDRESS, 6, true);

      gyroX_3 = (I2C_3.read() << 8) | I2C_3.read();
      gyroY_3 = (I2C_3.read() << 8) | I2C_3.read();
      gyroZ_3 = (I2C_3.read() << 8) | I2C_3.read();

      // Inverter os valores dos eixos X e Y
      accelX_3 *= -1;
      accelY_3 *= -1;

      accelX_3 = map(accelX_3,16300,-16300,90,-90);
      accelY_3 = map(accelY_3,16300,-16300,90,-90);

      if(mode==0){
        return accelX_3;
      }else{
        return accelY_3;
      }
    break;

    case 4:
      int16_t accelX_4, accelY_4, accelZ_4; 
      int16_t gyroX_4, gyroY_4, gyroZ_4;

      I2C_4.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
      I2C_4.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
      I2C_4.begin();
      I2C_4.setTimeout_ms(10);

      I2C_4.beginTransmission(MPU6050_ADDRESS);
      I2C_4.write(MPU6050_PWR_MGMT_1);
      I2C_4.write(0x00); // Ativa o MPU6050 (desativa o modo de suspensão)
      I2C_4.endTransmission();

      // Leitura dos valores da aceleração
      I2C_4.beginTransmission(MPU6050_ADDRESS);
      I2C_4.write(MPU6050_ACCEL_XOUT_H);
      I2C_4.endTransmission(false);
      I2C_4.requestFrom(MPU6050_ADDRESS, 6, true);

      accelX_4 = (I2C_4.read() << 8) | I2C_4.read();
      accelY_4 = (I2C_4.read() << 8) | I2C_4.read();
      accelZ_4 = (I2C_4.read() << 8) | I2C_4.read();

      // Leitura dos valores dos giros
      I2C_4.beginTransmission(MPU6050_ADDRESS);
      I2C_4.write(MPU6050_GYRO_XOUT_H);
      I2C_4.endTransmission(false);
      I2C_4.requestFrom(MPU6050_ADDRESS, 6, true);

      gyroX_3 = (I2C_4.read() << 8) | I2C_4.read();
      gyroY_3 = (I2C_4.read() << 8) | I2C_4.read();
      gyroZ_3 = (I2C_4.read() << 8) | I2C_4.read();

      // Inverter os valores dos eixos X e Y
      accelX_4 *= -1;
      accelY_4 *= -1;

      accelX_4 = map(accelX_4,16300,-16300,90,-90);
      accelY_4 = map(accelY_4,16300,-16300,90,-90);

      if(mode==0){
        return accelX_4;
      }else{
        return accelY_4;
      }
    break;

    case 5:
      int16_t accelX_5, accelY_5, accelZ_5; 
      int16_t gyroX_5, gyroY_5, gyroZ_5;

      I2C_5.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
      I2C_5.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
      I2C_5.begin();
      I2C_5.setTimeout_ms(10);

      I2C_5.beginTransmission(MPU6050_ADDRESS);
      I2C_5.write(MPU6050_PWR_MGMT_1);
      I2C_5.write(0x00); // Ativa o MPU6050 (desativa o modo de suspensão)
      I2C_5.endTransmission();

      // Leitura dos valores da aceleração
      I2C_5.beginTransmission(MPU6050_ADDRESS);
      I2C_5.write(MPU6050_ACCEL_XOUT_H);
      I2C_5.endTransmission(false);
      I2C_5.requestFrom(MPU6050_ADDRESS, 6, true);

      accelX_5 = (I2C_5.read() << 8) | I2C_5.read();
      accelY_5 = (I2C_5.read() << 8) | I2C_5.read();
      accelZ_5 = (I2C_5.read() << 8) | I2C_5.read();

      // Leitura dos valores dos giros
      I2C_5.beginTransmission(MPU6050_ADDRESS);
      I2C_5.write(MPU6050_GYRO_XOUT_H);
      I2C_5.endTransmission(false);
      I2C_5.requestFrom(MPU6050_ADDRESS, 6, true);

      gyroX_5 = (I2C_5.read() << 8) | I2C_5.read();
      gyroY_5 = (I2C_5.read() << 8) | I2C_5.read();
      gyroZ_5 = (I2C_5.read() << 8) | I2C_5.read();

      // Inverter os valores dos eixos X e Y
      accelX_5 *= -1;
      accelY_5 *= -1;

      accelX_5 = map(accelX_5,16300,-16300,90,-90);
      accelY_5 = map(accelY_5,16300,-16300,90,-90);

      if(mode==0){
        return accelX_5;
      }else{
        return accelY_5;
      }
    break;

    case 7:
      int16_t accelX_7, accelY_7, accelZ_7; 
      int16_t gyroX_7, gyroY_7, gyroZ_7;

      I2C_7.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
      I2C_7.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
      I2C_7.begin();
      I2C_7.setTimeout_ms(10);

      I2C_7.beginTransmission(MPU6050_ADDRESS);
      I2C_7.write(MPU6050_PWR_MGMT_1);
      I2C_7.write(0x00); // Ativa o MPU6050 (desativa o modo de suspensão)
      I2C_7.endTransmission();

      // Leitura dos valores da aceleração
      I2C_7.beginTransmission(MPU6050_ADDRESS);
      I2C_7.write(MPU6050_ACCEL_XOUT_H);
      I2C_7.endTransmission(false);
      I2C_7.requestFrom(MPU6050_ADDRESS, 6, true);

      accelX_7 = (I2C_7.read() << 8) | I2C_7.read();
      accelY_7 = (I2C_7.read() << 8) | I2C_7.read();
      accelZ_7 = (I2C_7.read() << 8) | I2C_7.read();

      // Leitura dos valores dos giros
      I2C_7.beginTransmission(MPU6050_ADDRESS);
      I2C_7.write(MPU6050_GYRO_XOUT_H);
      I2C_7.endTransmission(false);
      I2C_7.requestFrom(MPU6050_ADDRESS, 6, true);

      gyroX_7 = (I2C_7.read() << 8) | I2C_7.read();
      gyroY_7 = (I2C_7.read() << 8) | I2C_7.read();
      gyroZ_7 = (I2C_7.read() << 8) | I2C_7.read();

      // Inverter os valores dos eixos X e Y
      accelX_7 *= -1;
      accelY_7 *= -1;

      accelX_7 = map(accelX_7,16300,-16300,90,-90);
      accelY_7 = map(accelY_7,16300,-16300,90,-90);

      if(mode==0){
        return accelX_7;
      }else{
        return accelY_7;
      }
    break;

    case 8:
      int16_t accelX_8, accelY_8, accelZ_8; 
      int16_t gyroX_8, gyroY_8, gyroZ_8;

      I2C_8.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
      I2C_8.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
      I2C_8.begin();
      I2C_8.setTimeout_ms(10);

      I2C_8.beginTransmission(MPU6050_ADDRESS);
      I2C_8.write(MPU6050_PWR_MGMT_1);
      I2C_8.write(0x00); // Ativa o MPU6050 (desativa o modo de suspensão)
      I2C_8.endTransmission();

      // Leitura dos valores da aceleração
      I2C_8.beginTransmission(MPU6050_ADDRESS);
      I2C_8.write(MPU6050_ACCEL_XOUT_H);
      I2C_8.endTransmission(false);
      I2C_8.requestFrom(MPU6050_ADDRESS, 6, true);

      accelX_8 = (I2C_8.read() << 8) | I2C_8.read();
      accelY_8 = (I2C_8.read() << 8) | I2C_8.read();
      accelZ_8 = (I2C_8.read() << 8) | I2C_8.read();

      // Leitura dos valores dos giros
      I2C_8.beginTransmission(MPU6050_ADDRESS);
      I2C_8.write(MPU6050_GYRO_XOUT_H);
      I2C_8.endTransmission(false);
      I2C_8.requestFrom(MPU6050_ADDRESS, 6, true);

      gyroX_8 = (I2C_8.read() << 8) | I2C_8.read();
      gyroY_8 = (I2C_8.read() << 8) | I2C_8.read();
      gyroZ_8 = (I2C_8.read() << 8) | I2C_8.read();

      // Inverter os valores dos eixos X e Y
      accelX_8 *= -1;
      accelY_8 *= -1;

      accelX_8 = map(accelX_8,16300,-16300,90,-90);
      accelY_8 = map(accelY_8,16300,-16300,90,-90);

      if(mode==0){
        return accelX_8;
      }else{
        return accelY_8;
      }
    break;

    case 9:
      int16_t accelX_A, accelY_A, accelZ_A; 
      int16_t gyroX_A, gyroY_A, gyroZ_A;

      I2C_A.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
      I2C_A.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
      I2C_A.begin();
      I2C_A.setTimeout_ms(5);

      I2C_A.beginTransmission(MPU6050_ADDRESS);
      I2C_A.write(MPU6050_PWR_MGMT_1);
      I2C_A.write(0x00); // Ativa o MPU6050 (desativa o modo de suspensão)
      I2C_A.endTransmission();

      // Leitura dos valores da aceleração
      I2C_A.beginTransmission(MPU6050_ADDRESS);
      I2C_A.write(MPU6050_ACCEL_XOUT_H);
      I2C_A.endTransmission(false);
      I2C_A.requestFrom(MPU6050_ADDRESS, 6, true);

      accelX_A = (I2C_A.read() << 8) | I2C_A.read();
      accelY_A = (I2C_A.read() << 8) | I2C_A.read();
      accelZ_A = (I2C_A.read() << 8) | I2C_A.read();

      // Leitura dos valores dos giros
      I2C_A.beginTransmission(MPU6050_ADDRESS);
      I2C_A.write(MPU6050_GYRO_XOUT_H);
      I2C_A.endTransmission(false);
      I2C_A.requestFrom(MPU6050_ADDRESS, 6, true);

      gyroX_A = (I2C_A.read() << 8) | I2C_A.read();
      gyroY_A = (I2C_A.read() << 8) | I2C_A.read();
      gyroZ_A = (I2C_A.read() << 8) | I2C_A.read();

      // Inverter os valores dos eixos X e Y
      accelX_A *= -1;
      accelY_A *= -1;

      accelX_A = map(accelX_A,16300,-16300,90,-90);
      accelY_A = map(accelY_A,16300,-16300,90,-90);

      if(mode==0){
        return accelX_A;
      }else{
        return accelY_A;
      }
    break;

    case 10:
      int16_t accelX_B, accelY_B, accelZ_B; 
      int16_t gyroX_B, gyroY_B, gyroZ_B;

      I2C_B.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
      I2C_B.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
      I2C_B.begin();
      I2C_B.setTimeout_ms(5);

      I2C_B.beginTransmission(MPU6050_ADDRESS);
      I2C_B.write(MPU6050_PWR_MGMT_1);
      I2C_B.write(0x00); // Ativa o MPU6050 (desativa o modo de suspensão)
      I2C_B.endTransmission();

      // Leitura dos valores da aceleração
      I2C_B.beginTransmission(MPU6050_ADDRESS);
      I2C_B.write(MPU6050_ACCEL_XOUT_H);
      I2C_B.endTransmission(false);
      I2C_B.requestFrom(MPU6050_ADDRESS, 6, true);

      accelX_B = (I2C_B.read() << 8) | I2C_B.read();
      accelY_B = (I2C_B.read() << 8) | I2C_B.read();
      accelZ_B = (I2C_B.read() << 8) | I2C_B.read();

      // Leitura dos valores dos giros
      I2C_B.beginTransmission(MPU6050_ADDRESS);
      I2C_B.write(MPU6050_GYRO_XOUT_H);
      I2C_B.endTransmission(false);
      I2C_B.requestFrom(MPU6050_ADDRESS, 6, true);

      gyroX_B = (I2C_B.read() << 8) | I2C_B.read();
      gyroY_B = (I2C_B.read() << 8) | I2C_B.read();
      gyroZ_B = (I2C_B.read() << 8) | I2C_B.read();

      // Inverter os valores dos eixos X e Y
      accelX_B *= -1;
      accelY_B *= -1;

      accelX_B = map(accelX_B,16300,-16300,90,-90);
      accelY_B = map(accelY_B,16300,-16300,90,-90);

      if(mode==0){
        return accelX_B;
      }else{
        return accelY_B;
      }
    break;
    case 11:
      int16_t accelX_C, accelY_C, accelZ_C; 
      int16_t gyroX_C, gyroY_C, gyroZ_C;

      I2C_C.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
      I2C_C.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
      I2C_C.begin();
      I2C_C.setTimeout_ms(5);

      I2C_C.beginTransmission(MPU6050_ADDRESS);
      I2C_C.write(MPU6050_PWR_MGMT_1);
      I2C_C.write(0x00); // Ativa o MPU6050 (desativa o modo de suspensão)
      I2C_C.endTransmission();

      // Leitura dos valores da aceleração
      I2C_C.beginTransmission(MPU6050_ADDRESS);
      I2C_C.write(MPU6050_ACCEL_XOUT_H);
      I2C_C.endTransmission(false);
      I2C_C.requestFrom(MPU6050_ADDRESS, 6, true);

      accelX_C = (I2C_C.read() << 8) | I2C_C.read();
      accelY_C = (I2C_C.read() << 8) | I2C_C.read();
      accelZ_C = (I2C_C.read() << 8) | I2C_C.read();

      // Leitura dos valores dos giros
      I2C_C.beginTransmission(MPU6050_ADDRESS);
      I2C_C.write(MPU6050_GYRO_XOUT_H);
      I2C_C.endTransmission(false);
      I2C_C.requestFrom(MPU6050_ADDRESS, 6, true);

      gyroX_C = (I2C_C.read() << 8) | I2C_C.read();
      gyroY_C = (I2C_C.read() << 8) | I2C_C.read();
      gyroZ_C = (I2C_C.read() << 8) | I2C_C.read();

      // Inverter os valores dos eixos X e Y
      accelX_C *= -1;
      accelY_C *= -1;

      accelX_C = map(accelX_C,16300,-16300,90,-90);
      accelY_C = map(accelY_C,16300,-16300,90,-90);

      if(mode==0){
        return accelX_C;
      }else{
        return accelY_C;
      }
    break;

    case 12:
      int16_t accelX_D, accelY_D, accelZ_D; 
      int16_t gyroX_D, gyroY_D, gyroZ_D;

      I2C_D.setTxBuffer(swTxBuffer, sizeof(swTxBuffer));
      I2C_D.setRxBuffer(swRxBuffer, sizeof(swRxBuffer));
      I2C_D.begin();
      I2C_D.setTimeout_ms(5);

      I2C_D.beginTransmission(MPU6050_ADDRESS);
      I2C_D.write(MPU6050_PWR_MGMT_1);
      I2C_D.write(0x00); // Ativa o MPU6050 (desativa o modo de suspensão)
      I2C_D.endTransmission();

      // Leitura dos valores da aceleração
      I2C_D.beginTransmission(MPU6050_ADDRESS);
      I2C_D.write(MPU6050_ACCEL_XOUT_H);
      I2C_D.endTransmission(false);
      I2C_D.requestFrom(MPU6050_ADDRESS, 6, true);

      accelX_D = (I2C_D.read() << 8) | I2C_D.read();
      accelY_D = (I2C_D.read() << 8) | I2C_D.read();
      accelZ_D = (I2C_D.read() << 8) | I2C_D.read();

      // Leitura dos valores dos giros
      I2C_D.beginTransmission(MPU6050_ADDRESS);
      I2C_D.write(MPU6050_GYRO_XOUT_H);
      I2C_D.endTransmission(false);
      I2C_D.requestFrom(MPU6050_ADDRESS, 6, true);

      gyroX_D = (I2C_D.read() << 8) | I2C_D.read();
      gyroY_D = (I2C_D.read() << 8) | I2C_D.read();
      gyroZ_D = (I2C_D.read() << 8) | I2C_D.read();

      // Inverter os valores dos eixos X e Y
      accelX_D *= -1;
      accelY_D *= -1;

      accelX_D = map(accelX_D,16300,-16300,90,-90);
      accelY_D = map(accelY_D,16300,-16300,90,-90);

      if(mode==0){
        return accelX_D;
      }else{
        return accelY_D;
      }
    break;
  }
}