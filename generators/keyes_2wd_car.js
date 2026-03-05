'use strict';

goog.provide('Blockly.Arduino.desktop-car');

goog.require('Blockly.Arduino');

/////////////////////////led///////////////////////
//Blue

Blockly.Arduino.motorD_on_u = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  var dropdown_r = this.getFieldValue('port');

  Blockly.Arduino.definitions_['setup_cittius'] = '#include "Login.h"';
  Blockly.Arduino.setups_['setup_cittius1'] = 'initTFT();';

  var code = 'updateTFT();';
  return code;
};

Blockly.Arduino.desk_led_blue = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  var dropdown_r = this.getFieldValue('port');

  Blockly.Arduino.definitions_['setup_output_led'] = '#include "rsteck.h"';
  var code = 'setLed('+dropdown_r+',0x0000FF);\n';
  return code;
};

Blockly.Arduino.interface_motor = function() {
  var dropdown_porta = this.getFieldValue('porta');
  var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'setMotorPin('+dropdown_porta+','+number_velocidade+');\n';
  return code;
};

Blockly.Arduino.interface_motor_medio = function() {
  var dropdown_porta = this.getFieldValue('porta');
  var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

  
  var code = 'setMotorPin('+dropdown_porta+','+number_velocidade+');\n';
  return code;
};






Blockly.Arduino.emFrente = function() {
  var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  if(number_velocidade>=0){
    var code = '//Movendo os Motores M1 & M2\nsetMotorPin(A,'+ number_velocidade +');\nsetMotorPin(B,'+number_velocidade+');\n';
  }else{
    var code = `//ERRO DE ENTRADA`
  }
  
  return code;
};

Blockly.Arduino.tras = function() {
  var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  if(number_velocidade>0){
    var code = '//Movendo os Motores M1 & M2\nsetMotorPin(A,-'+ number_velocidade +');\nsetMotorPin(B,-'+number_velocidade+');\n';
  }if(number_velocidade==0){
    var code = '//Movendo os Motores M1 & M2\nsetMotorPin(A,0' +');\nsetMotorPin(B,0'+');\n';
  }
  
  return code;
};

Blockly.Arduino.direita = function() {
  var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  if(number_velocidade>0){
    var code = '//Movendo os Motores M1 & M2\nsetMotorPin(A,'+ number_velocidade +');\nsetMotorPin(B,'+0+');\n';
  }if(number_velocidade==0){
    var code = '//Movendo os Motores M1 & M2\nsetMotorPin(A,0' +');\nsetMotorPin(B,0'+');\n';
  }
  
  return code;
};

Blockly.Arduino.esquerda = function() {
  var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  if(number_velocidade>0){
    var code = '//Movendo os Motores M1 & M2\nsetMotorPin(A,'+ 0 +');\nsetMotorPin(B,'+number_velocidade+');\n';
  }if(number_velocidade==0){
    var code = '//Movendo os Motores M1 & M2\nsetMotorPin(A,0' +');\nsetMotorPin(B,0'+');\n';
  }
  
  return code;
};


Blockly.Arduino.pararDirecao = function() {
 // var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
 // if(number_velocidade>0){
    var code = '//Movendo os Motores M1 & M2\nsetMotorPin(A,'+ 0 +');\nsetMotorPin(B,'+0+');\n';
  //}if(number_velocidade==0){
   // var code = '//Movendo os Motores M1 & M2\nsetMotorPin(A,0' +');\nsetMotorPin(B,0'+');\n';
  //}
  
  return code;
};

//Red
Blockly.Arduino.desk_led_red = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  var dropdown_r = this.getFieldValue('port');

  Blockly.Arduino.definitions_['setup_output_led'] = '#include "rsteck.h"';
  var code = 'setLed('+dropdown_r+',0xFF0000);\n';
  return code;
};

//Delay 0.5s
Blockly.Arduino.Aguarde05s = function() {

  var code = 'delay(500);\n';
  return code;

};

