#include "pins_arduino.h"
#include "variaveis.h"


//******************DISPLAY 2.4P***************************//
#include <TFT_eSPI.h>    // Hardware-specific library
#include <TFT_eWidget.h> // Widget library

//#include "initSotWire.h"

//#include "toque.h"
#include "cor.h"
#include "temperature.h"
#include "utrassonico.h"
#include "ControleRemoto.h"
#include "giroscopio.h"




TFT_eSPI tft = TFT_eSPI();            // Invoke custom library
TFT_eSprite knob = TFT_eSprite(&tft); // Sprite for the slide knob

// Criações dos Objetos para os Botões
ButtonWidget btnProgram = ButtonWidget(&tft);
ButtonWidget btnMotor = ButtonWidget(&tft);
ButtonWidget btnSensor = ButtonWidget(&tft);
ButtonWidget btnApp = ButtonWidget(&tft);
ButtonWidget btnBack = ButtonWidget(&tft);
ButtonWidget btnNext = ButtonWidget(&tft);
ButtonWidget btnConfig = ButtonWidget(&tft);

SliderWidget s1 = SliderWidget(&tft, &knob); // Slider 1 widget
SliderWidget s2 = SliderWidget(&tft, &knob); // Slider 2 widget
SliderWidget s3 = SliderWidget(&tft, &knob); // Slider 2 widget
SliderWidget s4 = SliderWidget(&tft, &knob); // Slider 2 widget

// Aqui inseri cada novo botão Criado como Objeto
ButtonWidget *btn[] = {&btnProgram, &btnMotor, &btnSensor, &btnApp, &btnBack, &btnNext, &btnConfig};;
uint8_t buttonCount = sizeof(btn) / sizeof(btn[0]);

// Calibração Inicial da Tela Toch
uint16_t calData[5] = {397, 3306, 491, 3338, 0};

#include "rsteck.h"
#include "botoes.h"

char txt0[50];
long millisTarefa1;

#include "Free_Fonts.h"
//#include "icon.h"
#include "Wire.h" //Incluir a biblioteca I2C
#include <EEPROM.h>

#include "fund2.h"
 
#include <MPU6050_light.h>
MPU6050 mpu(Wire);

#include <Bounce2.h>
#include <TimerThree.h>

Bounce bounceP1 = Bounce();
Bounce bounceP2 = Bounce();
Bounce bounceP3 = Bounce();
Bounce bounceP4 = Bounce();
Bounce bounceP5 = Bounce();
Bounce bounceP6 = Bounce();
Bounce bounceP7 = Bounce();
Bounce bounceP8 = Bounce();
Bounce bouncePA = Bounce();
Bounce bouncePB = Bounce();
Bounce bouncePC = Bounce();
Bounce bouncePD = Bounce();

unsigned long timerMpu = 0;

#define CUSTOM_SETTINGS
#define INCLUDE_GAMEPAD_MODULE
#define INCLUDE_TERMINAL_MODULE

#include <Dabble.h>

// Definições das Cores para TFT
#define TFT_BACKGRAUD 3
#define COLOR_HIGHLIGHT TFT_CYAN // Cor moderna para detalhes

// Tamanho dos Botoes da Tela Principal
#define BUTTON_W 95 // Largura
#define BUTTON_H 85 // Altura

#define ADDRESS_SERIGRAFIA 0
#define ADDRESS_SENSOR_COR 1
#define ADDRESS_SENSOR_UTRA 2
#define ADDRESS_SENSOR_BUZZER 3


AsyncDelay delay_3s;
unsigned long lastButton5 = 0, lastButton8 = 0;


byte getColor1,getColor2,getGray1,getGray2;
boolean getButton(byte port)
{

  switch (port)
  {
  case 0x05:
    pinMode(A15, INPUT);
    pinMode(4, INPUT_PULLUP);
    if (digitalRead(4) == LOW && analogRead(A15) > 1020 && ((millis() - lastButton5) > 2000))
    {

      return true;
      lastButton5 = millis();
    }
    else
    {
      return false;
    }
    break;

  case 0x08:
    pinMode(A14, INPUT);
    pinMode(29, INPUT_PULLUP);
    if (digitalRead(29) == LOW && analogRead(A14) > 1020 && ((millis() - lastButton5) > 2010))
    {
      return true;
      lastButton5 = millis();
    }
    else
    {
      return false;
    }
    break;
  }
}



// Função para Atualizações dos Botões Touch e Hardware Também
void _loop()
{
  
}

// Função para deley sem travamento.
/**************************Atenção************************************/
// Os valores inserido em Segundos e convertido para Millis segundos.
void _delay(float seconds)
{                                           // Valores em Segundos
  long endTime = millis() + seconds * 1000; // Converter valores Segundos em millis
  while (millis() < endTime){
    _loop(); // Chamar funções dos eventos a todos momento.

  btnEnter.tick(); // Habilita evento do botão Enter
  btnVoltar.tick();
  btnMais.tick();
  btnMenos.tick();
  }

}

void updateButton()
{
  switch (btnMenu)
  {
  case 01:
    btnApp.drawSmoothButton(false, 3, TFT_BACKGRAUD);    
    btnSensor.drawSmoothButton(false, 3, TFT_BACKGRAUD); 
    btnMotor.drawSmoothButton(false, 3, TFT_BACKGRAUD);  
    btnProgram.drawSmoothButton(true, 3, TFT_BACKGRAUD); 
    btnConfig.drawSmoothButton(false, 3, TFT_BACKGRAUD);
    break;
  case 02:
    btnApp.drawSmoothButton(false, 3, TFT_BACKGRAUD);     
    btnSensor.drawSmoothButton(false, 3, TFT_BACKGRAUD);  
    btnMotor.drawSmoothButton(true, 3, TFT_BACKGRAUD);    
    btnProgram.drawSmoothButton(false, 3, TFT_BACKGRAUD); 
    btnConfig.drawSmoothButton(false, 3, TFT_BACKGRAUD);
    break;
  case 03:
    btnApp.drawSmoothButton(false, 3, TFT_BACKGRAUD);     
    btnSensor.drawSmoothButton(true, 3, TFT_BACKGRAUD);   
    btnMotor.drawSmoothButton(false, 3, TFT_BACKGRAUD);   
    btnProgram.drawSmoothButton(false, 3, TFT_BACKGRAUD); 
    btnConfig.drawSmoothButton(false, 3, TFT_BACKGRAUD);
    break;
  case 04:
    btnApp.drawSmoothButton(true, 3, TFT_BACKGRAUD);      
    btnSensor.drawSmoothButton(false, 3, TFT_BACKGRAUD);  
    btnMotor.drawSmoothButton(false, 3, TFT_BACKGRAUD);   
    btnProgram.drawSmoothButton(false, 3, TFT_BACKGRAUD); 
    btnConfig.drawSmoothButton(false, 3, TFT_BACKGRAUD);
    break;

  case 05:
    btnApp.drawSmoothButton(false, 3, TFT_BACKGRAUD);     
    btnSensor.drawSmoothButton(false, 3, TFT_BACKGRAUD);  
    btnMotor.drawSmoothButton(false, 3, TFT_BACKGRAUD);   
    btnProgram.drawSmoothButton(false, 3, TFT_BACKGRAUD); 
    btnConfig.drawSmoothButton(true, 3, TFT_BACKGRAUD);
    break;
  }
}

void selectMotores(byte value)
{
  int16_t x, y;
  uint16_t w, h;

  switch (value)
  {
  case 0x01:
    if (enableM1)
    {
      s1.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREEN); 
      s2.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);  
      s3.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);  
      s4.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);  
    }
    else
    {
      s1.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, COLOR_HIGHLIGHT); 
      s2.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);   
      s3.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);   
      s4.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);   
    }

    break;
  case 0x02:
    if (enableM2)
    {
      s1.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);  
      s2.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREEN); 
      s3.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);  
      s4.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);  
    }
    else
    {
      s1.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);   
      s2.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, COLOR_HIGHLIGHT); 
      s3.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);   
      s4.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);   
    }

    break;
  case 0x03:
    if (enableM3)
    {
      s1.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);  
      s2.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);  
      s3.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREEN); 
      s4.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);  
    }
    else
    {
      s1.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);   
      s2.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);   
      s3.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, COLOR_HIGHLIGHT); 
      s4.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);   
    }
    break;
  case 0x04:
    if (enableM4)
    {
      s1.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);  
      s2.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);  
      s3.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);  
      s4.getBoundingRect(&x, &y, &w, &h);            
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREEN); 
    }
    else
    {
      s1.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);   
      s2.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);   
      s3.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREY);   
      s4.getBoundingRect(&x, &y, &w, &h);             
      tft.drawRect(x, y - 25, w, h + 40, COLOR_HIGHLIGHT); 
    }
    break;
  }
}



