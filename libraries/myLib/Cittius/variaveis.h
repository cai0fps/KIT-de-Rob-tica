#ifndef VARIABLES_H
#define VARIABLES_H

// Versão e Autor - Interface UI Modernizada
#define SYS_VERSION "v1.9"
#define SYS_AUTHOR "@caiofps_"

// Variaveis Globais
extern boolean flagSetupMenu = false, // Setup da Tela
        flagSetupMotor = false,    // Setup da Tela Motor
        flagSetupProgram = false,  // Setup da Tela Akuno
        flagSetupAluno = false,    // Setup da Tela Akuno
        flagSetupConfig = false,
        flagLoopAluno = false, // Setup da Tela Akuno

        flagSetupApp = false,      // Setup da Tela App Dable
        flagSetupSensores = false; // Setup da Tela Sensor

extern boolean enableM1 = false,
        enableM2 = false,
        enableM3 = false,
        serigrafia = false,
        enableConfig = false,
        enableBUZZER = true,
        enableM4 = false;


extern uint8_t selectMotor = 1, pageDosSensores = 1;
extern uint8_t menu = 0; // Controle das Paginas
extern uint8_t menuConfig = 1;
extern uint8_t btnMenu = 1; // Controle das Paginas com os Botões

extern byte typeSensorButton = 1, typeSensorUtra = 1, typeSensorColor = 1;


extern uint16_t padding;

extern char *namePort[12][2] = {{"M1", "A"}, {"M2", "B"}, {"M3", "C"}, {"M4", "D"}, {"P1", "1"}, {"P2", "2"}, {"P3", "3"}, {"P4", "4"}, {"P5", "5"}, {"P6", "6"}, {"P7", "7"}, {"P8", "8"}};

//Bibliotecas

//Definições
#define P1 1
#define P2 2
#define P3 3
#define P4 4
#define P5 5
#define P6 6
#define P7 7
#define P8 8
#define PA 9
#define PB 10
#define PC 11
#define PD 12

#define REFLETIVO 0
#define AMBIENTE 1
#define COR 2

#define CENTIMETROS 0
#define MILIMETROS 1
#define ESCUTA 2

#endif