//Delay 1s
Blockly.Arduino.Aguarde1s = function() {
  var code = 'delay(1000);\n';
  return code;
};

//Delay 3s
Blockly.Arduino.Aguarde3s = function() {
  var code = 'delay(3000);\n';
  return code;
};

//Delay 10s
Blockly.Arduino.Aguarde10s = function() {
  var code = 'delay(10000);\n';
  return code;
};











/*
Blockly.Arduino.if_Color = function() {
  var value = this.getFieldValue('FLAG');

  return value;
};*/

Blockly.Arduino.if_Button = function () {

  var port_ = this.getFieldValue('port');
  var status_ = this.getFieldValue('status');
  //var code;
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if(status_=='1'){
   var code = 'if (analogRead('+port_+ ')>=1022){\n' + branch + '\n}' + '\n';
   return code;
  }else{
    var code = 'if (analogRead('+port_+ ')<1022){\n' + branch + '\n}' + '\n';
    return code;
  }
};

Blockly.Arduino.if_Button_else = function () {

  var port_ = this.getFieldValue('port');
  var logic_ = this.getFieldValue('logic');
  var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

  //var code;
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var branch1 = Blockly.Arduino.statementToCode(this, 'ELSE');

  var code = 'if (analogRead('+port_+')'+logic_+number_velocidade+'){\n' + branch + '\n}else{\n' + branch1 +'\n}';
  return code;
  
};

Blockly.Arduino.if_Color = function () {

  var port_ = this.getFieldValue('port');
  var logic_ = this.getFieldValue('logic');
  var color_ = this.getFieldValue('FLAG');
 
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code = 'if (getSensorColor(' + port_+ ')'+logic_+color_+') {\n' + branch + '\n}';
 
  return code + '\n';
};

Blockly.Arduino.if_Color_else = function () {

  var port_ = this.getFieldValue('port');
  var logic_ = this.getFieldValue('logic');
  var color_ = this.getFieldValue('FLAG');
 
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var branch1 = Blockly.Arduino.statementToCode(this, 'ELSE');
  var code = 'if (getSensorColor(' + port_+ ')'+logic_+color_+') {\n' + branch + '\n}else{\n'+branch1+`\n}`;
 
  return code + '\n';
};

Blockly.Arduino.if_Utrassonic = function () {

  var port_ = this.getFieldValue('port');
  var logic_ = this.getFieldValue('logic');
  var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
 
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code = 'if (getSensorUtrasson(' + port_+ ')'+logic_+number_velocidade+') {\n' + branch + '\n}';
 
  return code + '\n';
};

Blockly.Arduino.if_Utrassonic_ELSE = function () {

  var port_ = this.getFieldValue('port');
  var logic_ = this.getFieldValue('logic');
  var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
 
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var branch1 = Blockly.Arduino.statementToCode(this, 'ELSE');
  var code = 'if (getSensorUtrasson(' + port_+ ')'+logic_+number_velocidade+') {\n' + branch + '\n}else{\n'+branch1+`\n}`;
  return code + '\n';
};

