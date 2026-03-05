'use strict';
goog.provide('Blockly.Blocks.pins');
goog.require('Blockly.Blocks');
Blockly.Blocks.pins.HUE = 230;

profile["default"] = profile["Arduino/Genuino Uno"] ;

Blockly.Blocks['pins_digital'] = {
 init: function() {
  this.setColour(Blockly.Blocks.pins.HUE);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown(profile.default.digital), 'PIN');
  this.setOutput(true, Number);
}
};

Blockly.Blocks['pins_analog'] = {
 init: function() {
  this.setColour(Blockly.Blocks.pins.HUE);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown(profile.default.analog), 'PIN');
  this.setOutput(true, Number);
}
};

Blockly.Blocks['pins_pwm'] = {
 init: function() {
  this.setColour(Blockly.Blocks.pins.HUE);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown(profile.default.pwm), 'PIN');
  this.setOutput(true, Number);
}
};

Blockly.Blocks['pins_interrupt'] = {
 init: function() {
  this.setColour(Blockly.Blocks.pins.HUE);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown(profile.default.interrupt), 'PIN');
  this.setOutput(true, Number);
}
};
Blockly.Blocks['pins_MOSI'] = {
 init: function() {
  this.setColour(Blockly.Blocks.pins.HUE);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown(profile.default.MOSI), 'PIN');
  this.setOutput(true, Number);
}
};
Blockly.Blocks['pins_MISO'] = {
 init: function() {
  this.setColour(Blockly.Blocks.pins.HUE);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown(profile.default.MISO), 'PIN');
  this.setOutput(true, Number);
}
};
Blockly.Blocks['pins_SCK'] = {
 init: function() {
  this.setColour(Blockly.Blocks.pins.HUE);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown(profile.default.SCK), 'PIN');
  this.setOutput(true, Number);
}
};
Blockly.Blocks['pins_SCL'] = {
 init: function() {
  this.setColour(Blockly.Blocks.pins.HUE);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown(profile.default.SCL), 'PIN');
  this.setOutput(true, Number);
}
};
Blockly.Blocks['pins_SDA'] = {
 init: function() {
  this.setColour(Blockly.Blocks.pins.HUE);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown(profile.default.SDA), 'PIN');
  this.setOutput(true, Number);
}
};

Blockly.Blocks['pins_Analog'] = {
  init: function() {
   this.setColour("#FFFFFF");
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.PIN_ANALOG), 'PIN');
   this.setOutput(true, Number);
 }
 };

 Blockly.Blocks['pins_Digitais'] = {
  init: function() {
   this.setColour(230);
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.PIN_DIGITAL), 'PIN');
   this.setOutput(true, Number);
 }
 };

 Blockly.Blocks['pins_Motor'] = {
  init: function() {
   this.setColour(Blockly.Blocks.pins.HUE);
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.MOTOR), 'PIN');
   this.setOutput(true, Number);
 }
 };

 Blockly.Blocks['pins_Sensor'] = {
  init: function() {
   this.setColour(230);
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.SENSOR1), 'PIN');
   this.setOutput(true, Number);
 }
 };

 Blockly.Blocks['pins_Motor_Single'] = {
  init: function() {
   this.setColour(230);
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.MOTOR_SINGLE), 'PIN');
   this.setOutput(true, Number);
 }
 };

 Blockly.Blocks['pins_Motor_SingleEncoder'] = {
  init: function() {
   this.setColour(230);
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.MOTOR_SINGLE_ENCODER), 'PIN');
   this.setOutput(true, Number);
 }
 };

 Blockly.Blocks['pins_Botao1'] = {
  init: function() {
   this.setColour("#FFFFFF");
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.SENSOR1_TOQUE), 'PIN');
   this.setOutput(true, Number);
 }
 };

 Blockly.Blocks['pins_Sensor1'] = {
  init: function() {
    this.setColour(230);
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.SENSOR1), 'PIN');
   this.setOutput(true, Number);
 }
 };

 Blockly.Blocks['pins_Cores'] = {
  init: function() {
    this.setColour(230);
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.CORES), 'PIN2');
   this.setOutput(true, Number);
 }
 };

 Blockly.Blocks['pins_BTNS'] = {
  init: function() {
   this.setColour("#FF00FF");
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.BOTAO), 'PIN');
   this.setOutput(true, Number);
 }
 };

 Blockly.Blocks['pins_SOM'] = {  //SENSOR_TOQUE
  init: function() {
   this.setColour("#FF00FF");
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.SENSOR_SOM), 'PIN');
   this.setOutput(true, Number);
 }
 };

 Blockly.Blocks['pins_TOQUE'] = {  //SENSOR_TOQUE
  init: function() {
   this.setColour("#FF00FF");
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.SENSOR_TOQUE), 'PIN');
   this.setOutput(true, Number);
 }
 };

 Blockly.Blocks['pins_UTRAVERMELHO'] = {  //SENSOR_TOQUE
  init: function() {
   this.setColour("#FF00FF");
   this.appendDummyInput("")
   .appendField(new Blockly.FieldDropdown(profile.default.SENSOR_UTRA3), 'PIN');
   this.setOutput(true, Number);
 }
 };