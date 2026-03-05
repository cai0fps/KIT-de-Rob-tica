'use strict';

goog.provide('Blockly.Arduino.loops');

goog.require('Blockly.Arduino');

goog.require('Mixly.JSFuncs');

Blockly.Arduino['Setup_Cittius']=function() {
	var _tasknum = this.getFieldValue('_tasknum');
	var statements_setup = Blockly.Arduino.statementToCode(this, 'setup');
	var statements_loop = Blockly.Arduino.statementToCode(this, 'loop');
	var taskcode='void areaDoAluno(){\n'
	+'  if(!flagSetupAluno && flagSetupProgram){\n'
	+ statements_setup
	+'  inicializacaoAluno();\n  \n  }\n'
	+'  if(flagLoopAluno && flagSetupProgram){\n'
	+ statements_loop
	+'  \n  \n  }\n}\n'
	var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    var select = false;
	var data = "";
	var output_data = "";
	//去除XML中的id、x、y
	for(var i of xmlText)
	{
	  	if(data.length == 4)
      	{
	      	if(data == "id=\"" || data == " x=\"" || data == " y=\"")
	      	{
	        	select = true;
	       		if(data == "id=\"")
	       		{
	          		output_data = output_data.substring(0,output_data.length - 5);
	       		}
	        	else
	        	{
	          		output_data = output_data.substring(0,output_data.length - 4);
	        	}
	      	}
	      	data = data.substring(1);
	      	data+=i;
	    }
	    else
	    {
	      	data+=i;
	      	output_data+=i;
	      	continue;
	    }
	    if(select)
	    {
	      	if(i == "\"")
	      	{
	        	select = false;
	      	}
	      	else
	      	{
	        	continue;
	      	}
	    }
	    else
	    {
	      	output_data+=i;
	    }
	}
    output_data = output_data.replace(/\s/g,"");
    output_data = output_data.replace(/\n/g,"");
    var left_indexOf = output_data.indexOf("<blocktype=\"SCoopTask\"><fieldname=\"_tasknum\">"+_tasknum+"</field>");
    var right_indexOf = output_data.lastIndexOf("<blocktype=\"SCoopTask\"><fieldname=\"_tasknum\">"+_tasknum+"</field>");
    if(left_indexOf == -1 || left_indexOf == right_indexOf)
    {
    	this.setWarningText(null);
    }
    else
    {
        this.setWarningText(Blockly.SCOOPTASK_WARNING);
    }
	//Blockly.Arduino.setups_['scoop_start'] = 'mySCoop.start();';
	Blockly.Arduino.definitions_['scoop_task'+_tasknum] = taskcode;
	var code="";
	return code;
};

Blockly.Arduino['SCoop_sleep_ED'] = function() {
	var value_sleeplength = Blockly.Arduino.valueToCode(this, 'sleeplength',Blockly.Arduino.ORDER_ATOMIC || 1);
	var newValue = value_sleeplength.replace(',','.');

	if (isNaN(newValue)){newValue = 1;}
    
	var code = '_delay('+newValue+');\n'
	return code;
};

Blockly.Arduino.getIR2 = function() {
  var code = 'minhaDistncia'; 

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.myGiro = function() {
  var _tasknum = this.getFieldValue('MODE');                                   //mpu.getAngleY()
  var code;
  switch(_tasknum){
    case "2":
       code = "mpu.getAngleX()";
    break;
    case "1":
       code = "-mpu.getAngleY()";
    break;
    case "3":
       code = "mpu.getAngleZ()";
    break;
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.controls_for_ED = function () {


    var argument1 = Blockly.Arduino.valueToCode(this, 'TO',
        Blockly.Arduino.ORDER_ASSIGNMENT) || '10';
    var branch = Blockly.Arduino.statementToCode(this, 'DO');

    var code = 'for(unsigned x=1;x<='+argument1+';x++){\n'+branch+'\n}\n';

    return code;

};

Blockly.Arduino.appDableGamePadSetas = function () {
  var _branch1 = Blockly.Arduino.statementToCode(this, 'btnCIMA');
  var _branch2 = Blockly.Arduino.statementToCode(this, 'btnBAIXO');
  var _branch3 = Blockly.Arduino.statementToCode(this, 'btnESQUERDA');
  var _branch4 = Blockly.Arduino.statementToCode(this, 'btnDIREITA');
  var _branch7 = Blockly.Arduino.statementToCode(this, 'btnDEFAUT1');

  var code = '  Dabble.processInput();\n  if (GamePad.isUpPressed()){\n' + _branch1 + '\n  }'+
  'else if(GamePad.isDownPressed()){\n' + _branch2 + '\n  }'+
  'else if(GamePad.isLeftPressed()){\n' + _branch3 + '\n  }'+
  'else if(GamePad.isRightPressed()){\n' + _branch4 + '\n  }'+
  'else{\n' + _branch7 + '\n  }';

  return code;

};

Blockly.Arduino.appDableGamePadSeta2 = function () {
  var branch1 = Blockly.Arduino.statementToCode(this, 'btnSELECT');
  var branch2 = Blockly.Arduino.statementToCode(this, 'btnSTART');
  var branch3 = Blockly.Arduino.statementToCode(this, 'btnX');
  var branch4 = Blockly.Arduino.statementToCode(this, 'btnO');
  var branch5 = Blockly.Arduino.statementToCode(this, 'btnQuadrado');
  var branch6 = Blockly.Arduino.statementToCode(this, 'btnTriangulo');
  var branch7 = Blockly.Arduino.statementToCode(this, 'btnDEFAUT2');

  var code = '  Dabble.processInput();\n  if (GamePad.isSelectPressed()){\n' + branch1 + '\n  }'+

  'else if(GamePad.isStartPressed()){\n' + branch2 + '\n  }'+
  'else if(GamePad.isCrossPressed()){\n' + branch3 + '\n  }'+
  'else if(GamePad.isCirclePressed()){\n' + branch4 + '\n  }'+
  'else if(GamePad.isSquarePressed()){\n' + branch5 + '\n  }'+
  'else if(GamePad.isTrianglePressed()){\n' + branch6 + '\n  }'+
  'else{\n' + branch7 + '\n  }';

  return code;

};
Blockly.Arduino.controls_if_ED = function () {
    // If/elseif/else condition.
    var n = 0;
    var argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
        Blockly.Arduino.ORDER_NONE) || 'false';
    var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
    var code = '  if (' + argument + '){\n' + branch + '\n  }';
    for (n = 1; n <= this.elseifCount_; n++) {
        argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
          Blockly.Arduino.ORDER_NONE) || 'false';
        branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
        code += 'else if (' + argument + '){\n' + branch + '\n  }';
    }
    if (this.elseCount_) {
        branch = Blockly.Arduino.statementToCode(this, 'ELSE');
        code += 'else{\n' + branch + '\n  }';
    }
    return code + '\n';
};

Blockly.Arduino.controls_switch_case_ED = function () {
    var n = 0;
    var argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
        Blockly.Arduino.ORDER_NONE) || 'NULL';
    var branch = '';
    var code = ' switch (' + argument + ') {\n';
    for (n = 1; n <= this.elseifCount_; n++) {
        argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
          Blockly.Arduino.ORDER_NONE) || 'NULL';
        branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
        code += '  case ' + argument + ': \n' + branch + '  break;\n';
    }
    if (this.elseCount_) {
        branch = Blockly.Arduino.statementToCode(this, 'ELSE');
        code += '  default:\n' + branch + '  break;\n';
    }
    code += '}';
    return code + '\n';
};

Blockly.Arduino.espereAteQue = function () {
    var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
    var code ="  while(!("+dropdown_stat+")){\n"
    +"   updateLoop(); \n   areaDoAluno();\n  }\n"
    //var board_type = Mixly.JSFuncs.getPlatform();
    return code;
};

