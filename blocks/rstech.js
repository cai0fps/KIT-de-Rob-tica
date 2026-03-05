'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');


Blockly.Blocks.loops.HUE = "#FFAB19";

Blockly.Blocks.loops.HUE_CONTR = "#3ea8ff";
Blockly.Blocks.loops.HUE_CRTL = "#F5B041";
Blockly.Blocks.loops.HUE_LCD = "#91114d";
Blockly.Blocks.loops.HUE_MOTOR = "#708090";
Blockly.Blocks.loops.HUE_SENSOR = "#4CBFE6";
Blockly.Blocks.loops.HUE_ADPTADORA = "#8d5e35";
Blockly.Blocks.loops.APPDABLE_ = "##27F383";
Blockly.Blocks.loops.SENSOR_PRETO = "#000000";
Blockly.Blocks.loops.SENSOR_AZUL = "#4CBFE6";

var DRAWFIll_ = [
  ["Preenchido", "fill"],
  ["Contorno", "draw"]

];

var sensorColor = [
  ["COR", "LIDO"],
  ["REFLETIVO", "REFLETIVO"]
];

var CIRCLEOPTELECT_ = [
  [Blockly.OLED_WHOLE_CICILE, "U8G2_DRAW_ALL"],
  [Blockly.OLED_UP_R, "U8G2_DRAW_UPPER_RIGHT"],
  [Blockly.OLED_UP_L, "U8G2_DRAW_UPPER_LEFT"],
  [Blockly.OLED_LOW_R, "U8G2_DRAW_LOWER_RIGHT"],
  [Blockly.OLED_LOW_L, "U8G2_DRAW_LOWER_LEFT"]
];

