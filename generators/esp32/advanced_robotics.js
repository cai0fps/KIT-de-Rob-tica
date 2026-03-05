'use strict';
goog.provide('Blockly.Arduino.advanced_robotics');
goog.require('Blockly.Arduino');

// 1. Filtro Complementar MPU6050
Blockly.Arduino['mpu6050_comp_filter'] = function(block) {
  var gyro = Blockly.Arduino.valueToCode(block, 'GYRO', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var accel = Blockly.Arduino.valueToCode(block, 'ACCEL', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var alpha = Blockly.Arduino.valueToCode(block, 'ALPHA', Blockly.Arduino.ORDER_ATOMIC) || '0.98';
  
  var code = '(' + alpha + ' * ' + gyro + ' + (1.0 - ' + alpha + ') * ' + accel + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 2. Motor DC com Arranque Suave (Soft-Start)
Blockly.Arduino['motor_soft_start'] = function(block) {
  var pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var target = Blockly.Arduino.valueToCode(block, 'TARGET_PWM', Blockly.Arduino.ORDER_ATOMIC) || '255';
  var delay_ms = Blockly.Arduino.valueToCode(block, 'STEP_DELAY', Blockly.Arduino.ORDER_ATOMIC) || '5';
  
  var funcName = 'motorSoftStart_' + pin;
  var codeDef = 'void ' + funcName + '(int target, int stepDelay) {\n' +
                '  static int currentPwm_' + pin + ' = 0;\n' +
                '  if (currentPwm_' + pin + ' < target) {\n' +
                '    for (int i = currentPwm_' + pin + '; i <= target; i++) {\n' +
                '      analogWrite(' + pin + ', i);\n' +
                '      delay(stepDelay);\n' +
                '    }\n' +
                '  } else {\n' +
                '    for (int i = currentPwm_' + pin + '; i >= target; i--) {\n' +
                '      analogWrite(' + pin + ', i);\n' +
                '      delay(stepDelay);\n' +
                '    }\n' +
                '  }\n' +
                '  currentPwm_' + pin + ' = target;\n' +
                '}\n';
  Blockly.Arduino.definitions_[funcName] = codeDef;
  var code = funcName + '(' + target + ', ' + delay_ms + ');\n';
  return code;
};

// 3. Controlador PID
Blockly.Arduino['pid_controller'] = function(block) {
  var setpoint = Blockly.Arduino.valueToCode(block, 'SETPOINT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var measured = Blockly.Arduino.valueToCode(block, 'MEASURED', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var kp = Blockly.Arduino.valueToCode(block, 'KP', Blockly.Arduino.ORDER_ATOMIC) || '1';
  var ki = Blockly.Arduino.valueToCode(block, 'KI', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var kd = Blockly.Arduino.valueToCode(block, 'KD', Blockly.Arduino.ORDER_ATOMIC) || '0';
  
  Blockly.Arduino.definitions_['global_pid_vars'] = 'float pid_integral = 0;\nfloat pid_previous_error = 0;\nunsigned long pid_last_time = 0;';
  
  var funcName = 'computePID';
  var codeDef = 'float ' + funcName + '(float setpoint, float measured, float kp, float ki, float kd) {\n' +
                '  unsigned long now = millis();\n' +
                '  float dt = (float)(now - pid_last_time) / 1000.0;\n' +
                '  if(dt <= 0) dt = 0.001;\n' +
                '  float error = setpoint - measured;\n' +
                '  pid_integral += error * dt;\n' +
                '  float derivative = (error - pid_previous_error) / dt;\n' +
                '  float output = (kp * error) + (ki * pid_integral) + (kd * derivative);\n' +
                '  pid_previous_error = error;\n' +
                '  pid_last_time = now;\n' +
                '  return output;\n' +
                '}\n';
  Blockly.Arduino.definitions_[funcName] = codeDef;
  var code = funcName + '(' + setpoint + ', ' + measured + ', ' + kp + ', ' + ki + ', ' + kd + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
