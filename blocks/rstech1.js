'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');


Blockly.Blocks.loops.HUE = "#FFAB19";

Blockly.Blocks.loops.HUE_CONTR = "#3ea8ff";
Blockly.Blocks.loops.HUE_CRTL = "#ffab19";
Blockly.Blocks.loops.HUE_LCD = "#91114d";
Blockly.Blocks.loops.HUE_MOTOR = "#708090";
Blockly.Blocks.loops.HUE_SENSOR = "#19a15f";
Blockly.Blocks.loops.HUE_ADPTADORA = "#8d5e35";
Blockly.Blocks.math.HUE_OPERATION = "#40bf4a";

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

Blockly.Blocks['Setup_Cittius_ED1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("controller");
    this.appendStatementInput("setup")
      .appendField("")
      .setCheck(null);
    this.setColour(Blockly.Blocks.loops.HUE_CONTR);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_SCOOP);
  }
};

Blockly.Blocks['SCoop_sleep_ED1'] = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_CRTL);
    this.appendDummyInput("")
      .appendField("espera");
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

Blockly.Blocks.controls_for_ED1 = {
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
    //.appendField('Faça');
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

Blockly.Blocks.loop_ED1 = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_CRTL);
    this.appendDummyInput()
      .appendField(`Repete para Sempre`);


    this.appendStatementInput('loop')
    //.appendField('Faça');
    this.setPreviousStatement(true);
    this.setNextStatement(false);
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

Blockly.Blocks.se_ED1 = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_CRTL);
    this.appendDummyInput()
      .appendField(`se`);

    this.appendValueInput('TO')
      .setCheck(['Boolean', Number])
      .setAlign(Blockly.ALIGN_RIGHT)
    this.appendDummyInput()
      .appendField(`,então`);


    this.appendStatementInput('DO')
      .appendField('');
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

Blockly.Blocks.se_senao_ED1 = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_CRTL);
    this.appendDummyInput()
      .appendField(`se`);

    this.appendValueInput('TO')
      .setCheck(['Boolean', Number])
      .setAlign(Blockly.ALIGN_RIGHT)

    this.appendDummyInput()
      .appendField(`,então`);

    this.appendStatementInput('DO')
      .appendField('');

    this.appendDummyInput()
      .appendField(`senão,`);

    this.appendStatementInput('PO')
      .appendField('');

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


Blockly.Blocks.espereAteQue_ED1 = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_CRTL);
    this.appendValueInput("STAT")
      .appendField("esperar até")
      .setCheck([Number, 'Boolean']);
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


Blockly.Blocks['math_number_ED1'] = {
  /**
   * Block for numeric value.
   * @this Blockly.Block 
   */
  init: function () {
    this.setColour(Blockly.Blocks.math.HUE_OPERATION);
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput('0',
        Blockly.FieldTextInput.math_number_validator), 'NUM');
    this.setOutput(true, Number);
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/04.Mathematics.html#id2");
  }
};