// Evento de simples Clik do Btn Mais
void eventoMenos()
{
  switch (menu)
  {
  case 00:
    btnMenu++;
    updateButton();
    if (btnMenu >= 5)
    {
      btnMenu = 5;
    }
    break;

  case 02:

    if (!enableM1 && !enableM2 && !enableM3 && !enableM4)
    {
      selectMotor++;
      if (selectMotor >= 5)
      {
        selectMotor = 1;
      }

      selectMotores(selectMotor);
    }

    if (enableM1)
    {
      s1.setSliderPosition(s1.getSliderPosition() - 10);
      setMotorPin(M1, s1.getSliderPosition());
    }
    else if (enableM2)
    {
      s2.setSliderPosition(s2.getSliderPosition() - 10);
      setMotorPin(M2, s2.getSliderPosition());
    }
    else if (enableM3)
    {
      s3.setSliderPosition(s3.getSliderPosition() - 10);
      setMotorPin(M3, s3.getSliderPosition());
    }
    else if (enableM4)
    {
      s4.setSliderPosition(s4.getSliderPosition() - 10);
      setMotorPin(M4, s4.getSliderPosition());
    }
    break;
  case 0x03:
    if (pageDosSensores == 5)
    { // Page Adptadora
      btnBack.drawSmoothButton(true);
      _delay(0.3);
      btnBack.drawSmoothButton(false);
      flagSetupSensores = false;
      pageDosSensores = 4;
    }
    else if (pageDosSensores == 4)
    {
      btnBack.drawSmoothButton(true);
      _delay(0.3);
      btnBack.drawSmoothButton(false);
      flagSetupSensores = false;
      pageDosSensores = 3;
    }
    else if (pageDosSensores == 3)
    {
      btnBack.drawSmoothButton(true);
      _delay(0.3);
      btnBack.drawSmoothButton(false);
      flagSetupSensores = false;
      pageDosSensores = 2;
    }
    else if (pageDosSensores == 2)
    {
      btnBack.drawSmoothButton(true);
      _delay(0.3);
      btnBack.drawSmoothButton(false);
      flagSetupSensores = false;
      pageDosSensores = 1;
    }
    break;

  case 05:
    if (enableConfig == false)
    {
      menuConfig++;
      if (menuConfig >= 3)
      {
        menuConfig = 3;
      }
    }
    else if (enableConfig && menuConfig == 1)
    {
      serigrafia = !EEPROM.read(ADDRESS_SERIGRAFIA);
      EEPROM.write(ADDRESS_SERIGRAFIA, serigrafia);
      tft.fillRect(0, 27, 240, 30, TFT_BACKGRAUD);
    }
    else if (enableConfig && menuConfig == 2)
    {
      typeSensorColor++;
      if (typeSensorColor >= 3)
      {
        typeSensorColor = 3;
      }

      EEPROM.write(ADDRESS_SENSOR_COR, typeSensorColor);
      tft.fillRect(0, 60, 240, 30, TFT_BACKGRAUD);
    }
    else if (enableConfig && menuConfig == 3)
    {
      typeSensorUtra++;
      if (typeSensorUtra >= 3)
      {
        typeSensorUtra = 3;
      }

      EEPROM.write(ADDRESS_SENSOR_UTRA, typeSensorUtra);
      tft.fillRect(0, 90, 240, 30, TFT_BACKGRAUD);
    }
    break;
  }
}



void eventoMais()
{
  switch (menu)
  {
  case 00:
    btnMenu--;
    updateButton();
    if (btnMenu < 1)
    {
      btnMenu = 1;
    }
    break;

  case 02:
    if (!enableM1 && !enableM2 && !enableM3 && !enableM4)
    {
      selectMotor--;
      if (selectMotor <= 0)
      {
        selectMotor = 4;
      }

      selectMotores(selectMotor);
    }
    if (enableM1)
    {
      s1.setSliderPosition(s1.getSliderPosition() + 10);
      setMotorPin(M1, s1.getSliderPosition());
    }
    else if (enableM2)
    {
      s2.setSliderPosition(s2.getSliderPosition() + 10);
      setMotorPin(M2, s2.getSliderPosition());
    }
    else if (enableM3)
    {
      s3.setSliderPosition(s3.getSliderPosition() + 10);
      setMotorPin(M3, s3.getSliderPosition());
    }
    else if (enableM4)
    {
      s4.setSliderPosition(s4.getSliderPosition() + 10);
      setMotorPin(M4, s4.getSliderPosition());
    }
    break;
  case 0x03:
    if (pageDosSensores == 1)
    { // Page Adptadora
      btnNext.drawSmoothButton(true);
      _delay(0.3);
      btnNext.drawSmoothButton(false);
      flagSetupSensores = false;
      pageDosSensores = 2;
    }
    else if (pageDosSensores == 2)
    {
      btnNext.drawSmoothButton(true);
      _delay(0.3);
      btnNext.drawSmoothButton(false);
      flagSetupSensores = false;
      pageDosSensores = 3;
    }
    else if (pageDosSensores == 3)
    {
      btnNext.drawSmoothButton(true);
      _delay(0.3);
      btnNext.drawSmoothButton(false);
      flagSetupSensores = false;
      pageDosSensores = 4;
    }
    else if (pageDosSensores == 4)
    {
      btnNext.drawSmoothButton(true);
      _delay(0.3);
      btnNext.drawSmoothButton(false);
      flagSetupSensores = false;
      pageDosSensores = 5;
    }
    break;
  case 05:
    if (enableConfig == false)
    {
      menuConfig--;
      if (menuConfig <= 1)
      {
        menuConfig = 1;
      }
    }
    else if (enableConfig && menuConfig == 1)
    {
      serigrafia = !EEPROM.read(ADDRESS_SERIGRAFIA);
      EEPROM.write(ADDRESS_SERIGRAFIA, serigrafia);
      tft.fillRect(0, 27, 240, 30, TFT_BACKGRAUD);
    }
    else if (enableConfig && menuConfig == 2)
    {
      typeSensorColor--;
      if (typeSensorColor <= 1)
      {
        typeSensorColor = 1;
      }

      EEPROM.write(ADDRESS_SENSOR_COR, typeSensorColor);
      tft.fillRect(0, 60, 240, 30, TFT_BACKGRAUD);
    }
    else if (enableConfig && menuConfig == 3)
    {
      typeSensorUtra--;
      if (typeSensorUtra <= 1)
      {
        typeSensorUtra = 1;
      }

      EEPROM.write(ADDRESS_SENSOR_UTRA, typeSensorUtra);
      tft.fillRect(0, 90, 240, 30, TFT_BACKGRAUD);
    }
    break;
  }
}