Blockly.Arduino.tft_fillscreen = function () {

  //var color_ = this.getFieldValue('color');
  var COLOR = this.getFieldValue('color');
  COLOR = COLOR.replace(/#/g, "0x");
  var code = 'tft.fillRect(0,31,240,266,rgb565('+COLOR+'));\n';
  return code + '\n';
};

Blockly.Arduino.tft_Rect = function () {

  var format_ = this.getFieldValue('format');
  var _xPos   = this.getFieldValue('xPos_');
  var _yPos   = this.getFieldValue('yPos_'); 
  var _xLar   = this.getFieldValue('xLar'); 
  var _yLar   = this.getFieldValue('yLar');

  var COLOR = this.getFieldValue('color');
  COLOR = COLOR.replace(/#/g, "0x");
  
  if(format_=='0'){
    var code = 'tft.fillRect('+_xPos+','+_yPos+','+_xLar+','+_yLar+',rgb565('+COLOR+'));\n';
    return code;
  }else{
    var code = 'tft.drawRect('+_xPos+','+_yPos+','+_xLar+','+_yLar+',rgb565('+COLOR+'));\n';
    return code;
  }

};

Blockly.Arduino.tft_Circ = function () {

  var format_ = this.getFieldValue('format');
  var _xPos   = this.getFieldValue('xPos_');
  var _yPos   = this.getFieldValue('yPos_'); 
  var _xLar   = this.getFieldValue('xLar'); 

  var COLOR = this.getFieldValue('color');
  COLOR = COLOR.replace(/#/g, "0x");
  
  if(format_=='0'){
    var code = 'tft.fillCircle('+_xPos+','+_yPos+','+_xLar+',rgb565('+COLOR+'));\n';
    return code;
  }else{
    var code = 'tft.drawCircle('+_xPos+','+_yPos+','+_xLar+',rgb565('+COLOR+'));\n';
    return code;
  }

};

Blockly.Arduino.tft_txt = function () {

  var format_ = this.getFieldValue('tamanho');
  var _xPos   = this.getFieldValue('xPos_');
  var _yPos   = this.getFieldValue('yPos_'); 
  var _xLar   = this.getFieldValue('xLar'); 

  var txt   = 'String(' + Blockly.Arduino.valueToCode(this, 'A', Blockly.Arduino.ORDER_ATOMIC) + ')';

  var COLOR = this.getFieldValue('color');
  COLOR = COLOR.replace(/#/g, "0x");

  var COLOR2 = this.getFieldValue('color2');
  COLOR2 = COLOR2.replace(/#/g, "0x");
  
  
    var code = 'tft.setCursor('+_xPos+','+_yPos+');\ntft.setTextColor(rgb565('+ COLOR+'),rgb565('+COLOR2+'));\ntft.setTextSize('+format_+');\ntft.print('+txt+');\n';
    return code;
  
};

Blockly.Arduino.tft_number = function () {

  var tamanho_ = this.getFieldValue('tamanho');
  var _xPos   = this.getFieldValue('xPos_');
  var _yPos   = this.getFieldValue('yPos_'); 
  var _xLar   = this.getFieldValue('xLar'); 
  var format_ = this.getFieldValue('formato');

  var value   = Blockly.Arduino.valueToCode(this, 'A', Blockly.Arduino.ORDER_ATOMIC);

  var COLOR = this.getFieldValue('color');
  COLOR = COLOR.replace(/#/g, "0x");

  var COLOR2 = this.getFieldValue('color2');
  COLOR2 = COLOR2.replace(/#/g, "0x");
  
  
    var code = 'tft.setTextColor(rgb565('+ COLOR+'),rgb565('+COLOR2+'));\ntft.setTextSize(1);\nprintNumero('+value+','+format_+','+_xPos+','+_yPos+','+tamanho_+');\n';
    return code;
  
};


Blockly.Arduino.velocidadeB = function() {
  var value = this.getFieldValue('potencia');
  Blockly.Arduino.definitions_['setup_velo_B'] = 'byte velo_B = 0;\n';
  var code = 'velo_B = '+ value +'; //Configurando a potencia do motor B em ' + value+'\n';
  return code;
};

Blockly.Arduino.velocidadeC = function() {
  var value = this.getFieldValue('potencia');
  Blockly.Arduino.definitions_['setup_velo_C'] = 'byte velo_C = 0;\n';
  var code = 'velo_C = '+ value +'; //Configurando a potencia do motor C em ' + value+'\n';
  return code;
};

Blockly.Arduino.sensibilidade1 = function() {
  var value = this.getFieldValue('sensibilidade');
  Blockly.Arduino.definitions_['setup_sensbilidade1'] = 'unsigned sensbilidade1 = 450;\n';
  var code = 'sensbilidade1 = '+ value +'; //Configurando a sensbilidade 1 em' + value+'\n';
  return code;
};

/*
Blockly.Arduino.emFrente = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_A'] = 'byte velo_A = 0;\n';
  Blockly.Arduino.definitions_['setup_velo_B'] = 'byte velo_B = 0;\n';
  var code = '//Movendo os Motores A & B\n setMotorPin(M1,map(velo_A,0,10,0,100));\nsetMotorPin(M2,map(velo_B,0,10,0,100));\n';
  return code;
};
*/
Blockly.Arduino.pare_todos = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_A'] = 'byte velo_A = 0;\n';
  Blockly.Arduino.definitions_['setup_velo_B'] = 'byte velo_B = 0;\n';
  Blockly.Arduino.definitions_['setup_velo_C'] = 'byte velo_C = 0;\n';
  var code = '//Pare todos os Motores A,B e C\n setMotorPin(M1,0);\nsetMotorPin(M2,0);\nsetMotorPin(M3,0);';
  return code;
};

Blockly.Arduino.motorA_Mais = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_A'] = 'byte velo_A = 0;\n';
  var code = '//Movendo Motor A+\n setMotorPin(M1,map(velo_A,0,10,0,100));\n';
  return code;
};

Blockly.Arduino.motorA_Menos = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_A'] = 'byte velo_A = 0;\n';
  var code = '//Movendo Motor A-\n setMotorPin(M1,map(velo_A,0,10,0,-100));\n';
  return code;
};

Blockly.Arduino.motorB_Mais = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_B'] = 'byte velo_B = 0;\n';
  var code = '//Movendo Motor B+\n setMotorPin(M2,map(velo_B,0,10,0,100));\n';
  return code;
};

Blockly.Arduino.motorB_Menos = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_B'] = 'byte velo_B = 0;\n';
  var code = '//Movendo Motor B-\n setMotorPin(M2,map(velo_B,0,10,0,-100));\n';
  return code;
};

Blockly.Arduino.motorC_Mais = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_C'] = 'byte velo_C = 0;\n';
  var code = '//Movendo Motor C+\n setMotorPin(M3,map(velo_C,0,10,0,100));\n';
  return code;
};

Blockly.Arduino.motorC_Menos = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_C'] = 'byte velo_C = 0;\n';
  var code = '//Movendo Motor C-\n setMotorPin(M3,map(velo_C,0,10,0,-100));\n';
  return code;
};