Blockly.Blocks['math_somar'] = {
  init: function () {

    this.setColour(Blockly.Blocks.math.HUE_OPERATION);
    this.setOutput(true, Number);
    this.appendValueInput('A')
      .setCheck(Number);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/04.Mathematics.html#id4");
    this.appendValueInput('B')
      .setCheck(Number)
      // .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
      .appendField("+");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['math_subtrair'] = {
  init: function () {

    this.setColour(Blockly.Blocks.math.HUE_OPERATION);
    this.setOutput(true, Number);
    this.appendValueInput('A')
      .setCheck(Number);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/04.Mathematics.html#id4");
    this.appendValueInput('B')
      .setCheck(Number)
      // .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
      .appendField("-");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['math_multiplicar'] = {
  init: function () {

    this.setColour(Blockly.Blocks.math.HUE_OPERATION);
    this.setOutput(true, Number);
    this.appendValueInput('A')
      .setCheck(Number);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/04.Mathematics.html#id4");
    this.appendValueInput('B')
      .setCheck(Number)
      // .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
      .appendField("*");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['math_dividir'] = {
  init: function () {

    this.setColour(Blockly.Blocks.math.HUE_OPERATION);
    this.setOutput(true, Number);
    this.appendValueInput('A')
      .setCheck(Number);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/04.Mathematics.html#id4");
    this.appendValueInput('B')
      .setCheck(Number)
      // .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
      .appendField("/");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['math_maior'] = {
  init: function () {

    this.setColour(Blockly.Blocks.math.HUE_OPERATION);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
      .setCheck(['Boolean', Number]);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/04.Mathematics.html#id4");
    this.appendValueInput('B')
      .setCheck(['Boolean', Number])
      // .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
      .appendField(">");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['math_menor'] = {
  init: function () {

    this.setColour(Blockly.Blocks.math.HUE_OPERATION);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
      .setCheck(['Boolean', Number]);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/04.Mathematics.html#id4");
    this.appendValueInput('B')
      .setCheck(['Boolean', Number])
      // .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
      .appendField("<");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['math_igual'] = {
  init: function () {

    this.setColour(Blockly.Blocks.math.HUE_OPERATION);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
      .setCheck(['Boolean', Number]);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/04.Mathematics.html#id4");
    this.appendValueInput('B')
      .setCheck(['Boolean', Number])
      // .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
      .appendField("=");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['math_e'] = {
  init: function () {

    this.setColour(Blockly.Blocks.math.HUE_OPERATION);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
      .setCheck(['Boolean', Number]);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/04.Mathematics.html#id4");
    this.appendValueInput('B')
      .setCheck(['Boolean', Number])
      // .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
      .appendField("e");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['math_ou'] = {
  init: function () {

    this.setColour(Blockly.Blocks.math.HUE_OPERATION);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
      .setCheck(['Boolean', Number]);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/04.Mathematics.html#id4");
    this.appendValueInput('B')
      .setCheck(['Boolean', Number])
      // .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
      .appendField("ou");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['math_negado'] = {
  init: function () {

    this.setColour(Blockly.Blocks.math.HUE_OPERATION);

    this.appendValueInput('A')
      .appendField("é falso que")
      .setCheck('Boolean');
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/04.Mathematics.html#id4");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
  }
};

Blockly.Blocks.getButtonCittius_ED1 = {
  init: function () {
    this.setColour(Blockly.Blocks.loops.HUE_SENSOR);
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("leia toque");
    //.appendField("sensor Ultrassônico");

    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/02.Input-Output.html#id13");
    this.wiki = {
      'zh-hans': {
        page: ['Arduino AVR', '输入输出', '模拟输入']
      }
    };
  }
};


Blockly.Blocks['my_text_block'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldLabelSerializable("Meu Texto"), "my_label");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.TFT_fillScreen_ED1 = {
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

Blockly.Blocks.tft_drawPixel_ED1 = {
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


Blockly.Blocks.tft_drawLine_ED1 = {
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


Blockly.Blocks.tft_drawFastLine_ED1 = {
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


Blockly.Blocks.tft_Rect_ED1 = {
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


Blockly.Blocks.tft_RoundRect_ED1 = {
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


Blockly.Blocks.tft_Circle_ED1 = {
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
Blockly.Blocks.tft_set_Cursor_ED1 = {
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

Blockly.Blocks.tft_set_Color_ED1 = {
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

Blockly.Blocks.tft_println_ED1 = {
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

Blockly.Blocks.tft_print_ED1 = {
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

Blockly.Blocks.tft_print_NUMBER_ED1 = {
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
      .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["6", "6"], ["7", "7"]]), "GET");

    this.appendDummyInput()
      .appendField("Alinhar:")
      .appendField(new Blockly.FieldDropdown([["Superior esquerdo", "TL_DATUM"], ["Centro superior", "TC_DATUM"], ["Canto superior direito", "TR_DATUM "], ["Meio esquerdo", "MR_DATUM"], ["Centro médio", "MC_DATUM"], ["Meio direito", "ML_DATUM"], ["Inferior esquerdo", "BL_DATUM"], ["Centro inferior", "BC_DATUM"], ["Parte inferior direita", "BR_DATUM"]]), "GET2");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_print_tooltip);
  }
};


Blockly.Blocks.tft_print_refresh_ED1 = {
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

Blockly.Blocks.tft_icons_ED1 = {
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

Blockly.Blocks.emFrente_ED1 = {
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

Blockly.Blocks.direita_ED1 = {
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

Blockly.Blocks.esquerda_ED1 = {
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
    this.setColour("#808080");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.tras_ED1 = {
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
    this.setColour("#808080");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.pararDirecao_ED1 = {
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
    this.setColour("#808080");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.interface_motor_ED1 = {
  init: function () {
    this.appendDummyInput()
      .appendField("interface motor ");

    this.appendValueInput("PIN_SDA")
      .setCheck(null);

    this.appendDummyInput()
      .appendField("cavalo-vapor");

    this.appendValueInput("NUM", Number)
      .setCheck(Number);


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.loops.HUE_MOTOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.interface_motor_medio_ED1 = {
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
    this.setColour("#808080");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.definir_motor_ED1 = {
  init: function () {

    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .appendField("definir o código do motor");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.loops.HUE_MOTOR);
    this.setTooltip("");
  }
};

Blockly.Blocks.obter_motor_ED1 = {
  init: function () {
    this.appendValueInput("PIN_SDA")
      .setCheck(null)
      .appendField("obter código do motor ");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.loops.HUE_MOTOR);
    this.setTooltip("");
  }
};





/********/