// CallBack dos Botoes TOUCH
void callbackBTNS(void)
{
  /******************Botão Programa******************/
  if (btnProgram.justPressed() && menu == 0x00)
  {                                     
    btnApp.drawSmoothButton(false);     
    btnSensor.drawSmoothButton(false);  
    btnMotor.drawSmoothButton(false);   
    btnProgram.drawSmoothButton(true);  
    btnConfig.drawSmoothButton(false);  
    _delay(0.3);                        
    menu = 1;                           
    flagSetupProgram = false;           
    btnProgram.drawSmoothButton(false); 
    _delay(0.3);                        
  }
  else if (btnMotor.justPressed() && menu == 0x00)
  {                                     
    btnApp.drawSmoothButton(false);     
    btnSensor.drawSmoothButton(false);  
    btnProgram.drawSmoothButton(false); 
    btnMotor.drawSmoothButton(true);    
    btnConfig.drawSmoothButton(false);  
    _delay(0.3);                        
    menu = 2;                           
    flagSetupMotor = false;             
    btnMotor.drawSmoothButton(false);   
  }
  else if (btnSensor.justPressed() && menu == 0x00)
  {                                     
    btnApp.drawSmoothButton(false);     
    btnMotor.drawSmoothButton(false);   
    btnProgram.drawSmoothButton(false); 
    btnSensor.drawSmoothButton(true);   
    btnConfig.drawSmoothButton(false);  
    _delay(0.3);                        
    menu = 3;                           
    flagSetupSensores = false;          
    btnSensor.drawSmoothButton(false);  
  }
  else if (btnApp.justPressed() && menu == 0x00)
  {                                     
    btnSensor.drawSmoothButton(false);  
    btnMotor.drawSmoothButton(false);   
    btnProgram.drawSmoothButton(false); 
    btnApp.drawSmoothButton(true);      
    btnConfig.drawSmoothButton(false);  
    _delay(0.3);                        
    menu = 4;                           
    flagSetupApp = false;               
    btnApp.drawSmoothButton(false);     
  }
  else if (btnConfig.justPressed() && menu == 0x00)
  {
    btnSensor.drawSmoothButton(false);  
    btnMotor.drawSmoothButton(false);   
    btnProgram.drawSmoothButton(false); 
    btnApp.drawSmoothButton(false);     
    btnConfig.drawSmoothButton(true);
    _delay(0.3); 
    menu = 5;    
    flagSetupConfig = false;
    btnConfig.drawSmoothButton(false); 
  }
  else if (btnBack.justPressed() && menu == 0x01)
  {                                  
    btnBack.drawSmoothButton(true);  
    _delay(0.3);                     
    btnBack.drawSmoothButton(false); 
    menu = 0;                        
    btnMenu = 1;                     
    flagSetupMenu = false;
    flagSetupProgram = false;
    flagSetupAluno = false;
    flagLoopAluno = false;

    setMotorPin(M1, 0);
    setMotorPin(M2, 0);
    setMotorPin(M3, 0);
    setMotorPin(M4, 0);
  }
  else if (btnBack.justPressed() && menu == 0x02)
  {
    btnBack.drawSmoothButton(true);
    _delay(0.3);
    btnBack.drawSmoothButton(false);
    menu = 0;    
    btnMenu = 2; 
    flagSetupMenu = false;
    enableM1 = false;
    enableM2 = false;
    enableM3 = false;
    enableM4 = false;
    setMotorPin(M4, 0);
    setMotorPin(M2, 0);
    setMotorPin(M3, 0);
    setMotorPin(M1, 0);
  }
  else if (btnBack.justPressed() && menu == 0x04)
  {
    btnBack.drawSmoothButton(true);
    _delay(0.3);
    btnBack.drawSmoothButton(false);
    menu = 0;
    btnMenu = 4;
    flagSetupMenu = false;
  }
  else if (btnBack.justPressed() && menu == 0x05)
  {
    btnBack.drawSmoothButton(true);
    _delay(0.3);
    btnBack.drawSmoothButton(false);
    menu = 0;
    btnMenu = 5;
    flagSetupMenu = false;
  }
  else if (btnBack.justPressed() && menu == 0x03 && pageDosSensores == 1)
  { 
    btnBack.drawSmoothButton(true);
    _delay(0.3);
    btnBack.drawSmoothButton(false);
    menu = 0;
    btnMenu = 3;
    flagSetupMenu = false;
    flagSetupSensores = false;
  }
  else if (btnBack.justPressed() && menu == 0x03 && pageDosSensores == 2)
  { 
    btnBack.drawSmoothButton(true);
    _delay(0.3);
    btnBack.drawSmoothButton(false);
    flagSetupSensores = false;
    pageDosSensores = 1;
  }
  else if (btnBack.justPressed() && menu == 0x03 && pageDosSensores == 3)
  { 
    btnBack.drawSmoothButton(true);
    _delay(0.3);
    btnBack.drawSmoothButton(false);
    flagSetupSensores = false;
    pageDosSensores = 2;
  }
  else if (btnBack.justPressed() && menu == 0x03 && pageDosSensores == 4)
  { 
    btnBack.drawSmoothButton(true);
    _delay(0.3);
    btnBack.drawSmoothButton(false);
    flagSetupSensores = false;
    pageDosSensores = 3;
  }
  else if (btnBack.justPressed() && menu == 0x03 && pageDosSensores == 5)
  { 
    btnBack.drawSmoothButton(true);
    _delay(0.3);
    btnBack.drawSmoothButton(false);
    flagSetupSensores = false;
    pageDosSensores = 4;
  }
  else if (btnNext.justPressed() && menu == 0x03 && pageDosSensores == 1)
  { 
    btnNext.drawSmoothButton(true);
    _delay(0.3);
    btnNext.drawSmoothButton(false);
    flagSetupSensores = false;
    pageDosSensores = 2;
  }
  else if (btnNext.justPressed() && menu == 0x03 && pageDosSensores == 2)
  { 
    btnNext.drawSmoothButton(true);
    _delay(0.3);
    btnNext.drawSmoothButton(false);
    flagSetupSensores = false;
    pageDosSensores = 3;
  }
  else if (btnNext.justPressed() && menu == 0x03 && pageDosSensores == 3)
  { 
    btnNext.drawSmoothButton(true);
    _delay(0.3);
    btnNext.drawSmoothButton(false);
    flagSetupSensores = false;
    pageDosSensores = 4;
  }
  else if (btnNext.justPressed() && menu == 0x03 && pageDosSensores == 4)
  { 
    btnNext.drawSmoothButton(true);
    _delay(0.3);
    btnNext.drawSmoothButton(false);
    flagSetupSensores = false;
    pageDosSensores = 5;
  }
  else if (btnNext.justPressed() && menu == 0x03 && pageDosSensores == 5)
  { 
    btnNext.drawSmoothButton(true);
    _delay(0.3);
    btnNext.drawSmoothButton(false);
    flagSetupSensores = false;
    pageDosSensores = 6;
  }
}

void pageMenu()
{
  if (!flagSetupMenu)
  {
    tft.setFreeFont(FM9);
    tft.fillScreen(TFT_BACKGRAUD);
    tft.setTextDatum(BC_DATUM); // Mudança para centralizar melhor o título
    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
    
    // Header Modernizado
    tft.drawCentreString(SYS_AUTHOR " " SYS_VERSION, 120, 10, 2); 
    tft.fillRoundRect(0, 28, 240, 3, 0, COLOR_HIGHLIGHT);

    uint16_t x = (tft.width() - BUTTON_W) / 8;
    uint16_t y = tft.height() / 3 - BUTTON_H + 30;


    btnProgram.initButtonUL(x, y, BUTTON_W, BUTTON_H, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, "PROGRAMA", 1);
    btnProgram.setPressAction(callbackBTNS);

    y = tft.height() / 3 + 50;

    btnMotor.initButtonUL(x, y, BUTTON_W, BUTTON_H, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, "MOTOR", 0);
    btnMotor.setPressAction(callbackBTNS);

    x = tft.height() / 3 + 20;

    btnSensor.initButtonUL(x, y, BUTTON_W, BUTTON_H, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, "SENSOR", 1);
    btnSensor.setPressAction(callbackBTNS);


    y = tft.height() / 3 - 55;

    btnApp.initButtonUL(x, y, BUTTON_W, BUTTON_H, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, "APP", 1);
    btnApp.setPressAction(callbackBTNS);


    btnConfig.initButtonUL(20, 250, 200, 55, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, "CONFIG", 1);
    btnConfig.setPressAction(callbackBTNS);


    updateButton();

    flagSetupMenu = true;
  }
}

void pageAluno()
{
  if (!flagSetupProgram && menu == 1)
  {
    tft.fillScreen(TFT_BACKGRAUD);
    tft.setTextDatum(BC_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
    
    tft.drawCentreString("Programa", 120, 10, 2);
    tft.fillRoundRect(0, 28, 240, 3, 0, COLOR_HIGHLIGHT);

    tft.setTextColor(COLOR_HIGHLIGHT, TFT_BACKGRAUD);
    tft.drawCentreString("Pressione btn <<4s", 120, 150, 2);
    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);

    flagSetupProgram = true;
  }
}