Blockly.Arduino.pare_mA = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_A'] = 'byte velo_A = 0;\n';
  var code = '//Pare Motor A\n setMotorPin(M1,0);\n';
  return code;
};

Blockly.Arduino.pare_mB = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_B'] = 'byte velo_B = 0;\n';
  var code = '//Pare Motor B\n setMotorPin(M2,0);\n';
  return code;
};

Blockly.Arduino.pare_mC = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_C'] = 'byte velo_C = 0;\n';
  var code = '//Pare Motor C\n setMotorPin(M3,0);\n';
  return code;
};

/*
Blockly.Arduino.emFrente = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_A'] = 'byte velo_A = 0;\n';
  Blockly.Arduino.definitions_['setup_velo_B'] = 'byte velo_B = 0;\n';
  var code = '//Movendo os Motores A & B\n setMotorPin(M1,map(velo_A,0,10,0,100));\nsetMotorPin(M2,map(velo_B,0,10,0,100));\n';
  return code;
};
*/

/*
Blockly.Arduino.direita = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_A'] = 'byte velo_A = 0;\n';
  Blockly.Arduino.definitions_['setup_velo_B'] = 'byte velo_B = 0;\n';
  var code = 'setMotorPin(M1,0);\nsetMotorPin(M2,velo_B);\n';
  return code;
};

Blockly.Arduino.esquerda = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_A'] = 'byte velo_A = 0;\n';
  Blockly.Arduino.definitions_['setup_velo_B'] = 'byte velo_B = 0;\n';
  var code = 'setMotorPin(M1,velo_A);\nsetMotorPin(M2,0);\n';
  return code;
};


Blockly.Arduino.tras = function() {
  Blockly.Arduino.definitions_['setup_output_led'] = '#include"rsteck.h"\n';
  Blockly.Arduino.definitions_['setup_velo_A'] = 'byte velo_A = 0;\n';
  Blockly.Arduino.definitions_['setup_velo_B'] = 'byte velo_B = 0;\n';
  var code = 'setMotorPin(M1,-velo_A);\nsetMotorPin(M2,-velo_B);\n';
  return code;
};
*/