Blockly.Arduino.TFT_fillScreen_ED=function(){
    var COLOR = Blockly.Arduino.valueToCode(this, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
    //var COLOR = this.getFieldValue('COLOR');
    var code = 'tft.fillRect(0,27,240,320,rgb565'+''+COLOR+');\n';
    return code;
   };

Blockly.Arduino.tft_drawPixel_ED = function() {
    var pos_x = Blockly.Arduino.valueToCode(this, 'POS_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var pos_y = Blockly.Arduino.valueToCode(this, 'POS_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = "";
    var COLOR = Blockly.Arduino.valueToCode(this, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);

    code += 'tft.drawPixel(' + pos_x + ',';
    code += pos_y ;
    code+=',rgb565'+COLOR+');\n';
    return code;
};

Blockly.Arduino.tft_drawLine_ED = function() {
    var start_x = Blockly.Arduino.valueToCode(this, 'START_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var start_y = Blockly.Arduino.valueToCode(this, 'START_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var end_x = Blockly.Arduino.valueToCode(this, 'END_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var end_y = Blockly.Arduino.valueToCode(this, 'END_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = "";
    var colour = Blockly.Arduino.valueToCode(this, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
    
    code = 'tft.drawLine(' + start_x + ',';
    code += start_y + ',';
    code += end_x + ',';
    code += end_y;
    code+=',rgb565'+colour+');\n';
    return code;
};
   
Blockly.Arduino.tft_drawFastLine_ED = function() {
    var start_x = Blockly.Arduino.valueToCode(this, 'START_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var start_y = Blockly.Arduino.valueToCode(this, 'START_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var length = Blockly.Arduino.valueToCode(this, 'LENGTH', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var TYPE = this.getFieldValue('TYPE');
    var code = "";
    var colour = Blockly.Arduino.valueToCode(this, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
    
    code = "tft.drawFast" + TYPE + "Line(" + start_x + ',';
    code += start_y + ',';
    code += length ;
    code+=',rgb565'+colour+');\n';
    return code;
};

   Blockly.Arduino.tft_Rect_ED = function() {
    var D0_x = Blockly.Arduino.valueToCode(this, 'D0_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var D0_y = Blockly.Arduino.valueToCode(this, 'D0_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var Width = Blockly.Arduino.valueToCode(this, 'WIDTH', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var Height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var type = this.getFieldValue('TYPE');
    var code = "";
    var colour = Blockly.Arduino.valueToCode(this, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
    
    code = 'tft.'+type+'Rect(' + D0_x + ',';
    code += D0_y + ',';
    code += Width + ',';
    code += Height;
    code+=',rgb565'+colour+');\n';
    return code;
   };
   
   Blockly.Arduino.tft_RoundRect_ED = function() {
    var D0_x = Blockly.Arduino.valueToCode(this, 'D0_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var D0_y = Blockly.Arduino.valueToCode(this, 'D0_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var Width = Blockly.Arduino.valueToCode(this, 'WIDTH', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var Height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var Rauius = Blockly.Arduino.valueToCode(this, 'RADIUS', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var type = this.getFieldValue('TYPE');
    var code = "";
    var colour = Blockly.Arduino.valueToCode(this, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
    
    code = 'tft.'+type+'RoundRect(' + D0_x + ',';
    code += D0_y + ',';
    code += Width + ',';
    code += Height + ',';
    code += Rauius ;
    code+=',rgb565'+colour+');\n';
    return code;
   };
   
   Blockly.Arduino.tft_Circle_ED = function() {
    var D0_x = Blockly.Arduino.valueToCode(this, 'D0_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var D0_y = Blockly.Arduino.valueToCode(this, 'D0_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var Rauius = Blockly.Arduino.valueToCode(this, 'RADIUS', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var type = this.getFieldValue('TYPE');
    var opt = this.getFieldValue('OPT');
    var code = "";
    var colour = Blockly.Arduino.valueToCode(this, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
    
    code = 'tft.'+type+'Circle(' + D0_x + ',';
    code += D0_y + ',';
    code += Rauius;
    code+=',rgb565'+colour+');\n';
    return code;
   };


   Blockly.Arduino.tft_print_ED0 = function() {
    var POS_x = Blockly.Arduino.valueToCode(this, 'POS_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var POS_y = Blockly.Arduino.valueToCode(this, 'POS_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var TEXT = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var colour1 = Blockly.Arduino.valueToCode(this, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
    var colour2 = Blockly.Arduino.valueToCode(this, 'COLOR1', Blockly.Arduino.ORDER_ATOMIC);
    var font =  this.getFieldValue('GET');
    var alinhar =  this.getFieldValue('GET2');

    var code ="  tft.setTextColor(rgb565"+colour1+",rgb565"+colour2+");\n"; 
    code    +="  tft.setTextDatum("+alinhar+");\n";
    code    +="  tft.drawString("+TEXT+","+POS_x+","+POS_y+","+font+");\n";
    return code;
  }

  Blockly.Arduino.tft_print_NUMBER = function() {
    Blockly.Arduino.definitions_['myVariableC'] = 'char tmp[12];';
    var POS_x = Blockly.Arduino.valueToCode(this, 'POS_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var POS_y = Blockly.Arduino.valueToCode(this, 'POS_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var TEXT = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var colour1 = Blockly.Arduino.valueToCode(this, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
    var colour2 = Blockly.Arduino.valueToCode(this, 'COLOR1', Blockly.Arduino.ORDER_ATOMIC);
    var font =  this.getFieldValue('GET');
    var alinhar =  this.getFieldValue('GET2');
    var digit =  this.getFieldValue('GET3');

    var code ="  tft.setTextColor(rgb565"+colour1+",rgb565"+colour2+");\n"; 
    code    +="  tft.setTextDatum("+alinhar+");\n";
    code    +='  sprintf(tmp, "%0'+digit+'d",'+TEXT+');\n';
    code    +="  tft.drawString(tmp,"+POS_x+","+POS_y+","+font+");\n";
    return code;
  }

/*  Blockly.Arduino.tft_print_ED = function() {
    var POS_x = Blockly.Arduino.valueToCode(this, 'POS_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var POS_y = Blockly.Arduino.valueToCode(this, 'POS_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var TEXT = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var colour1 = Blockly.Arduino.valueToCode(this, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
    var colour2 = Blockly.Arduino.valueToCode(this, 'COLOR2', Blockly.Arduino.ORDER_ATOMIC);

    var code ="  tft.setTextColor(rgb565"+colour1+",rgb565"+colour2+");\n";  
    code    +="  tft.drawCentreString("+TEXT+","+POS_x+","+POS_y+","+"1);\n";
    return code;
  }*/
  

   Blockly.Arduino.tft_icons_ED = function() {
    var colour = Blockly.Arduino.valueToCode(this, 'COLOR');
    var POS_x = Blockly.Arduino.valueToCode(this, 'POS_X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var POS_y = Blockly.Arduino.valueToCode(this, 'POS_Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var ICON_SIZE = this.getFieldValue('ICON_SIZE');
    var ICON_IMAGE = this.getFieldValue('ICON_IMAGE');
    var code = "tft.setFont(u8g2_font_open_iconic_all_"+ICON_SIZE+"x_t);\n"
    +"tft.setForegroundColor("+colour+");\n"
    +"tft.setFontMode(1);\n"
    +"tft.drawGlyph("+POS_x+","+POS_y+"+"+ICON_SIZE+"*8,"+ICON_IMAGE+");\n";
    return code;
   };


  Blockly.Arduino.emFrente_ED = function() {
    var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var type_motor = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);

    if(number_velocidade>100){number_velocidade = 100;}
    else if(number_velocidade<=0){number_velocidade = 0;}

    
    switch(type_motor){
        case "1":
            if(number_velocidade>=0){
                var code = ' \n  setMotorPin(M1,'+ number_velocidade +');\n  setMotorPin(M2,'+number_velocidade+');\n';
              }else{
                var code = ``
              }
              return code;
        break;

        case "2":
            if(number_velocidade>=0){
                var code = ' \n  setMotorPin(M1,'+ number_velocidade +');\n  setMotorPin(M3,'+number_velocidade+');\n';
              }else{
                var code = ``
              }

              return code;
        break;

        case "3":
            if(number_velocidade>=0){
                var code = '  \n  setMotorPin(M1,'+ number_velocidade +');\n  setMotorPin(M4,'+number_velocidade+');\n';
              }else{
                var code = ``
              }

              return code;
        break;

        case "4":
            if(number_velocidade>=0){
                var code = '  \n  setMotorPin(M2,'+ number_velocidade +');\n  setMotorPin(M1,'+number_velocidade+');\n';
              }else{
                var code = ``
              }

              return code;
        break;

        case "5":
            if(number_velocidade>=0){
                var code = '  \n  setMotorPin(M2,'+ number_velocidade +');\n  setMotorPin(M3,'+number_velocidade+');\n';
              }else{
                var code = ``
              }
              return code;
        break;

        case "6":
            if(number_velocidade>=0){
                var code = '  \n  setMotorPin(M2,'+ number_velocidade +');\n  setMotorPin(M4,'+number_velocidade+');\n';
              }else{
                var code = ``
              }
              return code;
        break;

        case "7":
            if(number_velocidade>=0){
                var code = '  \n  setMotorPin(M3,'+ number_velocidade +');\n  setMotorPin(M1,'+number_velocidade+');\n';
              }else{
                var code = ``
              }
              return code;
        break;

        case "8":
            if(number_velocidade>=0){
                var code = '  \n  setMotorPin(M3,'+ number_velocidade +');\n  setMotorPin(M2,'+number_velocidade+');\n';
              }else{
                var code = ``
              }
              return code;
        break;

        case "9":
            if(number_velocidade>=0){
                var code = '  \n  setMotorPin(M3,'+ number_velocidade +');\n  setMotorPin(M4,'+number_velocidade+');\n';
              }else{
                var code = ``
              }
              return code;
        break;

        case "10":
          if(number_velocidade>=0){
              var code = '  \n  setMotorPin(M4,'+ number_velocidade +');\n  setMotorPin(M1,'+number_velocidade+');\n';
            }else{
              var code = ``
            }
            return code;
      break;

      case "11":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M4,'+ number_velocidade +');\n  setMotorPin(M2,'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "12":
      if(number_velocidade>=0){
          var code = '  \n  setMotorPin(M4,'+ number_velocidade +');\n  setMotorPin(M3,'+number_velocidade+');\n';
        }else{
          var code = ``
        }
        return code;
  break;
    }

  };

  Blockly.Arduino.direita_ED = function() {
  var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var type_motor = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
    
    if(number_velocidade>100){number_velocidade = 100;}
    else if(number_velocidade<=0){number_velocidade = 0;}

    switch(type_motor){
      case "1":
        if(number_velocidade>=0){
            var code = ' \n  setMotorPin(M1,'+ number_velocidade +');\n  setMotorPin(M2,'+0+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "2":
        if(number_velocidade>=0){
            var code = ' \n  setMotorPin(M1,'+ number_velocidade +');\n  setMotorPin(M3,'+0+');\n';
          }else{
            var code = ``
          }

          return code;
    break;

    case "3":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M1,'+ number_velocidade +');\n  setMotorPin(M4,'+0+');\n';
          }else{
            var code = ``
          }

          return code;
    break;

    case "4":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M2,'+ number_velocidade +');\n  setMotorPin(M1,'+0+');\n';
          }else{
            var code = ``
          }

          return code;
    break;

    case "5":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M2,'+ number_velocidade +');\n  setMotorPin(M3,'+0+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "6":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M2,'+ number_velocidade +');\n  setMotorPin(M4,'+0+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "7":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M3,'+ number_velocidade +');\n  setMotorPin(M1,'+0+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "8":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M3,'+ number_velocidade +');\n  setMotorPin(M2,'+0+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "9":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M3,'+ number_velocidade +');\n  setMotorPin(M4,'+0+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "10":
      if(number_velocidade>=0){
          var code = '  \n  setMotorPin(M4,'+ number_velocidade +');\n  setMotorPin(M1,'+0+');\n';
        }else{
          var code = ``
        }
        return code;
  break;

  case "11":
    if(number_velocidade>=0){
        var code = '  \n  setMotorPin(M4,'+ number_velocidade +');\n  setMotorPin(M2,'+0+');\n';
      }else{
        var code = ``
      }
      return code;
break;

case "12":
  if(number_velocidade>=0){
      var code = '  \n  setMotorPin(M4,'+ number_velocidade +');\n  setMotorPin(M3,'+0+');\n';
    }else{
      var code = ``
    }
    return code;
break;
    }

  };

  Blockly.Arduino.esquerda_ED = function() {
    var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var type_motor = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
    
    if(number_velocidade>100){number_velocidade = 100;}
    else if(number_velocidade<=0){number_velocidade = 0;}

    switch(type_motor){
      case "1":
        if(number_velocidade>=0){
            var code = ' \n  setMotorPin(M1,'+ 0 +');\n  setMotorPin(M2,'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "2":
        if(number_velocidade>=0){
            var code = ' \n  setMotorPin(M1,'+ 0 +');\n  setMotorPin(M3,'+number_velocidade+');\n';
          }else{
            var code = ``
          }

          return code;
    break;

    case "3":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M1,'+ 0 +');\n  setMotorPin(M4,'+number_velocidade+');\n';
          }else{
            var code = ``
          }

          return code;
    break;

    case "4":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M2,'+ 0 +');\n  setMotorPin(M1,'+number_velocidade+');\n';
          }else{
            var code = ``
          }

          return code;
    break;

    case "5":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M2,'+ 0 +');\n  setMotorPin(M3,'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "6":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M2,'+ 0 +');\n  setMotorPin(M4,'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "7":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M3,'+ 0 +');\n  setMotorPin(M1,'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "8":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M3,'+ 0 +');\n  setMotorPin(M2,'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "9":
        if(number_velocidade>=0){
            var code = '  \n  setMotorPin(M3,'+ 0 +');\n  setMotorPin(M4,'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "10":
      if(number_velocidade>=0){
          var code = '  \n  setMotorPin(M4,'+ 0 +');\n  setMotorPin(M1,'+number_velocidade+');\n';
        }else{
          var code = ``
        }
        return code;
  break;

  case "11":
    if(number_velocidade>=0){
        var code = '  \n  setMotorPin(M4,'+ 0 +');\n  setMotorPin(M2,'+number_velocidade+');\n';
      }else{
        var code = ``
      }
      return code;
break;

case "12":
  if(number_velocidade>=0){
      var code = '  \n  setMotorPin(M4,'+ 0 +');\n  setMotorPin(M3,'+number_velocidade+');\n';
    }else{
      var code = ``
    }
    return code;
break;
    }
  };

  Blockly.Arduino.tras_ED = function() {
    var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var type_motor = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
    
    if(number_velocidade>100){number_velocidade = 100;}
    else if(number_velocidade<=0){number_velocidade = 0;}

    switch(type_motor){
      case "1":
        if(number_velocidade>0){
            var code = ' \n  setMotorPin(M1,-'+ number_velocidade +');\n  setMotorPin(M2,-'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "2":
        if(number_velocidade>0){
            var code = ' \n  setMotorPin(M1,-'+ number_velocidade +');\n  setMotorPin(M3,-'+number_velocidade+');\n';
          }else{
            var code = ``
          }

          return code;
    break;

    case "3":
        if(number_velocidade>0){
            var code = '  \n  setMotorPin(M1,-'+ number_velocidade +');\n  setMotorPin(M4,-'+number_velocidade+');\n';
          }else{
            var code = ``
          }

          return code;
    break;

    case "4":
        if(number_velocidade>0){
            var code = '  \n  setMotorPin(M2,-'+ number_velocidade +');\n  setMotorPin(M1,-'+number_velocidade+');\n';
          }else{
            var code = ``
          }

          return code;
    break;

    case "5":
        if(number_velocidade>0){
            var code = '  \n  setMotorPin(M2,-'+ number_velocidade +');\n  setMotorPin(M3,-'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "6":
        if(number_velocidade>0){
            var code = '  \n  setMotorPin(M2,-'+ number_velocidade +');\n  setMotorPin(M4,-'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "7":
        if(number_velocidade>0){
            var code = '  \n  setMotorPin(M3,-'+ number_velocidade +');\n  setMotorPin(M1,-'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "8":
        if(number_velocidade>0){
            var code = '  \n  setMotorPin(M3,-'+ number_velocidade +');\n  setMotorPin(M2,-'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "9":
        if(number_velocidade>0){
            var code = '  \n  setMotorPin(M3,-'+ number_velocidade +');\n  setMotorPin(M4,-'+number_velocidade+');\n';
          }else{
            var code = ``
          }
          return code;
    break;

    case "10":
      if(number_velocidade>0){
          var code = '  \n  setMotorPin(M4,-'+ number_velocidade +');\n  setMotorPin(M1,-'+number_velocidade+');\n';
        }else{
          var code = ``
        }
        return code;
  break;

  case "11":
    if(number_velocidade>0){
        var code = '  \n  setMotorPin(M4,-'+ number_velocidade +');\n  setMotorPin(M2,-'+number_velocidade+');\n';
      }else{
        var code = ``
      }
      return code;
break;

case "12":
  if(number_velocidade>0){
      var code = '  \n  setMotorPin(M4,-'+ number_velocidade +');\n  setMotorPin(M3,-'+number_velocidade+');\n';
    }else{
      var code = ``
    }
    return code;
break;
    }
  };

  Blockly.Arduino.pararDirecao_ED = function() {
    var type_motor = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
    
    switch(type_motor){
      case "1":
          var code = ' \n  setMotorPin(M1,'+ 0 +');\n  setMotorPin(M2,'+0+');\n';
          return code;
    break;

    case "2":
        var code = ' \n  setMotorPin(M1,'+ 0 +');\n  setMotorPin(M3,'+0+');\n';
        return code;
    break;

    case "3":
      var code = '  \n  setMotorPin(M1,'+ 0 +');\n  setMotorPin(M4,'+0+');\n';
      return code;
    break;

    case "4":
      var code = '  \n  setMotorPin(M2,'+ 0 +');\n  setMotorPin(M1,'+0+');\n';
      return code;
    break;

    case "5":
      var code = '  \n  setMotorPin(M2,'+ 0 +');\n  setMotorPin(M3,'+0+');\n';
      return code;
    break;

    case "6":
      var code = '  \n  setMotorPin(M2,'+ 0 +');\n  setMotorPin(M4,'+0+');\n';
      return code;
    break;

    case "7":
      var code = '  \n  setMotorPin(M3,'+ 0 +');\n  setMotorPin(M1,'+0+');\n';
      return code;
    break;

    case "8":
      var code = '  \n  setMotorPin(M3,'+ 0 +');\n  setMotorPin(M2,'+0+');\n';
      return code;
    break;

    case "9":
      var code = '  \n  setMotorPin(M3,'+ 0 +');\n  setMotorPin(M4,'+0+');\n';
      return code;
    break;

    case "10":
      var code = '  \n  setMotorPin(M4,'+ 0 +');\n  setMotorPin(M1,'+0+');\n';
      return code;
  break;

  case "11":
    var code = '  \n  setMotorPin(M4,'+ 0 +');\n  setMotorPin(M2,'+0+');\n';
    return code;
break;

case "12":
    var code = '  \n  setMotorPin(M4,'+ 0 +');\n  setMotorPin(M3,'+0+');\n';
    return code;
break;
   };
}

Blockly.Arduino.interface_motor_ED = function() {
    var dropdown_porta = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
    var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

    if(number_velocidade>100){number_velocidade = 100;}
    else if(number_velocidade<=(-100)){number_velocidade = (-100);}

    var code = 'setMotorPin('+dropdown_porta+','+number_velocidade+');\n';
    return code;
  };
  
  Blockly.Arduino.interface_motor_medio_ED = function() {
    var dropdown_porta = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
    var number_velocidade = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

    if(number_velocidade>100){number_velocidade = 100;}
    else if(number_velocidade<=(-100)){number_velocidade = (-100);}
    
    var code = 'setMotorPin('+dropdown_porta+','+number_velocidade+');\n';
    return code;
  };


  Blockly.Arduino.definir_motor = function() {
    var dropdown_porta = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'setClearCodePin('+dropdown_porta+');\n';
    return code;
  };



  Blockly.Arduino.obter_motor1 = function () {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
   // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'getCodePin(' + dropdown_pin+')';
   // var mode = this.getFieldValue('GET');
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  Blockly.Arduino.ledGreen = function () {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
    var code="";
    Blockly.Arduino.setups_['var_ledGren'+dropdown_pin] = ' pinMode('+dropdown_pin+',OUTPUT);\n'; 
    code += 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};

Blockly.Arduino.ledRed = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var code="";
  Blockly.Arduino.setups_['var_ledRed'+dropdown_pin] = ' pinMode('+dropdown_pin+',OUTPUT);\n'; 
  code += 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
  return code;
};


Blockly.Arduino.ledBlue = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var code="";
  Blockly.Arduino.setups_['var_ledBlue'+dropdown_pin] = ' pinMode('+dropdown_pin+',OUTPUT);\n'; 
  code += 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
  return code;
};

Blockly.Arduino.ledAmarelo = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var code="";
  Blockly.Arduino.setups_['var_ledAmarelo'+dropdown_pin] = ' pinMode('+dropdown_pin+',OUTPUT);\n'; 
  code += 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
  return code;
};

Blockly.Arduino.ledBranco = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var code="";
  Blockly.Arduino.setups_['var_ledBranco'+dropdown_pin] = ' pinMode('+dropdown_pin+',OUTPUT);\n'; 
  code += 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
  return code;
};

Blockly.Arduino.ledOFF = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var code="";
  Blockly.Arduino.setups_['var_ledOFF'+dropdown_pin] = ' pinMode('+dropdown_pin+',OUTPUT);\n'; 
  code += 'digitalWrite(' + dropdown_pin + ',!digitalRead(' + dropdown_pin + '));\n'
  return code;
};


//Azul Antes
/*
Blockly.Arduino.Button_ED_AZUL = function () {
  Blockly.Arduino.definitions_['include_OneButton'] = '#include <OneButton.h>';
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var debauce = Blockly.Arduino.valueToCode(this, 'DEB', Blockly.Arduino.ORDER_ATOMIC);


  var dropdown_mode = this.getFieldValue('mode');

  Blockly.Arduino.definitions_['var_declare_button'+dropdown_pin] = 'OneButton *button'+dropdown_pin+';';
  
  var funcName = dropdown_mode;
 
  
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code2 = 'button' +dropdown_pin+ '->' + funcName + '([](){\n  ' + branch + '  });\n';

  switch(dropdown_pin){

    case "A3":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP1.interval('+debauce+');\n';
    break;
    case "A4":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP2.interval('+debauce+');\n';
    break;
    case "A5": 
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP3.interval('+debauce+');\n';
    break;
    case "A6":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP4.interval('+debauce+');\n';
    break;
    case "A8":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePA.interval('+debauce+');\n';
    break;
    case "A9":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePB.interval('+debauce+');\n';
    break;
  }



  Blockly.Arduino.setups_['var_declareSetup'+dropdown_pin] = ' pinMode('+dropdown_pin+',INPUT);\n  button' +dropdown_pin+ ' = new OneButton();\n'; 

  Blockly.Arduino.setups_[funcName+dropdown_pin] = code2;

  switch(dropdown_pin){
    case "A3":  
      var code = '  button'+dropdown_pin+'->tick(bounceP2'+'.read());\n';
    break;
    case "A4":  
      var code = '  button'+dropdown_pin+'->tick(bounceP3'+'.read());\n';
    break;
    case "A5": 
      var code = '  button'+dropdown_pin+'->tick(bounceP4'+'.read());\n';
    break;
    case "A6":  
      var code = '  button'+dropdown_pin+'->tick(bounceP4'+'.read());\n';
    break;
    case "A15":
      var code = 'button'+dropdown_pin+'->tick(bounceP5'+'.read());\n';
    break;
    case "A12":
      var code = 'button'+dropdown_pin+'->tick(bounceP6'+'.read());\n';
    break;
    case "A13":
      var code = 'button'+dropdown_pin+'->tick(bounceP7'+'.read());\n';
    break;
    case "A14":
      var code = 'button'+dropdown_pin+'->tick(bounceP8'+'.read());\n';
    break;
    case "A8": 
      var code = ' button'+dropdown_pin+'->tick(bouncePA'+'.read());\n';
    break;
    case "A9":
      var code = ' button'+dropdown_pin+'->tick(bouncePB'+'.read());\n';
    break;
    case "A10":
      var code = 'button'+dropdown_pin+'->tick(bouncePC'+'.read());\n';
    break;
    case "A11":
      var code = 'button'+dropdown_pin+'->tick(bouncePD'+'.read());\n';
    break;
    case "49":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
    case "48":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
    case "47":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
    case "38":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
  }

  return code;
};
*/
//Azul Depois
Blockly.Arduino.Button_ED_AZUL = function () {
  Blockly.Arduino.definitions_['include_OneButton'] = '#include <OneButton.h>';
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var debauce = Blockly.Arduino.valueToCode(this, 'DEB', Blockly.Arduino.ORDER_ATOMIC);

  var dropdown_mode = this.getFieldValue('mode');

  Blockly.Arduino.definitions_['var_declare_button'+dropdown_pin] = 'OneButton *button'+dropdown_pin+';';
  
  var funcName = dropdown_mode;
 
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code2 = 'button' +dropdown_pin+ '->' + funcName + '([](){\n  ' + branch + '  });\n';

  switch(dropdown_pin){

    case "A3":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP1.attach('+dropdown_pin+', INPUT);\n bounceP1.interval('+debauce+');\n';
    break;
    case "A4":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP2.attach('+dropdown_pin+', INPUT);\n bounceP2.interval('+debauce+');\n';
    break;
    case "A5": 
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP3.attach('+dropdown_pin+', INPUT);\n bounceP3.interval('+debauce+');\n';
    break;
    case "A6":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP4.attach('+dropdown_pin+', INPUT);\n bounceP4.interval('+debauce+');\n';
    break;
    case "A8":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePA.attach('+dropdown_pin+', INPUT);\n bouncePA.interval('+debauce+');\n';
    break;
    case "A9":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePB.attach('+dropdown_pin+', INPUT);\n bouncePB.interval('+debauce+');\n';
    break;
  }



  Blockly.Arduino.setups_['var_declareSetup'+dropdown_pin] = ' pinMode('+dropdown_pin+',INPUT);\n  button' +dropdown_pin+ ' = new OneButton();\n'; 

  Blockly.Arduino.setups_[funcName+dropdown_pin] = code2;

  switch(dropdown_pin){
    case "A3":  
      var code = '  button'+dropdown_pin+'->tick(bounceP1'+'.read());\n';
    break;
    case "A4":  
      var code = '  button'+dropdown_pin+'->tick(bounceP2'+'.read());\n';
    break;
    case "A5": 
      var code = '  button'+dropdown_pin+'->tick(bounceP3'+'.read());\n';
    break;
    case "A6":  
      var code = '  button'+dropdown_pin+'->tick(bounceP4'+'.read());\n';
    break;
    case "A15":
      var code = 'button'+dropdown_pin+'->tick(bounceP5'+'.read());\n';
    break;
    case "A12":
      var code = 'button'+dropdown_pin+'->tick(bounceP6'+'.read());\n';
    break;
    case "A13":
      var code = 'button'+dropdown_pin+'->tick(bounceP7'+'.read());\n';
    break;
    case "A14":
      var code = 'button'+dropdown_pin+'->tick(bounceP8'+'.read());\n';
    break;
    case "A8": 
      var code = ' button'+dropdown_pin+'->tick(bouncePA'+'.read());\n';
    break;
    case "A9":
      var code = ' button'+dropdown_pin+'->tick(bouncePB'+'.read());\n';
    break;
    case "A10":
      var code = 'button'+dropdown_pin+'->tick(bouncePC'+'.read());\n';
    break;
    case "A11":
      var code = 'button'+dropdown_pin+'->tick(bouncePD'+'.read());\n';
    break;
  }

  return code;
};

Blockly.Arduino.Button_ED_PRETO = function () {
  Blockly.Arduino.definitions_['include_OneButton'] = '#include <OneButton.h>';
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var debauce = Blockly.Arduino.valueToCode(this, 'DEB', Blockly.Arduino.ORDER_ATOMIC);


  var dropdown_mode = this.getFieldValue('mode');

  Blockly.Arduino.definitions_['var_declare_button'+dropdown_pin] = 'OneButton *button'+dropdown_pin+';';
  
  //Blockly.Arduino.definitions_['var_declare_var'+dropdown_pin] = 'bool isPressed'+dropdown_pin+';';

 // Blockly.Arduino.setups_['setup_onebutton_' + dropdown_pin+dropdown_mode] = 'button'+dropdown_pin+'.' + dropdown_mode + '('+dropdown_mode+dropdown_pin+');';
  //var code = 'button' +dropdown_pin+ '->tick(analogRead('+dropdown_pin+') > 530);\n'; //button5->tick(isPressed5);
  var funcName = dropdown_mode;
 
  
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code2 = 'button' +dropdown_pin+ '->' + funcName + '([](){\n  ' + branch + '  });\n';

  switch(dropdown_pin){

    case "A3":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP1.attach('+dropdown_pin+', INPUT);\n bounceP1.interval('+debauce+');\n';
    break;
    case "A4":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP2.attach('+dropdown_pin+', INPUT);\n bounceP2.interval('+debauce+');\n';
    break;
    case "A5": 
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP3.attach('+dropdown_pin+', INPUT);\n bounceP3.interval('+debauce+');\n';
    break;
    case "A6":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP4.attach('+dropdown_pin+', INPUT);\n bounceP4.interval('+debauce+');\n';
    break;
    case "A8":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePA.attach('+dropdown_pin+', INPUT);\n bouncePA.interval('+debauce+');\n';
    break;
    case "A9":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePB.attach('+dropdown_pin+', INPUT);\n bouncePB.interval('+debauce+');\n';
    break;
  }



  Blockly.Arduino.setups_['var_declareSetup'+dropdown_pin] = ' pinMode('+dropdown_pin+',INPUT);\n  button' +dropdown_pin+ ' = new OneButton();\n'; 

  Blockly.Arduino.setups_[funcName+dropdown_pin] = code2;

  switch(dropdown_pin){
    case "A3":  
      var code = '  button'+dropdown_pin+'->tick(bounceP1'+'.read());\n';
    break;
    case "A4":  
      var code = '  button'+dropdown_pin+'->tick(bounceP2'+'.read());\n';
    break;
    case "A5": 
      var code = '  button'+dropdown_pin+'->tick(bounceP3'+'.read());\n';
    break;
    case "A6":  
      var code = '  button'+dropdown_pin+'->tick(bounceP4'+'.read());\n';
    break;
    case "A15":
      var code = 'button'+dropdown_pin+'->tick(bounceP5'+'.read());\n';
    break;
    case "A12":
      var code = 'button'+dropdown_pin+'->tick(bounceP6'+'.read());\n';
    break;
    case "A13":
      var code = 'button'+dropdown_pin+'->tick(bounceP7'+'.read());\n';
    break;
    case "A14":
      var code = 'button'+dropdown_pin+'->tick(bounceP8'+'.read());\n';
    break;
    case "A8": 
      var code = ' button'+dropdown_pin+'->tick(bouncePA'+'.read());\n';
    break;
    case "A9":
      var code = ' button'+dropdown_pin+'->tick(bouncePB'+'.read());\n';
    break;
    case "A10":
      var code = 'button'+dropdown_pin+'->tick(bouncePC'+'.read());\n';
    break;
    case "A11":
      var code = 'button'+dropdown_pin+'->tick(bouncePD'+'.read());\n';
    break;
    case "49":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
    case "48":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
    case "47":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
    case "38":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
  }

  return code;
};

//Vermelho Antes
/*
Blockly.Arduino.Button_ED_Vermelho = function () {
  Blockly.Arduino.definitions_['include_OneButton'] = '#include <OneButton.h>';
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var debauce = Blockly.Arduino.valueToCode(this, 'DEB', Blockly.Arduino.ORDER_ATOMIC);


  var dropdown_mode = this.getFieldValue('mode');

  Blockly.Arduino.definitions_['var_declare_button'+dropdown_pin] = 'OneButton *button'+dropdown_pin+';';
  
  //Blockly.Arduino.definitions_['var_declare_var'+dropdown_pin] = 'bool isPressed'+dropdown_pin+';';

 // Blockly.Arduino.setups_['setup_onebutton_' + dropdown_pin+dropdown_mode] = 'button'+dropdown_pin+'.' + dropdown_mode + '('+dropdown_mode+dropdown_pin+');';
  //var code = 'button' +dropdown_pin+ '->tick(analogRead('+dropdown_pin+') > 530);\n'; //button5->tick(isPressed5);
  var funcName = dropdown_mode;
 
  
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code2 = 'button' +dropdown_pin+ '->' + funcName + '([](){\n  ' + branch + '  });\n';

  switch(dropdown_pin){

    case "A3":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP1.interval('+debauce+');\n';
    break;
    case "A4":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP2.interval('+debauce+');\n';
    break;
    case "A5": 
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP3.interval('+debauce+');\n';
    break;
    case "A6":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP4.interval('+debauce+');\n';
    break;
    case "A8":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePA.interval('+debauce+');\n';
    break;
    case "A9":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePB.interval('+debauce+');\n';
    break;
  }



  Blockly.Arduino.setups_['var_declareSetup'+dropdown_pin] = ' pinMode('+dropdown_pin+',INPUT);\n  button' +dropdown_pin+ ' = new OneButton();\n'; 

  Blockly.Arduino.setups_[funcName+dropdown_pin] = code2;

  switch(dropdown_pin){
    case "A3":  
      var code = ' button'+dropdown_pin+'->tick(bounceP1'+'.read());\n';
    break;
    case "A4":  
      var code = ' button'+dropdown_pin+'->tick(bounceP2'+'.read());\n';
    break;
    case "A5": 
      var code = ' button'+dropdown_pin+'->tick(bounceP3'+'.read());\n';
    break;
    case "A6":  
      var code = ' button'+dropdown_pin+'->tick(bounceP4'+'.read());\n';
    break;
    case "A15":
      var code = 'button'+dropdown_pin+'->tick(bounceP5'+'.read());\n';
    break;
    case "A12":
      var code = 'button'+dropdown_pin+'->tick(bounceP6'+'.read());\n';
    break;
    case "A13":
      var code = 'button'+dropdown_pin+'->tick(bounceP7'+'.read());\n';
    break;
    case "A14":
      var code = 'button'+dropdown_pin+'->tick(bounceP8'+'.read());\n';
    break;
    case "A8": 
    var code = 'button'+dropdown_pin+'->tick(bouncePA'+'.read());\n';
    break;
    case "A9":
      var code = 'button'+dropdown_pin+'->tick(bouncePB'+'.read());\n';
    break;
    case "A10":
      var code = 'button'+dropdown_pin+'->tick(bouncePC'+'.read());\n';
    break;
    case "A11":
      var code = 'button'+dropdown_pin+'->tick(bouncePD'+'.read());\n';
    break;
  }

  return code;
};
*/


//Vermelho Depois
Blockly.Arduino.Button_ED_Vermelho = function () {
  Blockly.Arduino.definitions_['include_OneButton'] = '#include <OneButton.h>';
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var debauce = Blockly.Arduino.valueToCode(this, 'DEB', Blockly.Arduino.ORDER_ATOMIC);


  var dropdown_mode = this.getFieldValue('mode');

  Blockly.Arduino.definitions_['var_declare_button'+dropdown_pin] = 'OneButton *button'+dropdown_pin+';';
  
  //Blockly.Arduino.definitions_['var_declare_var'+dropdown_pin] = 'bool isPressed'+dropdown_pin+';';

 // Blockly.Arduino.setups_['setup_onebutton_' + dropdown_pin+dropdown_mode] = 'button'+dropdown_pin+'.' + dropdown_mode + '('+dropdown_mode+dropdown_pin+');';
  //var code = 'button' +dropdown_pin+ '->tick(analogRead('+dropdown_pin+') > 530);\n'; //button5->tick(isPressed5);
  var funcName = dropdown_mode;
 
  
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code2 = 'button' +dropdown_pin+ '->' + funcName + '([](){\n  ' + branch + '  });\n';

  switch(dropdown_pin){

    case "A3":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP1.attach('+dropdown_pin+', INPUT);\n bounceP1.interval('+debauce+');\n';
    break;
    case "A4":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP2.attach('+dropdown_pin+', INPUT);\n bounceP2.interval('+debauce+');\n';
    break;
    case "A5": 
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP3.attach('+dropdown_pin+', INPUT);\n bounceP3.interval('+debauce+');\n';
    break;
    case "A6":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP4.attach('+dropdown_pin+', INPUT);\n bounceP4.interval('+debauce+');\n';
    break;
    case "A8":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePA.attach('+dropdown_pin+', INPUT);\n bouncePA.interval('+debauce+');\n';
    break;
    case "A9":  
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePB.attach('+dropdown_pin+', INPUT);\n bouncePB.interval('+debauce+');\n';
    break;
  }



  Blockly.Arduino.setups_['var_declareSetup'+dropdown_pin] = ' pinMode('+dropdown_pin+',INPUT);\n  button' +dropdown_pin+ ' = new OneButton();\n'; 

  Blockly.Arduino.setups_[funcName+dropdown_pin] = code2;

  switch(dropdown_pin){
    case "A3":  
      var code = '  button'+dropdown_pin+'->tick(bounceP1'+'.read());\n';
    break;
    case "A4":  
      var code = '  button'+dropdown_pin+'->tick(bounceP2'+'.read());\n';
    break;
    case "A5": 
      var code = '  button'+dropdown_pin+'->tick(bounceP3'+'.read());\n';
    break;
    case "A6":  
      var code = '  button'+dropdown_pin+'->tick(bounceP4'+'.read());\n';
    break;
    case "A15":
      var code = 'button'+dropdown_pin+'->tick(bounceP5'+'.read());\n';
    break;
    case "A12":
      var code = 'button'+dropdown_pin+'->tick(bounceP6'+'.read());\n';
    break;
    case "A13":
      var code = 'button'+dropdown_pin+'->tick(bounceP7'+'.read());\n';
    break;
    case "A14":
      var code = 'button'+dropdown_pin+'->tick(bounceP8'+'.read());\n';
    break;
    case "A8": 
      var code = ' button'+dropdown_pin+'->tick(bouncePA'+'.read());\n';
    break;
    case "A9":
      var code = ' button'+dropdown_pin+'->tick(bouncePB'+'.read());\n';
    break;
    case "A10":
      var code = 'button'+dropdown_pin+'->tick(bouncePC'+'.read());\n';
    break;
    case "A11":
      var code = 'button'+dropdown_pin+'->tick(bouncePD'+'.read());\n';
    break;
    case "49":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
    case "48":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
    case "47":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
    case "38":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
  }

  return code;
};

Blockly.Arduino.Button_ED2 = function () {
  Blockly.Arduino.definitions_['include_OneButton'] = '#include <OneButton.h>';
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_mode = this.getFieldValue('mode');

  Blockly.Arduino.definitions_['var_declare_button'+dropdown_pin] = 'OneButton *button'+dropdown_pin+';';
  //Blockly.Arduino.definitions_['var_declare_var'+dropdown_pin] = 'bool isPressed'+dropdown_pin+';';
  Blockly.Arduino.setups_['var_declareSetup'+dropdown_pin] = ' pinMode('+dropdown_pin+',INPUT);\n  button' +dropdown_pin+ ' = new OneButton();\n'; 
 // Blockly.Arduino.setups_['setup_onebutton_' + dropdown_pin+dropdown_mode] = 'button'+dropdown_pin+'.' + dropdown_mode + '('+dropdown_mode+dropdown_pin+');';
  //var code = 'button' +dropdown_pin+ '->tick(analogRead('+dropdown_pin+') > 530);\n'; //button5->tick(isPressed5);
  var funcName = dropdown_mode;
 
  
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code2 = 'button' +dropdown_pin+ '->' + funcName + '([](){\n  ' + branch + '  });\n';
  Blockly.Arduino.setups_[funcName+dropdown_pin] = code2;

  switch(dropdown_pin){
    case "A3":
      var code = 'button'+dropdown_pin+'->tick(bounceP1'+'.read());\n';
    break;
    case "A4":
      var code = 'button'+dropdown_pin+'->tick(bounceP2'+'.read());\n';
    break;
    case "A5":
      var code = 'button'+dropdown_pin+'->tick(bounceP3'+'.read());\n';
    break;
    case "A6":
      var code = 'button'+dropdown_pin+'->tick(bounceP4'+'.read());\n';
    break;
    case "A15":
      var code = 'button'+dropdown_pin+'->tick(bounceP5'+'.read());\n';
    break;
    case "A12":
      var code = 'button'+dropdown_pin+'->tick(bounceP6'+'.read());\n';
    break;
    case "A13":
      var code = 'button'+dropdown_pin+'->tick(bounceP7'+'.read());\n';
    break;
    case "A14":
      var code = 'button'+dropdown_pin+'->tick(bounceP8'+'.read());\n';
    break;
    case "A8":
      var code = 'button'+dropdown_pin+'->tick(bouncePA'+'.read());\n';
    break;
    case "A9":
      var code = 'button'+dropdown_pin+'->tick(bouncePB'+'.read());\n';
    break;
    case "A10":
      var code = 'button'+dropdown_pin+'->tick(bouncePC'+'.read());\n';
    break;
    case "A11":
      var code = 'button'+dropdown_pin+'->tick(bouncePD'+'.read());\n';
    break;
    case "49":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
    case "48":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
    case "47":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;
    case "38":
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;

    default:
      var code = 'button'+dropdown_pin+'->tick(!digitalRead('+dropdown_pin+'));\n';
    break;


  }

  return code;
};

Blockly.Arduino.getStateLedGreen = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || 2;
 // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'digitalRead('+dropdown_pin+')';
 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getStateLedRed = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || 2;
 // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'digitalRead('+dropdown_pin+')';
 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getStateLedBlue = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || 2;
 // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'digitalRead('+dropdown_pin+')';
 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getStateLedYellow = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || 2;
 // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'digitalRead('+dropdown_pin+')';
 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getStateLedWhite = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || 2;
 // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'digitalRead('+dropdown_pin+')';
 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.getButtonCittius_AZUL = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var debauce = Blockly.Arduino.valueToCode(this, 'DEB', Blockly.Arduino.ORDER_ATOMIC);
  var mode = this.getFieldValue('mode');
  switch(dropdown_pin){

    case "A3":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP1.attach('+dropdown_pin+', INPUT);\n bounceP1.interval('+debauce+');\n';  
    var code = 'bounceP1.'+mode;
    break;
    case "A4":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP2.attach('+dropdown_pin+', INPUT);\n bounceP2.interval('+debauce+');\n';  
    var code = 'bounceP2.'+mode;
    break;
    case "A5": 
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP3.attach('+dropdown_pin+', INPUT);\n bounceP3.interval('+debauce+');\n';
    var code = 'bounceP3.'+mode;
    break;
    case "A6":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP4.attach('+dropdown_pin+', INPUT);\n bounceP4.interval('+debauce+');\n';  
    var code = 'bounceP4.'+mode;
    break;
    case "A15":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP5.attach('+dropdown_pin+', INPUT);\n bounceP5.interval('+debauce+');\n';
    var code = 'bounceP5.'+mode;
    break;
    case "A12":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP6.attach('+dropdown_pin+', INPUT);\n bounceP6.interval('+debauce+');\n';  
    var code = 'bounceP6.'+mode;
    break;
    case "A13":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP7.attach('+dropdown_pin+', INPUT);\n bounceP7.interval('+debauce+');\n';  
    var code = 'bounceP7.'+mode;
    break;
    case "A14":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP8.attach('+dropdown_pin+', INPUT);\n bounceP8.interval('+debauce+');\n';  
    var code = 'bounceP8.'+mode;
    break;
    case "A8":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePA.attach('+dropdown_pin+', INPUT);\n bouncePA.interval('+debauce+');\n';  
    var code = 'bouncePA.'+mode;
    break;
    case "A9":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePB.attach('+dropdown_pin+', INPUT);\n bouncePB.interval('+debauce+');\n';  
    var code = 'bouncePB.'+mode;
    break;
    case "A10":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePC.attach('+dropdown_pin+', INPUT);\n bouncePC.interval('+debauce+');\n';  
    var code = 'bouncePC.'+mode;
    break;
    case "A11":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePD.attach('+dropdown_pin+', INPUT);\n bouncePD.interval('+debauce+');\n';  
    var code = 'bouncePD.'+mode;
    break;
  }
  
 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getButtonCittius_PRETO = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var debauce = Blockly.Arduino.valueToCode(this, 'DEB', Blockly.Arduino.ORDER_ATOMIC);
  var mode = this.getFieldValue('mode');
  switch(dropdown_pin){

    case "A3":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP1.attach('+dropdown_pin+', INPUT);\n bounceP1.interval('+debauce+');\n';  
    var code = 'bounceP1.'+mode;
    break;
    case "A4":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP2.attach('+dropdown_pin+', INPUT);\n bounceP2.interval('+debauce+');\n';  
    var code = 'bounceP2.'+mode;
    break;
    case "A5": 
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP3.attach('+dropdown_pin+', INPUT);\n bounceP3.interval('+debauce+');\n';
    var code = 'bounceP3.'+mode;
    break;
    case "A6":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP4.attach('+dropdown_pin+', INPUT);\n bounceP4.interval('+debauce+');\n';  
    var code = 'bounceP4.'+mode;
    break;
    case "A15":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP5.attach('+dropdown_pin+', INPUT);\n bounceP5.interval('+debauce+');\n';
    var code = 'bounceP5.'+mode;
    break;
    case "A12":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP6.attach('+dropdown_pin+', INPUT);\n bounceP6.interval('+debauce+');\n';  
    var code = 'bounceP6.'+mode;
    break;
    case "A13":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP7.attach('+dropdown_pin+', INPUT);\n bounceP7.interval('+debauce+');\n';  
    var code = 'bounceP7.'+mode;
    break;
    case "A14":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP8.attach('+dropdown_pin+', INPUT);\n bounceP8.interval('+debauce+');\n';  
    var code = 'bounceP8.'+mode;
    break;
    case "A8":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePA.attach('+dropdown_pin+', INPUT);\n bouncePA.interval('+debauce+');\n';  
    var code = 'bouncePA.'+mode;
    break;
    case "A9":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePB.attach('+dropdown_pin+', INPUT);\n bouncePB.interval('+debauce+');\n';  
    var code = 'bouncePB.'+mode;
    break;
    case "A10":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePC.attach('+dropdown_pin+', INPUT);\n bouncePC.interval('+debauce+');\n';  
    var code = 'bouncePC.'+mode;
    break;
    case "A11":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePD.attach('+dropdown_pin+', INPUT);\n bouncePD.interval('+debauce+');\n';  
    var code = 'bouncePD.'+mode;
    break;
  }
  
 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getButtonCittius_Vermelho = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var debauce = Blockly.Arduino.valueToCode(this, 'DEB', Blockly.Arduino.ORDER_ATOMIC);
  var mode = this.getFieldValue('mode');
  var code;

  Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);\n';
  code = "digitalRead("+dropdown_pin+")";
/*  
  switch(dropdown_pin){
    case "A3":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP1.attach('+dropdown_pin+', INPUT);\n bounceP1.interval('+5+');\n';
     code = 'bounceP1.'+mode;
    break;
    case "A4":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP2.attach('+dropdown_pin+', INPUT);\n bounceP2.interval('+5+');\n';  
     code = 'bounceP2.'+mode;
    break;
    case "A5": 
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP3.attach('+dropdown_pin+', INPUT);\n bounceP3.interval('+5+');\n';
     code = 'bounceP3.'+mode;
    break;
    case "A6":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP4.attach('+dropdown_pin+', INPUT);\n bounceP4.interval('+5+');\n';  
     code = 'bounceP4.'+mode;
    break;
    case "A15":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP5.attach('+dropdown_pin+', INPUT);\n bounceP5.interval('+5+');\n';
     code = 'bounceP5.'+mode;
    break;
    case "A12":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP6.attach('+dropdown_pin+', INPUT);\n bounceP6.interval('+5+');\n';  
     code = 'bounceP6.'+mode;
    break;
    case "A13":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP7.attach('+dropdown_pin+', INPUT);\n bounceP7.interval('+5+');\n';  
     code = 'bounceP7.'+mode;
    break;
    case "A14":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bounceP8.attach('+dropdown_pin+', INPUT);\n bounceP8.interval('+5+');\n';  
     code = 'bounceP8.'+mode;
    break;
    case "A8":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePA.attach('+dropdown_pin+', INPUT);\n bouncePA.interval('+5+');\n';  
     code = 'bouncePA.'+mode;
    break;
    case "A9":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePB.attach('+dropdown_pin+', INPUT);\n bouncePB.interval('+5+');\n';  
     code = 'bouncePB.'+mode;
    break;
    case "A10":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePC.attach('+dropdown_pin+', INPUT);\n bouncePC.interval('+5+');\n';  
     code = 'bouncePC.'+mode;
    break;
    case "A11":
    Blockly.Arduino.setups_['var_declareSetupDEB'+dropdown_pin] = 'bouncePD.attach('+dropdown_pin+', INPUT);\n bouncePD.interval('+5+');\n';  
     code = 'bouncePD.'+mode;
    break;
  }
  */
 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.Utrassonic1_ED = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
 // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'lerSensor_de_Distancia(' + dropdown_pin+')';
 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.Utrassonic1_ED_Vermelho = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
 // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'minhaDistncia';
 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Utrassonic1_ED_Vermelho_UPDATE = function () {
  Blockly.Arduino.setups_['var_declareSetupUtra'] = 'getEV3test = 1;\n for(unsigned x=1;x<=500;x++){minhaDistncia = sensorEV3(0,1);}\n ';
  return 'minhaDistncia = sensorEV3(0,1);\n';
};

Blockly.Arduino.IR2_Vermelho_UPDATE = function () {
  var mode = this.getFieldValue('MODE');
  var mode2 = this.getFieldValue('MODE2');

  if(mode==0){
    Blockly.Arduino.setups_['var_declareSetupUtra'] = 'myMode = 0;\nmychanel='+mode2+';\ngetEV3test = 2;\n for(unsigned x=1;x<=500;x++){minhaDistncia = sensorEV3('+mode+','+mode2+'); Serial.println(minhaDistncia);}\n ';
  }else{
    Blockly.Arduino.setups_['var_declareSetupUtra'] = 'myMode = 2;\nmychanel='+mode2+';\ngetEV3test = 2;\n for(unsigned x=1;x<=500;x++){minhaDistncia = sensorEV3('+mode+','+mode2+'); Serial.println(minhaDistncia);}\n ';   
  }


 
  
  return 'minhaDistncia = sensorEV3('+mode+','+mode2+');\n';
};



Blockly.Arduino.temperature_ED_Vermelho = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
 // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'getTemperatureEV3()';
 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Utrassonic1_ED_PRETO = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
 // var value1 = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sensorEV3(0,1)';
 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.sensorColor1_ED_VERMELHO = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var mode = this.getFieldValue('GET');
  var code = 'sensorEV3('+mode+',1)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.sensorColor1_F1 = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var mode = this.getFieldValue('GET');
  var code = 'getColorF1('+mode+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.sensorColor1_ED = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var mode = this.getFieldValue('GET');
  var code = 'lerSensor_de_Cor(' + dropdown_pin + ','+ mode+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.sensorAcel1_ED = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var mode = this.getFieldValue('GET');
  var code = 'lerSensor_Acelerometro(' + dropdown_pin + ','+ mode+')';
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
      code += '  Serial.print('+argument+');\n  Serial.print(",");\n';
  }
  if (this.elseifCount_ > n) {
      branch = Blockly.Arduino.statementToCode(this, 'ELSE');
      code += '  Serial.println(" ");\n';
  }
  return code + '\n';
};

Blockly.Arduino.TerminalSend = function () {
  Blockly.Arduino.definitions_['var_declare_Terminal'] = '#define INCLUDE_TERMINAL_MODULE';
  var new_line = this.getFieldValue('new_line');
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"'
  var code = 'Dabble.processInput();\n ' + 'Terminal.'+new_line+'(' + content + ');\n';
  return code;
};

Blockly.Arduino.controls_if44 = function () {
  // If/elseif/else condition.
  Blockly.Arduino.definitions_['var_declare_Terminal'] = '#define INCLUDE_TERMINAL_MODULE';
  Blockly.Arduino.definitions_['var_declare_Terminal2'] = 'String Serialdata = "";\nbool dataflag = 0;\n';

  


  var n = 0;
  var argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
      Blockly.Arduino.ORDER_NONE) || 'false';
  var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);

  var code = 'Dabble.processInput();\n'+
  ' while (Terminal.available() != 0){\n'+
    '  Serialdata = String(Serialdata + char(Terminal.read()));\n'+
    '  dataflag = 1;\n'+
    '}\n'+
    '  if (dataflag == 1){\n'+
  '     if (Serialdata == ' + argument + ') {\n    ' + branch + '      Serialdata = "";\n      dataflag = 0;\n      }\n   }';
  for (n = 1; n <= this.elseifCount_; n++) {
      argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
        Blockly.Arduino.ORDER_NONE) || 'false';
      branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
      code += ' else if (Serialdata == ' + argument + ') {\n' + branch + '     Serialdata = "";\n      dataflag = 0;\n}';
  }
  if (this.elseCount_) {
      branch = Blockly.Arduino.statementToCode(this, 'ELSE');
      code += ' else {\n' + branch + '\n  Serialdata = "";\n      dataflag = 0;\n}';
  }
  return code + '\n';
};

Blockly.Arduino.getColorMedio = function() {
  var _tasknum = this.getFieldValue('PORT'); 
  var _mode = this.getFieldValue('GET');                                 
  var code;
  switch(_tasknum){
    case "1":
       code = "getColorSensor1("+_mode+")";
    break;
    case "5":
       code = "getColorSensor5("+_mode+")";
    break;
    case "6":
       code = "getColorSensor6("+_mode+")";
    break;
    case "7":
       code = "getColorSensor7("+_mode+")";
    break;
    case "8":
       code = "getColorSensor8("+_mode+")";
    break;
    case "9":
      code = "getColorSensorA("+_mode+")";
    break;
    case "10":
      code = "getColorSensorB("+_mode+")";
    break;
    case "11":
      code = "getColorSensorC("+_mode+")";
    break;
    case "12":
      code = "getColorSensorD("+_mode+")";
    break;
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Utrassonic1_ED_Vermelho = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);
  var code = "getDistancia("+dropdown_pin+")";


 // var mode = this.getFieldValue('GET');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.getGiroNovo = function() {
  var _tasknum = this.getFieldValue('PORT'); 
  var _mode = this.getFieldValue('GET');                                 
  var code;

  code = "sensorMovimento("+_tasknum+","+_mode+")";

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.getSomNovo = function() {
  var _tasknum = this.getFieldValue('PORT'); 
                                 
  var code;

  code = "analogRead("+_tasknum+")";

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getTemperaturaNovo = function() {
  var _tasknum = this.getFieldValue('PORT');                                 
  var code;
  switch(_tasknum){
    case "1":
       code = "getTemperature1()";
    break;
    case "5":
       code = "getTemperature5()";
    break;
    case "6":
       code = "getTemperature6()";
    break;
    case "7":
       code = "getTemperature7()";
    break;
    case "8":
       code = "getTemperature8()";
    break;
    case "9":
      code = "getTemperatureA()";
    break;
    case "10":
      code = "getTemperatureB()";
    break;
    case "11":
      code = "getTemperatureC()";
    break;
    case "12":
      code = "getTemperatureD()";
    break;
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.getControler3 = function() {
  var _tasknum = this.getFieldValue('PORT'); 
  var _mode = this.getFieldValue('GET');                                 
  var code;
  switch(_tasknum){
    case "5":
       code = "getInfravermelho5("+_mode+")";
    break;
    case "6":
       code = "getInfravermelho6("+_mode+")";
    break;
    case "7":
       code = "getInfravermelho7("+_mode+")";
    break;
    case "8":
       code = "getInfravermelho8("+_mode+")";
    break;
    case "10":
      code = "getInfravermelhoB("+_mode+")";
    break;

  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};