void updateEncoder()
{
}
void pageMotor()
{
  if (!flagSetupMotor && menu == 2)
  {

    pinMode(A3, INPUT);
    pinMode(A4, INPUT);
    pinMode(A5, INPUT);
    pinMode(A6, INPUT);
    pinMode(A15, INPUT);
    pinMode(A12, INPUT);
    pinMode(A13, INPUT);
    pinMode(A14, INPUT);

    pinMode(A8, INPUT);
    pinMode(A9, INPUT);
    pinMode(A10, INPUT);
    pinMode(A11, INPUT);

    pinMode(22, INPUT_PULLUP);
    pinMode(23, INPUT_PULLUP);
    pinMode(24, INPUT_PULLUP);
    pinMode(25, INPUT_PULLUP);
    pinMode(4, INPUT_PULLUP);
    pinMode(53, INPUT_PULLUP);
    pinMode(28, INPUT_PULLUP);
    pinMode(29, INPUT_PULLUP);
    pinMode(2, INPUT_PULLUP);
    pinMode(3, INPUT_PULLUP);
    pinMode(18, INPUT_PULLUP);
    pinMode(19, INPUT_PULLUP);

    tft.fillScreen(TFT_BLACK);
    tft.setTextDatum(BC_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.drawCentreString("Motores", 120, 10, 2);
    tft.fillRoundRect(0, 28, 240, 3, 0, COLOR_HIGHLIGHT);

    tft.setTextDatum(MC_DATUM);

    // Create a parameter set for the slider
    slider_t param;

    param.slotWidth = 9;          
    param.slotLength = 220;       
    param.slotColor = COLOR_HIGHLIGHT; 
    param.slotBgColor = TFT_DARKGREY;  
    param.orientation = H_SLIDER; 

    param.knobWidth = 15;          
    param.knobHeight = 25;         
    param.knobRadius = 5;          
    param.knobColor = TFT_WHITE;   
    param.knobLineColor = TFT_DARKGREY; 

    param.sliderLT = -100;   
    param.sliderRB = 100;    
    param.startPosition = 0; 
    param.sliderDelay = 300; 

    /************Slider do Motor A***************/
    int16_t x, y;
    uint16_t w, h;
    s1.drawSlider(10, 55, param);
    s1.getBoundingRect(&x, &y, &w, &h); 
    if (enableM1)
    {
      tft.drawRect(x, y - 25, w, h + 40, TFT_GREEN); 
    }
    else
    {
      tft.drawRect(x, y - 25, w, h + 40, COLOR_HIGHLIGHT); 
    }

    tft.setFreeFont(FSB9);
    tft.setTextDatum(BL_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);

    if (serigrafia)
    {
      tft.drawCentreString(namePort[0][1], x + 110, y - 20, 1);
    }
    else
    {
      tft.drawCentreString(namePort[0][0], x + 110, y - 20, 1);
    }

    tft.setFreeFont(FF0);
    tft.setTextDatum(BR_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);

    _delay(0.2);
    s1.setSliderPosition(5);
    _delay(0.2);
    s1.setSliderPosition(0);

    sprintf(txt0, "%03d", s1.getSliderPosition());
    tft.drawCentreString("Potencia:", x + 30, y + 30, 1);
    tft.drawRightString(txt0, x + 80, y + 30, 1);
    tft.drawRightString("%", x + 88, y + 30, 1);
    sprintf(txt0, "%06d", getCodePin(m1));

    tft.drawCentreString("Encoder:", x + 130, y + 30, 1);
    tft.drawCentreString(txt0, x + 175, y + 30, 1);

    /************Slider do Motor B***************/
    s2.drawSlider(10, 128, param);
    s2.getBoundingRect(&x, &y, &w, &h);               
    tft.drawRect(x, y - 25, w, h + 40, TFT_DARKGREY); 

    tft.setFreeFont(FSB9);
    tft.setTextDatum(BL_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);

    if (serigrafia)
    {
      tft.drawCentreString(namePort[1][1], x + 110, y - 20, 1);
    }
    else
    {
      tft.drawCentreString(namePort[1][0], x + 110, y - 20, 1);
    }

    _delay(0.2);
    s2.setSliderPosition(5);
    _delay(0.2);
    s2.setSliderPosition(2);

    tft.setFreeFont(FF0);
    tft.setTextDatum(BR_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);

    sprintf(txt0, "%03d", s2.getSliderPosition());
    tft.drawCentreString("Potencia:", x + 30, y + 30, 1);
    tft.drawRightString(txt0, x + 80, y + 30, 1);
    tft.drawRightString("%", x + 88, y + 30, 1);
    sprintf(txt0, "%06d", getCodePin(m2));

    tft.drawCentreString("Encoder:", x + 130, y + 30, 1);
    tft.drawCentreString(txt0, x + 175, y + 30, 1);

    /************Slider do Motor C***************/
    s3.drawSlider(10, 200, param);
    s3.getBoundingRect(&x, &y, &w, &h);           
    tft.drawRect(x, y - 25, w, h + 40, TFT_GREY); 

    tft.setFreeFont(FSB9);
    tft.setTextDatum(BL_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);

    if (serigrafia)
    {
      tft.drawCentreString(namePort[2][1], x + 110, y - 20, 1);
    }
    else
    {
      tft.drawCentreString(namePort[2][0], x + 110, y - 20, 1);
    }

    _delay(0.2);
    s3.setSliderPosition(5);
    _delay(0.2);
    s3.setSliderPosition(2);

    tft.setFreeFont(FF0);
    tft.setTextDatum(BR_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);

    sprintf(txt0, "%03d", s3.getSliderPosition());
    tft.drawCentreString("Potencia:", x + 30, y + 30, 1);
    tft.drawRightString(txt0, x + 80, y + 30, 1);
    tft.drawRightString("%", x + 88, y + 30, 1);
    sprintf(txt0, "%06d", getCodePin(m3));

    tft.drawCentreString("Encoder:", x + 130, y + 30, 1);
    tft.drawCentreString(txt0, x + 175, y + 30, 1);

    /************Slider do Motor C***************/
    s4.drawSlider(10, 272, param);
    s4.getBoundingRect(&x, &y, &w, &h);           
    tft.drawRect(x, y - 25, w, h + 40, TFT_GREY); 

    tft.setFreeFont(FSB9);
    tft.setTextDatum(BL_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);

    if (serigrafia)
    {
      tft.drawCentreString(namePort[3][1], x + 110, y - 20, 1);
    }
    else
    {
      tft.drawCentreString(namePort[3][0], x + 110, y - 20, 1);
    }

    _delay(0.2);
    s4.setSliderPosition(5);
    _delay(0.2);
    s4.setSliderPosition(2);

    tft.setFreeFont(FF0);
    tft.setTextDatum(BR_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);

    sprintf(txt0, "%03d", s4.getSliderPosition());
    tft.drawCentreString("Potencia:", x + 30, y + 30, 1);
    tft.drawRightString(txt0, x + 80, y + 30, 1);
    tft.drawRightString("%", x + 88, y + 30, 1);
    sprintf(txt0, "%06d", getCodePin(m4));

    tft.drawCentreString("Encoder:", x + 130, y + 30, 1);
    tft.drawCentreString(txt0, x + 175, y + 30, 1);
    flagSetupMotor = true;
  }

  int16_t x, y;
  uint16_t w, h;
  slider_t param;

  tft.setFreeFont(FF0);
  tft.setTextDatum(BR_DATUM);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);

  s1.getBoundingRect(&x, &y, &w, &h); 
  sprintf(txt0, " %03d", s1.getSliderPosition());
  tft.drawRightString(txt0, x + 80, y + 30, 1);
  sprintf(txt0, " %06d", getCodePin(m1));
  tft.drawCentreString(txt0, x + 175, y + 30, 1);

  s2.getBoundingRect(&x, &y, &w, &h); 
  sprintf(txt0, " %03d", s2.getSliderPosition());
  tft.drawRightString(txt0, x + 80, y + 30, 1);
  sprintf(txt0, " %06d", getCodePin(m2));
  tft.drawCentreString(txt0, x + 175, y + 30, 1);

  s3.getBoundingRect(&x, &y, &w, &h); 
  sprintf(txt0, " %03d", s3.getSliderPosition());
  tft.drawRightString(txt0, x + 80, y + 30, 1);
  sprintf(txt0, " %06d", getCodePin(m3));
  tft.drawCentreString(txt0, x + 175, y + 30, 1);

  s4.getBoundingRect(&x, &y, &w, &h); 
  sprintf(txt0, " %03d", s4.getSliderPosition());
  tft.drawRightString(txt0, x + 80, y + 30, 1);
  sprintf(txt0, " %06d", getCodePin(m4));
  tft.drawCentreString(txt0, x + 175, y + 30, 1);
}






void createBoxDraw(char *label, int x, int y, uint16_t colorLabel, uint16_t number, uint16_t number2, uint8_t sensor)
{
  int w = 57;
  int h = 40;
  tft.drawRoundRect(x, y, w, h + 18, 6, TFT_DARKGREY);
  tft.drawRoundRect(x + 1, y + 1, w - 2, h + 16, 5, TFT_WHITE);
  tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
  tft.drawCentreString(label, x + w / 2, y + 2, 2);

  switch (sensor)
  {
  case 01:
    sprintf(txt0, "A: %04d", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 20, 2);
    sprintf(txt0, "D: %01d", number2);
    tft.setTextColor(TFT_CYAN, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 3.2, h + y - 3, 2);
    break;
  case 02:
    if (number == 0)
    {
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_RED);
      tft.setTextColor(TFT_WHITE, TFT_RED);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_RED);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    }
    else
    {
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_DARKGREEN);
      tft.setTextColor(TFT_WHITE, TFT_DARKGREEN);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_DARKGREEN);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    }

    break;
  case 03:
    sprintf(txt0, "%03dcm", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    break;
  case 04:
    sprintf(txt0, "A: %04d", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    break;
  case 05:
    switch (number)
    {
    case 0x00:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_BACKGRAUD);
      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_BACKGRAUD);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x01:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_RED);
      tft.setTextColor(TFT_WHITE, TFT_RED);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_RED);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x02:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_DARKGREEN);
      tft.setTextColor(TFT_WHITE, TFT_DARKGREEN);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_DARKGREEN);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x03:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_BLUE);
      tft.setTextColor(TFT_WHITE, TFT_BLUE);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_BLUE);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x04:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_YELLOW);
      tft.setTextColor(TFT_BLACK, TFT_YELLOW);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(TFT_BLACK, TFT_YELLOW);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x05:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_ORANGE);
      tft.setTextColor(TFT_BLACK, TFT_ORANGE);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(TFT_BLACK, TFT_ORANGE);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x06:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_WHITE);
      tft.setTextColor(TFT_BLACK, TFT_WHITE);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(TFT_BLACK, TFT_WHITE);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x07:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_BLACK);
      tft.setTextColor(TFT_WHITE, TFT_BLACK);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_BLACK);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;
    }
    break;
  case 06:
    sprintf(txt0, "A: %04d", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 20, 2);
    sprintf(txt0, "M: %04d", number2);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 3, 2);
    break;
  case 07:
    sprintf(txt0, "%03d  C", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    tft.drawCircle(216, h + y - 8.6,2,rgb565(0xffffff));
    break;

  case 0x08:
  sprintf(txt0, "%03d  C", number);
  tft.setTextColor(colorLabel, TFT_BACKGRAUD);
  tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
  tft.drawCircle(35, 288,2, TFT_WHITE);
  break;

  case 0x09:
  sprintf(txt0, "CHN : %01d", number);
  tft.setTextColor(colorLabel, TFT_BACKGRAUD);
  tft.drawCentreString(String(txt0), x + w / 2, h + y - 20, 2);

  sprintf(txt0, "BT : %01d", number2);
  tft.setTextColor(colorLabel, TFT_BACKGRAUD);
  tft.drawCentreString(String(txt0), x + w / 2, h + y - 3, 2);
  break;

  case 10:
  sprintf(txt0, "X: %03d", number);
  tft.setTextColor(colorLabel, TFT_BACKGRAUD);
  tft.drawCentreString(String(txt0), x + w / 2, h + y - 20, 2);

  sprintf(txt0, "Y: %03d", number2);
  tft.setTextColor(colorLabel, TFT_BACKGRAUD);
  tft.drawCentreString(String(txt0), x + w / 2, h + y - 3, 2);
  break;

  case 11:
  sprintf(txt0, "V: %03d", number);
  tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
  break;
  }
}