var ICON_IMAGE_ = [
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/64.png', 'width': 24, 'height': 24, 'alt': '64' }, '64'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/65.png', 'width': 24, 'height': 24, 'alt': '65' }, '65'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/66.png', 'width': 24, 'height': 24, 'alt': '66' }, '66'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/67.png', 'width': 24, 'height': 24, 'alt': '67' }, '67'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/68.png', 'width': 24, 'height': 24, 'alt': '68' }, '68'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/69.png', 'width': 24, 'height': 24, 'alt': '69' }, '69'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/70.png', 'width': 24, 'height': 24, 'alt': '70' }, '70'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/71.png', 'width': 24, 'height': 24, 'alt': '71' }, '71'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/72.png', 'width': 24, 'height': 24, 'alt': '72' }, '72'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/73.png', 'width': 24, 'height': 24, 'alt': '73' }, '73'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/74.png', 'width': 24, 'height': 24, 'alt': '74' }, '74'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/75.png', 'width': 24, 'height': 24, 'alt': '75' }, '75'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/76.png', 'width': 24, 'height': 24, 'alt': '76' }, '76'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/77.png', 'width': 24, 'height': 24, 'alt': '77' }, '77'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/78.png', 'width': 24, 'height': 24, 'alt': '78' }, '78'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/79.png', 'width': 24, 'height': 24, 'alt': '79' }, '79'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/80.png', 'width': 24, 'height': 24, 'alt': '80' }, '80'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/81.png', 'width': 24, 'height': 24, 'alt': '81' }, '81'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/82.png', 'width': 24, 'height': 24, 'alt': '82' }, '82'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/83.png', 'width': 24, 'height': 24, 'alt': '83' }, '83'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/84.png', 'width': 24, 'height': 24, 'alt': '84' }, '84'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/85.png', 'width': 24, 'height': 24, 'alt': '85' }, '85'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/86.png', 'width': 24, 'height': 24, 'alt': '86' }, '86'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/87.png', 'width': 24, 'height': 24, 'alt': '87' }, '87'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/88.png', 'width': 24, 'height': 24, 'alt': '88' }, '88'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/89.png', 'width': 24, 'height': 24, 'alt': '89' }, '89'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/90.png', 'width': 24, 'height': 24, 'alt': '90' }, '90'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/91.png', 'width': 24, 'height': 24, 'alt': '91' }, '91'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/92.png', 'width': 24, 'height': 24, 'alt': '92' }, '92'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/93.png', 'width': 24, 'height': 24, 'alt': '93' }, '93'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/94.png', 'width': 24, 'height': 24, 'alt': '94' }, '94'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/95.png', 'width': 24, 'height': 24, 'alt': '95' }, '95'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/96.png', 'width': 24, 'height': 24, 'alt': '96' }, '96'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/97.png', 'width': 24, 'height': 24, 'alt': '97' }, '97'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/98.png', 'width': 24, 'height': 24, 'alt': '98' }, '98'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/99.png', 'width': 24, 'height': 24, 'alt': '99' }, '99'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/100.png', 'width': 24, 'height': 24, 'alt': '100' }, '100'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/101.png', 'width': 24, 'height': 24, 'alt': '101' }, '101'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/102.png', 'width': 24, 'height': 24, 'alt': '102' }, '102'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/103.png', 'width': 24, 'height': 24, 'alt': '103' }, '103'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/104.png', 'width': 24, 'height': 24, 'alt': '104' }, '104'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/105.png', 'width': 24, 'height': 24, 'alt': '105' }, '105'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/106.png', 'width': 24, 'height': 24, 'alt': '106' }, '106'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/107.png', 'width': 24, 'height': 24, 'alt': '107' }, '107'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/108.png', 'width': 24, 'height': 24, 'alt': '108' }, '108'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/109.png', 'width': 24, 'height': 24, 'alt': '109' }, '109'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/110.png', 'width': 24, 'height': 24, 'alt': '110' }, '110'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/111.png', 'width': 24, 'height': 24, 'alt': '111' }, '111'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/112.png', 'width': 24, 'height': 24, 'alt': '112' }, '112'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/113.png', 'width': 24, 'height': 24, 'alt': '113' }, '113'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/114.png', 'width': 24, 'height': 24, 'alt': '114' }, '114'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/115.png', 'width': 24, 'height': 24, 'alt': '115' }, '115'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/116.png', 'width': 24, 'height': 24, 'alt': '116' }, '116'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/117.png', 'width': 24, 'height': 24, 'alt': '117' }, '117'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/118.png', 'width': 24, 'height': 24, 'alt': '118' }, '118'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/119.png', 'width': 24, 'height': 24, 'alt': '119' }, '119'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/120.png', 'width': 24, 'height': 24, 'alt': '120' }, '120'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/121.png', 'width': 24, 'height': 24, 'alt': '121' }, '121'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/122.png', 'width': 24, 'height': 24, 'alt': '122' }, '122'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/123.png', 'width': 24, 'height': 24, 'alt': '123' }, '123'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/124.png', 'width': 24, 'height': 24, 'alt': '124' }, '124'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/125.png', 'width': 24, 'height': 24, 'alt': '125' }, '125'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/126.png', 'width': 24, 'height': 24, 'alt': '126' }, '126'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/127.png', 'width': 24, 'height': 24, 'alt': '127' }, '127'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/128.png', 'width': 24, 'height': 24, 'alt': '128' }, '128'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/129.png', 'width': 24, 'height': 24, 'alt': '129' }, '129'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/130.png', 'width': 24, 'height': 24, 'alt': '130' }, '130'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/131.png', 'width': 24, 'height': 24, 'alt': '131' }, '131'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/132.png', 'width': 24, 'height': 24, 'alt': '132' }, '132'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/133.png', 'width': 24, 'height': 24, 'alt': '133' }, '133'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/134.png', 'width': 24, 'height': 24, 'alt': '134' }, '134'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/135.png', 'width': 24, 'height': 24, 'alt': '135' }, '135'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/136.png', 'width': 24, 'height': 24, 'alt': '136' }, '136'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/137.png', 'width': 24, 'height': 24, 'alt': '137' }, '137'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/138.png', 'width': 24, 'height': 24, 'alt': '138' }, '138'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/139.png', 'width': 24, 'height': 24, 'alt': '139' }, '139'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/140.png', 'width': 24, 'height': 24, 'alt': '140' }, '140'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/141.png', 'width': 24, 'height': 24, 'alt': '141' }, '141'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/142.png', 'width': 24, 'height': 24, 'alt': '142' }, '142'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/143.png', 'width': 24, 'height': 24, 'alt': '143' }, '143'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/144.png', 'width': 24, 'height': 24, 'alt': '144' }, '144'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/145.png', 'width': 24, 'height': 24, 'alt': '145' }, '145'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/146.png', 'width': 24, 'height': 24, 'alt': '146' }, '146'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/147.png', 'width': 24, 'height': 24, 'alt': '147' }, '147'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/148.png', 'width': 24, 'height': 24, 'alt': '148' }, '148'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/149.png', 'width': 24, 'height': 24, 'alt': '149' }, '149'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/150.png', 'width': 24, 'height': 24, 'alt': '150' }, '150'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/151.png', 'width': 24, 'height': 24, 'alt': '151' }, '151'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/152.png', 'width': 24, 'height': 24, 'alt': '152' }, '152'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/153.png', 'width': 24, 'height': 24, 'alt': '153' }, '153'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/154.png', 'width': 24, 'height': 24, 'alt': '154' }, '154'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/155.png', 'width': 24, 'height': 24, 'alt': '155' }, '155'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/156.png', 'width': 24, 'height': 24, 'alt': '156' }, '156'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/157.png', 'width': 24, 'height': 24, 'alt': '157' }, '157'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/158.png', 'width': 24, 'height': 24, 'alt': '158' }, '158'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/159.png', 'width': 24, 'height': 24, 'alt': '159' }, '159'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/160.png', 'width': 24, 'height': 24, 'alt': '160' }, '160'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/161.png', 'width': 24, 'height': 24, 'alt': '161' }, '161'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/162.png', 'width': 24, 'height': 24, 'alt': '162' }, '162'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/163.png', 'width': 24, 'height': 24, 'alt': '163' }, '163'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/164.png', 'width': 24, 'height': 24, 'alt': '164' }, '164'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/165.png', 'width': 24, 'height': 24, 'alt': '165' }, '165'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/166.png', 'width': 24, 'height': 24, 'alt': '166' }, '166'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/167.png', 'width': 24, 'height': 24, 'alt': '167' }, '167'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/168.png', 'width': 24, 'height': 24, 'alt': '168' }, '168'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/169.png', 'width': 24, 'height': 24, 'alt': '169' }, '169'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/170.png', 'width': 24, 'height': 24, 'alt': '170' }, '170'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/171.png', 'width': 24, 'height': 24, 'alt': '171' }, '171'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/172.png', 'width': 24, 'height': 24, 'alt': '172' }, '172'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/173.png', 'width': 24, 'height': 24, 'alt': '173' }, '173'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/174.png', 'width': 24, 'height': 24, 'alt': '174' }, '174'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/175.png', 'width': 24, 'height': 24, 'alt': '175' }, '175'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/176.png', 'width': 24, 'height': 24, 'alt': '176' }, '176'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/177.png', 'width': 24, 'height': 24, 'alt': '177' }, '177'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/178.png', 'width': 24, 'height': 24, 'alt': '178' }, '178'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/179.png', 'width': 24, 'height': 24, 'alt': '179' }, '179'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/180.png', 'width': 24, 'height': 24, 'alt': '180' }, '180'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/181.png', 'width': 24, 'height': 24, 'alt': '181' }, '181'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/182.png', 'width': 24, 'height': 24, 'alt': '182' }, '182'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/183.png', 'width': 24, 'height': 24, 'alt': '183' }, '183'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/184.png', 'width': 24, 'height': 24, 'alt': '184' }, '184'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/185.png', 'width': 24, 'height': 24, 'alt': '185' }, '185'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/186.png', 'width': 24, 'height': 24, 'alt': '186' }, '186'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/187.png', 'width': 24, 'height': 24, 'alt': '187' }, '187'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/188.png', 'width': 24, 'height': 24, 'alt': '188' }, '188'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/189.png', 'width': 24, 'height': 24, 'alt': '189' }, '189'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/190.png', 'width': 24, 'height': 24, 'alt': '190' }, '190'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/191.png', 'width': 24, 'height': 24, 'alt': '191' }, '191'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/192.png', 'width': 24, 'height': 24, 'alt': '192' }, '192'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/193.png', 'width': 24, 'height': 24, 'alt': '193' }, '193'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/194.png', 'width': 24, 'height': 24, 'alt': '194' }, '194'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/195.png', 'width': 24, 'height': 24, 'alt': '195' }, '195'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/196.png', 'width': 24, 'height': 24, 'alt': '196' }, '196'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/197.png', 'width': 24, 'height': 24, 'alt': '197' }, '197'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/198.png', 'width': 24, 'height': 24, 'alt': '198' }, '198'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/199.png', 'width': 24, 'height': 24, 'alt': '199' }, '199'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/200.png', 'width': 24, 'height': 24, 'alt': '200' }, '200'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/201.png', 'width': 24, 'height': 24, 'alt': '201' }, '201'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/202.png', 'width': 24, 'height': 24, 'alt': '202' }, '202'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/203.png', 'width': 24, 'height': 24, 'alt': '203' }, '203'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/204.png', 'width': 24, 'height': 24, 'alt': '204' }, '204'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/205.png', 'width': 24, 'height': 24, 'alt': '205' }, '205'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/206.png', 'width': 24, 'height': 24, 'alt': '206' }, '206'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/207.png', 'width': 24, 'height': 24, 'alt': '207' }, '207'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/208.png', 'width': 24, 'height': 24, 'alt': '208' }, '208'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/209.png', 'width': 24, 'height': 24, 'alt': '209' }, '209'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/210.png', 'width': 24, 'height': 24, 'alt': '210' }, '210'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/211.png', 'width': 24, 'height': 24, 'alt': '211' }, '211'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/212.png', 'width': 24, 'height': 24, 'alt': '212' }, '212'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/213.png', 'width': 24, 'height': 24, 'alt': '213' }, '213'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/214.png', 'width': 24, 'height': 24, 'alt': '214' }, '214'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/215.png', 'width': 24, 'height': 24, 'alt': '215' }, '215'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/216.png', 'width': 24, 'height': 24, 'alt': '216' }, '216'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/217.png', 'width': 24, 'height': 24, 'alt': '217' }, '217'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/218.png', 'width': 24, 'height': 24, 'alt': '218' }, '218'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/219.png', 'width': 24, 'height': 24, 'alt': '219' }, '219'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/220.png', 'width': 24, 'height': 24, 'alt': '220' }, '220'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/221.png', 'width': 24, 'height': 24, 'alt': '221' }, '221'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/222.png', 'width': 24, 'height': 24, 'alt': '222' }, '222'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/223.png', 'width': 24, 'height': 24, 'alt': '223' }, '223'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/224.png', 'width': 24, 'height': 24, 'alt': '224' }, '224'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/225.png', 'width': 24, 'height': 24, 'alt': '225' }, '225'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/226.png', 'width': 24, 'height': 24, 'alt': '226' }, '226'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/227.png', 'width': 24, 'height': 24, 'alt': '227' }, '227'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/228.png', 'width': 24, 'height': 24, 'alt': '228' }, '228'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/229.png', 'width': 24, 'height': 24, 'alt': '229' }, '229'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/230.png', 'width': 24, 'height': 24, 'alt': '230' }, '230'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/231.png', 'width': 24, 'height': 24, 'alt': '231' }, '231'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/232.png', 'width': 24, 'height': 24, 'alt': '232' }, '232'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/233.png', 'width': 24, 'height': 24, 'alt': '233' }, '233'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/234.png', 'width': 24, 'height': 24, 'alt': '234' }, '234'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/235.png', 'width': 24, 'height': 24, 'alt': '235' }, '235'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/236.png', 'width': 24, 'height': 24, 'alt': '236' }, '236'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/237.png', 'width': 24, 'height': 24, 'alt': '237' }, '237'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/238.png', 'width': 24, 'height': 24, 'alt': '238' }, '238'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/239.png', 'width': 24, 'height': 24, 'alt': '239' }, '239'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/240.png', 'width': 24, 'height': 24, 'alt': '240' }, '240'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/241.png', 'width': 24, 'height': 24, 'alt': '241' }, '241'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/242.png', 'width': 24, 'height': 24, 'alt': '242' }, '242'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/243.png', 'width': 24, 'height': 24, 'alt': '243' }, '243'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/244.png', 'width': 24, 'height': 24, 'alt': '244' }, '244'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/245.png', 'width': 24, 'height': 24, 'alt': '245' }, '245'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/246.png', 'width': 24, 'height': 24, 'alt': '246' }, '246'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/247.png', 'width': 24, 'height': 24, 'alt': '247' }, '247'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/248.png', 'width': 24, 'height': 24, 'alt': '248' }, '248'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/249.png', 'width': 24, 'height': 24, 'alt': '249' }, '249'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/250.png', 'width': 24, 'height': 24, 'alt': '250' }, '250'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/251.png', 'width': 24, 'height': 24, 'alt': '251' }, '251'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/252.png', 'width': 24, 'height': 24, 'alt': '252' }, '252'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/253.png', 'width': 24, 'height': 24, 'alt': '253' }, '253'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/254.png', 'width': 24, 'height': 24, 'alt': '254' }, '254'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/255.png', 'width': 24, 'height': 24, 'alt': '255' }, '255'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/256.png', 'width': 24, 'height': 24, 'alt': '256' }, '256'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/257.png', 'width': 24, 'height': 24, 'alt': '257' }, '257'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/258.png', 'width': 24, 'height': 24, 'alt': '258' }, '258'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/259.png', 'width': 24, 'height': 24, 'alt': '259' }, '259'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/260.png', 'width': 24, 'height': 24, 'alt': '260' }, '260'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/261.png', 'width': 24, 'height': 24, 'alt': '261' }, '261'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/262.png', 'width': 24, 'height': 24, 'alt': '262' }, '262'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/263.png', 'width': 24, 'height': 24, 'alt': '263' }, '263'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/264.png', 'width': 24, 'height': 24, 'alt': '264' }, '264'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/265.png', 'width': 24, 'height': 24, 'alt': '265' }, '265'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/266.png', 'width': 24, 'height': 24, 'alt': '266' }, '266'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/267.png', 'width': 24, 'height': 24, 'alt': '267' }, '267'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/268.png', 'width': 24, 'height': 24, 'alt': '268' }, '268'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/269.png', 'width': 24, 'height': 24, 'alt': '269' }, '269'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/270.png', 'width': 24, 'height': 24, 'alt': '270' }, '270'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/271.png', 'width': 24, 'height': 24, 'alt': '271' }, '271'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/272.png', 'width': 24, 'height': 24, 'alt': '272' }, '272'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/273.png', 'width': 24, 'height': 24, 'alt': '273' }, '273'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/274.png', 'width': 24, 'height': 24, 'alt': '274' }, '274'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/275.png', 'width': 24, 'height': 24, 'alt': '275' }, '275'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/276.png', 'width': 24, 'height': 24, 'alt': '276' }, '276'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/277.png', 'width': 24, 'height': 24, 'alt': '277' }, '277'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/278.png', 'width': 24, 'height': 24, 'alt': '278' }, '278'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/279.png', 'width': 24, 'height': 24, 'alt': '279' }, '279'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/280.png', 'width': 24, 'height': 24, 'alt': '280' }, '280'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/281.png', 'width': 24, 'height': 24, 'alt': '281' }, '281'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/282.png', 'width': 24, 'height': 24, 'alt': '282' }, '282'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/283.png', 'width': 24, 'height': 24, 'alt': '283' }, '283'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/284.png', 'width': 24, 'height': 24, 'alt': '284' }, '284'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/285.png', 'width': 24, 'height': 24, 'alt': '285' }, '285'],
  [{ 'src': '../../ThirdParty/arduino_Cittius/common/media/oled_icons/286.png', 'width': 24, 'height': 24, 'alt': '286' }, '286']
];


