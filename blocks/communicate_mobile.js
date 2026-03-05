'use strict';
goog.provide('Blockly.Blocks.communicate_mobile');
goog.require('Blockly.Blocks');

Blockly.Blocks.communicate_mobile.HUE = 140;

Blockly.Blocks['bluetooth_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.communicate_mobile.HUE);
    this.appendDummyInput()
        .appendField('Iniciar Bluetooth com nome')
        .appendField(new Blockly.FieldTextInput('MeuRoboBT'), 'BT_NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Inicia o Bluetooth clássico do ESP32 para conectar com Apps Android.');
  }
};

Blockly.Blocks['bluetooth_read_string'] = {
  init: function() {
    this.setColour(Blockly.Blocks.communicate_mobile.HUE);
    this.appendDummyInput()
        .appendField('Ler texto recebido via Bluetooth');
    this.setOutput(true, 'String');
    this.setTooltip('Lê o comando enviado pelo celular.');
  }
};
