'use strict';
goog.provide('Blockly.Arduino.communicate_mobile');
goog.require('Blockly.Arduino');

Blockly.Arduino['bluetooth_init'] = function(block) {
  var bt_name = block.getFieldValue('BT_NAME');
  Blockly.Arduino.includes_['include_bluetoothserial'] = '#include "BluetoothSerial.h"';
  Blockly.Arduino.definitions_['define_bluetoothserial'] = 'BluetoothSerial SerialBT;';
  var code = 'SerialBT.begin("' + bt_name + '");\n';
  return code;
};

Blockly.Arduino['bluetooth_read_string'] = function(block) {
  var code = 'SerialBT.readString()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