var ICON_SIZE_ = [
  ["8", "1"],
  ["16", "2"],
  ["32", "4"],
  ["48", "6"],
  ["64", "8"],
];

Blockly.Blocks['Setup_Cittius'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Controladora");
    this.appendStatementInput("setup")
      .appendField("Inicializar")
      .setCheck(null);
    this.appendStatementInput("loop")
      .appendField("Sempre")
      .setCheck(null);
    this.setColour(Blockly.Blocks.loops.HUE_CONTR);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_SCOOP);
  }
};

Blockly.Blocks['SCoop_sleep_ED'] = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_CRTL);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/time01.png", 30, 30, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Execute o bloco acima por");
    this.appendValueInput("sleeplength", Number)
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("s");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_SCOOP_SLEEP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/03.Control.html#scoop-task");
  }
};

Blockly.Blocks.controls_for_ED = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_CRTL);
    this.appendDummyInput()
      .appendField(`Repita`)
    //.appendField(new Blockly.FieldTextInput('i'), 'VAR');
    // this.appendValueInput('FROM')
    //.setCheck(Number)
    //.setAlign(Blockly.ALIGN_RIGHT)
    // .appendField(Blockly.LANG_CONTROLS_FOR_INPUT_FROM);
    this.appendValueInput('TO')
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
    this.appendDummyInput()
      .appendField(`vezes`);
    //.appendField(Blockly.LANG_CONTROLS_FOR_INPUT_TO);
    //this.appendValueInput('STEP')
    //.setCheck(Number)
    //.setAlign(Blockly.ALIGN_RIGHT)

    this.appendStatementInput('DO')
      .appendField('Faça');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/03.Control.html#id2");
    var thisBlock = this;
    this.setTooltip(function () {
      return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace('%1',
        thisBlock.getFieldValue('VAR'));
    });
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

Blockly.Blocks['controls_if_ED'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function () {
    //this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColour("#F5B041");
    this.appendValueInput('IF0')
      .setCheck([Boolean, Number])
      .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendStatementInput('DO0')
      .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/03.Control.html#if");
    this.setMutator(new Blockly.Mutator(['controls_if_elseif',
      'controls_if_else']));
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
      } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
      } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
      } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  },
  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function () {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) {
      container.setAttribute('else', 1);
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function (xmlElement) {
    var containerBlock = this;
    var valueConnections = [];
    var statementConnections = [];
    var elseStatementConnection = null;
    if (this.elseCount_) {
      if (containerBlock.getInputTargetBlock('ELSE') && containerBlock.getInputTargetBlock('ELSE').previousConnection)
        elseStatementConnection = containerBlock.getInputTargetBlock('ELSE').previousConnection;
      this.removeInput('ELSE');
    }
    for (var i = this.elseifCount_; i > 0; i--) {
      if (containerBlock.getInputTargetBlock('IF' + i) && containerBlock.getInputTargetBlock('IF' + i).previousConnection)
        valueConnections[i] = (containerBlock.getInputTargetBlock('IF' + i).previousConnection);
      else
        valueConnections[i] = null;
      this.removeInput('IF' + i);
      if (containerBlock.getInputTargetBlock('DO' + i) && containerBlock.getInputTargetBlock('DO' + i).previousConnection)
        statementConnections[i] = (containerBlock.getInputTargetBlock('DO' + i).previousConnection);
      else
        statementConnections[i] = null;
      this.removeInput('DO' + i);
    }
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10);
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10);
    //this.compose(containerBlock);
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i)
        .setCheck([Boolean, Number])
        .appendField("Compactando o protocolo de envio");
      //  this.appendStatementInput('DO' + i)
      //  .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    }
    if (this.elseCount_) {
      //  this.appendStatementInput('ELSE')
      // .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
    }
    for (var i = valueConnections.length - 2; i > 0; i--) {
      if (valueConnections[i])
        Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
    }
    for (var i = statementConnections.length - 2; i > 0; i--) {
      if (statementConnections[i])
        Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('controls_if_if');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = workspace.newBlock('controls_if_elseif');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = workspace.newBlock('controls_if_else');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function (containerBlock) {
    // Disconnect the else input blocks and remove the inputs.
    if (this.elseCount_) {
      this.removeInput('ELSE');
    }
    this.elseCount_ = 0;
    // Disconnect all the elseif input blocks and remove the inputs.
    for (var i = this.elseifCount_; i > 0; i--) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
    }
    this.elseifCount_ = 0;
    // Rebuild the block's optional inputs.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        case 'controls_if_else':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statementConnection_;
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
        clauseBlock.nextConnection.targetBlock();
    }

    this.updateShape_();
    // Reconnect any child blocks.
    this.reconnectChildBlocks_(valueConnections, statementConnections, elseStatementConnection);

  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function (containerBlock) {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
            inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
            inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'controls_if_else':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
            inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
        clauseBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Reconstructs the block with all child blocks attached.
   */
  rebuildShape_: function () {
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;

    if (this.getInput('ELSE')) {
      elseStatementConnection = this.getInput('ELSE').connection.targetConnection;
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      var inputIf = this.getInput('IF' + i);
      var inputDo = this.getInput('DO' + i);
      console.log(inputIf.connection.targetConnection);
      valueConnections.push(inputIf.connection.targetConnection);
      statementConnections.push(inputDo.connection.targetConnection);
      i++;
    }
    this.updateShape_();
    this.reconnectChildBlocks_(valueConnections, statementConnections, elseStatementConnection);
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @this Blockly.Block
   * @private
   */
  updateShape_: function () {
    // Delete everything.
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE');
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
      i++;
    }
    // Rebuild block.
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i)
        .setCheck([Number, Boolean])
        .appendField("OLAAA");
      //   this.appendStatementInput('DO' + i)
      //  .appendField(Blockly.Msg['CONTROLS_IF_MSG_THEN']);
    }
    if (this.elseCount_) {
      //    this.appendStatementInput('ELSE')
      //    .appendField("123");
    }
  },
  /**
   * Reconnects child blocks.
   * @param {!Array<?Blockly.RenderedConnection>} valueConnections List of value
   * connectsions for if input.
   * @param {!Array<?Blockly.RenderedConnection>} statementConnections List of
   * statement connections for do input.
   * @param {?Blockly.RenderedConnection} elseStatementConnection Statement
   * connection for else input.
   */
  reconnectChildBlocks_: function (valueConnections, statementConnections,
    elseStatementConnection) {
    for (var i = 1; i <= this.elseifCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
      Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
    Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
  }
};