//Green
Blockly.Arduino.desk_led_green = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  var dropdown_r = this.getFieldValue('port');

  Blockly.Arduino.definitions_['setup_output_led'] = '#include "rsteck.h"';
  var code = 'setLed('+dropdown_r+',0x00FF00);';
  return code;
};

//Yellow
Blockly.Arduino.desk_led_yellow = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  var dropdown_r = this.getFieldValue('port');

  Blockly.Arduino.definitions_['setup_output_led'] = '#include "rsteck.h"';
  var code = 'setLed('+dropdown_r+',0xFFFF00);';
  return code;
};

//Musica
Blockly.Arduino.aniversario = function() {

  Blockly.Arduino.definitions_['include_music'] = '#include<music.h>\nmusic Music(26);\n ';
  Blockly.Arduino.setups_['include_music'] = 'pinMode(26, OUTPUT);\n'
  var code = 'Music.birthday();\n';
  return code;
};

Blockly.Arduino.mario = function() {

  Blockly.Arduino.definitions_['include_music'] = '#include<music.h>\nmusic Music(26);\n ';
  Blockly.Arduino.setups_['include_music'] = 'pinMode(26, OUTPUT);\n'
  var code = 'Music.super_mario();\n';
  return code;
};

Blockly.Arduino.natal = function() {

  Blockly.Arduino.definitions_['include_music'] = '#include<music.h>\nmusic Music(26);\n ';
  Blockly.Arduino.setups_['include_music'] = 'pinMode(26, OUTPUT);\n'
  var code = 'Music.christmas();\n';
  return code;
};


Blockly.Arduino.starWars = function() {

  Blockly.Arduino.definitions_['include_music'] = '#include<music.h>\nmusic Music(26);\n ';
  Blockly.Arduino.setups_['include_music'] = 'pinMode(26, OUTPUT);\n'
  var code = 'Music.star_war_tone();\n';
  return code;
};

Blockly.Arduino.desligarSom = function() {
  Blockly.Arduino.definitions_['include_music'] = '#include<music.h>\nmusic Music(26);\n ';
  Blockly.Arduino.setups_['include_music'] = 'pinMode(26, OUTPUT);\n'
  var code = 'noTone(26);\n';
  return code;
};

////////////////////////////////ks0441_MOTOR_START//////////////////////////
Blockly.Arduino.KS0441_START = function() {
  //Blockly.Arduino.setups_['setup_front_'] = 'pinMode(4, OUTPUT);\n  pinMode(5, OUTPUT);\n  pinMode(2, OUTPUT);\n  pinMode(9, OUTPUT);';
  var code = '  pinMode(4, OUTPUT);\npinMode(5, OUTPUT);\npinMode(2, OUTPUT);\npinMode(9, OUTPUT);\n\npinMode(A0,INPUT);\npinMode(A2,INPUT);\n';
  return code;
};

