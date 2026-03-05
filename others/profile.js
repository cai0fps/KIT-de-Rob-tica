var profile = {
    parse: function (range) {
        let pinList = [];
        for (let i of range) {
            const pinInfo = i.split('-');
            switch (pinInfo.length) {
                case 1:
                    const pinNumStr = pinInfo[0].toString();
                    if (!isNaN(pinNumStr)) {
                        const pinNum = parseInt(pinNumStr);
                        pinList.push(pinNum);
                    }
                    break;
                case 2:
                    const pinNumStr0 = pinInfo[0].toString(),
                    pinNumStr1 = pinInfo[1].toString();
                    if (!isNaN(pinNumStr0) && !isNaN(pinNumStr1)) {
                        let pinNum0 = parseInt(pinNumStr0);
                        let pinNum1 = parseInt(pinNumStr1);
                        if (pinNum0 < 0 || pinNum1 < 0) break;
                        if (pinNum0 > pinNum1)
                            [ pinNum0, pinNum1 ] = [ pinNum1, pinNum0 ];
                        for (let j = pinNum0; j <= pinNum1; j++)
                            if (!pinList.includes(j))
                                pinList.push(j);
                    }
                    break;
            }
        }
        return pinList;
    },
    generate: function (pinMap, add1 = '', add2 = '') {
        const getPins = (list) => {
            let pins = [];
            for (let i of list) {
                const pin = [ add1 + i, add2 + i ];
                pins.push(pin);
            }
            return pins;
        }
        const pinList = this.parse(pinMap);
        return getPins(pinList);
    },
    softserial_select: [["SoftwareSerial", "mySerial"], ["SoftwareSerial1", "mySerial1"], ["SoftwareSerial2", "mySerial2"], ["SoftwareSerial3", "mySerial3"]],
    arduino_standard : {
        description : "standard",
        digital : [["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["14","14"],["15","15"],["16","16"],["17","17"],["18","18"],["19","19"],["20","20"],["21","21"],["22","22"],["23","23"],["24","24"],["25","25"],["26","26"],["27","27"],["28","28"],["29","29"],["30","30"],["31","31"],["32","32"],["33","33"],["34","34"],["35","35"],["36","36"],["37","37"],["38","38"],["39","39"],["40","40"],["41","41"],["42","42"],["43","43"],["44","44"],["45","45"],["46","46"],["47","47"],["48","48"],["49","49"],["50","50"],["51","51"],["52","52"],["53","53"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"], ["A8", "A8"], ["A9", "A9"], ["A10", "A10"], ["A11", "A11"], ["A12", "A12"], ["A13", "A13"], ["A14", "A14"], ["A15", "A15"]],
        analog : [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"], ["A8", "A8"], ["A9", "A9"], ["A10", "A10"], ["A11", "A11"], ["A12", "A12"], ["A13", "A13"], ["A14", "A14"], ["A15", "A15"]],
        pwm : [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
        interrupt: [["2", "2"], ["3", "3"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"]],
        SDA:[["20","20"]],
        SCL:[["21","21"]],
        MOSI:[["51","51"]],
        MISO:[["50","50"]],
        SCK:[["52","52"]],
        SS:[["53","53"]],
        RJ_analog:[["P1","A3"],["P2","A4"],["P3","A5"],["P4","A6"],["P5","A15"],["P6","A12"],["P7","A13"],["P8","A14"],["M1","A8"],["M2","A9"],["M3","A10"],["M4","A11"]],
        RJ_digital:[["P1","22"],["P2","23"],["P3","24"],["P4","25"],["P5","4"],["P6","53"],["P7","28"],["P8","29"],["M1","2"],["M2","3"],["M3","18"],["M4","19"]],
        serial_select : [["Serial", "Serial"], ["Serial1", "Serial1"], ["Serial2", "Serial2"], ["Serial3", "Serial3"], ["SoftwareSerial", "mySerial"],["SoftwareSerial1", "mySerial1"],["SoftwareSerial2", "mySerial2"],["SoftwareSerial3", "mySerial3"]],
        serial : 9600
    },
    arduino_Cittius : {
        description : "Mega_Cittius",
        digital : [["P1_DIG","22"],["P1_ANALO","A3"],["P2_DIG","23"],["P2_ANALO","A4"],["P3_DIG","24"],["P3_ANALO","A5"],["P4_DIG","25"],["P4_ANALO","A6"],["P5_DIG","4"],["P5_ANALO","A15"],["P6_DIG","53"],["P6_ANALO","A12"],["P7_DIG","28"],["P7_ANALO","A13"],["P8_DIG","29"],["P8_ANALO","A14"],["M1_DIG","2"],["M1_ANALO","A8"],["M2_DIG","3"],["M2_ANALO","A9"],["M3_DIG","18"],["M3_ANALO","A10"],["M4_DIG","19"],["M4_ANALO","A11"]],
        analog : [["P1_ANALO", "A3"], ["P2_ANALO", "A4"], ["P3_ANALO", "A5"], ["P4_ANALO", "A6"], ["P5_ANALO", "A15"], ["P6_ANALO", "A12"], ["P7_ANALO", "A13"], ["P8_ANALO", "A14"], ["M1_ANALO", "A8"], ["M2_ANALO", "A9"], ["M3_ANALO", "A10"], ["M4_ANALO", "A11"],["ENTER", "49"],["VOLTAR", "48"],["CIMA", "47"],["BAIXO", "38"]],
        pwm : [["M1_DIG", "2"], ["M2_DIG", "3"], ["P5_DIG", "4"]],
        interrupt: [["M1_DIG", "2"], ["M2_DIG", "3"], ["M3_DIG", "18"], ["M4_DIG", "19"]],
        SDA:[["20","20"]],
        SCL:[["21","21"]],
        MOSI:[["51","51"]],
        MISO:[["50","50"]],
        SCK:[["52","52"]],
        MOTOR_SINGLE:[["M1","M1"],["M2","M2"],["M3","M3"],["M4","M4"]],
        MOTOR_SINGLE_ENCODER:[["M1","m1"],["M2","m2"],["M3","m3"],["M4","m4"]],
        BOTAO:[["Enter","49"],["Voltar","48"],["Cima","47"],["Baixo","38"]],
        SENSOR_SOM:[["P1","A3"]],
        SENSOR_TEMPERATURA:[["P1","1"],["P5","5"],["P6","6"],["P7","7"],["P8","8"],["M1","9"],["M2","10"],["M3","11"],["M4","12"]],
        SENSOR_TOQUE:[["P1","A3"],["P2","A4"],["P3","A5"],["P4","A6"]],
        SENSOR_UTRA1:[["P5","A15"],["P6","A12"],["P7","A13"],["P8","A14"]],
        SENSOR_UTRA3:[["P5","5"],["P6","6"],["P7","7"],["P8","8"],["M1","9"],["M2","10"],["M3","11"],["M4","12"]],
        CORES:[["Vermelho|1","1"],["Verde|2","2"],["Azul|3","3"],["Amarelo|4","4"],["Laranja|5","5"],["Branco|6","6"],["Preto|7","4"]],
        MOTOR:[["M1_&_M2","1"],["M1_&_M3","2"],["M1_&_M4","3"],["M2_&_M1","4"],["M2_&_M3","5"],["M2_&_M4","6"],["M3_&_M1","7"],["M3_&_M2","8"],["M3_&_M4","9"],["M4_&_M1","10"],["M4_&_M2","11"],["M4_&_M3","12"]],
        SENSOR1_TOQUE:[["Porta_P1","A3"],["Porta_P2","A4"],["Porta_P3","A5"],["Porta_P4","A6"],["Porta_P5","A15"],["Porta_P6","A12"],["Porta_P7","A13"],["Porta_P8","A14"],["Porta_M1","A8"],["Porta_M2","A9"],["Porta_M3","A10"],["Porta_M4","A11"]],
        SENSOR1:[["Porta_P1","P1"],["Porta_P2","P2"],["Porta_P3","P3"],["Porta_P4","P4"],["Porta_P5","P5"],["Porta_P6","P6"],["Porta_P7","P7"],["Porta_P8","P8"],["Porta_M1","PA"],["Porta_M2","PB"],["Porta_M3","PC"],["Porta_M4","PD"]],
        SS:[["53","53"]],
        serial_select : [["Serial", "Serial"], ["Serial1", "Serial1"], ["Serial2", "Serial2"], ["Serial3", "Serial3"], ["SoftwareSerial", "mySerial"],["SoftwareSerial1", "mySerial1"],["SoftwareSerial2", "mySerial2"],["SoftwareSerial3", "mySerial3"]],
        serial : 9600
    },
    arduino_Cittius2 : {
        description : "Mega_Cittius2",
        digital : [["1_DIG","22"],["1_ANALO","A3"],["2_DIG","23"],["2_ANALO","A4"],["3_DIG","24"],["3_ANALO","A5"],["4_DIG","25"],["4_ANALO","A6"],["5_DIG","4"],["5_ANALO","A15"],["6_DIG","53"],["6_ANALO","A12"],["7_DIG","28"],["7_ANALO","A13"],["8_DIG","29"],["8_ANALO","A14"],["A_DIG","2"],["A_ANALO","A8"],["B_DIG","3"],["B_ANALO","A9"],["C_DIG","18"],["C_ANALO","A10"],["D_DIG","19"],["D_ANALO","A11"]],
        analog : [["1_ANALO", "A3"], ["2_ANALO", "A4"], ["3_ANALO", "A5"], ["4_ANALO", "A6"], ["5_ANALO", "A15"], ["6_ANALO", "A12"], ["7_ANALO", "A13"], ["8_ANALO", "A14"], ["A_ANALO", "A8"], ["B_ANALO", "A9"], ["C_ANALO", "A10"], ["D_ANALO", "A11"]],
        pwm : [["A_DIG", "2"], ["B_DIG", "3"], ["P5_DIG", "4"]],
        interrupt: [["A_DIG", "2"], ["B_DIG", "3"], ["C_DIG", "18"], ["D_DIG", "19"]],
        SDA:[["20","20"]],
        SCL:[["21","21"]],
        MOSI:[["51","51"]],
        MISO:[["50","50"]],
        SCK:[["52","52"]],
        MOTOR_SINGLE:[["A","M1"],["B","M2"],["C","M3"],["D","M4"]],
        MOTOR_SINGLE_ENCODER:[["A","m1"],["B","m2"],["C","m3"],["D","m4"]],
        BOTAO:[["Enter","49"],["Voltar","48"],["Cima","47"],["Baixo","38"]],
        SENSOR_SOM:[["1","A3"]],
        SENSOR_TEMPERATURA:[["Porta_1","1"],["Porta_5","5"],["Porta_6","6"],["Porta_7","7"],["Porta_8","8"],["Porta_A","9"],["Porta_B","10"],["Porta_C","11"],["Porta_D","12"]],
        SENSOR_TOQUE:[["Porta_1","A3"],["Porta_2","A4"],["Porta_3","A5"],["Porta_4","A6"]],
        SENSOR_UTRA1:[["Porta_5","A15"],["Porta_6","A12"],["Porta_7","A13"],["Porta_8","A14"]],
        SENSOR_UTRA3:[["Porta_5","5"],["Porta_6","6"],["Porta_7","7"],["Porta_8","8"],["Porta_A","9"],["Porta_B","10"],["Porta_C","11"],["Porta_D","12"]],
        CORES:[["Vermelho|1","1"],["Verde|2","2"],["Azul|3","3"],["Amarelo|4","4"],["Laranja|5","5"],["Branco|6","6"],["Preto|7","4"]],
        MOTOR:[["A_&_B","1"],["A_&_C","2"],["A_&_D","3"],["B_&_A","4"],["B_&_C","5"],["B_&_D","6"],["C_&_A","7"],["C_&_B","8"],["C_&_D","9"],["D_&_A","10"],["D_&_B","11"],["D_&_C","12"]],
        SENSOR1_TOQUE:[["Porta_1","A3"],["Porta_2","A4"],["Porta_3","A5"],["Porta_4","A6"],["Porta_5","A15"],["Porta_6","A12"],["Porta_7","A13"],["Porta_8","A14"],["Porta_A","A8"],["Porta_B","A9"],["Porta_C","A10"],["Porta_D","A11"]],
        SENSOR1:[["Porta_1","P1"],["Porta_2","P2"],["Porta_3","P3"],["Porta_4","P4"],["Porta_5","P5"],["Porta_6","P6"],["Porta_7","P7"],["Porta_8","P8"],["Porta_A","PA"],["Porta_B","PB"],["Porta_C","PC"],["Porta_D","PD"]],
        SS:[["53","53"]],
        serial_select : [["Serial", "Serial"], ["Serial1", "Serial1"], ["Serial2", "Serial2"], ["Serial3", "Serial3"], ["SoftwareSerial", "mySerial"],["SoftwareSerial1", "mySerial1"],["SoftwareSerial2", "mySerial2"],["SoftwareSerial3", "mySerial3"]],
        serial : 9600
    },
}
 
profile["Controladora V2 - Serigrafia 1"] =
profile["arduino_Cittius"];

profile["Controladora V2 - Serigrafia 2"] =
profile["arduino_Cittius2"];