'use strict';

goog.provide('Blockly.Arduino.loops');

goog.require('Blockly.Arduino');

goog.require('Mixly.JSFuncs');

var meuLoop;

Blockly.Arduino.Setup_Cittius_ED1 = function () {

  var taskcode;
  var _tasknum = this.getFieldValue('_tasknum');
  var statements_setup = Blockly.Arduino.statementToCode(this, 'setup');
  //var statements_loop = Blockly.Arduino.statementToCode(this, 'loop');

  var allBlocks = Blockly.mainWorkspace.getAllBlocks();
  var hasLoop = false;
  var hasSetup = false;


  for (var i = 0; i < allBlocks.length; i++) {
    var block = allBlocks[i];

    if (block.type == 'loop_ED1') {
      hasLoop = true;
    } else if (block.type == 'Setup_Cittius_ED1') {
      hasSetup = true;
    }


    if (hasSetup && hasLoop == false) {
      taskcode = 'void areaDoAluno(){\n'
        + '  if(!flagSetupAluno && flagSetupProgram){\n'
        + ' ' + statements_setup
        + '   inicializacaoAluno();\n  }\n}';
    }
    /* if (block.type == 'loop_ED1') {
        taskcode = 'void areaDoAluno(){\n'
          + '  if(!flagSetupAluno && flagSetupProgram){\n'
          + statements_setup
      } else {
        taskcode = 'void areaDoAluno(){\n'
          + '  if(!flagSetupAluno && flagSetupProgram){\n'
          + statements_setup
          + '}\n'
      }*/


  }



  var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  var select = false;
  var data = "";
  var output_data = "";
  //去除XML中的id、x、y
  for (var i of xmlText) {
    if (data.length == 4) {
      if (data == "id=\"" || data == " x=\"" || data == " y=\"") {
        select = true;
        if (data == "id=\"") {
          output_data = output_data.substring(0, output_data.length - 5);
        }
        else {
          output_data = output_data.substring(0, output_data.length - 4);
        }
      }
      data = data.substring(1);
      data += i;
    }
    else {
      data += i;
      output_data += i;
      continue;
    }
    if (select) {
      if (i == "\"") {
        select = false;
      }
      else {
        continue;
      }
    }
    else {
      output_data += i;
    }
  }
  output_data = output_data.replace(/\s/g, "");
  output_data = output_data.replace(/\n/g, "");
  var left_indexOf = output_data.indexOf("<blocktype=\"SCoopTask\"><fieldname=\"_tasknum\">" + _tasknum + "</field>");
  var right_indexOf = output_data.lastIndexOf("<blocktype=\"SCoopTask\"><fieldname=\"_tasknum\">" + _tasknum + "</field>");
  if (left_indexOf == -1 || left_indexOf == right_indexOf) {
    this.setWarningText(null);
  }
  else {
    this.setWarningText(Blockly.SCOOPTASK_WARNING);
  }
  //Blockly.Arduino.setups_['scoop_start'] = 'mySCoop.start();';
  Blockly.Arduino.definitions_['scoop_task' + _tasknum] = taskcode;
  var code = "";
  return code;
};

Blockly.Arduino['SCoop_sleep_ED1'] = function () {
  var value_sleeplength = Blockly.Arduino.valueToCode(this, 'sleeplength', Blockly.Arduino.ORDER_ATOMIC || 1);
  var newValue = value_sleeplength.replace(',', '.');

  if (isNaN(newValue)) { newValue = 1; }

  var code = '  _delay(' + newValue + ');\n'
  return code;
};

Blockly.Arduino.controls_for_ED1 = function () {


  var argument1 = Blockly.Arduino.valueToCode(this, 'TO',
    Blockly.Arduino.ORDER_ASSIGNMENT) || '10';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');

  var code = '  for(unsigned x=1;x<=' + argument1 + ';x++){\n' + branch + '\n  }\n';

  return code;

};

Blockly.Arduino.interface_motor_ED1 = function () {
  var dropdown_porta = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || 50;

  if (number_velocidade > 100) { number_velocidade = 100; }
  else if (number_velocidade <= (-100)) { number_velocidade = (-100); }

  var code = 'setMotorPin(' + dropdown_porta + ',' + number_velocidade + ');\n';
  return code;
};



Blockly.Arduino.se_ED1 = function () {



  return 10;

};


Blockly.Arduino.loop_ED1 = function () {
  var code;
  var branch = Blockly.Arduino.statementToCode(this, 'loop');

  code = ' myWhile2 = true;\n while(myWhile2){\n'
    + branch
    + '  if(!digitalRead(48)){myWhile2 =false; }\n'
    + ' }\n'
  return code;

};

Blockly.Arduino.se_ED1 = function () {


  var argument = Blockly.Arduino.valueToCode(this, 'TO',
    Blockly.Arduino.ORDER_NONE) || 'false';

  var branch = Blockly.Arduino.statementToCode(this, 'DO');

  var code = '  if(' + argument + '){\n'
    + branch
    + '  }\n'

  return code;

};

Blockly.Arduino.se_senao_ED1 = function () {

  var argument = Blockly.Arduino.valueToCode(this, 'TO',
    Blockly.Arduino.ORDER_NONE) || 'false';

  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var branch2 = Blockly.Arduino.statementToCode(this, 'PO');

  var code = '  if(' + argument + '){\n'
    + '  ' + branch
    + '  }else{\n'
    + '  ' + branch2
    + '  }\n'

  return code;

};