////////////////////////////////Desktop_Car//////////////////////////
Blockly.Arduino.Desktop_Car = function() {
  
  var value_speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //var speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var dropdown_type = this.getFieldValue('direction');

  Blockly.Arduino.definitions_['1front'] = 'void front() \n{\n  digitalWrite(4,HIGH);\n  analogWrite(5,'+value_speed+');\n  digitalWrite(2,HIGH);\n  analogWrite(9,'+value_speed+');\n}\n';
  Blockly.Arduino.definitions_['2back'] = 'void back() \n{\n  digitalWrite(4,HIGH);\n  analogWrite(5,'+value_speed+');\n  digitalWrite(2,HIGH);\n  analogWrite(9,'+value_speed+');\n}\n';

  var code = '';
  if (dropdown_type == "front") code += 'front();';
  if (dropdown_type == "back") code += 'back();';
  if (dropdown_type == "left") code += 'left();';
  if (dropdown_type == "right") code += 'right();';

  //Blockly.Arduino.setups_['setup_front_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
   //var code = '  digitalWrite(4,HIGH);\n  analogWrite(5,'+value_front+');\n  digitalWrite(2,HIGH);\n  analogWrite(9,'+value_front+');'; 
  return code;
};

////////////////////////////////front//////////////////////////
Blockly.Arduino.FRONT = function() {
  
  var value_front = Blockly.Arduino.valueToCode(this, 'speed_F', Blockly.Arduino.ORDER_ATOMIC);
  var value_front2 = Blockly.Arduino.valueToCode(this, 'speed_F2', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';

   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,'+value_front+');\ndigitalWrite(2,HIGH);\nanalogWrite(9,'+value_front2+');\n'; 
  return code;
};

////////////////////////////////back//////////////////////////
Blockly.Arduino.BACK = function() {
  
  var value_back = Blockly.Arduino.valueToCode(this, 'speed_B', Blockly.Arduino.ORDER_ATOMIC);
  var value_back2 = Blockly.Arduino.valueToCode(this, 'speed_B2', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,'+value_back+');\ndigitalWrite(2,LOW);\nanalogWrite(9,'+value_back2+');\n'; 
  return code;
};

////////////////////////////////left//////////////////////////
Blockly.Arduino.LEFT = function() {
  
  var value_left = Blockly.Arduino.valueToCode(this, 'speed_L', Blockly.Arduino.ORDER_ATOMIC);
  var value_left2 = Blockly.Arduino.valueToCode(this, 'speed_L2', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,'+value_left+');\ndigitalWrite(2,HIGH);\nanalogWrite(9,'+value_left2+');\n'; 
  return code;
};

////////////////////////////////turn_left//////////////////////////
Blockly.Arduino.TURN_LEFT = function() {
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,100);\ndigitalWrite(2,HIGH);\nanalogWrite(9,180);\n'; 
  return code;
};


////////////////////////////////right//////////////////////////
Blockly.Arduino.RIGHT = function() {
  
  var value_right = Blockly.Arduino.valueToCode(this, 'speed_R', Blockly.Arduino.ORDER_ATOMIC);
  var value_right2 = Blockly.Arduino.valueToCode(this, 'speed_R2', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,'+value_right+');\ndigitalWrite(2,LOW);\nanalogWrite(9,'+value_right2+');\n'; 
  return code;
};

////////////////////////////////turn_right//////////////////////////
Blockly.Arduino.TURN_RIGHT = function() {
  
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,180);\ndigitalWrite(2,HIGH);\nanalogWrite(9,100);\n'; 
  return code;
};

////////////////////////////////stop//////////////////////////
Blockly.Arduino.STOP = function() {
  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(9,0);\n'; 
  return code;
};

