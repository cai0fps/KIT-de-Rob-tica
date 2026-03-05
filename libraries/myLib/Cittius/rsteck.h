#ifndef RSTECK_H
#define RSTECK_H 
#include <Arduino.h>


#define M1 10  
#define M2 11
#define M3 12
#define M4 13

#define m1 1 		
#define m2 2
#define m3 3
#define m4 4 



void setLed(byte port, uint32_t color);
void setMotorPin(byte motor, int value);

void getCode1Interrupt();
void getCode2Interrupt();
void getCode3Interrupt();
void getCode4Interrupt();

void setCodeInit(uint8_t interrupt);
long getCodePin(uint8_t code);														
void setClearCodePin(uint8_t code);													
void setCloseCodeInterruptPin(uint8_t code);
uint16_t rgb565(unsigned long rgb);	
 
#endif
