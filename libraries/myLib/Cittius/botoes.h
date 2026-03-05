#include "Arduino.h"
#include "variaveis.h"

//******************Botoes***************************//
#include "OneButton.h"   //Biblioteca para eventos para botões
OneButton btnEnter(49, true);  // Botão Enter da placa v1 e V2
OneButton btnVoltar(48, true); // Botão Enter da placa v1 e V2
OneButton btnMais(47, true);   // Botão Enter da placa v1 e V2
OneButton btnMenos(38, true);  // Botão Enter da placa v1 e V2


void eventoSimplesEnter()
{
  if (menu == 0 && btnMenu == 1)
  {
    flagSetupProgram = false;
    menu = 1;
  }
  else if (menu == 0 && btnMenu == 2)
  {
    flagSetupMotor = false;
    menu = 2;
  }
  else if (menu == 0 && btnMenu == 3)
  {
    flagSetupSensores = false;
    menu = 3;
  }
  else if (menu == 0 && btnMenu == 4)
  {
    flagSetupApp = false;
    menu = 4;
  }
  else if (menu == 0 && btnMenu == 5)
  {
    flagSetupConfig = false;
    menu = 5;
  }

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

  if (menu == 0x05)
  {
    enableConfig = true;
  }
}

void eventoDeVoltar()
{
  switch (menu)
  {
  case 01:
    setMotorPin(M1, 0);
    setMotorPin(M2, 0);
    setMotorPin(M3, 0);
    setMotorPin(M4, 0);

    btnMenu = 1; // Essa variavel auxilia no controle dos botões da controladora para mostrar ao usuario
    flagSetupMenu = false;
    menu = 0;

    flagSetupProgram = false;
    flagSetupAluno = false;
    flagLoopAluno = false;
    break;
  case 02:
    menu = 0;    // Chaveia menu touch para 0 para voltar ao Menu principal
    btnMenu = 2; // Essa variavel auxilia no controle dos botões da controladora para mostrar ao usuario
    flagSetupMenu = false;
    enableM1 = false;
    enableM2 = false;
    enableM3 = false;
    enableM4 = false;
    setMotorPin(M4, 0);
    setMotorPin(M2, 0);
    setMotorPin(M3, 0);
    setMotorPin(M1, 0);
    break;
  case 03:
    menu = 0;    // Chaveia menu touch para 0 para voltar ao Menu principal
    btnMenu = 3; // Essa variavel auxilia no controle dos botões da controladora para mostrar ao usuario
    flagSetupMenu = false;
    break;
  case 04:
    menu = 0;    // Chaveia menu touch para 0 para voltar ao Menu principal
    btnMenu = 4; // Essa variavel auxilia no controle dos botões da controladora para mostrar ao usuario
    flagSetupMenu = false;
    break;

  case 05:
    menu = 0;    // Chaveia menu touch para 0 para voltar ao Menu principal
    btnMenu = 5; // Essa variavel auxilia no controle dos botões da controladora para mostrar ao usuario
    flagSetupMenu = false;
    break;
  }
}

void eventoMenos2()
{
  if (menu == 2 && enableM1)
  {
    s1.setSliderPosition(s1.getSliderPosition() - 10);
    setMotorPin(M1, s1.getSliderPosition());
  }
  else if (menu == 2 && enableM2)
  {
    s2.setSliderPosition(s2.getSliderPosition() - 10);
    setMotorPin(M2, s2.getSliderPosition());
  }
  else if (menu == 2 && enableM3)
  {
    s3.setSliderPosition(s3.getSliderPosition() - 10);
    setMotorPin(M3, s3.getSliderPosition());
  }
  else if (menu == 2 && enableM4)
  {
    s4.setSliderPosition(s4.getSliderPosition() - 10);
    setMotorPin(M4, s4.getSliderPosition());
  }
}

void eventoMais2()
{
  if (menu == 2 && enableM1)
  {
    s1.setSliderPosition(s1.getSliderPosition() + 10);
    setMotorPin(M1, s1.getSliderPosition());
  }
  else if (menu == 2 && enableM2)
  {
    s2.setSliderPosition(s2.getSliderPosition() + 10);
    setMotorPin(M2, s2.getSliderPosition());
  }
  else if (menu == 2 && enableM3)
  {
    s3.setSliderPosition(s3.getSliderPosition() + 10);
    setMotorPin(M3, s3.getSliderPosition());
  }
  else if (menu == 2 && enableM4)
  {
    s4.setSliderPosition(s4.getSliderPosition() + 10);
    setMotorPin(M4, s4.getSliderPosition());
  }
}

void eventoDeVoltar2()
{
  if (menu == 2 && enableM1)
  {
    enableM1 = false;
  }
  else if (menu == 2 && enableM2)
  {
    enableM2 = false;
  }
  else if (menu == 2 && enableM3)
  {
    enableM3 = false;
  }
  else if (menu == 2 && enableM4)
  {
    enableM4 = false;
  }
  else if (menu == 2 && !enableM1 && !enableM2 && !enableM3 && !enableM4)
  {
    menu = 0;    // Chaveia menu touch para 0 para voltar ao Menu principal
    btnMenu = 2; // Essa variavel auxilia no controle dos botões da controladora para mostrar ao usuario
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
  else if (menu == 3)
  {
    menu = 0;    // Chaveia menu touch para 0 para voltar ao Menu principal
    btnMenu = 3; // Essa variavel auxilia no controle dos botões da controladora para mostrar ao usuario
    flagSetupMenu = false;
  }

  if (menu == 0x05)
  {
    enableConfig = false;
  }
}
