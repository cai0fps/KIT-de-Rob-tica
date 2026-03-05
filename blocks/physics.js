'use strict';
goog.provide('Blockly.Blocks.physics');
goog.require('Blockly.Blocks');

Blockly.Blocks.physics.HUE = 230;

Blockly.Blocks['physics_velocity'] = {
  init: function() {
    this.setColour(Blockly.Blocks.physics.HUE);
    this.appendValueInput('DS')
        .setCheck('Number')
        .appendField('Calcular Velocidade (V) - ∆S (m):');
    this.appendValueInput('DT')
        .setCheck('Number')
        .appendField('∆t (s):');
    this.setOutput(true, 'Number');
    this.setTooltip('Equação: V = ∆S / ∆t. Entrega a velocidade média.');
  }
};

Blockly.Blocks['physics_acceleration'] = {
  init: function() {
    this.setColour(Blockly.Blocks.physics.HUE);
    this.appendValueInput('DV')
        .setCheck('Number')
        .appendField('Calcular Aceleração (a) - ∆V (m/s):');
    this.appendValueInput('DT')
        .setCheck('Number')
        .appendField('∆t (s):');
    this.setOutput(true, 'Number');
    this.setTooltip('Equação: a = ∆V / ∆t. Entrega a aceleração média.');
  }
};
