'use strict';
goog.provide('Blockly.Blocks.advanced_robotics');
goog.require('Blockly.Blocks');

Blockly.Blocks.advanced_robotics.HUE = 120; // Verde Técnico

// 1. Filtro Complementar MPU6050
Blockly.Blocks['mpu6050_comp_filter'] = {
  init: function() {
    this.setColour(Blockly.Blocks.advanced_robotics.HUE);
    this.appendValueInput('GYRO')
        .setCheck('Number')
        .appendField('Filtro Complementar - Ângulo Giroscópio:');
    this.appendValueInput('ACCEL')
        .setCheck('Number')
        .appendField('Ângulo Acelerómetro:');
    this.appendValueInput('ALPHA')
        .setCheck('Number')
        .appendField('Constante Alpha (ex: 0.98):');
    this.setOutput(true, 'Number');
    this.setTooltip('Aplica o Filtro Complementar para fundir dados do MPU6050 e anular ruídos.');
  }
};

// 2. Motor DC com Arranque Suave (Soft-Start)
Blockly.Blocks['motor_soft_start'] = {
  init: function() {
    this.setColour(Blockly.Blocks.advanced_robotics.HUE);
    this.appendDummyInput()
        .appendField('Motor Soft-Start (Arranque Suave)');
    this.appendValueInput('PIN')
        .setCheck('Number')
        .appendField('Pino PWM:');
    this.appendValueInput('TARGET_PWM')
        .setCheck('Number')
        .appendField('Velocidade Alvo (0-255):');
    this.appendValueInput('STEP_DELAY')
        .setCheck('Number')
        .appendField('Atraso por incremento (ms):');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Aumenta o PWM gradualmente para evitar picos de corrente no microcontrolador.');
  }
};

// 3. Controlador PID
Blockly.Blocks['pid_controller'] = {
  init: function() {
    this.setColour(230); // Azul Física
    this.appendDummyInput()
        .appendField('Equação PID (Controlo Proporcional, Integral, Derivativo)');
    this.appendValueInput('SETPOINT')
        .setCheck('Number')
        .appendField('Alvo (Setpoint):');
    this.appendValueInput('MEASURED')
        .setCheck('Number')
        .appendField('Medição Atual:');
    this.appendValueInput('KP')
        .setCheck('Number')
        .appendField('Kp:');
    this.appendValueInput('KI')
        .setCheck('Number')
        .appendField('Ki:');
    this.appendValueInput('KD')
        .setCheck('Number')
        .appendField('Kd:');
    this.setOutput(true, 'Number');
    this.setTooltip('Calcula o erro de deslocamento e devolve o valor exato de correção motora.');
  }
};