//////////////////////////红外避障///////////////////////////
Blockly.Arduino.desk_avoid = function() {
  var dropdown_type = this.getFieldValue('avoid02');
  Blockly.Arduino.setups_['setup_output_left'] = 'pinMode(A0, INPUT);';
  Blockly.Arduino.setups_['setup_output_right'] = 'pinMode(A2, INPUT);';

  var code = '';
  if (dropdown_type == "left") code += 'digitalRead(A0)';
  if (dropdown_type == "right") code += 'digitalRead(A2)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

///////////////////////desk超声波//////////////////////
Blockly.Arduino.desk_sr04 = function () {
    Blockly.Arduino.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
  + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
  + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
  + '  digitalWrite(12, LOW);\n'
  + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
  + '  delay(10);\n' + '  return distance;\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
};

//////////////////////////循迹模块///////////////////////////
Blockly.Arduino.desk_track = function() {
  var dropdown_type = this.getFieldValue('track');
  Blockly.Arduino.setups_['setup_output_trackleft'] = 'pinMode(6, INPUT);';
  Blockly.Arduino.setups_['setup_output_trackcenter'] = 'pinMode(7, INPUT);';
  Blockly.Arduino.setups_['setup_output_trackright'] = 'pinMode(8, INPUT);';

  var code = '';
  if (dropdown_type == "track_left") code += 'digitalRead(6)';
  if (dropdown_type == "track_center") code += 'digitalRead(7)';
  if (dropdown_type == "track_right") code += 'digitalRead(8)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

////////////////////蜂鸣器//////////////////////
Blockly.Arduino.tone_notes = function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.desk_buzzer=function(){
   var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   Blockly.Arduino.setups_['setup_output_11'] = 'pinMode(11, OUTPUT);';
   var code = ""; 
   /*if(window.isNaN(dropdown_pin)){
      code = code+'pinMode(11, OUTPUT);\n';
   }else{
      Blockly.Arduino.setups_['setup_output_11'] = 'pinMode(11, OUTPUT);';
   }*/
   code += "tone(11,"+fre+");\n";
   return code;
};

//////////////////////////music///////////////////////////
Blockly.Arduino.desk_music = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['1include_music'] = '#include<music.h>';
  //Blockly.Arduino.definitions_['2include_buzzer_pin'] = 'int buzzer_pin = '+dropdown_pin+';';
  Blockly.Arduino.definitions_['2include_buzzer_pin'] = 'int buzzer_pin = 11;';
  Blockly.Arduino.definitions_['3include_music2'] = 'music Music(buzzer_pin);';

  Blockly.Arduino.setups_['setup_output_music_pin'] = 'pinMode(buzzer_pin, OUTPUT);';

  var dropdown_type = this.getFieldValue('play');
  var code = '';
  if (dropdown_type == "Birthday") code += 'Music.birthday();\n';
  if (dropdown_type == "Ode to Joy") code += 'Music.Ode_to_Joy();\n';
  if (dropdown_type == "tetris") code += 'Music.tetris();';
  if (dropdown_type == "star_war") code += 'Music.star_war_tone();';
  if (dropdown_type == "super_mario") code += 'Music.super_mario();';
  if (dropdown_type == "christmas") code += 'Music.christmas();';
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.desk_notone=function(){
   //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   Blockly.Arduino.setups_['setup_output'] = 'pinMode(11, OUTPUT);';
   var code='';
   code += "noTone(11);\n";
   return code;
};

//////////////////music/////////////////////////



///////////////////////红外接收///////////////////
Blockly.Arduino.desk_ir_r = function () {
    var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    var branch2 = Blockly.Arduino.statementToCode(this, 'DO2');
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
       Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['1include_IRremote'] = '#include <IRremote.h>\n';
    //Blockly.Arduino.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    Blockly.Arduino.definitions_['2var_ir_recv_A1'] = 'IRrecv irrecv(A1);\ndecode_results results;\n';
    Blockly.Arduino.setups_['setup_ir_recv_A1'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + '=results.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results.decode_type>=1&&results.decode_type<=13){\n';
    code += '    type=typelist[results.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.desk_bluetooth = function () {
  var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE);
  var val = this.getFieldValue('VAL');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  //var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  //var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);


  //Blockly.Arduino.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
  //Blockly.Arduino.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
  Blockly.Arduino.definitions_['1char'] = 'char '+val+';\n';

  Blockly.Arduino.setups_['2mySerial23'] = 'Serial.begin(9600);';

   var code = 'if (Serial.available())\n{\n  '+val+' = Serial.read();\n';
   code += branch;
   code += '}\n';
  return code;
};

///////////////////////////////Desktop_Car/////////////////////////////////////////////////