void createBoxDraw(byte number0, int x, int y, uint16_t colorLabel, uint16_t number, uint16_t number2, uint8_t sensor)
{
  int w = 60;
  int h = 40;
  tft.drawRoundRect(x, y, w, h + 18, 6, TFT_DARKGREY);
  tft.drawRoundRect(x + 1, y + 1, w - 2, h + 16, 5, TFT_WHITE);
  tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
  tft.drawCentreString(String(number0), x + w / 2, y + 2, 2);

  tft.setTextColor(colorLabel, TFT_BACKGRAUD);

  switch (sensor)
  {
  case 01:
    sprintf(txt0, "A: %04d", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 20, 2);
    sprintf(txt0, "D: %01d", number2);
    tft.setTextColor(TFT_CYAN, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 3.2, h + y - 3, 2);
    break;
  case 02:
    if (number)
    {
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_DARKGREEN);
      tft.setTextColor(TFT_WHITE, TFT_DARKGREEN);
      tft.drawCentreString(number, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_DARKGREEN);
    }
    else
    {
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_RED);
      tft.setTextColor(TFT_WHITE, TFT_RED);
      tft.drawCentreString(number, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_RED);
    }
    sprintf(txt0, " %01d ", number);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    break;
  case 03:
    sprintf(txt0, "%03dcm", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    break;
  case 04:
    sprintf(txt0, "A: %04d", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    break;
  case 05:
    sprintf(txt0, "%03d C", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    break;
  case 06:
    sprintf(txt0, "A: %04d", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 20, 2);
    sprintf(txt0, "M: %04d", number2);
    tft.setTextColor(TFT_CYAN, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 3.2, h + y - 3, 2);
    break;
  }
}



void pageConfig()
{
  if (!flagSetupConfig && menu == 5)
  {
    tft.fillScreen(TFT_BACKGRAUD);
    tft.setTextDatum(BC_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
    tft.drawCentreString("Configuracao", 120, 10, 2);
    tft.fillRoundRect(0, 28, 240, 3, 0, COLOR_HIGHLIGHT);

    tft.setFreeFont(FSI12);

    flagSetupConfig = true;
  }

  if (enableConfig == false)
  {
    switch (menuConfig)
    {
    case 0x01:
      tft.setTextColor(COLOR_HIGHLIGHT, TFT_BACKGRAUD);
      tft.setCursor(10, 50);
      tft.print("Serigrafia : ");
      if (EEPROM.read(ADDRESS_SERIGRAFIA) == 0)
      {
        tft.print("M1,M2,M3");
      }
      else
      {
        tft.print("A,B,C e D");
      }
      tft.fillRoundRect(0, 58, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 80);
      tft.print("S. de COR : Tipo ");
      tft.print(typeSensorColor);
      tft.fillRoundRect(0, 88, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 110);
      tft.print("S. Utrassonico : Tipo ");
      tft.print(typeSensorUtra);
      tft.fillRoundRect(0, 118, 240, 2, 0, TFT_DARKGREY);
      break;

    case 0x02:
      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 50);
      tft.print("Serigrafia : ");
      if (EEPROM.read(ADDRESS_SERIGRAFIA) == 0)
      {
        tft.print("M1,M2,M3");
      }
      else
      {
        tft.print("A,B,C e D");
      }
      tft.fillRoundRect(0, 58, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(COLOR_HIGHLIGHT, TFT_BACKGRAUD);
      tft.setCursor(10, 80);
      tft.print("S. de COR : Tipo ");
      tft.print(typeSensorColor);
      tft.fillRoundRect(0, 88, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 110);
      tft.print("S. Utrassonico : Tipo ");
      tft.print(typeSensorUtra);
      tft.fillRoundRect(0, 118, 240, 2, 0, TFT_DARKGREY);
      break;
    case 0x03:
      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 50);
      tft.print("Serigrafia : ");
      if (EEPROM.read(ADDRESS_SERIGRAFIA) == 0)
      {
        tft.print("M1,M2,M3");
      }
      else
      {
        tft.print("A,B,C e D");
      }
      tft.fillRoundRect(0, 58, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 80);
      tft.print("S. de COR : Tipo ");
      tft.print(typeSensorColor);
      tft.fillRoundRect(0, 88, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(COLOR_HIGHLIGHT, TFT_BACKGRAUD);
      tft.setCursor(10, 110);
      tft.print("S. Utrassonico : Tipo ");
      tft.print(typeSensorUtra);
      tft.fillRoundRect(0, 118, 240, 2, 0, TFT_DARKGREY);
      break;

    case 0x04:
      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 50);
      tft.print("Serigrafia : ");
      if (EEPROM.read(ADDRESS_SERIGRAFIA) == 0)
      {
        tft.print("M1,M2,M3");
      }
      else
      {
        tft.print("A,B,C e D");
      }
      tft.fillRoundRect(0, 58, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 80);
      tft.print("S. de COR : Tipo ");
      tft.print(typeSensorColor);
      tft.fillRoundRect(0, 88, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(COLOR_HIGHLIGHT, TFT_BACKGRAUD);
      tft.setCursor(10, 110);
      tft.print("S. Utrassonico : Tipo ");
      tft.print(typeSensorUtra);
      tft.fillRoundRect(0, 118, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 140);
      tft.print("Beep : ");
      if (EEPROM.read(ADDRESS_SENSOR_BUZZER) == 0) 
      {
        tft.print("Desativado");
      }
      else
      {
        tft.print("Ativado");
      }
      tft.fillRoundRect(0, 148, 240, 2, 0, TFT_DARKGREY);
      break;
    }
  }
  else
  {
    switch (menuConfig)
    {
    case 0x01:
      tft.setTextColor(TFT_GREEN, TFT_BACKGRAUD);
      tft.setCursor(10, 50);
      tft.print("Serigrafia : ");
      if (EEPROM.read(ADDRESS_SERIGRAFIA) == 0)
      {
        tft.print("M1,M2,M3");
      }
      else
      {
        tft.print("A,B,C e D");
      }
      tft.fillRoundRect(0, 58, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 80);
      tft.print("S. de COR : Tipo ");
      tft.print(typeSensorColor);
      tft.fillRoundRect(0, 88, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 110);
      tft.print("S. Utrassonico : Tipo ");
      tft.print(typeSensorUtra);
      tft.fillRoundRect(0, 118, 240, 2, 0, TFT_DARKGREY);
      break;

    case 0x02:
      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 50);
      tft.print("Serigrafia : ");
      if (EEPROM.read(ADDRESS_SERIGRAFIA) == 0)
      {
        tft.print("M1,M2,M3");
      }
      else
      {
        tft.print("A,B,C e D");
      }
      tft.fillRoundRect(0, 58, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(TFT_GREEN, TFT_BACKGRAUD);
      tft.setCursor(10, 80);
      tft.print("S. de COR : Tipo ");
      tft.print(typeSensorColor);
      tft.fillRoundRect(0, 88, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 110);
      tft.print("S. Utrassonico : Tipo ");
      tft.print(typeSensorUtra);
      tft.fillRoundRect(0, 118, 240, 2, 0, TFT_DARKGREY);
      break;
    case 0x03:
      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 50);
      tft.print("Serigrafia : ");
      if (EEPROM.read(ADDRESS_SERIGRAFIA) == 0)
      {
        tft.print("M1,M2,M3");
      }
      else
      {
        tft.print("A,B,C e D");
      }
      tft.fillRoundRect(0, 58, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.setCursor(10, 80);
      tft.print("S. de COR : Tipo ");
      tft.print(typeSensorColor);
      tft.fillRoundRect(0, 88, 240, 2, 0, TFT_DARKGREY);

      tft.setTextColor(TFT_GREEN, TFT_BACKGRAUD);
      tft.setCursor(10, 110);
      tft.print("S. Utrassonico : Tipo ");
      tft.print(typeSensorUtra);
      tft.fillRoundRect(0, 118, 240, 2, 0, TFT_DARKGREY);
      break;
    }
  }
}

void printSensor33()
{
  if (!flagSetupSensores){    
    tft.fillScreen(TFT_BACKGRAUD);
      tft.setTextDatum(BC_DATUM);
      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.fillRoundRect(0, 30, 240, 3, 0, COLOR_HIGHLIGHT);

      tft.setTextColor(COLOR_HIGHLIGHT, TFT_BACKGRAUD);
      tft.drawCentreString("Pressione btn <<4s", 120, 10, 2);
      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);

      if (serigrafia){
        tft.setTextColor(COLOR_HIGHLIGHT, TFT_BACKGRAUD);
        tft.drawRightString("1 = SOM", 140, 100, 1);
        tft.drawRightString("2-4 = BTN", 160, 115, 1);
        tft.drawRightString("5,7 = COR", 160, 130, 1);
        tft.drawRightString("6,8 = DIS", 160, 145, 1);
        tft.drawRightString("A = TEMP", 150, 160, 1);
        tft.drawRightString("B = REMOTO", 172, 175, 1);
        tft.drawRightString("C = GIRO", 150, 190, 1);
        tft.drawRightString("D = ADAPTA", 174, 205, 1);
      }else{
        tft.setTextColor(COLOR_HIGHLIGHT, TFT_BACKGRAUD);
        tft.drawRightString("1 = SOM", 140, 100, 1);
        tft.drawRightString("2-4 = BTN", 160, 115, 1);
        tft.drawRightString("5,7 = COR", 160, 130, 1);
        tft.drawRightString("6,8 = DIS", 160, 145, 1);
        tft.drawRightString("M1= TEMP", 150, 160, 1);
        tft.drawRightString("M2= REMOTO", 172, 175, 1);
        tft.drawRightString("M3= GIRO", 150, 190, 1);
        tft.drawRightString("M4= ADAPTA", 174, 205, 1);   
      }

      tft.setTextDatum(BR_DATUM);
      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);

      flagSetupSensores = true;
  }

  if ((millis() - millisTarefa1) > 500)
    {
      millisTarefa1 = millis();

      if (serigrafia)
      { 
        //Botoes P1,P2,P3,P4
        createBoxDraw(namePort[4][1], 0, 36, TFT_WHITE, analogRead(A3), digitalRead(22), 11);
        createBoxDraw(namePort[5][1], 60, 36, TFT_WHITE, bounceP2.read(), digitalRead(23), 2);
        createBoxDraw(namePort[6][1], 120, 36, TFT_WHITE, bounceP3.read(), digitalRead(24), 2);
        createBoxDraw(namePort[7][1], 180, 36, TFT_WHITE, bounceP4.read(), digitalRead(25), 2);

        //Sensor de Cor P5
        if(typeSensorColor==1){
          createBoxDraw(namePort[8][1], 0, 106, TFT_WHITE, getColorSensor5(0), digitalRead(4), 5);
        }else if(typeSensorColor==2){
          createBoxDraw(namePort[8][1], 0, 106, TFT_WHITE, lerSensor_de_Cor(P5,LIDO), digitalRead(4), 5);        
        }

        //Sensor de Ultra P6
        if(typeSensorUtra==1){
          createBoxDraw(namePort[9][1], 0, 186, TFT_WHITE, getDistancia(P6), digitalRead(53), 3);
        }else if(typeSensorUtra==2){
          createBoxDraw(namePort[9][1], 0, 186, TFT_WHITE, lerSensor_de_Distancia(P6), digitalRead(53), 3);
        }
        //Sensor de Cor P7
        if(typeSensorColor==1){
          createBoxDraw(namePort[10][1], 180, 106, TFT_WHITE, getColorSensor7(0), digitalRead(4), 5);
        }else if(typeSensorColor==2){
          createBoxDraw(namePort[10][1], 180, 106, TFT_WHITE, lerSensor_de_Cor(P7,LIDO), digitalRead(4), 5);        
        }
        //Sensor de Ultra P8
        if(typeSensorUtra==1){
          createBoxDraw(namePort[11][1], 180, 180, TFT_WHITE, getDistancia(P8), digitalRead(29), 3);
        }else if(typeSensorUtra==2){
          createBoxDraw(namePort[11][1], 180, 180, TFT_WHITE, lerSensor_de_Distancia(P8), digitalRead(29), 3);
        }

        //Sensor de Temperatura PA
        createBoxDraw(namePort[0][1], 0, 255, TFT_WHITE, getTemperatureA(), digitalRead(2), 8);

        //Controle Remoto
        createBoxDraw(namePort[1][1], 60, 255, TFT_WHITE, 1, getInfravermelhoB(1), 9);

        //Sensor Giroscopio
        createBoxDraw(namePort[2][1], 120, 255, TFT_WHITE, sensorMovimento(11,1), sensorMovimento(11,0), 10);

        //Adptadora
        createBoxDraw(namePort[3][1], 180, 255, TFT_WHITE, analogRead(A11), digitalRead(19), 1);

      }
      else
      {
        //Botoes P1,P2,P3,P4
        createBoxDraw(namePort[4][0], 0, 36, TFT_WHITE, analogRead(A3), digitalRead(22), 11);
        createBoxDraw(namePort[5][0], 60, 36, TFT_WHITE, bounceP2.read(), digitalRead(23), 2);
        createBoxDraw(namePort[6][0], 120, 36, TFT_WHITE, bounceP3.read(), digitalRead(24), 2);
        createBoxDraw(namePort[7][0], 180, 36, TFT_WHITE, bounceP4.read(), digitalRead(25), 2);

        //Sensor de Cor P5
        if(typeSensorColor==1){
          createBoxDraw(namePort[8][0], 0, 106, TFT_WHITE, getColorSensor5(0), digitalRead(4), 5);
        }else if(typeSensorColor==2){
          createBoxDraw(namePort[8][0], 0, 106, TFT_WHITE, lerSensor_de_Cor(P5,LIDO), digitalRead(4), 5);        
        }

        //Sensor de Ultra P6
        if(typeSensorUtra==1){
          createBoxDraw(namePort[9][0], 0, 186, TFT_WHITE, getDistancia(P6), digitalRead(53), 3);
        }else if(typeSensorUtra==2){
          createBoxDraw(namePort[9][0], 0, 186, TFT_WHITE, lerSensor_de_Distancia(P6), digitalRead(53), 3);
        }
        //Sensor de Cor P7
        if(typeSensorColor==1){
          createBoxDraw(namePort[10][0], 180, 106, TFT_WHITE, getColorSensor7(0), digitalRead(4), 5);
        }else if(typeSensorColor==2){
          createBoxDraw(namePort[10][0], 180, 106, TFT_WHITE, lerSensor_de_Cor(P7,LIDO), digitalRead(4), 5);        
        }
        //Sensor de Ultra P8
        if(typeSensorUtra==1){
          createBoxDraw(namePort[11][0], 180, 180, TFT_WHITE, getDistancia(P8), digitalRead(29), 3);
        }else if(typeSensorUtra==2){
          createBoxDraw(namePort[11][0], 180, 180, TFT_WHITE, lerSensor_de_Distancia(P8), digitalRead(29), 3);
        }

        //Sensor de Temperatura PA
        createBoxDraw(namePort[0][0], 0, 255, TFT_WHITE, getTemperatureA(), digitalRead(2), 8);

        //Controle Remoto
        createBoxDraw(namePort[1][0], 60, 255, TFT_WHITE, 1, getInfravermelhoB(1), 9);

        //Sensor Giroscopio
        createBoxDraw(namePort[2][0], 120, 255, TFT_WHITE, sensorMovimento(11,1), sensorMovimento(11,0), 10);

        //Adptadora
        createBoxDraw(namePort[3][0], 180, 255, TFT_WHITE, analogRead(A11), digitalRead(19), 1);
      }
    }

}


