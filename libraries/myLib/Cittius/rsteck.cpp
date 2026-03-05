#include"rsteck.h"


//Motores
uint8_t MotorFlag1 = 0;
uint8_t MotorFlag2 = 0;
uint8_t MotorFlag3 = 0;
uint8_t MotorFlag4 = 0;

#define PWMB1  12
#define PWMB2  11

#define PWMA1  9
#define PWMA2  10

#define PWMC1  13
#define PWMC2  46

#define PWMD1  45
#define PWMD2  44

void setMotorPin(byte motor, int value){
  
  if(value > 100) value = 100;
  else if(value < -100) value = -100;

  //-----------------------------------------------
    switch (motor)
    {
    case M1:
      if (MotorFlag1 == 0)
      {
        MotorFlag1 = 1;
        pinMode(PWMA1, OUTPUT);
        pinMode(PWMA2, OUTPUT);             
      }
      break;

    case M2:
      if (MotorFlag2 == 0)
      {
        MotorFlag2 = 1;
        pinMode(PWMB1, OUTPUT);
        pinMode(PWMB2, OUTPUT);             
      }
      break;

    case M3:
      if (MotorFlag3 == 0)
      {
        MotorFlag3 = 1;
        pinMode(PWMC1, OUTPUT);
        pinMode(PWMC2, OUTPUT);           
      }
      break;

    case M4:
      if (MotorFlag4 == 0)
      {
        MotorFlag4 = 1;
        pinMode(PWMD1, OUTPUT);
        pinMode(PWMD2, OUTPUT);           
      }
      break;

    default:break;
    }
  //-----------------------------------------------------

    
    switch (motor)
    {
      case M1:
        if (value == 0)
        {
          analogWrite(PWMA1, 255);
          analogWrite(PWMA2, 255);
        }
        else if (value>0)
        {
          analogWrite(PWMA1, map(value,0,100,0,255));
          analogWrite(PWMA2, 0);
          
          
        }
        else if (value<0)
        {
          analogWrite(PWMA2, map(value,-100,0,255,0));
          analogWrite(PWMA1, 0); 
        }
        break;

      case M2:
        if (value == 0)
        {
          analogWrite(PWMB1, 255);
          analogWrite(PWMB2, 255);
        }
        else if (value>0)
        {
          analogWrite(PWMB1, map(value,0,100,0,255));
          analogWrite(PWMB2, 0);
        }
        else if (value<0)
        {
          analogWrite(PWMB2, map(value,-100,0,255,0));
          analogWrite(PWMB1, 0);
        }
        break;

      case M3:
        if (value == 0)
        {
          analogWrite(PWMC1, 255);
          analogWrite(PWMC2, 255);
        }
        else if (value>0)
        {
          analogWrite(PWMC1, map(value,0,100,0,255));
          analogWrite(PWMC2, 0);
        }
        else if (value<0)
        {
          analogWrite(PWMC2, map(value,-100,0,255,0));
          analogWrite(PWMC1, 0);
        }
        break;

      case M4:
        if (value == 0)
        {
          analogWrite(PWMD1, 255);
          analogWrite(PWMD2, 255);
        }
        else if (value>0)
        {
          analogWrite(PWMD1, map(value,0,100,0,255));
          analogWrite(PWMD2, 0);
        }
        else if (value<0)
        {
          analogWrite(PWMD2, map(value,-100,0,255,0));
          analogWrite(PWMD1, 0);
        }
        break;

      default:break;
    }
}

uint8_t CodeFlag1  = 0; 	
uint8_t CodeFlag2  = 0;	
uint8_t CodeFlag3  = 0; 
uint8_t CodeFlag4  = 0; 

unsigned long  MotorCodeCnt1= 0;	
unsigned long  MotorCodeCnt2= 0;	
unsigned long  MotorCodeCnt3= 0;	
unsigned long  MotorCodeCnt4= 0;	

uint8_t getDigitalPin(uint8_t pin)									
{
	pinMode(pin,INPUT_PULLUP);
	return digitalRead(pin);
}