Blockly.Blocks['controls_switch_case_ED'] = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_CRTL);
    this.appendValueInput('IF0')
      .setCheck([Number, Boolean])
      .appendField('switch');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/03.Control.html#switch");
    this.setMutator(new Blockly.Mutator(['controls_case',
      'controls_default']));
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  },
  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function () {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) {
      container.setAttribute('else', 1);
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function (xmlElement) {
    this.compose(this);
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10);
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10);
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i)
        .setCheck([Number, Boolean])
        .appendField('case');
      this.appendStatementInput('DO' + i)
        .appendField('');
    }
    if (this.elseCount_) {
      this.appendStatementInput('ELSE')
        .appendField('default');
    }
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function (workspace) {
    var containerBlock = Blockly.Block.obtain(workspace, 'controls_switch');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = Blockly.Block.obtain(workspace, 'controls_case');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = Blockly.Block.obtain(workspace, 'controls_default');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function (containerBlock) {
    //  console.log(arguments.callee.caller.name);
    // Disconnect the else input blocks and remove the inputs.
    if (this.elseCount_) {
      this.removeInput('ELSE');
    }
    this.elseCount_ = 0;
    // Disconnect all the elseif input blocks and remove the inputs.
    for (var i = this.elseifCount_; i > 0; i--) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
    }
    this.elseifCount_ = 0;
    // Rebuild the block's optional inputs.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_case':
          this.elseifCount_++;
          var ifInput = this.appendValueInput('IF' + this.elseifCount_)
            .setCheck([Number, Boolean])
            .appendField('case');
          var doInput = this.appendStatementInput('DO' + this.elseifCount_);
          doInput.appendField('');
          // Reconnect any child blocks.
          if (clauseBlock.valueConnection_) {
            ifInput.connection.connect(clauseBlock.valueConnection_);
          }
          if (clauseBlock.statementConnection_) {
            doInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        case 'controls_default':
          this.elseCount_++;
          var elseInput = this.appendStatementInput('ELSE');
          elseInput.appendField('default');
          // Reconnect any child blocks.
          if (clauseBlock.statementConnection_) {
            elseInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
        clauseBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function (containerBlock) {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_case':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
            inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
            inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'controls_default':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
            inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
        clauseBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Blocks.espereAteQue = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_CRTL);
    this.appendValueInput("STAT")
      .appendField("esperar até")
      .setCheck([Number, Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id2");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '数字输出']
      }
    };
  }
};


Blockly.Blocks.TFT_fillScreen_ED = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Cor de Fundo:");
    this.appendDummyInput("")
      .appendField("");
    this.appendValueInput("COLOR", Number)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.tft_drawPixel_ED = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Pintar um ponto");
    this.appendValueInput("POS_X", Number)
      .appendField("X:")
      .setCheck(Number);
    this.appendValueInput("POS_Y", Number)
      .appendField("Y:")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("Cor:");
    this.appendValueInput("COLOR", Number)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DRAW_PIXE_TOOLTIP);
  }
};

//显示-TFT-画线
Blockly.Blocks.tft_drawLine_ED = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Desenhar LINHA");
    this.appendValueInput("START_X", Number)
      .appendField("X Inicial:")
      .setCheck(Number);
    this.appendValueInput("START_Y", Number)
      .appendField("Y Inicial:")
      .setCheck(Number);
    this.appendValueInput("END_X", Number)
      .appendField("X Final:")
      .setCheck(Number);
    this.appendValueInput("END_Y", Number)
      .appendField("Y Final:")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("Cor:");
    this.appendValueInput("COLOR", Number)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DRAW_LINE_TOOLTIP);
  }
};


Blockly.Blocks.tft_drawFastLine_ED = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Criar um LINHA");
    this.appendValueInput("START_X", Number)
      .appendField("X Inicial:")
      .setCheck(Number);
    this.appendValueInput("START_Y", Number)
      .appendField("Y Inicial")
      .setCheck(Number);
    this.appendValueInput("LENGTH", Number)
      .appendField("Largura:")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(LINESELECT), "TYPE");
    this.appendDummyInput("")
      .appendField("Cor:");
    this.appendValueInput("COLOR", Number)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

//显示-TFT-画长方形
Blockly.Blocks.tft_Rect_ED = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Criar Retângulo 1");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(DRAWFIll_), "TYPE");
    this.appendValueInput("D0_X", Number)
      .appendField("X:")
      .setCheck(Number);
    this.appendValueInput("D0_Y", Number)
      .appendField("Y:")
      .setCheck(Number);
    this.appendValueInput("WIDTH", Number)
      .appendField("Largura:")
      .setCheck(Number);
    this.appendValueInput("HEIGHT", Number)
      .appendField("Altura:")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("Cor:");
    this.appendValueInput("COLOR", Number)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-TFT-画圆角矩形
Blockly.Blocks.tft_RoundRect_ED = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Criar Retângulo 2");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(DRAWFIll_), "TYPE");
    this.appendValueInput("D0_X", Number)
      .appendField("X:")
      .setCheck(Number);
    this.appendValueInput("D0_Y", Number)
      .appendField("Y:")
      .setCheck(Number);
    this.appendValueInput("WIDTH", Number)
      .appendField("Largura:")
      .setCheck(Number);
    this.appendValueInput("HEIGHT", Number)
      .appendField("Altura:")
      .setCheck(Number);
    this.appendValueInput("RADIUS", Number)
      .appendField("Raio:")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("Cor:");
    this.appendValueInput("COLOR", Number)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

//显示-TFT-画圆（空心，实心）
Blockly.Blocks.tft_Circle_ED = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Criar Circulo");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(DRAWFIll_), "TYPE");
    this.appendValueInput("D0_X", Number)
      .appendField("X:")
      .setCheck(Number);
    this.appendValueInput("D0_Y", Number)
      .appendField("Y:")
      .setCheck(Number);
    this.appendValueInput("RADIUS", Number)
      .appendField("Raio:")
      .setCheck(Number);
    // this.appendDummyInput("")
    // .appendField(new Blockly.FieldDropdown(CIRCLEOPTELECT_), "OPT");
    this.appendDummyInput("")
      .appendField("Cor:");
    this.appendValueInput("COLOR", Number)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-TFT-显示字符串