void pageSensor()
{
  if (!flagSetupSensores && menu == 3 && pageDosSensores == 7)
  {

    pinMode(A3, INPUT);
    pinMode(A4, INPUT);
    pinMode(A5, INPUT);
    pinMode(A6, INPUT);
    pinMode(A15, INPUT);
    pinMode(A12, INPUT);
    pinMode(A13, INPUT);
    pinMode(A14, INPUT);
    pinMode(A8, INPUT);
    pinMode(A9, INPUT);
    pinMode(A10, INPUT);
    pinMode(A11, INPUT);

    pinMode(22, INPUT_PULLUP);
    pinMode(23, INPUT_PULLUP);
    pinMode(24, INPUT_PULLUP);
    pinMode(25, INPUT_PULLUP);
    pinMode(4, INPUT_PULLUP);
    pinMode(53, INPUT_PULLUP);
    pinMode(28, INPUT_PULLUP);
    pinMode(29, INPUT_PULLUP);
    pinMode(2, INPUT_PULLUP);
    pinMode(3, INPUT_PULLUP);
    pinMode(18, INPUT_PULLUP);
    pinMode(19, INPUT_PULLUP);

    tft.fillScreen(TFT_BACKGRAUD);
    tft.setTextDatum(BC_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
    tft.drawCentreString("Adaptadora", 120, 10, 2);
    tft.fillRoundRect(0, 30, 240, 3, 0, COLOR_HIGHLIGHT);

    btnNext.initButtonUL(180, 2, 55, 24, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, ">>", 1);
    btnNext.setPressAction(callbackBTNS);
    btnNext.drawSmoothButton(false, 3, TFT_BACKGRAUD); 

    flagSetupSensores = true;
  }
  else if (!flagSetupSensores && menu == 3 && pageDosSensores == 1)
  {

    pinMode(A3, INPUT);
    pinMode(A4, INPUT);
    pinMode(A5, INPUT);
    pinMode(A6, INPUT);
    pinMode(A15, INPUT);
    pinMode(A12, INPUT);
    pinMode(A13, INPUT);
    pinMode(A14, INPUT);

    pinMode(A8, INPUT);
    pinMode(A9, INPUT);
    pinMode(A10, INPUT);
    pinMode(A11, INPUT);

    pinMode(22, INPUT_PULLUP);
    pinMode(23, INPUT_PULLUP);
    pinMode(24, INPUT_PULLUP);
    pinMode(25, INPUT_PULLUP);
    pinMode(4, INPUT_PULLUP);
    pinMode(53, INPUT_PULLUP);
    pinMode(28, INPUT_PULLUP);
    pinMode(29, INPUT_PULLUP);
    pinMode(2, INPUT_PULLUP);
    pinMode(3, INPUT_PULLUP);
    pinMode(18, INPUT_PULLUP);
    pinMode(19, INPUT_PULLUP);

    tft.fillScreen(TFT_BACKGRAUD);
    tft.setTextDatum(BC_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
    tft.drawCentreString("Sensores " + String(typeSensorButton), 120, 10, 2);
    tft.fillRoundRect(0, 30, 240, 3, 0, COLOR_HIGHLIGHT);

    btnBack.initButtonUL(3, 2, 55, 24, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, "<<", 1);
    btnBack.setPressAction(callbackBTNS);
    btnBack.drawSmoothButton(false, 3, TFT_BACKGRAUD); 

    btnNext.initButtonUL(180, 2, 55, 24, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, ">>", 1);
    btnNext.setPressAction(callbackBTNS);
    btnNext.drawSmoothButton(false, 3, TFT_BACKGRAUD); 

    flagSetupSensores = true;
  }
  else if (!flagSetupSensores && menu == 3 && pageDosSensores == 2)
  {

    tft.fillScreen(TFT_BACKGRAUD);
    tft.setTextDatum(BC_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
    tft.drawCentreString("S.Utrass " + String(typeSensorUtra), 120, 10, 2);
    tft.drawCentreString("Alcance: 6cm a 255cm", 120, 36, 1);
    tft.fillRoundRect(0, 30, 240, 3, 0, COLOR_HIGHLIGHT);

    btnBack.initButtonUL(3, 2, 55, 24, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, "<< 4s", 1);
    btnBack.setPressAction(callbackBTNS);
    btnBack.drawSmoothButton(false, 3, TFT_BACKGRAUD); 

    btnNext.initButtonUL(180, 2, 55, 24, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, ">> 4s", 1);
    btnNext.setPressAction(callbackBTNS);
    btnNext.drawSmoothButton(false, 3, TFT_BACKGRAUD); 

    flagSetupSensores = true;
  }
  else if (!flagSetupSensores && menu == 3 && pageDosSensores == 3)
  {
    tft.fillScreen(TFT_BACKGRAUD);
    tft.setTextDatum(BC_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
    tft.drawCentreString("S.de Cor " + String(typeSensorColor), 120, 10, 2);
    tft.drawCentreString("TABELA DE CORES", 120, 36, 1);

    tft.drawRect(99, 59, 22, 22, TFT_WHITE);
    tft.fillRect(100, 60, 20, 20, TFT_RED);
    tft.drawCentreString("=1", 135, 63, 1);

    tft.drawRect(99, 84, 22, 22, TFT_WHITE);
    tft.fillRect(100, 85, 20, 20, TFT_DARKGREEN);
    tft.drawCentreString("=2", 135, 88, 1);

    tft.drawRect(99, 109, 22, 22, TFT_WHITE);
    tft.fillRect(100, 110, 20, 20, TFT_BLUE);
    tft.drawCentreString("=3", 135, 113, 1);

    tft.drawRect(99, 134, 22, 22, TFT_WHITE);
    tft.fillRect(100, 135, 20, 20, COLOR_HIGHLIGHT); // Substituído amarelo original para harmonizar
    tft.drawCentreString("=4", 135, 138, 1);

    tft.drawRect(99, 159, 22, 22, TFT_WHITE);
    tft.fillRect(100, 160, 20, 20, TFT_ORANGE);
    tft.drawCentreString("=5", 135, 163, 1);

    tft.drawRect(99, 184, 22, 22, TFT_WHITE);
    tft.fillRect(100, 185, 20, 20, TFT_WHITE);
    tft.drawCentreString("=6", 135, 188, 1);

    tft.drawRect(99, 209, 22, 22, TFT_WHITE);
    tft.fillRect(100, 210, 20, 20, TFT_BLACK);
    tft.drawCentreString("=7", 135, 213, 1);

    tft.fillRoundRect(0, 25, 240, 3, 0, COLOR_HIGHLIGHT);

    btnBack.initButtonUL(3, 2, 55, 24, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, "<< 4s", 1);
    btnBack.setPressAction(callbackBTNS);
    btnBack.drawSmoothButton(false, 3, TFT_BACKGRAUD); 

    btnNext.initButtonUL(180, 2, 55, 24, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, ">> 4s", 1);
    btnNext.setPressAction(callbackBTNS);
    btnNext.drawSmoothButton(false, 3, TFT_BACKGRAUD); 

    flagSetupSensores = true;
  }
  else if (!flagSetupSensores && menu == 3 && pageDosSensores == 4)
  {
    tft.fillScreen(TFT_BACKGRAUD);
    tft.setTextDatum(BC_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
    tft.drawCentreString("S.de Cor " + String(typeSensorColor), 120, 10, 2);
    tft.drawCentreString("ESCALA DE CINZA", 120, 36, 1);
    tft.drawCentreString("Alcance: 0 ate 100", 120, 56, 1);

    tft.fillRoundRect(0, 28, 240, 3, 0, COLOR_HIGHLIGHT);

    btnBack.initButtonUL(3, 2, 55, 24, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, "<< 4s", 1);
    btnBack.setPressAction(callbackBTNS);
    btnBack.drawSmoothButton(false, 3, TFT_BACKGRAUD); 

    btnNext.initButtonUL(180, 2, 55, 24, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, ">> 4s", 1);
    btnNext.setPressAction(callbackBTNS);
    btnNext.drawSmoothButton(false, 3, TFT_BACKGRAUD); 

    flagSetupSensores = true;
  }
  else if (!flagSetupSensores && menu == 3 && pageDosSensores == 5)
  {
    tft.fillScreen(TFT_BACKGRAUD);
    tft.setTextDatum(BC_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
    tft.drawCentreString("Movimento", 120, 10, 2);
    tft.drawCentreString("Giroscopio Interno", 120, 36, 1);

    tft.fillRoundRect(0, 28, 240, 3, 0, COLOR_HIGHLIGHT);

    btnBack.initButtonUL(3, 2, 55, 24, TFT_DARKGREY, TFT_BACKGRAUD, COLOR_HIGHLIGHT, "<< 4s", 1);
    btnBack.setPressAction(callbackBTNS);
    btnBack.drawSmoothButton(false, 3, TFT_BACKGRAUD); 

    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);

    flagSetupSensores = true;
  }



}

void pageApp()
{
  if (!flagSetupApp && menu == 4)
  {
    tft.fillScreen(TFT_BACKGRAUD);
    tft.setTextDatum(BC_DATUM);
    tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
    tft.drawCentreString("App Dabble", 120, 10, 2);
    tft.fillRoundRect(0, 28, 240, 3, 0, COLOR_HIGHLIGHT);

    tft.fillTriangle(100, 100, 140, 100, 120, 60, TFT_DARKGREY);
    tft.fillTriangle(20, 160, 60, 140, 60, 180, TFT_DARKGREY);
    tft.fillTriangle(220, 160, 180, 140, 180, 180, TFT_DARKGREY);
    tft.fillTriangle(100, 220, 140, 220, 120, 260, TFT_DARKGREY);

    flagSetupApp = true;
  }

  Dabble.processInput(); 

  if (GamePad.isUpPressed())
  {
    tft.fillTriangle(100, 100, 140, 100, 120, 60, TFT_GREEN);
    setMotorPin(M1, 100);
    setMotorPin(M2, 100);
  }

  else if (GamePad.isDownPressed())
  {
    tft.fillTriangle(100, 220, 140, 220, 120, 260, TFT_GREEN);
    setMotorPin(M1, -100);
    setMotorPin(M2, -100);
  }

  else if (GamePad.isLeftPressed())
  {
    tft.fillTriangle(20, 160, 60, 140, 60, 180, TFT_GREEN);
    setMotorPin(M1, 0);
    setMotorPin(M2, 255);
  }

  else if (GamePad.isRightPressed())
  {
    tft.fillTriangle(220, 160, 180, 140, 180, 180, TFT_GREEN);
    setMotorPin(M1, 255);
    setMotorPin(M2, 0);
  }

  else if (GamePad.isSquarePressed())
  {
  }

  else if (GamePad.isCirclePressed())
  {
  }

  else if (GamePad.isCrossPressed())
  {
  }

  else if (GamePad.isTrianglePressed())
  {
  }

  else if (GamePad.isStartPressed())
  {
  }

  else if (GamePad.isSelectPressed())
  {
  }
  else
  {
    tft.fillTriangle(100, 100, 140, 100, 120, 60, TFT_RED);
    tft.fillTriangle(20, 160, 60, 140, 60, 180, TFT_RED);
    tft.fillTriangle(220, 160, 180, 140, 180, 180, TFT_RED);
    tft.fillTriangle(100, 220, 140, 220, 120, 260, TFT_RED);

    setMotorPin(M1, 0);
    setMotorPin(M2, 0);
  }
}

void inicializacaoAluno()
{
  _delay(1);
  setMotorPin(M1, 0);
  setMotorPin(M2, 0);
  setMotorPin(M3, 0);
  setMotorPin(M4, 0);


  flagSetupAluno = true;
  flagLoopAluno = true;
}

// Configuração Inicial para Sistema Cittius (agora versão @caiofps_ v1.9)
void initSetup()
{
  // Configuração de Hardware
  Serial.begin(9600); 
  Dabble.begin(9600); 

  bounceP1.attach(A3, INPUT);
  bounceP1.interval(40);

  bounceP2.attach(A4, INPUT);
  bounceP2.interval(40);

  bounceP3.attach(A5, INPUT);
  bounceP3.interval(40);

  bounceP4.attach(A6, INPUT);
  bounceP4.interval(40);

  bounceP5.attach(A15, INPUT);
  bounceP5.interval(40);

  bounceP6.attach(A12, INPUT);
  bounceP6.interval(40);

  bouncePA.attach(A8, INPUT);
 

  bounceP7.attach(A13, INPUT);
  bounceP7.interval(40);

  bounceP8.attach(A14, INPUT);
  bounceP8.interval(40);

  bouncePA.attach(A8, INPUT);
  bouncePA.interval(40);

  bouncePB.attach(A9, INPUT);
  bouncePB.interval(40);

  bouncePC.attach(A10, INPUT);
  bouncePC.interval(40);

  bouncePD.attach(A11, INPUT);
  bouncePD.interval(40);

  // Configurando para o fund1 não conflitar com SPI do touch
  pinMode(A1, OUTPUT); // pino do RFID como saida digital
  pinMode(A2, OUTPUT);
  // pino do RFID como saida digital

  if(EEPROM.read(ADDRESS_SERIGRAFIA)==255){
    EEPROM.write(ADDRESS_SERIGRAFIA, 0);
  }else if(EEPROM.read(ADDRESS_SENSOR_COR)==255){
    EEPROM.write(ADDRESS_SENSOR_COR, 2);
  }else if(EEPROM.read(ADDRESS_SENSOR_UTRA)==255){
    EEPROM.write(ADDRESS_SENSOR_UTRA, 2);
  }


  serigrafia = EEPROM.read(ADDRESS_SERIGRAFIA);
  typeSensorColor = EEPROM.read(ADDRESS_SENSOR_COR);
  typeSensorUtra = EEPROM.read(ADDRESS_SENSOR_UTRA);
  enableBUZZER = EEPROM.read(ADDRESS_SENSOR_BUZZER);

  // Nesse momento não sei quem é RST ou CS do RFID
  digitalWrite(A1, 0x01); // pino do RFID para Alta para elevar CS do chip
  digitalWrite(A2, 0x01); // pino do RFID para Alta para elevar CS do chip


  Wire.begin();
  delay(200);
  mpu.begin();
  delay(200);
  mpu.calcOffsets(); // gyro and accelero

  //******************************FIM DO SETUP DO FUND 1***********************************
  // Configuração do Display TFT
  tft.begin();                   // Inicia o display TFT
  tft.setRotation(2);            // Configura a rotação do Display
  tft.fillScreen(TFT_BACKGRAUD); // A tela inteira inicia na cor de Backgraud
  tft.setTouch(calData);         // Configura o touch da tela, Esse é apenas um valor inicial que deve ser corrigido com uma tela de calibração

  tft.fillScreen(7);


  tft.setFreeFont(FM9);
  tft.fillScreen(TFT_BACKGRAUD);

  pageMenu();

  // Configuração dos Eventos dos Botões
  btnEnter.attachClick(eventoSimplesEnter);       // Simples Click no botão enter chama a função 1
  btnVoltar.attachClick(eventoDeVoltar2);         // Simples Click no botão enter chama a função 1
  btnVoltar.attachLongPressStart(eventoDeVoltar); // Simples Click no botão enter chama a função 1
  btnMais.attachDuringLongPress(eventoMais2);     // Simples Click no botão enter chama a função 1
  btnMais.attachClick(eventoMais);                // Simples Click no botão enter chama a função 1
  btnMenos.attachClick(eventoMenos);              // Simples Click no botão enter chama a função 1
  btnMenos.attachDuringLongPress(eventoMenos2);   // Simples Click no botão enter chama a função 1
}

void enableMotor()
{
  switch (selectMotor)
  {
  case 0x01:
    enableM1 = true;
    enableM2 = false;
    enableM3 = false;
    enableM4 = false;
    break;
  case 0x02:
    enableM1 = false;
    enableM2 = true;
    enableM3 = false;
    enableM4 = false;
    break;
  case 0x03:
    enableM1 = false;
    enableM2 = false;
    enableM3 = true;
    enableM4 = false;
    break;
  case 0x04:
    enableM1 = false;
    enableM2 = false;
    enableM3 = false;
    enableM4 = true;
    break;
  }
}
void updateLoop()
{
  if(menu==1 || menu==3){
  mpu.update();
  }else if(menu == 0){
    
    uint16_t t_x = 9999, t_y = 9999; // To store the touch coordinates
    bool pressed = tft.getTouch(&t_x, &t_y);

    for (uint8_t b = 0; b < buttonCount; b++)
    {
      if (pressed)
      {
        if (btn[b]->contains(t_x, t_y))
        {
          btn[b]->press(true);
          btn[b]->pressAction();
        }
      }
      else
      {
        btn[b]->press(false);
        btn[b]->releaseAction();
      }
    }
  }else if(menu==2){
  static uint32_t scanTime = millis();


  if (millis() - scanTime >= 20)
  {
uint16_t t_x = 9999, t_y = 9999; // To store the touch coordinates
        if (tft.getTouch(&t_x, &t_y, 250))
        {
          if (s1.checkTouch(t_x, t_y))
          {
            setMotorPin(M1, s1.getSliderPosition());
            selectMotor = 1;
            enableMotor();
          }
          if (s2.checkTouch(t_x, t_y))
          {
            setMotorPin(M2, s2.getSliderPosition());
            selectMotor = 2;
            enableMotor();
          }

          if (s3.checkTouch(t_x, t_y))
          {
            setMotorPin(M3, s3.getSliderPosition());
            selectMotor = 3;
            enableMotor();
          }

          if (s4.checkTouch(t_x, t_y))
          {
            setMotorPin(M4, s4.getSliderPosition());
            selectMotor = 4;
            enableMotor();
          }
        }
        scanTime = millis();
      }
  }

  btnEnter.tick(); // Habilita evento do botão Enter
  btnVoltar.tick();
  btnMais.tick();
  btnMenos.tick();

  switch (menu)
  {
  case 0x00:
    pageMenu();
    break;
  case 0x01:
    pageAluno();
    break;
  case 0x02:
    pageMotor();
    selectMotores(selectMotor);
    break;
  case 0x03:
    printSensor33();
    break;
  case 0x04:
    pageApp();
    break;
  case 0x05:
    pageConfig();
    break;
  }

  _loop();

}