Blockly.Arduino.definir_motor = function () {
  var dropdown_porta = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'setClearCodePin(' + dropdown_porta + ');\n';
  return code;
};

Blockly.JavaScript['my_text_block'] = function (block) {
  var text_label = block.getFieldValue('my_label');
  var code = "'" + text_label + "'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Arduino.obter_motor_ED1 = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'getCodePin(' + dropdown_pin + ')';
  // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ledGreen = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  Blockly.Arduino.setups_['var_ledGren' + dropdown_pin] = ' pinMode(' + dropdown_pin + ',OUTPUT);\n';
  code += 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
  return code;
};

Blockly.Arduino.ledRed = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  Blockly.Arduino.setups_['var_ledRed' + dropdown_pin] = ' pinMode(' + dropdown_pin + ',OUTPUT);\n';
  code += 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
  return code;
};


Blockly.Arduino.ledBlue = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  Blockly.Arduino.setups_['var_ledBlue' + dropdown_pin] = ' pinMode(' + dropdown_pin + ',OUTPUT);\n';
  code += 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
  return code;
};

Blockly.Arduino.ledAmarelo = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  Blockly.Arduino.setups_['var_ledAmarelo' + dropdown_pin] = ' pinMode(' + dropdown_pin + ',OUTPUT);\n';
  code += 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
  return code;
};

Blockly.Arduino.ledBranco = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  Blockly.Arduino.setups_['var_ledBranco' + dropdown_pin] = ' pinMode(' + dropdown_pin + ',OUTPUT);\n';
  code += 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
  return code;
};

Blockly.Arduino.ledOFF = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  Blockly.Arduino.setups_['var_ledOFF' + dropdown_pin] = ' pinMode(' + dropdown_pin + ',OUTPUT);\n';
  code += 'digitalWrite(' + dropdown_pin + ',!digitalRead(' + dropdown_pin + '));\n'
  return code;
};

Blockly.Arduino.Button_ED = function () {
  Blockly.Arduino.definitions_['include_OneButton'] = '#include <OneButton.h>';
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_mode = this.getFieldValue('mode');

  Blockly.Arduino.definitions_['var_declare_button' + dropdown_pin] = 'OneButton *button' + dropdown_pin + ';';
  //Blockly.Arduino.definitions_['var_declare_var'+dropdown_pin] = 'bool isPressed'+dropdown_pin+';';
  Blockly.Arduino.setups_['var_declareSetup' + dropdown_pin] = ' pinMode(' + dropdown_pin + ',INPUT);\n  button' + dropdown_pin + ' = new OneButton();\n';
  // Blockly.Arduino.setups_['setup_onebutton_' + dropdown_pin+dropdown_mode] = 'button'+dropdown_pin+'.' + dropdown_mode + '('+dropdown_mode+dropdown_pin+');';
  //var code = 'button' +dropdown_pin+ '->tick(analogRead('+dropdown_pin+') > 530);\n'; //button5->tick(isPressed5);
  var funcName = dropdown_mode;


  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code2 = 'button' + dropdown_pin + '->' + funcName + '([](){\n  ' + branch + '  });\n';
  Blockly.Arduino.setups_[funcName + dropdown_pin] = code2;

  var code = 'button' + dropdown_pin + '->tick(bounce' + dropdown_pin + '.read());\n';

  return code;
};

Blockly.Arduino.getStateLedGreen = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || 2;
  // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'digitalRead(' + dropdown_pin + ')';
  // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getStateLedRed = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || 2;
  // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'digitalRead(' + dropdown_pin + ')';
  // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getStateLedBlue = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || 2;
  // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'digitalRead(' + dropdown_pin + ')';
  // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getStateLedYellow = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || 2;
  // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'digitalRead(' + dropdown_pin + ')';
  // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getStateLedWhite = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || 2;
  // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'digitalRead(' + dropdown_pin + ')';
  // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.getButtonCittius = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'bounce' + dropdown_pin + '.read()';
  // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Utrassonic1_ED = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'lerSensor_de_Distancia(' + dropdown_pin + ')';
  // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.sensorColor1_ED = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var mode = this.getFieldValue('GET');
  var code = 'lerSensor_de_Cor(' + dropdown_pin + ',' + mode + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.sensorColor1_ED = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var mode = this.getFieldValue('GET');
  var code = 'lerSensor_de_Cor(' + dropdown_pin + ',' + mode + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.sensorAcel1_ED = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var mode = this.getFieldValue('GET');
  var code = 'lerSensor_Acelerometro(' + dropdown_pin + ',' + mode + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.controls_if_cmd = function () {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
    Blockly.Arduino.ORDER_NONE) || 'false';
  var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
  var code = "\n";
  for (n = 1; n <= this.elseifCount_; n++) {
    argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
      Blockly.Arduino.ORDER_NONE) || 'false';
    branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
    code += '  Serial.print(' + argument + ');\n  Serial.print(",");\n';
  }
  if (this.elseifCount_ > n) {
    branch = Blockly.Arduino.statementToCode(this, 'ELSE');
    code += '  Serial.println(" ");\n';
  }
  return code + '\n';
};