Blockly.Blocks.tft_set_Cursor = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Posicionar o Cursor");
    this.appendValueInput("POS_X", Number)
      .appendField("X:")
      .setCheck(Number);
    this.appendValueInput("POS_Y", Number)
      .appendField("Y:")
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_print_tooltip);
  }
};

Blockly.Blocks.tft_set_Color = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))

    this.appendDummyInput("")
      .appendField("Texto:");
    this.appendValueInput("COLOR", Number);

    this.appendDummyInput("")
      .appendField("Fundo:");
    this.appendValueInput("COLOR2", Number);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_print_tooltip);
  }
};

Blockly.Blocks.tft_println = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("TEXT", String)
      .appendField("Texto:")
      .setCheck([Number, String]);

    this.appendDummyInput()
      .appendField("Fonte:")
      .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "GET");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_print_tooltip);
  }
};

Blockly.Blocks.tft_print_ED0 = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Escrever Texto");
    this.appendValueInput("POS_X", Number)
      .appendField("X:")
      .setCheck(Number);
    this.appendValueInput("POS_Y", Number)
      .appendField("Y:")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("Cor Texto:");
    this.appendValueInput("COLOR", Number)
      .setCheck(Number);

    this.appendDummyInput("")
      .appendField("Cor de Fundo:");
    this.appendValueInput("COLOR1", Number)
      .setCheck(Number);

    this.appendValueInput("TEXT", String)
      .appendField("Texto:")
      .setCheck([Number, String]);

    this.appendDummyInput()
      .appendField("Fonte:")
      .appendField(new Blockly.FieldDropdown([["2", "2"], ["4", "4"]]), "GET");

    this.appendDummyInput()
      .appendField("Alinhar:")
      .appendField(new Blockly.FieldDropdown([["Superior esquerdo", "TL_DATUM"], ["Centro superior", "TC_DATUM"], ["Canto superior direito", "TR_DATUM "], ["Meio esquerdo", "MR_DATUM"], ["Centro médio", "MC_DATUM"], ["Meio direito", "ML_DATUM"], ["Inferior esquerdo", "BL_DATUM"], ["Centro inferior", "BC_DATUM"], ["Parte inferior direita", "BR_DATUM"]]), "GET2");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_print_tooltip);
  }
};

Blockly.Blocks.tft_print_NUMBER = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Escrever Numeros");
    this.appendValueInput("POS_X", Number)
      .appendField("X:")
      .setCheck(Number);
    this.appendValueInput("POS_Y", Number)
      .appendField("Y:")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("Cor Texto:");
    this.appendValueInput("COLOR", Number)
      .setCheck(Number);

    this.appendDummyInput("")
      .appendField("Cor de Fundo:");
    this.appendValueInput("COLOR1", Number)
      .setCheck(Number);

    this.appendValueInput("TEXT", Number)
      .appendField("Texto:")
      .setCheck(Number);

    this.appendDummyInput()
      .appendField("Digitos:")
      .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["6", "6"], ["7", "7"]]), "GET3");
    this.appendDummyInput()
      .appendField("Fonte:")
      .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["4", "4"], ["6", "6"], ["7", "7"]]), "GET");
    this.appendDummyInput()
      .appendField("Alinhar:")
      .appendField(new Blockly.FieldDropdown([["Superior esquerdo", "TL_DATUM"], ["Centro superior", "TC_DATUM"], ["Canto superior direito", "TR_DATUM "], ["Meio esquerdo", "MR_DATUM"], ["Centro médio", "MC_DATUM"], ["Meio direito", "ML_DATUM"], ["Inferior esquerdo", "BL_DATUM"], ["Centro inferior", "BC_DATUM"], ["Parte inferior direita", "BR_DATUM"]]), "GET2");




    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_print_tooltip);

   // Define a opção padrão como "3" para o campo "GET3"
   this.setFieldValue("3", "GET3");
   // Define a opção padrão como "3" para o campo "GET3"
   this.setFieldValue("6", "GET");
  }
};
/*Blockly.Blocks.tft_print_ED = {
  init: function() {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
    .appendField("Escrever Texto");
    this.appendValueInput("POS_X", Number)
    .appendField("X:")
    .setCheck(Number);
    this.appendValueInput("POS_Y", Number)
    .appendField("Y:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("Cor Texto:");
    this.appendValueInput("COLOR", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("Cor de Fundo:");
    this.appendValueInput("COLOR2", Number)
    .setCheck(Number);
    this.appendValueInput("TEXT", String)
    .appendField("Texto:")
    .setCheck([Number, String]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_print_tooltip);
  }
};*/

//显示-TFT-显示字符串
Blockly.Blocks.tft_print_refresh_ED = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Escrever Texto");
    this.appendValueInput("POS_X", Number)
      .appendField("X:")
      .setCheck(Number);
    this.appendValueInput("POS_Y", Number)
      .appendField(Blockly.OLED_START_Y)
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField(Blockly.Msg.HTML_COLOUR);
    this.appendValueInput("COLOR", Number)
      .setCheck(Number);
    this.appendValueInput("TEXT", String)
      .appendField(Blockly.OLED_STRING)
      .setCheck([Number, String]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_print_tooltip);
  }
};

Blockly.Blocks.tft_icons_ED = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_LCD);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/4r32.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Criar Imagem");
    this.appendValueInput("POS_X", Number)
      .appendField("X:")
      .setCheck(Number);
    this.appendValueInput("POS_Y", Number)
      .appendField("Y:")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("Cor:");
    this.appendValueInput("COLOR", Number)
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("Tamanho:")
      .appendField(new Blockly.FieldDropdown(ICON_SIZE_), "ICON_SIZE");
    this.appendDummyInput()
      .appendField("Imagem:")
      .appendField(new Blockly.FieldDropdown(ICON_IMAGE_), 'ICON_IMAGE');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_setFont_tooltip);
  }
};

