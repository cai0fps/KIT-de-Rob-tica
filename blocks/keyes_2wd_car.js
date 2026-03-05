'use strict';

goog.provide('Blockly.Blocks.desktop_car');

goog.require('Blockly.Blocks');

//////////////////颜色/////////////////////
Blockly.Blocks.desktop_car.HUE = 120;

//////////////////LED////////////////
Blockly.Blocks.desk_led_blue = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar o Led RGB")
        .appendField("da Porta:")
        .appendField(new Blockly.FieldDropdown([["P1","0"], ["P2","1"], ["P3","2"], ["P4","3"], ["P5","4"], ["P6","5"], ["P7","6"], ["P8","7"], ["M1","8"], ["M2","9"], ["M3","10"], ["M4","11"]]), "port")
        .appendField("na cor Azul")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/led_azul.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
      // .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.desk_led_red = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar o Led RGB")
        .appendField("da Porta:")
        .appendField(new Blockly.FieldDropdown([["P1","0"], ["P2","1"], ["P3","2"], ["P4","3"], ["P5","4"], ["P6","5"], ["P7","6"], ["P8","7"], ["M1","8"], ["M2","9"], ["M3","10"], ["M4","11"]]), "port")
        .appendField("na cor Vermelho")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/led_vermelho.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
      // .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.desk_led_green= {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar o Led RGB")
        .appendField("da Porta:")
        .appendField(new Blockly.FieldDropdown([["P1","0"], ["P2","1"], ["P3","2"], ["P4","3"], ["P5","4"], ["P6","5"], ["P7","6"], ["P8","7"], ["M1","8"], ["M2","9"], ["M3","10"], ["M4","11"]]), "port")
        .appendField("na cor Verde")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/led_verde.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
      // .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.desk_led_yellow= {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar o Led RGB")
        .appendField("da Porta:")
        .appendField(new Blockly.FieldDropdown([["P1","0"], ["P2","1"], ["P3","2"], ["P4","3"], ["P5","4"], ["P6","5"], ["P7","6"], ["P8","7"], ["M1","8"], ["M2","9"], ["M3","10"], ["M4","11"]]), "port")
        .appendField("na cor Amarelo")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/led_amarelo.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
      // .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.desk_led_white= {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar o Led RGB")
        .appendField("da Porta:")
        .appendField(new Blockly.FieldDropdown([["P1","0"], ["P2","1"], ["P3","2"], ["P4","3"], ["P5","4"], ["P6","5"], ["P7","6"], ["P8","7"], ["M1","8"], ["M2","9"], ["M3","10"], ["M4","11"]]), "port")
        .appendField("na cor Branco")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/led_branco.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
      // .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.desk_led_purple= {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar o Led RGB")
        .appendField("da Porta:")
        .appendField(new Blockly.FieldDropdown([["P1","0"], ["P2","1"], ["P3","2"], ["P4","3"], ["P5","4"], ["P6","5"], ["P7","6"], ["P8","7"], ["M1","8"], ["M2","9"], ["M3","10"], ["M4","11"]]), "port")
        .appendField("na cor Roxo")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/led_roxo.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
      // .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.desk_led_off= {
  init: function() {
    this.appendDummyInput()
        .appendField("Desligar o Led RGB")
        .appendField("da Porta:")
        .appendField(new Blockly.FieldDropdown([["P1","0"], ["P2","1"], ["P3","2"], ["P4","3"], ["P5","4"], ["P6","5"], ["P7","6"], ["P8","7"], ["M1","8"], ["M2","9"], ["M3","10"], ["M4","11"]]), "port")
        //.appendField("na cor Roxo")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/led_desligado.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
      // .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


/*Blockly.Blocks.luminaria= {
  init: function() {
    this.appendDummyInput()
        .appendField("Luminaria ")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"]]), "port")
        .appendField("cor")
        .appendField(new Blockly.FieldDropdown([["off","1"], ["Desligado","2"], ["Verde","3"], ["Amarelo","4"], ["Azul","5"], ["Branco","6"]]), "color");
        .appendField(new Blockly.FieldImage("../../media/keyesAll/led_desligado.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};*/

Blockly.Blocks.interface_motor= {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../media/keyesAll/Motor Grande.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
        .appendField("controle do motor grande: ")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"]]), "porta")
        .appendField("potencia:")


        this.appendValueInput("NUM", Number)
        .setCheck(Number);
        this.appendDummyInput()
        .appendField("%");

        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#808080");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.interface_motor_medio= {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../media/keyesAll/Motor Médio.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
        .appendField("controle do motor médio: ")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"]]), "porta")
        .appendField("potencia: ")
        this.appendValueInput("NUM", Number)
        .setCheck(Number);
        this.appendDummyInput()
        .appendField("%");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#808080");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.base_setup = {
  init: function() {
    this.setColour(195);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_SETUP);
    this.appendStatementInput('DO')
    .appendField('');
    this.setTooltip(Blockly.MIXLY_TOOLTIP_CONTROL_SETUP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/03.Control.html#id2");
  }
};





Blockly.Blocks.definir_cor = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir cor do led")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField("cor")
        .appendField(new Blockly.FieldDropdown([["OFF","1"], ["VERMELHO","2"], ["VERDE","3"], ["AZUL","4"], ["AMARELO","5"], ["ROXO","6"], ["CIANO","7"], ["BRANCO","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.leia = {
  init: function() {
    this.appendDummyInput()
        .appendField("leia")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_sensor_de_luz = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler sensor de luz")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_sensor_de_luz = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir sensor de luz")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","2"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_sensor_ultrassonico = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler ultasonico")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.if_Button = {
  init: function() {
    var input = this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/Sensor de Toque.png", 110, 110, { alt: "*", flipRtl: "FALSE" }))
    .appendField("Se o sensor de toque")
    .appendField(new Blockly.FieldDropdown([["P2","A4"], ["P3","A5"]]), "port")
    .appendField("for")
    .appendField(new Blockly.FieldDropdown([["PRESSIONADO","1"], ["SOLTO","0"]]), "status")

    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("Faça");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#6B8E23");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.if_Button_else = {
  init: function() {
    var input = this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/Sensor de Toque.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    .appendField("Se o sensor de toque da porta:")
    .appendField(new Blockly.FieldDropdown([["2","A4"], ["3","A5"]]), "port")
    .appendField("for")
    .appendField(new Blockly.FieldDropdown([["PRESSIONADO","1"], ["SOLTO","0"]]), "status")

    this.appendStatementInput("DO")
    .setCheck(null)
    .appendField("Faça");
this.appendStatementInput("ELSE")
    .setCheck(null)
    .appendField("Caso contrário");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour("#6B8E23");
  }
};

Blockly.Blocks.if_Color = {
  init: function() {
    var input = this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/Sensor de cor.png", 110, 110, { alt: "*", flipRtl: "FALSE" }))
    .appendField("Se o sensor de cor da porta:")
    .appendField(new Blockly.FieldDropdown([["P5","5"], ["P7","7"]]), "port")
    .appendField("for")
    .appendField(new Blockly.FieldDropdown([["igual | =","=="], ["maior | >",">"], ["menor | <","<"], ["diferente | ≠","!="], ["maior ou igual | ≥",">="], ["menor ou igual | ≤ ","<="]]), "logic");

   // var input = this.appendDummyInput()
    var options = [
        ['none', '0'],
        [{'src': '../../media/keyesAll/color1.png', 'width': 50, 'height': 25, 'alt': 'vermelho'}, '1'],
        [{'src': '../../media/keyesAll/color2.png', 'width': 50, 'height': 25, 'alt': 'verde'}, '2'],
        [{'src': '../../media/keyesAll/color3.png', 'width': 50, 'height': 25, 'alt': 'verde'}, '3'],
        [{'src': '../../media/keyesAll/color4.png', 'width': 50, 'height': 25, 'alt': 'verde'}, '4'],
        [{'src': '../../media/keyesAll/color5.png', 'width': 50, 'height': 25, 'alt': 'verde'}, '5'],
        [{'src': '../../media/keyesAll/color6.png', 'width': 50, 'height': 25, 'alt': 'verde'}, '6'],
        [{'src': '../../media/keyesAll/color7.png', 'width': 50, 'height': 25, 'alt': 'azul'}, '7']
    ];
    input.appendField(new Blockly.FieldDropdown(options), 'FLAG');
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("Faça");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#6B8E23");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.if_Color_else = {
  init: function() {
    var input = this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/Sensor de cor.png", 110, 110, { alt: "*", flipRtl: "FALSE" }))
    .appendField("Se o sensor de cor da porta:")
    .appendField(new Blockly.FieldDropdown([["5","5"], ["7","7"]]), "port")
    .appendField("for")
    .appendField(new Blockly.FieldDropdown([["igual | =","=="], ["maior | >",">"], ["menor | <","<"], ["diferente | ≠","!="], ["maior ou igual | ≥",">="], ["menor ou igual | ≤ ","<="]]), "logic");

   // var input = this.appendDummyInput()
    var options = [
        ['none', '0'],
        [{'src': '../../media/keyesAll/color1.png', 'width': 50, 'height': 25, 'alt': 'vermelho'}, '1'],
        [{'src': '../../media/keyesAll/color2.png', 'width': 50, 'height': 25, 'alt': 'verde'}, '2'],
        [{'src': '../../media/keyesAll/color3.png', 'width': 50, 'height': 25, 'alt': 'verde'}, '3'],
        [{'src': '../../media/keyesAll/color4.png', 'width': 50, 'height': 25, 'alt': 'verde'}, '4'],
        [{'src': '../../media/keyesAll/color5.png', 'width': 50, 'height': 25, 'alt': 'verde'}, '5'],
        [{'src': '../../media/keyesAll/color6.png', 'width': 50, 'height': 25, 'alt': 'verde'}, '6'],
        [{'src': '../../media/keyesAll/color7.png', 'width': 50, 'height': 25, 'alt': 'azul'}, '7']
    ];
    input.appendField(new Blockly.FieldDropdown(options), 'FLAG');
    this.appendStatementInput("DO")
    .setCheck(null)
    .appendField("Faça");
this.appendStatementInput("ELSE")
    .setCheck(null)
    .appendField("Caso contrário");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour("#6B8E23");

 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.if_Utrassonic = {
  init: function() {
    var input = this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/Sensor Utrassonico.png", 110, 110, { alt: "*", flipRtl: "FALSE" }))
    .appendField("Se o sensor de Distancia")
    .appendField(new Blockly.FieldDropdown([["6","6"], ["8","8"]]), "port")
    .appendField("for")
    .appendField(new Blockly.FieldDropdown([["igual | =","=="], ["maior | >",">"], ["menor | <","<"], ["diferente | ≠","!="], ["maior ou igual | ≥",">="], ["menor ou igual | ≤ ","<="]]), "logic");

    this.appendValueInput("NUM", Number)
    .setCheck(Number);
    this.appendDummyInput()
    .appendField("cm");

    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("Faça");
  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffa500");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.if_Utrassonic_ELSE = {
  init: function() {
    var input = this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/Sensor Utrassonico.png", 110, 110, { alt: "*", flipRtl: "FALSE" }))
    .appendField("Se o sensor de Distancia")
    .appendField(new Blockly.FieldDropdown([["6","6"], ["8","8"]]), "port")
    .appendField("for")
    .appendField(new Blockly.FieldDropdown([["igual | =","=="], ["maior | >",">"], ["menor | <","<"], ["diferente | ≠","!="], ["maior ou igual | ≥",">="], ["menor ou igual | ≤ ","<="]]), "logic");

    this.appendValueInput("NUM", Number)
    .setCheck(Number);
    this.appendDummyInput()
    .appendField("cm");

    this.appendStatementInput("DO")
    .setCheck(null)
    .appendField("Faça");
this.appendStatementInput("ELSE")
    .setCheck(null)
    .appendField("Caso contrário");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour("#6B8E23");

 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks.tft_fillscreen = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Cor de fundo do display")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.tft_Rect_ = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Desenhar Retângulo")
        .appendField(new Blockly.FieldDropdown([["Preencher","0"], ["Contorno","1"]]), "format")
        .appendField("x inicial")
        .appendField(new Blockly.FieldNumber(0, 0, 240), "xPos_")
        .appendField("y inicial")
        .appendField(new Blockly.FieldNumber(31, 31, 266), "yPos_")
        .appendField("Largura")
        .appendField(new Blockly.FieldNumber(40, 0, 240), "xLar")
        .appendField("Altura")
        .appendField(new Blockly.FieldNumber(40, 31, 266), "yLar")
        .appendField("Cor")
        .appendField(new Blockly.FieldColour("#cc0000"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.tft_Circ = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Desenhar Circulo de Centro")
        .appendField(new Blockly.FieldDropdown([["Preencher","0"], ["Contorno","1"]]), "format")
        .appendField("x inicial")
        .appendField(new Blockly.FieldNumber(0, 0, 240), "xPos_")
        .appendField("y inicial")
        .appendField(new Blockly.FieldNumber(31, 31, 266), "yPos_")
        .appendField("raio")
        .appendField(new Blockly.FieldNumber(40, 0, 240), "xLar")
        .appendField("Cor")
        .appendField(new Blockly.FieldColour("#cc0000"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.tft_txt = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Escrever Texto")
        .appendField("x")
        .appendField(new Blockly.FieldNumber(40, 0, 240), "xPos_")
        .appendField("y")
        .appendField(new Blockly.FieldNumber(60, 31, 266), "yPos_")
        .appendField("Cor do Texto")
        .appendField(new Blockly.FieldColour("#ffffff"), "color")
        .appendField("cor do fundo")
        .appendField(new Blockly.FieldColour("#cc6600"), "color2")
        .appendField("tamanho")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"]]), "tamanho");
        this.appendValueInput('A')
        .setCheck([String,Number])
        .appendField(Blockly.MIXLY_TEXT_JOIN);
    this.setInputsInline(true);
   // this.setOutput(true, String);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.tft_number = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Escrever Numero")
        .appendField("x")
        .appendField(new Blockly.FieldNumber(40, 0, 240), "xPos_")
        .appendField("y")
        .appendField(new Blockly.FieldNumber(60, 31, 266), "yPos_")
        .appendField("Cor do Texto")
        .appendField(new Blockly.FieldColour("#ffffff"), "color")
        .appendField("cor do fundo")
        .appendField(new Blockly.FieldColour("#cc6600"), "color2")
        .appendField("tamanho")
        .appendField(new Blockly.FieldDropdown([["2","2"], ["4","4"], ["7","7"]]), "tamanho");
        this.appendValueInput('A')
        .setCheck([String,Number])
        .appendField("Valor:");
    this.setInputsInline(true);
   // this.setOutput(true, String);
   this.appendDummyInput()
   .appendField("formato")
   .appendField(new Blockly.FieldDropdown([["00","2"], ["000","3"], ["0000","4"], ["00000","5"], ["000000","6"], ["00.00","7"]]), "formato");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
/*

Blockly.Blocks.ler_sensor_de_cor = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/Sensor de cor.png", 70, 70, { alt: "*", flipRtl: "FALSE" }))
        .appendField("leitura do sensor de COR")
        .appendField(new Blockly.FieldDropdown([["P5","5"], ["P7","7"]]), "port")
    
    this.setOutput(true, [Boolean,Number]);    
    this.setColour("#008400");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

*/
Blockly.Blocks.ler_sensor_de_gesto = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler sensor de gesto")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.gesticular = {
  init: function() {
    this.appendDummyInput()
        .appendField("gesticular")
        .appendField(new Blockly.FieldDropdown([["Cima"], ["Baixo"], ["Esquerda"], ["Direita"], ["Frente"], ["Para trás"], ["Horario"], ["Anti-horário"], ["aceno"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.sensor_laser = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler sensor laser")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField("modo")
        .appendField(new Blockly.FieldDropdown([["Padrão","1"], ["longa distancia","2"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.sensor_de_distancia = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler sensor de distancia")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.obter_sensor_de_cor = {
  init: function() {
    this.appendDummyInput()
        .appendField("obter sensor de cor")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField(new Blockly.FieldDropdown([["R","1"], ["G","2"], ["B","3"]]), "NAME")
        .appendField("secs")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.obter_AHRS = {
  init: function() {
    this.appendDummyInput()
        .appendField("obter AHRS")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField("modo")
        .appendField(new Blockly.FieldDropdown([["Angulo do rolo","1"], ["Angulo de inclinação","2"], ["Angulo de guinada","3"], ["aX","4"], ["aY","5"], ["aZ","6"], ["gX","7"], ["gY","8"], ["gZ","9"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_AHRS = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir AHRS")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField("modo de reset")
        .appendField(new Blockly.FieldDropdown([["direct","1"], ["factory","2"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_SmartEye = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir SmartEye")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField("modo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "NAME")
        .appendField("cor")
        .appendField(new Blockly.FieldColour("#ff0000"), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_SmartEyeRecord = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler SmartEyeRecord")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_SmartEyeDist = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler SmartEyeDist")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_SmartEyeAllLed = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir SmartEyeAllLed")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField("cor")
        .appendField(new Blockly.FieldColour("#ff0000"), "NAME")
        .appendField(new Blockly.FieldColour("#ff9900"), "NAME")
        .appendField(new Blockly.FieldColour("#ffff33"), "NAME")
        .appendField(new Blockly.FieldColour("#33ff33"), "NAME")
        .appendField(new Blockly.FieldColour("#66cccc"), "NAME")
        .appendField(new Blockly.FieldColour("#3333ff"), "NAME")
        .appendField(new Blockly.FieldColour("#cc33cc"), "NAME")
        .appendField(new Blockly.FieldColour("#ff99ff"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_sensor_luz_digital = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler sensor de luz digital")
        .appendField(new Blockly.FieldDropdown([["P1","1"], ["P2","2"], ["P3","3"], ["P4","4"], ["P5","5"], ["P6","6"], ["P7","7"], ["P8","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_WifiPictureData = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler Wifi Picture data")
        .appendField(new Blockly.FieldDropdown([["QR-Code ID","1"], ["Picture area","2"], ["Picture X-axis","3"], ["Picture Y-axis","4"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_WifiCamRockCtrl = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler Wifi Cam RockCtrl")
        .appendField(new Blockly.FieldDropdown([["LeftRock X-axis","1"], ["LeftRock Y-axis","2"], ["RightRock X-axis","3"], ["RightRock Y-axis","4"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_WifiCamPictureResult = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler Wifi Cam Picture Result")
        .appendField(new Blockly.FieldDropdown([["Face","1"], ["QR-code","2"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_WifiCamPictureSize = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler Wifi Cam Picture Size")
        .appendField(new Blockly.FieldDropdown([["Ampla","1"], ["Media","2"], ["Pequena", "3"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_WifiCamPictureSite = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler Wifi Cam Picture Site")
        .appendField(new Blockly.FieldDropdown([["Picture-Up","1"], ["Picture-Down","2"], ["Picture=Left", "3"], ["Picture=Right", "4"], ["Picture-Middle", "5"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irr.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.controlador = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("controlador")
        .appendField(new Blockly.FieldDropdown([["tarefa 1","1"], ["tarefa 2","2"], ["tarefa 3","3"], ["tarefa 4","4"], ["tarefa 5","5"], ["tarefa 6","6"], ["tarefa 7","7"], ["tarefa 8","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irs.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_botao_esquerdo = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler botão esquerdo")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irs.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.redefinir_hora_do_sistema = {
  init: function() {
    this.appendDummyInput()
        .appendField("Redefinir hora do sistema")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irs.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_hora_do_sistema = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler hora do sistema")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irs.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_botao_direito = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler botão direito")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irs.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_botao_direito = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler botão direito")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irs.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_InVolume = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler InVolume")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irs.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_campainha = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir campainha")
        .appendField(new Blockly.FieldDropdown([["LIGADO","1"], ["DESLIGADO","2"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irs.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_InVotage = {
  init: function() {
    this.appendDummyInput()
        .appendField("ler InVolume")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irs.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_frequencia_de_audio = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir frequencia de audio")
        .appendField(new Blockly.FieldDropdown([["High Do","1"], ["High Re","2"], ["High Mi","3"], ["High Fa","4"], ["High Sol","5"], ["High La","6"], ["High Si","7"], ["Do","8"], ["Re","9"], ["Mi","10"], ["Fa","11"], ["Sol","12"], ["La","13"], ["Si","14"], ["Low Do","15"], ["Low Re","16"], ["Low Mi","17"], ["Low Fa","18"], ["Low Sol","19"], ["Low La","20"], ["Low Si","21"]]), "NAME")
        .appendField("Hz Tempo")
        .appendField(new Blockly.FieldDropdown([["em dobro","1"], ["Todo","2"], ["Metade","3"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_irs.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_touchScreen = {
  init: function() {
    this.appendDummyInput()
        .appendField("Leia ToutchScreen")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_touch.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_touchscreenX = {
  init: function() {
    this.appendDummyInput()
        .appendField("Leia ToutchScreenX")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_touch.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.ler_touchscreenY = {
  init: function() {
    this.appendDummyInput()
        .appendField("Leia ToutchScreenY")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_touch.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_lcd_de_volta = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir LCD de volta")
        .appendField(new Blockly.FieldDropdown([["LIGADO","1"], ["DESLIGADO","2"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_touch.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_lcd_claro = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir LCD claro")
        .appendField(new Blockly.FieldDropdown([["VERMELHO","1"], ["PRETO","2"], ["VERDE","3"], ["AZUL","4"], ["AMARELO","5"], ["ROXO","6"], ["CIANO","7"], ["BRANCO","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_touch.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_ponto = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir ponto X")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField("cor")
        .appendField(new Blockly.FieldDropdown([["VERMELHO","1"], ["PRETO","2"], ["VERDE","3"], ["AZUL","4"], ["AMARELO","5"], ["ROXO","6"], ["CIANO","7"], ["BRANCO","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_touch.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_linha = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir linha X")
        .appendField(new Blockly.FieldNumber(1), "NAME")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(45), "NAME")
        .appendField("angulo")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField("comprimento")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField(new Blockly.FieldDropdown([["VERMELHO","1"], ["PRETO","2"], ["VERDE","3"], ["AZUL","4"], ["AMARELO","5"], ["ROXO","6"], ["CIANO","7"], ["BRANCO","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_touch.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_circulo = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir circulo X")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField("raio")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField("cor")
        .appendField(new Blockly.FieldDropdown([["VERMELHO","1"], ["PRETO","2"], ["VERDE","3"], ["AZUL","4"], ["AMARELO","5"], ["ROXO","6"], ["CIANO","7"], ["BRANCO","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_touch.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_exibição_de_imagem = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir exibição de imagem X")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField("nome do arquivo")
        .appendField(new Blockly.FieldTextInput("a"), "NAME")
        .appendField("escala")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_touch.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_retangulo = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir retangulo X")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField("largura")
        .appendField(new Blockly.FieldNumber(50), "NAME")
        .appendField("altura")
        .appendField(new Blockly.FieldNumber(50), "NAME")
        .appendField("largura da linha")
        .appendField(new Blockly.FieldNumber(3), "NAME")
        .appendField("cor")
        .appendField(new Blockly.FieldDropdown([["VERMELHO","1"], ["PRETO","2"], ["VERDE","3"], ["AZUL","4"], ["AMARELO","5"], ["ROXO","6"], ["CIANO","7"], ["BRANCO","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_touch.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_retangulo_preenchido = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir retangulo preenchido X")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(10), "NAME")
        .appendField("largura")
        .appendField(new Blockly.FieldNumber(50), "NAME")
        .appendField("altura")
        .appendField(new Blockly.FieldNumber(50), "NAME")
        .appendField("largura da linha")
        .appendField(new Blockly.FieldNumber(3), "NAME")
        .appendField("cor")
        .appendField(new Blockly.FieldDropdown([["VERMELHO","1"], ["PRETO","2"], ["VERDE","3"], ["AZUL","4"], ["AMARELO","5"], ["ROXO","6"], ["CIANO","7"], ["BRANCO","8"]]), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/ks_touch.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.espera = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("espera")
        .appendField(new Blockly.FieldNumber(1), "NAME")
        .appendField("s")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/time01.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.repete_x_vezes = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("repete")
        .appendField(new Blockly.FieldNumber(1), "NAME")
        .appendField("vezes")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/time01.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.repete_sempre = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("repete para sempre")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/time01.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se_entao = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("se");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("entao");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se_entao_senao = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("se");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("entao");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("se não");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.espera_ate_que = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("espera ate que");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.pare = {
  init: function() {
    this.appendDummyInput()
        .appendField("pare")
        .appendField(new Blockly.FieldDropdown([["tudo","1"], ["este script","2"], ["outro script nesse script","3"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.quando_iniciar_como_clone = {
  init: function() {
    this.appendDummyInput()
        .appendField("quando iniciar como clone")
        .appendField(new Blockly.FieldDropdown([["tudo","1"], ["este script","2"], ["outro script nesse script","3"]]), "NAME");
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.criar_clone = {
  init: function() {
    this.appendDummyInput()
        .appendField("criar clone");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.deletar_clone = {
  init: function() {
    this.appendDummyInput()
        .appendField("deletar clone");
    this.setPreviousStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.angulo_motor = {
  init: function() {
    this.appendDummyInput()
        .appendField("definir angulo do motor")
        .appendField(new Blockly.FieldDropdown([["A","1"], ["B","2"], ["C","3"], ["D","4"]]), "NAME")
        .appendField("velocidade")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField("angulo")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/M1MAIS.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_servo = {
  init: function() {
    this.appendDummyInput()
        .appendField("ligar servo")
        .appendField(new Blockly.FieldDropdown([["A","1"], ["B","2"], ["C","3"], ["D","4"]]), "NAME")
        .appendField("velocidade")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField("angulo")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/M1MAIS.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e3ce0e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Cartões amarelos

Blockly.Blocks.Aguarde05s = {
  init: function() {
    this.appendDummyInput()
        .appendField("Aguarde 0.5s")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/time01.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e3ce0e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.Aguarde1s = {
  init: function() {
    this.appendDummyInput()
        .appendField("Aguarde 1s")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/timer1.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e3ce0e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.Aguarde3s = {
  init: function() {
    this.appendDummyInput()
        .appendField("Aguarde 3s")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/timer3.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e3ce0e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.Aguarde10s = {
  init: function() {
    this.appendDummyInput()
        .appendField("Aguarde 10s")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/timer10.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e3ce0e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*
Blockly.Blocks.Va_para_a_linha = {
  init: function() {
    this.appendDummyInput()
        .appendField("Va para a linha")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/VaParaALinha.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);    
        this.setColour("#e3ce0e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
*/
Blockly.Blocks.Va_para_a_linha = {
  init: function() {
    this.appendStatementInput("loop")
        .setCheck(null)
        .appendField("Va para a linha 0")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/VaParaALinha.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e3ce0e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks.Parar = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pare")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/timerStop.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setColour("#e3ce0e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//cartões verdes
Blockly.Blocks.alarme = {
  init: function() {
    this.appendDummyInput()
        .appendField("Som: Alarme")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/alarme.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.buzina = {
  init: function() {
    this.appendDummyInput()
        .appendField("Som: Buzina")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/buzina.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.starWars = {
  init: function() {
    this.appendDummyInput()
        .appendField("Som: Star Wars")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/starWars.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.desligarSom = {
  init: function() {
    this.appendDummyInput()
        .appendField("desligar")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/desligar.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.aniversario = {
  init: function() {
    this.appendDummyInput()
        .appendField("Som: Aniversario")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/aniversario.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mario = {
  init: function() {
    this.appendDummyInput()
        .appendField("Som: Mario")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/mario.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks.natal = {
  init: function() {
    this.appendDummyInput()
        .appendField("Som: Natal")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/natal.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.emFrente = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/emFrente.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Em frente com a potência de:")

        this.appendValueInput("NUM", Number)
        .setCheck(Number);
        this.appendDummyInput()
        .appendField("% | (A e B)");

        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#808080");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.direita = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/direita.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Vire a Direita com a potência de:")

        this.appendValueInput("NUM", Number)
        .setCheck(Number);
        this.appendDummyInput()
        .appendField("% | (A e B)");

        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#808080");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esquerda = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/esquerda.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Vire a Esquerda com a potência de:")

        this.appendValueInput("NUM", Number)
        .setCheck(Number);
        this.appendDummyInput()
        .appendField("% | (A e B)");

        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#808080");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.tras = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/tras.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Para Tras com a potência de:")

        this.appendValueInput("NUM", Number)
        .setCheck(Number);
        this.appendDummyInput()
        .appendField("% | (A e B)");

        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#808080");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.pararDirecao = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../media/keyesAll/pareTodos.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Pare a direção dos motores | (A e B)")

       // this.appendValueInput("NUM", Number)
       // .setCheck(Number);
       // this.appendDummyInput()
       // .appendField("% | (M1 e M2)");

        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#808080");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks.pare = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pare")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/pare.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.pare_mA = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pare Motor A")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/pareMotorABC.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.pare_mB = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pare Motor B")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/pareMotorABC.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.pare_mC = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pare Motor C")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/pareMotorABC.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.pare_todos = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pare todos os motores")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/pareTodos.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.olhos = {
  init: function() {
    this.appendDummyInput()
        .appendField("Olhos")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/olhos.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.certo = {
  init: function() {
    this.appendDummyInput()
        .appendField("Certo")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/telaCerto.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks.errado = {
  init: function() {
    this.appendDummyInput()
        .appendField("Errado")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/telaErrado.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.feliz = {
  init: function() {
    this.appendDummyInput()
        .appendField("Feliz")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/telaFeliz.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.triste = {
  init: function() {
    this.appendDummyInput()
        .appendField("Triste")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/telaTriste.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.em_branco = {
  init: function() {
    this.appendDummyInput()
        .appendField("Em branco")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/telaEmBranco.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Cartões Vermelhos

Blockly.Blocks.esperar1VermelhoFalso = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 1: vermelho ser falso")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere1VermelhoSerFalso.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar2VermelhoFalso = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 2: vermelho ser falso")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere2VermelhoSerFalso.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar3VermelhoFalso = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 3: vermelho ser falso")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere3VermelhoSerFalso.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar4VermelhoFalso = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 4: vermelho ser falso")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere4VermelhoSerFalso.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar1SerFalso = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 1 ser falso")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere1SerFalso.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar2SerFalso = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 2 ser falso")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere2SerFalso.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar3SerFalso = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 3 ser falso")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere3SerFalso.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar4SerFalso = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 4 ser falso")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere4SerFalso.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar1VermelhoVerdadeiro = {
  init: function() {
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("Esperar 1: vermelho ser verdadeiro")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere1VermelhoSerVerdadeiro.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar2VermelhoVerdadeiro = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 2: vermelho ser verdadeiro")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere2VermelhoSerVerdadeiro.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar3VermelhoVerdadeiro = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 3: vermelho ser verdadeiro")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere3VermelhoSerVerdadeiro.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar4VermelhoVerdadeiro = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 4: vermelho ser verdadeiro")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere4VermelhoSerVerdadeiro.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





Blockly.Blocks.esperar1SerVerdadeiro = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 1 ser Verdadeiro")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere1SerVerdadeiro.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar2SerVerdadeiro = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 2 ser verdadeiro")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere2SerVerdadeiro.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar3SerVerdadeiro = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 3 ser verdadeiro")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere3SerVerdadeiro.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.esperar4SerVerdadeiro = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Esperar 4 ser verdadeiro")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/espere4SerVerdadeiro.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se1VermelhoPule = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Se 1: vermelho pule")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/se1VermelhoPule.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se2VermelhoPule = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Se 2: vermelho pule")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/se2VermelhoPule.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se3VermelhoPule = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Se 3: vermelho pule")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/se3VermelhoPule.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se4VermelhoPule = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Se 4: vermelho pule")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/se4VermelhoPule.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se1ForVerdadeiroPuleL = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Se 1 for verdadeiro: pule L")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/se1ForVerdadeiro.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se2ForVerdadeiroPuleL = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Se 2 for verdadeiro: pule L")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/se2ForVerdadeiro.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se3ForVerdadeiroPuleL = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Se 3 for verdadeiro: pule L")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/se3ForVerdadeiro.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se4ForVerdadeiroPuleL = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Se 4 for verdadeiro: pule L")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/se4ForVerdadeiro.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se1ForFalsoPuleL = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Se 1 for Falso: pule L")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/se1ForFalso.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se2ForFalsoPuleL = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Se 2 for Falso: pule L")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/se2ForFalso.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se3ForFalsoPuleL = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Se 3 for Falso: pule L")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/se3ForFalso.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.se4ForFalsoPuleL = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Se 4 for Falso: pule L")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/se4ForFalso.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Cartões cinza



//Original
/*
Blockly.Blocks.velocidadeA = {
  init: function() {
    this.appendDummyInput()
        .appendField("Velocidade A")
        
        .appendField(new Blockly.FieldImage("../../media/keyesAll/velocidadeABC.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.velocidadeB = {
  init: function() {
    this.appendDummyInput()
        .appendField("Velocidade B")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/velocidadeABC.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.velocidadeC = {
  init: function() {
    this.appendDummyInput()
        .appendField("Velocidade C")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/velocidadeABC.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.brilhoDaTela = {
  init: function() {
    this.appendDummyInput()
        .appendField("Brilho da tela")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "NAME")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/brilhoDaTela.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
*/
//Modificado
Blockly.Blocks.velocidadeA = {
  init: function() {
  this.appendDummyInput()
  .appendField("Velocidade A")
  .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "potencia")
  .appendField(new Blockly.FieldImage("../../media/keyesAll/velocidadeABC.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour("#5f6166");
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks.velocidadeB = {
  init: function() {
  this.appendDummyInput()
  .appendField("Velocidade B")
  .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "potencia")
  .appendField(new Blockly.FieldImage("../../media/keyesAll/velocidadeABC.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour("#5f6166");
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks.velocidadeC = {
  init: function() {
  this.appendDummyInput()
  .appendField("Velocidade C")
  .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "potencia")
  .appendField(new Blockly.FieldImage("../../media/keyesAll/velocidadeABC.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour("#5f6166");
this.setTooltip("");
this.setHelpUrl("");
}
};




Blockly.Blocks.sensibilidade1 = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sensibilidade 1")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["200","200"], ["250","250"], ["350","350"], ["450","450"], ["550","550"], ["650","650"], ["750","750"], ["850","8850"], ["950","950"], ["1000","1000"]]), "sensibilidade")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/sensibilidade123.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5f6166");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.sensibilidade2 = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sensibilidade 2")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["200","200"], ["250","250"], ["350","350"], ["450","450"], ["550","550"], ["650","650"], ["750","750"], ["850","8850"], ["950","950"], ["1000","1000"]]), "sensibilidade")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/sensibilidade123.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5f6166");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.sensibilidade3 = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sensibilidade 3")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["200","200"], ["250","250"], ["350","350"], ["450","450"], ["550","550"], ["650","650"], ["750","750"], ["850","8850"], ["950","950"], ["1000","1000"]]), "sensibilidade")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/sensibilidade123.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5f6166");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*

Blockly.Blocks.idno = {
  init: function() {
    this.appendDummyInput()
        .appendField("ID NO")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/IDNO.png", 60, 60, { alt: "*", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5f6166");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//===========================================================================================================================


Blockly.Blocks.motorA_on_L= {
  init: function() {
    this.appendDummyInput()
        .appendField("Controle do Motor:")
        .appendField(new Blockly.FieldDropdown([["M1","0"], ["M2","1"], ["M3","2"], ["M3","3"]]), "porta")
        .appendField("velocidade:")
        //.appendField(new Blockly.FieldNumber(50, 0, 100), "velocidade");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
*/

Blockly.Blocks.motorA_Mais= {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar o motor A+")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/M1MENOS.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks.motorA_Menos= {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar o motor A-")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/M1MENOS.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motorB_Mais= {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar o motor B+")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/M1MENOS.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks.motorB_Menos= {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar o motor B-")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/M1MENOS.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motorC_Mais= {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar o motor C+")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/M1MENOS.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks.motorC_Menos= {
  init: function() {
    this.appendDummyInput()
        .appendField("Ligar o motor C-")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/M1MENOS.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};




//Timer
Blockly.Blocks.delay05= {
  init: function() {
    this.appendDummyInput()
        .appendField("Aguarde 0.5s")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/timer05.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFE100");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//Timer
Blockly.Blocks.motorD_on_u= {
  init: function() {
    this.appendDummyInput()
        .appendField("Inicialização");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks.delay1= {
  init: function() {
    this.appendDummyInput()
        .appendField("Aguarde 1s")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/timer1.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFE100");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.delay3= {
  init: function() {
    this.appendDummyInput()
        .appendField("Aguarde 3s")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/timer3.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFE100");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.delay10= {
  init: function() {
    this.appendDummyInput()
        .appendField("Aguarde 10s")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/timer10.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFE100");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.delaystop= {
  init: function() {
    this.appendDummyInput()
        .appendField("Pare  ")
      //  .appendField(new Blockly.FieldNumber(1, 0), "timer")
      //  .appendField("s     ")
        .appendField(new Blockly.FieldImage("../../media/keyesAll/timerStop.png", 60, 60, { alt: "*", flipRtl: "FALSE" }))
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFE100");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


///////////////////////////front////////////////
Blockly.Blocks.FRONT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_forward)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 60, 60))
    .appendField(Blockly.Desk_left);
    this.appendValueInput("speed_F", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.Desk_right);
    this.appendValueInput("speed_F2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////back////////////////
Blockly.Blocks.BACK = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_backward)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 60, 60))
    .appendField(Blockly.Desk_left);
    this.appendValueInput("speed_B", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.Desk_right);
    this.appendValueInput("speed_B2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////left////////////////
Blockly.Blocks.LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_left)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 60, 60))
    .appendField(Blockly.Desk_left);
    this.appendValueInput("speed_L", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.Desk_right);
    this.appendValueInput("speed_L2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////turn_left////////////////
Blockly.Blocks.TURN_LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_turn_left)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 60, 60));
    
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////right////////////////
Blockly.Blocks.RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_right)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 60, 60))
    .appendField(Blockly.Desk_left);
    this.appendValueInput("speed_R", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.Desk_right);
    this.appendValueInput("speed_R2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////turn_right////////////////
Blockly.Blocks.TURN_RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_turn_right)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 60, 60));
    
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


////////////////////////////stop////////////////
Blockly.Blocks.STOP = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_stop)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 60, 60))
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

///////////避障传感器////////////////////
Blockly.Blocks.desk_avoid = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Desk_L_ir_a, "left"],[Blockly.Desk_R_ir_a, "right"]]), 'avoid02');
    this.appendDummyInput("")
    //.appendField("avoid")
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_ir_avoid.png", 43, 32));
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////////超声波/////////////////////////
Blockly.Blocks.desk_sr04 = {
  init: function () {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.Desk_sr01)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_sr01.png", 50, 40));
    
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};

///////////循迹传感器////////////////////
Blockly.Blocks.desk_track = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Desk_L_track, "track_left"],[Blockly.Desk_C_track, "track_center"],[Blockly.Desk_R_track, "track_right"]]), 'track');
    this.appendDummyInput("")
    //.appendField("track")
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_track.png", 60, 60));
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

//////////////////蜂鸣器//////////////////
var TONE_NOTES=[["NOTE_C3", "131"],["NOTE_D3", "147"],["NOTE_E3", "165"],["NOTE_F3", "175"],["NOTE_G3", "196"],["NOTE_A3", "220"],["NOTE_B3", "247"],
           ["NOTE_C4", "262"],["NOTE_D4", "294"],["NOTE_E4", "330"],["NOTE_F4", "349"],["NOTE_G4", "392"],["NOTE_A4", "440"],["NOTE_B4", "494"],
           ["NOTE_C5", "532"],["NOTE_D5", "587"],["NOTE_E5", "659"],["NOTE_F5", "698"],["NOTE_G5", "784"],["NOTE_A5", "880"],["NOTE_B5", "988"]];


Blockly.Blocks.tone_notes = {
   init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.desk_buzzer={
init:function(){
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.Desk_buzzer)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_buzzer.png", 70, 32));
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Desk_fre);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
  }
};


///////////music////////////////////
Blockly.Blocks.desk_music = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Desk_play_music)
        .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_buzzer.png", 70, 32));
    this.appendDummyInput("")
        //.appendField(new Blockly.FieldDropdown([["Birthday", "Birthday"],["City of Sky", "City of Sky"],["Ode to Joy", "Ode to Joy"]]), 'play');
        .appendField(new Blockly.FieldDropdown([
            [Blockly.ks_Ode_to_joy, "Ode to Joy"],
            [Blockly.ks_birthday, "Birthday"],
            [Blockly.ks_tetris, "tetris"],
            [Blockly.ks_star_war, "star_war"],
            [Blockly.ks_super_mario, "super_mario"],
            [Blockly.ks_christmas, "christmas"]
            ]), 'play');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

////////////////////关闭蜂鸣器////////////////////////
Blockly.Blocks.desk_notone={
init:function(){
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Desk_notone)
        .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_buzzer.png", 70, 32));
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

////////////////红外接收////////////////////////////
//红外接收模块
Blockly.Blocks.desk_ir_r = {
    init: function () {
        this.setColour(Blockly.Blocks.desktop_car.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('ir_rec'), 'VAR')
            .appendField(Blockly.Desk_ir_R)
            .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_irr.png", 70, 32));
        this.appendStatementInput('DO')
            .appendField(Blockly.Desk_ir_RD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

//////////////////////蓝牙////////////////////////////
Blockly.Blocks.desk_bluetooth = {
    init: function () {
        this.setColour(Blockly.Blocks.desktop_car.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('bluetooth_val'), 'VAL')
            .appendField(Blockly.Desk_Bluetooth)
            .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_bluetooth4.0.png", 70, 32))
        this.appendStatementInput('DO')
            .appendField(Blockly.Desk_Bluetooth_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};