void getCode1Interrupt()	
{
	uint8_t m_ISR,m_Dir;	
	m_ISR = getDigitalPin(2);	
	m_Dir = getDigitalPin(A8);	
	if(m_ISR^m_Dir)			
		MotorCodeCnt1++;	
	else
		MotorCodeCnt1--;	 
} 
void getCode2Interrupt()	
{
	uint8_t m_ISR,m_Dir;	
	m_ISR = getDigitalPin(3);	
	m_Dir = getDigitalPin(A9);	
	if(m_ISR^m_Dir)			
		MotorCodeCnt2++;	
	else
		MotorCodeCnt2--;	
}
void getCode3Interrupt()	
{
	uint8_t m_ISR,m_Dir;	
	m_ISR = getDigitalPin(18);	
	m_Dir = getDigitalPin(A10);	
	if(m_ISR^m_Dir)			
		MotorCodeCnt3++;	
	else
		MotorCodeCnt3--;	
}
void getCode4Interrupt()	
{
	uint8_t m_ISR,m_Dir;	
	m_ISR = getDigitalPin(19);	
	m_Dir = getDigitalPin(A11);	
	if(m_ISR^m_Dir)			
		MotorCodeCnt4++;	
	else
		MotorCodeCnt4--;	
}  



void setCodeInit(uint8_t interrupt) //uint8_t
{	
	switch(interrupt)
	{
		case m1: attachInterrupt(0, getCode1Interrupt, CHANGE); break;
		case m2: attachInterrupt(1, getCode2Interrupt, CHANGE); break;
		case m3: attachInterrupt(5, getCode3Interrupt, CHANGE); break;
		case m4: attachInterrupt(4, getCode4Interrupt, CHANGE); break;
		default:break;		
	}
}

long getCodePin(uint8_t code)
{	
	if(CodeFlag1==0 && code==m1)
	{
		CodeFlag1 = 1;
		setCodeInit(code);		
	}
	else if(CodeFlag2==0 && code==m2)
	{
		CodeFlag2 = 1;
		setCodeInit(code);				
	}
	else if(CodeFlag3==0 && code==m3)
	{
		CodeFlag3 = 1;
		setCodeInit(code);				
	}
	else if(CodeFlag4==0 && code==m4)
	{
		CodeFlag4 = 1;
		setCodeInit(code);				
	}
	switch(code)
	{
		case m1: return	MotorCodeCnt1; break; 
		case m2: return	MotorCodeCnt2; break; 
		case m3: return	MotorCodeCnt3; break; 
		case m4: return	MotorCodeCnt4; break; 
		default:break;
	}
}

void setClearCodePin(uint8_t code)	
{	
	switch(code)
	{
		case m1: MotorCodeCnt1 = 0; break; 
		case m2: MotorCodeCnt2 = 0; break; 
		case m3: MotorCodeCnt3 = 0; break; 
		case m4: MotorCodeCnt4 = 0; break; 
		default:break;		
	}
}

void setCloseCodeInterruptPin(uint8_t code)
{
	switch(code)
	{
		case m1: detachInterrupt(0); MotorCodeCnt1 = 0; CodeFlag1 = 0; break; 	
		case m2: detachInterrupt(1); MotorCodeCnt2 = 0; CodeFlag2 = 0; break; 	
		case m3: detachInterrupt(5); MotorCodeCnt3 = 0; CodeFlag3 = 0; break; 
		case m4: detachInterrupt(4); MotorCodeCnt4 = 0; CodeFlag4 = 0; break; 	
		default:break;
	}		
}

uint16_t rgb565(unsigned long rgb)
{
  uint16_t R_ = (rgb >> 16) & 0xFF;
  uint16_t G_ = (rgb >>  8) & 0xFF;
  uint16_t B_ = (rgb      ) & 0xFF;

  uint16_t ret  = (R_ & 0xF8) << 8;  // 5 bits
           ret |= (G_ & 0xFC) << 3;  // 6 bits
           ret |= (B_ & 0xF8) >> 3;  // 5 bits
       
  return( ret);
}