Blockly.Blocks.emFrente_ED = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/emFrente.png", 30, 30, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Em frente, potência de:")

    this.appendValueInput("NUM", Number)
      .setCheck(Number);
    this.appendDummyInput()
      .appendField("%");

    // this.appendDummyInput("")
    // .appendField("Porta:")
    // .appendField(new Blockly.FieldDropdown(TYPE_MOTOR_), "TYPE_MOTOR");

    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Porta:");

    /*        
            this.appendDummyInput("")
            .appendField("AJUSTE 1:")
            this.appendValueInput("MOTOR1", Number)
            .setCheck(Number);
    
            this.appendDummyInput("")
            .appendField("AJUSTE 2:")
            this.appendValueInput("MOTOR2", Number)
            .setCheck(Number);
    */
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.loops.HUE_MOTOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.direita_ED = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/Direita.png", 30, 30, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Vire a direita, potência de:")

    this.appendValueInput("NUM", Number)
      .setCheck(Number);
    this.appendDummyInput()
      .appendField("%");

    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Porta:");




    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.loops.HUE_MOTOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.esquerda_ED = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/esquerda.png", 30, 30, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Vire a esquerda, potência de:")

    this.appendValueInput("NUM", Number)
      .setCheck(Number);
    this.appendDummyInput()
      .appendField("%");

    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Porta:");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.loops.HUE_MOTOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.tras_ED = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/tras.png", 30, 30, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Voltar, potência de:")

    this.appendValueInput("NUM", Number)
      .setCheck(Number);
    this.appendDummyInput()
      .appendField("%");

    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Porta:");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.loops.HUE_MOTOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.pararDirecao_ED = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/pare.png", 30, 30, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Pare os motores")

    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Porta:");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.loops.HUE_MOTOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.interface_motor_ED = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/Motor Grande.png", 30, 30, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Controle do motor grande: ");

    this.appendValueInput("NUM", Number)
      .setCheck(Number);
    this.appendDummyInput()
      .appendField("%");

    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Porta:");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.loops.HUE_MOTOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.interface_motor_medio_ED = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/motorMedio.png", 30, 30, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Controle do motor médio: ");

    this.appendValueInput("NUM", Number)
      .setCheck(Number);
    this.appendDummyInput()
      .appendField("%");

    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Porta:");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.loops.HUE_MOTOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_motor = {
  init: function () {

    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .appendField("Limpar a leitura do encoder do motor: ");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.loops.HUE_MOTOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.obter_motor1 = {
  init: function () {
    this.appendValueInput("PIN_SDA")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/encoder.png", 30, 30, { alt: "*", flipRtl: "FALSE" }))
      .setCheck(null)
      .appendField("Leitura do encoder do motor: ");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.loops.HUE_MOTOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks.ledGreen = {
  init: function () {
    this.setColour("#8d5e35");
    this.appendValueInput("PIN", Number)
      .appendField("Definir o led")
      .setCheck(Number)
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/led_verde.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("da porta:");


    this.appendValueInput("STAT")
      .appendField(Blockly.MIXLY_STAT)
      .setCheck([Number, Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id2");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '数字输出']
      }
    };
  }
};

Blockly.Blocks.ledRed = {
  init: function () {
    this.setColour("#8d5e35");
    this.appendValueInput("PIN", Number)
      .appendField("Definir o led")
      .setCheck(Number)
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/led_vermelho.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("da porta:");



    this.appendValueInput("STAT")
      .appendField(Blockly.MIXLY_STAT)
      .setCheck([Number, Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id2");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '数字输出']
      }
    };
  }
};

Blockly.Blocks.ledBlue = {
  init: function () {
    this.setColour("#8d5e35");
    this.appendValueInput("PIN", Number)
      .appendField("Definir o led")
      .setCheck(Number)
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/led_azul.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("da porta:");



    this.appendValueInput("STAT")
      .appendField(Blockly.MIXLY_STAT)
      .setCheck([Number, Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id2");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '数字输出']
      }
    };
  }
};

Blockly.Blocks.ledAmarelo = {
  init: function () {
    this.setColour("#8d5e35");
    this.appendValueInput("PIN", Number)
      .appendField("Definir o led")
      .setCheck(Number)
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/led_amarelo.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("da porta:");

    this.appendValueInput("STAT")
      .appendField(Blockly.MIXLY_STAT)
      .setCheck([Number, Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id2");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '数字输出']
      }
    };
  }
};

Blockly.Blocks.ledBranco = {
  init: function () {
    this.setColour("#8d5e35");
    this.appendValueInput("PIN", Number)
      .appendField("Definir o led")
      .setCheck(Number)
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/led_branco.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("da porta:");



    this.appendValueInput("STAT")
      .appendField(Blockly.MIXLY_STAT)
      .setCheck([Number, Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id2");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '数字输出']
      }
    };
  }
};

Blockly.Blocks.ledOFF = {
  init: function () {
    this.setColour("#8d5e35");
    this.appendValueInput("PIN", Number)
      .appendField("Desligar o LED")
      .setCheck(Number)
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/led_desligado.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("da porta:");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id2");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '数字输出']
      }
    };
  }
};

Blockly.Blocks.getStateLedGreen = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_ADPTADORA);
    this.appendValueInput("PIN")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("status do led")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/led_verde.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("da Porta:");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.getStateLedRed = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_ADPTADORA);
    this.appendValueInput("PIN")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("status do led")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/led_vermelho.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("da Porta:");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.getStateLedBlue = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_ADPTADORA);
    this.appendValueInput("PIN")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("status do led")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/led_azul.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("da Porta:");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.getStateLedYellow = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_ADPTADORA);
    this.appendValueInput("PIN")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("status do led")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/led_amarelo.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("da Porta:");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.getStateLedWhite = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_ADPTADORA);
    this.appendValueInput("PIN")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("status do led")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/led_branco.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
      .appendField("da Porta:");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.DHTCittius = {
  init: function () {
    var WHAT = [[Blockly.MIXLY_GETTEMPERATUE, 'temperature'], [Blockly.MIXLY_GETHUMIDITY, 'humidity']];
    this.setColour(Blockly.Blocks.loops.HUE_ADPTADORA);
    this.appendDummyInput("")
      .appendField("Sensor Temperatura & Umidade")
      .appendField(new Blockly.FieldImage("../../ThirdParty/arduino_Cittius/common/media/keyesAll/dht11.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("PIN")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("modelo:")
      .appendField(new Blockly.FieldDropdown([['DHT11', '11'], ['DHT21', '21'], ['DHT22', '22']]), 'TYPE')
      .appendField("da Porta:");
    this.appendDummyInput("")

      .appendField("obter:")
      .appendField(new Blockly.FieldDropdown(WHAT), "WHAT");
    this.setOutput(true, Number);
    var thisBlock = this;
    this.setTooltip(function () {
      var op = thisBlock.getFieldValue('WHAT');
      var TOOLTIPS = {
        'temperature': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM,
        'humidity': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_HUM
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks.getButtonCittius = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_SENSOR);
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sensor de Toque");
    //.appendField("sensor Ultrassônico");

    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.getButtonCittius_AZUL = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.SENSOR_AZUL);
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sensor de Toque");
      this.appendDummyInput("")
      .appendField("Evento:")
      .appendField(new Blockly.FieldDropdown([["Enquanto Pressionado", "read()"],["Enquanto Solto", "read() == 0"], ["Ao Pressionar", "rose()"], ["Ao Soltar", "fell()"]]), "mode");
      this.appendValueInput("DEB")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Debounce");

    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

var myModeIR = [
  ["Controle Remoto", "2"],
  ["Desvio de Obstáculos", "0"],
  ];

  var myAngle = [
    ["Ângulo_do_Eixo_X", "1"],
    ["Ângulo_do_Eixo_Y", "2"],
    ["Ângulo_do_Eixo_Z", "3"],
    ];

  var mychannelIR2 = [
    ["Canal 1", "1"],
    ["Canal 2", "2"],
    ["Canal 3", "3"],
    ["Canal 4", "4"],
    ];

Blockly.Blocks.getIR2 = {
  init: function() {
    this.setColour("#FF0000");
    this.appendDummyInput("")
    .appendField("Sensor Infravermelho");

    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);

      this.appendDummyInput("")
      .appendField("Modo:");

      this.appendDummyInput("")    
    .appendField(new Blockly.FieldDropdown(myModeIR), "MODE");

    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown(mychannelIR2), "MODE2");

    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.myGiro = {
  init: function() {
    this.setColour("#FF0000");
    this.appendDummyInput("")
    .appendField("Giroscopio interno -");

      this.appendDummyInput("")
      .appendField("Obter:");

      this.appendDummyInput("")    
    .appendField(new Blockly.FieldDropdown(myAngle), "MODE");


    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.getIR3 = {
  init: function() {
    this.setColour("#000000");
    this.appendDummyInput("")
    .appendField("Sensor Infravermelho");

    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);

      this.appendDummyInput("")
      .appendField("Modo:");

      this.appendDummyInput("")    
    .appendField(new Blockly.FieldDropdown(myModeIR), "MODE");

    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown(mychannelIR2), "MODE2");

    this.setInputsInline(true);
    this.setOutput(true);
  }
};
Blockly.Blocks.Button_ED_Vermelho = {
  init: function () {
    this.setColour("#FF0000");
    this.appendValueInput("PIN")
      .appendField("Sensor de Toque")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("Evento:")
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_CLICK, "attachClick"], [Blockly.MIXLY_DOUBLE_CLICK, "attachDoubleClick"], [Blockly.MIXLY_LONG_PRESS_START, "attachLongPressStart"], [Blockly.MIXLY_DURING_LONG_PRESS, "attachDuringLongPress"]]), "mode");
    this.appendStatementInput('DO')
      .appendField(Blockly.MIXLY_DO);

      this.appendValueInput("DEB")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Debounce");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ATTACHINTERRUPT);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id25");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '硬件中断'],
        scrollPos: '硬件中断'
      }
    };
  }
};

