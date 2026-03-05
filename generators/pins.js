'use strict';
goog.provide('Blockly.Arduino.pins');
goog.require('Blockly.Arduino');

Blockly.Msg.EVERYTHING_HUE = 42;

Blockly.Arduino.pins_digital = function() {
  var code = this.getFieldValue('PIN');

  
  if(code=='A3'||code=='A4'||code=='A5'||code=='A6'||code=='A15'||code=='A12'||code=='A13'||code=='A14'||code=='A8'||code=='A9'||code=='A10'||code=='A11'){
    this.setColour("#FFFFFF");
  }else if(code=='22'||code=='23'||code=='24'||code=='25'/*||code=='4'*/||code=='53'||code=='28'||code=='29'/*||code=='2'||code=='3'*/||code=='18'||code=='19'){
    this.setColour(230);
  }
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.pins_analog=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_pwm=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_interrupt=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_MOSI=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_MISO=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_SCK=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_SCL=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_SDA=Blockly.Arduino.pins_digital;
Blockly.Arduino.PIN_ANALOG=Blockly.Arduino.pins_digital;
Blockly.Arduino.PIN_DIGITAL=Blockly.Arduino.pins_digital;            //SENSOR_SOM
Blockly.Arduino.SENSOR_TOQUE=Blockly.Arduino.pins_digital;
Blockly.Arduino.SENSOR_SOM=Blockly.Arduino.pins_digital; //
Blockly.Arduino.SENSOR_UTRA3=Blockly.Arduino.pins_digital;

Blockly.Arduino.pins_Motor=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_Sensor=Blockly.Arduino.pins_digital;  
Blockly.Arduino.pins_Motor_Single=Blockly.Arduino.pins_digital; 
Blockly.Arduino.pins_Motor_SingleEncoder=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_Botao1=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_Sensor1=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_Cores=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_BTNS=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_SOM=Blockly.Arduino.pins_digital;
Blockly.Arduino.pins_TOQUE=Blockly.Arduino.pins_digital; 
Blockly.Arduino.pins_UTRAVERMELHO=Blockly.Arduino.pins_digital; 