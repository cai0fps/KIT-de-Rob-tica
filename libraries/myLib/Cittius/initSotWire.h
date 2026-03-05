#include <SoftWire.h>

char swTxBuffer[16];
char swRxBuffer[16];

SoftWire I2C_1(A3, 22); // Configuração do objeto SoftWire
SoftWire I2C_2(A4, 23); // Configuração do objeto SoftWire
SoftWire I2C_3(A5, 24); // Configuração do objeto SoftWire
SoftWire I2C_4(A6, 25); // Configuração do objeto SoftWire
SoftWire I2C_5(A15, 4); // Configuração do objeto SoftWire
SoftWire I2C_7(A13, 28); // Configuração do objeto SoftWire
SoftWire I2C_8(A14, 29); // Configuração do objeto SoftWire
SoftWire I2C_A(A8, 2); // Configuração do objeto SoftWire
SoftWire I2C_B(A9, 3); // Configuração do objeto SoftWire
SoftWire I2C_C(A10, 18); // Configuração do objeto SoftWire
SoftWire I2C_D(A11, 19); // Configuração do objeto SoftWire

#define MPU6050_ADDRESS 0x68       // Endereço I2C do MPU6050
#define MPU6050_PWR_MGMT_1 0x6B    // Registrador de gerenciamento de energia
#define MPU6050_ACCEL_XOUT_H 0x3B  // Registradores para leitura da aceleração
#define MPU6050_GYRO_XOUT_H 0x43   // Registradores para leitura dos giros

#define COR_ADRESS 0x39