Blockly.Blocks.getButtonCittius_Vermelho = {
  init: function () {
    this.setColour("#FF0000");
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sensor de Toque");
    /*  this.appendDummyInput("")
      .appendField("Evento:")
      .appendField(new Blockly.FieldDropdown([["Enquanto Pressionado", "read()"],["Enquanto Solto", "read() == 0"], ["Ao Pressionar", "rose()"], ["Ao Soltar", "fell()"]]), "mode");

    this.appendValueInput("DEB")
    .setCheck(null)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Debounce")*/
    
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.getButtonCittius_PRETO = {
  init: function () {
    this.setColour("#000000");
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sensor de Toque");
      this.appendDummyInput("")
      .appendField("Evento:")
      .appendField(new Blockly.FieldDropdown([["Enquanto Pressionado", "read()"],["Enquanto Solto", "read() == 0"], ["Ao Pressionar", "rose()"], ["Ao Soltar", "fell()"]]), "mode");

    this.appendValueInput("DEB")
    .setCheck(null)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Debounce")
    
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.Button_ED_AZUL = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.SENSOR_AZUL);
    this.appendValueInput("PIN")
      .appendField("Sensor de Toque")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("Evento:")
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_CLICK, "attachClick"], [Blockly.MIXLY_DOUBLE_CLICK, "attachDoubleClick"], [Blockly.MIXLY_LONG_PRESS_START, "attachLongPressStart"], [Blockly.MIXLY_DURING_LONG_PRESS, "attachDuringLongPress"]]), "mode");
    this.appendStatementInput('DO')
      .appendField(Blockly.MIXLY_DO);

      this.appendValueInput("DEB")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Debounce");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ATTACHINTERRUPT);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id25");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '硬件中断'],
        scrollPos: '硬件中断'
      }
    };
  }
};

Blockly.Blocks.Button_ED_PRETO = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.SENSOR_PRETO);
    this.appendValueInput("PIN")
      .appendField("Sensor de Toque")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("Evento:")
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_CLICK, "attachClick"], [Blockly.MIXLY_DOUBLE_CLICK, "attachDoubleClick"], [Blockly.MIXLY_LONG_PRESS_START, "attachLongPressStart"], [Blockly.MIXLY_DURING_LONG_PRESS, "attachDuringLongPress"]]), "mode");
    this.appendStatementInput('DO')
      .appendField(Blockly.MIXLY_DO);

      this.appendValueInput("DEB")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Debounce");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ATTACHINTERRUPT);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id25");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '硬件中断'],
        scrollPos: '硬件中断'
      }
    };
  }
};


Blockly.Blocks.Button_ED2 = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_CONTR);
    this.appendValueInput("PIN")
      .appendField("Botão de navegação")
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField("Evento:")
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_CLICK, "attachClick"], [Blockly.MIXLY_DOUBLE_CLICK, "attachDoubleClick"], [Blockly.MIXLY_LONG_PRESS_START, "attachLongPressStart"], [Blockly.MIXLY_DURING_LONG_PRESS, "attachDuringLongPress"]]), "mode");
    this.appendStatementInput('DO')
      .appendField(Blockly.MIXLY_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ATTACHINTERRUPT);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id25");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '硬件中断'],
        scrollPos: '硬件中断'
      }
    };
  }
};


Blockly.Blocks.Utrassonic1_ED = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.SENSOR_AZUL);
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("sensor Utrassônico");
    //.appendField("sensor Ultrassônico");

    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.Utrassonic1_ED_Vermelho_UPDATE = {
  init: function () {
    this.setColour("#FF0000");
    this.appendDummyInput()
    .appendField("Atualizar Sensor Utrassônico");


    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id2");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '数字输出']
      }
    };
  }
};

Blockly.Blocks.IR2_Vermelho_UPDATE = {
  init: function () {
    this.setColour("#FF0000");
    this.appendDummyInput()
    .appendField("Atualizar Sensor Infravermelho");

    this.appendDummyInput("")
    .appendField("Modo:");

    this.appendDummyInput("")    
  .appendField(new Blockly.FieldDropdown(myModeIR), "MODE");

  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown(mychannelIR2), "MODE2");


    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id2");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '数字输出']
      }
    };
  }
};

