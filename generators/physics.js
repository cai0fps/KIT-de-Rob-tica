'use strict';
goog.provide('Blockly.Arduino.physics');
goog.require('Blockly.Arduino');

Blockly.Arduino['physics_velocity'] = function(block) {
  var ds = Blockly.Arduino.valueToCode(block, 'DS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var dt = Blockly.Arduino.valueToCode(block, 'DT', Blockly.Arduino.ORDER_ATOMIC) || '1';
  var code = '(' + ds + ' / (float)' + dt + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['physics_acceleration'] = function(block) {
  var dv = Blockly.Arduino.valueToCode(block, 'DV', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var dt = Blockly.Arduino.valueToCode(block, 'DT', Blockly.Arduino.ORDER_ATOMIC) || '1';
  var code = '(' + dv + ' / (float)' + dt + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
