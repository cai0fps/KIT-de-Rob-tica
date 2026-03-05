#ifndef RSTECK_H
#define RSTECK_H 
#include <Arduino.h>


#define A 10  
#define B 11
#define C 12
#define D 13

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
 
#endif