Blockly.Blocks.Utrassonic1_ED_Vermelho = {
  init: function () {
    this.setColour("#FF0000");
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sensor Utrassônico");
    //.appendField("sensor Ultrassônico");

    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.temperature_ED_Vermelho = {
  init: function () {
    this.setColour("#FF0000");
    this.appendDummyInput()
 //   this.appendValueInput("PIN_SDA")
 //     .setCheck(null)
//      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sensor de Temperatura Porta D");
    //.appendField("sensor Ultrassônico");

    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.Utrassonic1_ED_PRETO = {
  init: function () {
    this.setColour("#000000");
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sensor Utrassônico");
    //.appendField("sensor Ultrassônico");

    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};
Blockly.Blocks.Utrassonic1_ED_PRETO = {
  init: function () {
    this.setColour("#000000");
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sensor Utrassônico");
    //.appendField("sensor Ultrassônico");

    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};


Blockly.Blocks.sensorColor1_ED = {
  init: function () {
    this.appendDummyInput()
      .appendField("sensor de COR")
      .appendField(new Blockly.FieldDropdown([["TABELA DE CORES", "LIDO"], ["ESCALA DE CINZA", "REFLETIVO"]]), "GET");

    this.setColour(Blockly.Blocks.loops.SENSOR_AZUL);
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("");

    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.sensorColor1_F1 = {
  init: function () {
    this.appendDummyInput()
      .appendField("sensor de COR")
      .appendField(new Blockly.FieldDropdown([["TABELA DE CORES", "1"], ["ESCALA DE CINZA", "0"]]), "GET");

    this.setColour("#FF0000");
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("");

    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.sensorAcel1_ED = {
  init: function () {
    this.appendDummyInput()
      .appendField("sensor de Movimento")
      .appendField(new Blockly.FieldDropdown([["X", "INCLINACAO"], ["Z", "ROLO"], ["Y", "GUINADA"]]), "GET");

    this.setColour(Blockly.Blocks.loops.SENSOR_AZUL);
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("");

    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};


Blockly.Blocks.appDableGamePadSetas = {
  init: function() {
    
    this.appendDummyInput()
        .appendField("Caso o botão ▲ seja pressionado:");
    this.appendStatementInput("btnCIMA");
    this.appendDummyInput()
    .appendField("Caso o botão ▼ seja pressionado:");
    this.appendStatementInput("btnBAIXO");
    this.appendDummyInput()
        .appendField("Caso o botão ▶ seja pressionado:");
    this.appendStatementInput("btnDIREITA");
    this.appendDummyInput()
        .appendField("Caso o botão ◀ seja pressionado:");
    this.appendStatementInput("btnESQUERDA");

    this.appendDummyInput()
    .appendField("Se nenhuma opções forem pressionado:");
    this.appendStatementInput("btnDEFAUT1");


    this.setColour(230);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks.appDableGamePadSeta2 = {
  init: function() {
    
    this.appendDummyInput()
    .appendField("Caso o botão SELECT seja pressionado:");
    this.appendStatementInput("btnSELECT");
    this.appendDummyInput()
    .appendField("Caso o botão START seja pressionado:");
    this.appendStatementInput("btnSTART");
    this.appendDummyInput()
    .appendField("Caso o botão ✖ seja pressionado:");
    this.appendStatementInput("btnX");
    this.appendDummyInput()
    .appendField("Caso o botão ◯ seja pressionado:");
    this.appendStatementInput("btnO");
    this.appendDummyInput()
    .appendField("Caso o botão ▢ seja pressionado:");
    this.appendStatementInput("btnQuadrado");
    this.appendDummyInput()
    .appendField("Caso o botão △ seja pressionado:");
    this.appendStatementInput("btnTriangulo");

    this.appendDummyInput()
    .appendField("Se nenhuma opções forem pressionado:");
    this.appendStatementInput("btnDEFAUT2");


    this.setColour(230);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['TerminalSend'] = {
  init: function() {
   this.setColour(Blockly.Blocks.serial.HUE);
   this.appendValueInput("CONTENT", String)
   .appendField("Enviar Menssagem para o APP:");
   this.appendDummyInput()
   .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_PRINT_INLINE, "print"],[Blockly.Msg.TEXT_PRINT_Huanhang_TOOLTIP, "println"]]), "new_line");
    
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP);
 }
};

Blockly.Blocks['controls_if44'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function () {
    //this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendValueInput('IF0')
      .setCheck([String, Number])
      .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendDummyInput()
      .appendField(", então");
    this.appendStatementInput('DO0')
      .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/03.Control.html#if");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '控制', 'if 选择']
      }
    };
    this.setMutator(new Blockly.Mutator(['controls_if_elseif',
      'controls_if_else']));
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function () {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
      } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
      } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
      } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  },
  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function () {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) {
      container.setAttribute('else', 1);
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function (xmlElement) {
    var containerBlock = this;
    var valueConnections = [];
    var statementConnections = [];
    var elseStatementConnection = null;
    if (this.elseCount_) {
      if (containerBlock.getInputTargetBlock('ELSE') && containerBlock.getInputTargetBlock('ELSE').previousConnection)
        elseStatementConnection = containerBlock.getInputTargetBlock('ELSE').previousConnection;
      this.removeInput('ELSE');
    }
    for (var i = this.elseifCount_; i > 0; i--) {
      if (containerBlock.getInputTargetBlock('IF' + i) && containerBlock.getInputTargetBlock('IF' + i).previousConnection)
        valueConnections[i] = (containerBlock.getInputTargetBlock('IF' + i).previousConnection);
      else
        valueConnections[i] = null;
      this.removeInput('IF' + i);
      if (containerBlock.getInputTargetBlock('DO' + i) && containerBlock.getInputTargetBlock('DO' + i).previousConnection)
        statementConnections[i] = (containerBlock.getInputTargetBlock('DO' + i).previousConnection);
      else
        statementConnections[i] = null;
      this.removeInput('DO' + i);
    }
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10);
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10);
    //this.compose(containerBlock);
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i)
        .setCheck([String, Number])
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
      this.appendStatementInput('DO' + i)
        .setCheck([String, Number])
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    }
    if (this.elseCount_) {
      this.appendStatementInput('ELSE')
        .setCheck(['Boolean', Number])
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
    }
    for (var i = valueConnections.length - 2; i > 0; i--) {
      if (valueConnections[i])
        Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
    }
    for (var i = statementConnections.length - 2; i > 0; i--) {
      if (statementConnections[i])
        Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('controls_if_if');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = workspace.newBlock('controls_if_elseif');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = workspace.newBlock('controls_if_else');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function (containerBlock) {
    // Disconnect the else input blocks and remove the inputs.
    if (this.elseCount_) {
      this.removeInput('ELSE');
    }
    this.elseCount_ = 0;
    // Disconnect all the elseif input blocks and remove the inputs.
    for (var i = this.elseifCount_; i > 0; i--) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
    }
    this.elseifCount_ = 0;
    // Rebuild the block's optional inputs.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        case 'controls_if_else':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statementConnection_;
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
        clauseBlock.nextConnection.targetBlock();
    }

    this.updateShape_();
    // Reconnect any child blocks.
    this.reconnectChildBlocks_(valueConnections, statementConnections, elseStatementConnection);

  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function (containerBlock) {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
            inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
            inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'controls_if_else':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
            inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
        clauseBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Reconstructs the block with all child blocks attached.
   */
  rebuildShape_: function () {
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;

    if (this.getInput('ELSE')) {
      elseStatementConnection = this.getInput('ELSE').connection.targetConnection;
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      var inputIf = this.getInput('IF' + i);
      var inputDo = this.getInput('DO' + i);
      console.log(inputIf.connection.targetConnection);
      valueConnections.push(inputIf.connection.targetConnection);
      statementConnections.push(inputDo.connection.targetConnection);
      i++;
    }
    this.updateShape_();
    this.reconnectChildBlocks_(valueConnections, statementConnections, elseStatementConnection);
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @this Blockly.Block
   * @private
   */
  updateShape_: function () {
    // Delete everything.
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE');
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
      i++;
    }
    // Rebuild block.
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i)
        .setCheck([String, Number])
        .appendField(Blockly.Msg['CONTROLS_IF_MSG_ELSEIF']);
      this.appendStatementInput('DO' + i)
        .appendField(Blockly.Msg['CONTROLS_IF_MSG_THEN']);
    }
    if (this.elseCount_) {
      this.appendStatementInput('ELSE')
        .setCheck([String, Number])
        .appendField(Blockly.Msg['CONTROLS_IF_MSG_ELSE']);
    }
  },
  /**
   * Reconnects child blocks.
   * @param {!Array<?Blockly.RenderedConnection>} valueConnections List of value
   * connectsions for if input.
   * @param {!Array<?Blockly.RenderedConnection>} statementConnections List of
   * statement connections for do input.
   * @param {?Blockly.RenderedConnection} elseStatementConnection Statement
   * connection for else input.
   */
  reconnectChildBlocks_: function (valueConnections, statementConnections,
    elseStatementConnection) {
    for (var i = 1; i <= this.elseifCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
      Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
    Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
  }
};

Blockly.Blocks.Utrassonic1_ED_Vermelho = {
  init: function () {
    this.setColour("#FF0000");
   // this.appendDummyInput()
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sensor de Distância");


    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};

Blockly.Blocks.getColorMedio = {
  init: function() {
    this.setColour("#FF0000");
    this.appendDummyInput("")
    .appendField("Sensor de Cor -");

      this.appendDummyInput("")    
      .appendField(new Blockly.FieldDropdown([["Porta_1", "1"],["Porta_5", "5"],["Porta_6", "6"],["Porta_7", "7"],["Porta_8", "8"], ["Porta_A", "9"], ["Porta_B", "10"], ["Porta_C", "11"], ["Porta_D", "12"]]), "PORT");

      this.appendDummyInput("")
      .appendField("Obter:")

      this.appendDummyInput("")    
      .appendField(new Blockly.FieldDropdown([["Código de cores", "0"], ["Escala de Cinza", "1"], ["Escala do Vermelho", "2"], ["Escala do Verde", "3"], ["Escala do Azul", "4"]]), "GET");

    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.getGiroNovo = {
  init: function() {
    this.setColour("#FF0000");
    this.appendDummyInput("")
    .appendField("Sensor Giroscopio-");

      this.appendDummyInput("")    
      .appendField(new Blockly.FieldDropdown([["Porta_1", "1"],["Porta_5", "5"],["Porta_6", "6"],["Porta_7", "7"],["Porta_8", "8"], ["Porta_A", "9"], ["Porta_B", "10"], ["Porta_C", "11"], ["Porta_D", "12"]]), "PORT");

      this.appendDummyInput("")
      .appendField("Obter:")

      this.appendDummyInput("")    
      .appendField(new Blockly.FieldDropdown([["X", "1"], ["Y", "0"]]), "GET");

    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.getSomNovo = {
  init: function() {
    this.setColour("#FF0000");
    this.appendDummyInput("")
    .appendField("Sensor de Som-");

      this.appendDummyInput("")    
      .appendField(new Blockly.FieldDropdown([["Porta_1", "A3"]]), "PORT");

    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.getTemperaturaNovo = {
  init: function() {
    this.setColour("#FF0000");
    this.appendDummyInput("")
    .appendField("Sensor de Temperatura -");

      this.appendDummyInput("")    
      .appendField(new Blockly.FieldDropdown([["Porta_1", "1"],["Porta_5", "5"],["Porta_6", "6"],["Porta_7", "7"],["Porta_8", "8"], ["Porta_A", "9"], ["Porta_B", "10"], ["Porta_C", "11"], ["Porta_D", "12"]]), "PORT");

    this.setInputsInline(true);
    this.setOutput(true);
  }
};



Blockly.Blocks.getControler3 = {
  init: function() {
    this.setColour("#FF0000");
    this.appendDummyInput("")
    .appendField("Controle Remoto-");

      this.appendDummyInput("")    
      .appendField(new Blockly.FieldDropdown([["Porta_5", "5"],["Porta_6", "6"],["Porta_7", "7"],["Porta_8", "8"],["Porta_B", "10"]]), "PORT");

      this.appendDummyInput("")
      .appendField("Canal:")

      this.appendDummyInput("")    
      .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "GET");

    this.setInputsInline(true);
    this.setOutput(true);
  }
};