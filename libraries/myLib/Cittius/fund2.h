#include <OneWireMod.h>

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

#define LIDO 13
#define R 14
#define G 15
#define B 16
#define REFLETIVO 0

#define ROLO 0
#define GUINADA 1
#define INCLINACAO 2

#define P1_BRANCO A3
#define P2_BRANCO A4
#define P3_BRANCO A5
#define P4_BRANCO A6
#define P5_BRANCO A15
#define P6_BRANCO A12
#define P7_BRANCO A13
#define P8_BRANCO A14
#define PA_BRANCO A8
#define PB_BRANCO A9
#define PC_BRANCO A10
#define PD_BRANCO A11

#define P1_AZUL 22
#define P2_AZUL 23
#define P3_AZUL 24
#define P4_AZUL 25
#define P5_AZUL 4
#define P6_AZUL 53
#define P7_AZUL 28
#define P8_AZUL 29
#define PA_AZUL 2
#define PB_AZUL 3
#define PC_AZUL 18
#define PD_AZUL 19

uint8_t cmd1 [2] = {0x12, 0x15}; //comando para configurar o sensor de cor
uint8_t cmd2 [2] = {0x13, 0x15}; //comando para pedir os valores do código da cor e a cor vermelha em rgb
uint8_t cmd3 [2] = {0x14, 0x15}; //comando para pedir os valores das cores verde e azul em rgb

OneWireMega _P1(A3);
OneWireMega _P2(A4);
OneWireMega _P3(A5);
OneWireMega _P4(A6);
OneWireMega _P5(A15);
OneWireMega _P6(A12);
OneWireMega _P7(A13);
OneWireMega _P8(A14);
OneWireMega _PA(A8);
OneWireMega _PB(A9);
OneWireMega _PC(A10);
OneWireMega _PD(A11);

// NOVA FUNÇÃO: Estabiliza valores erráticos dos sensores usando média móvel simples
int16_t filtroMedia(int16_t novoValor, int16_t *buffer, uint8_t &indice, uint8_t tamanho) {
  buffer[indice] = novoValor;
  indice = (indice + 1) % tamanho;
  int32_t soma = 0;
  for(uint8_t i = 0; i < tamanho; i++) {
    soma += buffer[i];
  }
  return soma / tamanho;
}

int16_t GetRolo(uint8_t *Giro){
  uint16_t dado = (Giro[0] << 8) + Giro[1];
  if((dado & 63488) == 0){
    return (dado & 2047);
    }
  else{
    return (~dado & 2047)*-1;
    
    }
  }

int16_t GetInclinacao(uint8_t *Giro){
  uint16_t dado = (Giro[2] << 8) + Giro[3];
  if((dado & 63488) == 0){
    return (dado & 2047);
    }
  else{
    return (~dado & 2047)*-1;
    }
  }

int16_t GetGuinada(uint8_t *Giro){
  uint16_t dado = (Giro[4] << 8) + Giro[5];
  if((dado & 63488) == 0){
    return (dado & 2047);
    }
  else{
    return (~dado & 2047)*-1;
    }
  }

int16_t lerSensor_Acelerometro(byte pin, byte get_){
  uint8_t Giro [6] = {0xC0, 0x01, 0x01, 0xFF, 0xC0, 0x01};
  switch (pin){
    case P1:
      if(_P1.reset_acelerometroCmd()){
        _P1.write_ace100us(0x13);
        if(_P1.reset_acelerometroDado()){
          _P1.read_bytes_acelerometro(Giro, 6);
          switch (get_){
            case ROLO:
            return GetRolo(Giro);
            break;
            case INCLINACAO:
            return GetInclinacao(Giro);
            break;
            case GUINADA:
            return GetGuinada(Giro);
            break;
          }
        }
        else{
          delayMicroseconds(100);
          if(_P1.reset_acelerometroCmd()){
            _P1.write_ace100us(0x13);
            if(_P1.reset_acelerometroDado()){
              _P1.read_bytes_acelerometro(Giro, 6);
              switch (get_){
                case ROLO:
                return GetRolo(Giro);
                break;
                case INCLINACAO:
                return GetInclinacao(Giro);
                break;
                case GUINADA:
                return GetGuinada(Giro);
                break;
              }
            }
          }
          else{
            switch (get_){
              case ROLO:
              return 0x3FFF;
              break;
              case INCLINACAO:
              return 0x3FFF;
              break;
              case GUINADA:
              return 0x3FFF;
              break;
            }
          }
        }
      }
      else{
        delayMicroseconds(100);
        if(_P1.reset_acelerometroCmd()){
          _P1.write_ace100us(0x13);
          if(_P1.reset_acelerometroDado()){
            _P1.read_bytes_acelerometro(Giro, 6);
            switch (get_){
              case ROLO:
              return GetRolo(Giro);
              break;
              case INCLINACAO:
              return GetInclinacao(Giro);
              break;
              case GUINADA:
              return GetGuinada(Giro);
              break;
            }
          }
        }
        else{
          switch (get_){
            case ROLO:
            return 0x3FFF;
            break;
            case INCLINACAO:
            return 0x3FFF;
            break;
            case GUINADA:
            return 0x3FFF;
            break;
          }
        }
      }
    break;
    case P2:
      if(_P2.reset_acelerometroCmd()){
        _P2.write_ace100us(0x13);
        if(_P2.reset_acelerometroDado()){
          _P2.read_bytes_acelerometro(Giro, 6);
          switch (get_){
            case ROLO:
            return GetRolo(Giro);
            break;
            case INCLINACAO:
            return GetInclinacao(Giro);
            break;
            case GUINADA:
            return GetGuinada(Giro);
            break;
          }
        }
        else{
          delayMicroseconds(100);
          if(_P2.reset_acelerometroCmd()){
            _P2.write_ace100us(0x13);
            if(_P2.reset_acelerometroDado()){
              _P2.read_bytes_acelerometro(Giro, 6);
              switch (get_){
                case ROLO:
                return GetRolo(Giro);
                break;
                case INCLINACAO:
                return GetInclinacao(Giro);
                break;
                case GUINADA:
                return GetGuinada(Giro);
                break;
              }
            }
          }
          else{
            switch (get_){
              case ROLO:
              return 0x3FFF;
              break;
              case INCLINACAO:
              return 0x3FFF;
              break;
              case GUINADA:
              return 0x3FFF;
              break;
            }
          }
        }
      }
      else{
        delayMicroseconds(100);
        if(_P2.reset_acelerometroCmd()){
          _P2.write_ace100us(0x13);
          if(_P2.reset_acelerometroDado()){
            _P2.read_bytes_acelerometro(Giro, 6);
            switch (get_){
              case ROLO:
              return GetRolo(Giro);
              break;
              case INCLINACAO:
              return GetInclinacao(Giro);
              break;
              case GUINADA:
              return GetGuinada(Giro);
              break;
            }
          }
        }
        else{
          switch (get_){
            case ROLO:
            return 0x3FFF;
            break;
            case INCLINACAO:
            return 0x3FFF;
            break;
            case GUINADA:
            return 0x3FFF;
            break;
          }
        }
      }
    break;
    case P3:
      if(_P3.reset_acelerometroCmd()){
        _P3.write_ace100us(0x13);
        if(_P3.reset_acelerometroDado()){
          _P3.read_bytes_acelerometro(Giro, 6);
          switch (get_){
            case ROLO:
            return GetRolo(Giro);
            break;
            case INCLINACAO:
            return GetInclinacao(Giro);
            break;
            case GUINADA:
            return GetGuinada(Giro);
            break;
          }
        }
        else{
          delayMicroseconds(100);
          if(_P3.reset_acelerometroCmd()){
            _P3.write_ace100us(0x13);
            if(_P3.reset_acelerometroDado()){
              _P3.read_bytes_acelerometro(Giro, 6);
              switch (get_){
                case ROLO:
                return GetRolo(Giro);
                break;
                case INCLINACAO:
                return GetInclinacao(Giro);
                break;
                case GUINADA:
                return GetGuinada(Giro);
                break;
              }
            }
          }
          else{
            switch (get_){
              case ROLO:
              return 0x3FFF;
              break;
              case INCLINACAO:
              return 0x3FFF;
              break;
              case GUINADA:
              return 0x3FFF;
              break;
            }
          }
        }
      }
      else{
        delayMicroseconds(100);
        if(_P3.reset_acelerometroCmd()){
          _P3.write_ace100us(0x13);
          if(_P3.reset_acelerometroDado()){
            _P3.read_bytes_acelerometro(Giro, 6);
            switch (get_){
              case ROLO:
              return GetRolo(Giro);
              break;
              case INCLINACAO:
              return GetInclinacao(Giro);
              break;
              case GUINADA:
              return GetGuinada(Giro);
              break;
            }
          }
        }
        else{
          switch (get_){
            case ROLO:
            return 0x3FFF;
            break;
            case INCLINACAO:
            return 0x3FFF;
            break;
            case GUINADA:
            return 0x3FFF;
            break;
          }
        }
      }
    break;
    case P4:
      if(_P4.reset_acelerometroCmd()){
        _P4.write_ace100us(0x13);
        if(_P4.reset_acelerometroDado()){
          _P4.read_bytes_acelerometro(Giro, 6);
          switch (get_){
            case ROLO:
            return GetRolo(Giro);
            break;
            case INCLINACAO:
            return GetInclinacao(Giro);
            break;
            case GUINADA:
            return GetGuinada(Giro);
            break;
          }
        }
        else{
          delayMicroseconds(100);
          if(_P4.reset_acelerometroCmd()){
            _P4.write_ace100us(0x13);
            if(_P4.reset_acelerometroDado()){
              _P4.read_bytes_acelerometro(Giro, 6);
              switch (get_){
                case ROLO:
                return GetRolo(Giro);
                break;
                case INCLINACAO:
                return GetInclinacao(Giro);
                break;
                case GUINADA:
                return GetGuinada(Giro);
                break;
              }
            }
          }
          else{
            switch (get_){
              case ROLO:
              return 0x3FFF;
              break;
              case INCLINACAO:
              return 0x3FFF;
              break;
              case GUINADA:
              return 0x3FFF;
              break;
            }
          }
        }
      }
      else{
        delayMicroseconds(100);
        if(_P4.reset_acelerometroCmd()){
          _P4.write_ace100us(0x13);
          if(_P4.reset_acelerometroDado()){
            _P4.read_bytes_acelerometro(Giro, 6);
            switch (get_){
              case ROLO:
              return GetRolo(Giro);
              break;
              case INCLINACAO:
              return GetInclinacao(Giro);
              break;
              case GUINADA:
              return GetGuinada(Giro);
              break;
            }
          }
        }
        else{
          switch (get_){
            case ROLO:
            return 0x3FFF;
            break;
            case INCLINACAO:
            return 0x3FFF;
            break;
            case GUINADA:
            return 0x3FFF;
            break;
          }
        }
      }
    break;
    case P5:
      if(_P5.reset_acelerometroCmd()){
        _P5.write_ace100us(0x13);
        if(_P5.reset_acelerometroDado()){
          _P5.read_bytes_acelerometro(Giro, 6);
          switch (get_){
            case ROLO:
            return GetRolo(Giro);
            break;
            case INCLINACAO:
            return GetInclinacao(Giro);
            break;
            case GUINADA:
            return GetGuinada(Giro);
            break;
          }
        }
        else{
          delayMicroseconds(100);
          if(_P5.reset_acelerometroCmd()){
            _P5.write_ace100us(0x13);
            if(_P5.reset_acelerometroDado()){
              _P5.read_bytes_acelerometro(Giro, 6);
              switch (get_){
                case ROLO:
                return GetRolo(Giro);
                break;
                case INCLINACAO:
                return GetInclinacao(Giro);
                break;
                case GUINADA:
                return GetGuinada(Giro);
                break;
              }
            }
          }
          else{
            switch (get_){
              case ROLO:
              return 0x3FFF;
              break;
              case INCLINACAO:
              return 0x3FFF;
              break;
              case GUINADA:
              return 0x3FFF;
              break;
            }
          }
        }
      }
      else{
        delayMicroseconds(100);
        if(_P5.reset_acelerometroCmd()){
          _P5.write_ace100us(0x13);
          if(_P5.reset_acelerometroDado()){
            _P5.read_bytes_acelerometro(Giro, 6);
            switch (get_){
              case ROLO:
              return GetRolo(Giro);
              break;
              case INCLINACAO:
              return GetInclinacao(Giro);
              break;
              case GUINADA:
              return GetGuinada(Giro);
              break;
            }
          }
        }
        else{
          switch (get_){
            case ROLO:
            return 0x3FFF;
            break;
            case INCLINACAO:
            return 0x3FFF;
            break;
            case GUINADA:
            return 0x3FFF;
            break;
          }
        }
      }
    break;
    case P6:
      if(_P6.reset_acelerometroCmd()){
        _P6.write_ace100us(0x13);
        if(_P6.reset_acelerometroDado()){
          _P6.read_bytes_acelerometro(Giro, 6);
          switch (get_){
            case ROLO:
            return GetRolo(Giro);
            break;
            case INCLINACAO:
            return GetInclinacao(Giro);
            break;
            case GUINADA:
            return GetGuinada(Giro);
            break;
          }
        }
        else{
          delayMicroseconds(100);
          if(_P6.reset_acelerometroCmd()){
            _P6.write_ace100us(0x13);
            if(_P6.reset_acelerometroDado()){
              _P6.read_bytes_acelerometro(Giro, 6);
              switch (get_){
                case ROLO:
                return GetRolo(Giro);
                break;
                case INCLINACAO:
                return GetInclinacao(Giro);
                break;
                case GUINADA:
                return GetGuinada(Giro);
                break;
              }
            }
          }
          else{
            switch (get_){
              case ROLO:
              return 0x3FFF;
              break;
              case INCLINACAO:
              return 0x3FFF;
              break;
              case GUINADA:
              return 0x3FFF;
              break;
            }
          }
        }
      }
      else{
        delayMicroseconds(100);
        if(_P6.reset_acelerometroCmd()){
          _P6.write_ace100us(0x13);
          if(_P6.reset_acelerometroDado()){
            _P6.read_bytes_acelerometro(Giro, 6);
            switch (get_){
              case ROLO:
              return GetRolo(Giro);
              break;
              case INCLINACAO:
              return GetInclinacao(Giro);
              break;
              case GUINADA:
              return GetGuinada(Giro);
              break;
            }
          }
        }
        else{
          switch (get_){
            case ROLO:
            return 0x3FFF;
            break;
            case INCLINACAO:
            return 0x3FFF;
            break;
            case GUINADA:
            return 0x3FFF;
            break;
          }
        }
      }
    break;
    case P7:
      if(_P7.reset_acelerometroCmd()){
        _P7.write_ace100us(0x13);
        if(_P7.reset_acelerometroDado()){
          _P7.read_bytes_acelerometro(Giro, 6);
          switch (get_){
            case ROLO:
            return GetRolo(Giro);
            break;
            case INCLINACAO:
            return GetInclinacao(Giro);
            break;
            case GUINADA:
            return GetGuinada(Giro);
            break;
          }
        }
        else{
          delayMicroseconds(100);
          if(_P7.reset_acelerometroCmd()){
            _P7.write_ace100us(0x13);
            if(_P7.reset_acelerometroDado()){
              _P7.read_bytes_acelerometro(Giro, 6);
              switch (get_){
                case ROLO:
                return GetRolo(Giro);
                break;
                case INCLINACAO:
                return GetInclinacao(Giro);
                break;
                case GUINADA:
                return GetGuinada(Giro);
                break;
              }
            }
          }
          else{
            switch (get_){
              case ROLO:
              return 0x3FFF;
              break;
              case INCLINACAO:
              return 0x3FFF;
              break;
              case GUINADA:
              return 0x3FFF;
              break;
            }
          }
        }
      }
      else{
        delayMicroseconds(100);
        if(_P7.reset_acelerometroCmd()){
          _P7.write_ace100us(0x13);
          if(_P7.reset_acelerometroDado()){
            _P7.read_bytes_acelerometro(Giro, 6);
            switch (get_){
              case ROLO:
              return GetRolo(Giro);
              break;
              case INCLINACAO:
              return GetInclinacao(Giro);
              break;
              case GUINADA:
              return GetGuinada(Giro);
              break;
            }
          }
        }
        else{
          switch (get_){
            case ROLO:
            return 0x3FFF;
            break;
            case INCLINACAO:
            return 0x3FFF;
            break;
            case GUINADA:
            return 0x3FFF;
            break;
          }
        }
      }
    break;
    case P8:
      if(_P8.reset_acelerometroCmd()){
        _P8.write_ace100us(0x13);
        if(_P8.reset_acelerometroDado()){
          _P8.read_bytes_acelerometro(Giro, 6);
          switch (get_){
            case ROLO:
            return GetRolo(Giro);
            break;
            case INCLINACAO:
            return GetInclinacao(Giro);
            break;
            case GUINADA:
            return GetGuinada(Giro);
            break;
          }
        }
        else{
          delayMicroseconds(100);
          if(_P8.reset_acelerometroCmd()){
            _P8.write_ace100us(0x13);
            if(_P8.reset_acelerometroDado()){
              _P8.read_bytes_acelerometro(Giro, 6);
              switch (get_){
                case ROLO:
                return GetRolo(Giro);
                break;
                case INCLINACAO:
                return GetInclinacao(Giro);
                break;
                case GUINADA:
                return GetGuinada(Giro);
                break;
              }
            }
          }
          else{
            switch (get_){
              case ROLO:
              return 0x3FFF;
              break;
              case INCLINACAO:
              return 0x3FFF;
              break;
              case GUINADA:
              return 0x3FFF;
              break;
            }
          }
        }
      }
      else{
        delayMicroseconds(100);
        if(_P8.reset_acelerometroCmd()){
          _P8.write_ace100us(0x13);
          if(_P8.reset_acelerometroDado()){
            _P8.read_bytes_acelerometro(Giro, 6);
            switch (get_){
              case ROLO:
              return GetRolo(Giro);
              break;
              case INCLINACAO:
              return GetInclinacao(Giro);
              break;
              case GUINADA:
              return GetGuinada(Giro);
              break;
            }
          }
        }
        else{
          switch (get_){
            case ROLO:
            return 0x3FFF;
            break;
            case INCLINACAO:
            return 0x3FFF;
            break;
            case GUINADA:
            return 0x3FFF;
            break;
          }
        }
      }
    break;
    case PA:
      if(_PA.reset_acelerometroCmd()){
        _PA.write_ace100us(0x13);
        if(_PA.reset_acelerometroDado()){
          _PA.read_bytes_acelerometro(Giro, 6);
          switch (get_){
            case ROLO:
            return GetRolo(Giro);
            break;
            case INCLINACAO:
            return GetInclinacao(Giro);
            break;
            case GUINADA:
            return GetGuinada(Giro);
            break;
          }
        }
        else{
          delayMicroseconds(100);
          if(_PA.reset_acelerometroCmd()){
            _PA.write_ace100us(0x13);
            if(_PA.reset_acelerometroDado()){
              _PA.read_bytes_acelerometro(Giro, 6);
              switch (get_){
                case ROLO:
                return GetRolo(Giro);
                break;
                case INCLINACAO:
                return GetInclinacao(Giro);
                break;
                case GUINADA:
                return GetGuinada(Giro);
                break;
              }
            }
          }
          else{
            switch (get_){
              case ROLO:
              return 0x3FFF;
              break;
              case INCLINACAO:
              return 0x3FFF;
              break;
              case GUINADA:
              return 0x3FFF;
              break;
            }
          }
        }
      }
      else{
        delayMicroseconds(100);
        if(_PA.reset_acelerometroCmd()){
          _PA.write_ace100us(0x13);
          if(_PA.reset_acelerometroDado()){
            _PA.read_bytes_acelerometro(Giro, 6);
            switch (get_){
              case ROLO:
              return GetRolo(Giro);
              break;
              case INCLINACAO:
              return GetInclinacao(Giro);
              break;
              case GUINADA:
              return GetGuinada(Giro);
              break;
            }
          }
        }
        else{
          switch (get_){
            case ROLO:
            return 0x3FFF;
            break;
            case INCLINACAO:
            return 0x3FFF;
            break;
            case GUINADA:
            return 0x3FFF;
            break;
          }
        }
      }
    break;
    case PB:
      if(_PB.reset_acelerometroCmd()){
        _PB.write_ace100us(0x13);
        if(_PB.reset_acelerometroDado()){
          _PB.read_bytes_acelerometro(Giro, 6);
          switch (get_){
            case ROLO:
            return GetRolo(Giro);
            break;
            case INCLINACAO:
            return GetInclinacao(Giro);
            break;
            case GUINADA:
            return GetGuinada(Giro);
            break;
          }
        }
        else{
          delayMicroseconds(100);
          if(_PB.reset_acelerometroCmd()){
            _PB.write_ace100us(0x13);
            if(_PB.reset_acelerometroDado()){
              _PB.read_bytes_acelerometro(Giro, 6);
              switch (get_){
                case ROLO:
                return GetRolo(Giro);
                break;
                case INCLINACAO:
                return GetInclinacao(Giro);
                break;
                case GUINADA:
                return GetGuinada(Giro);
                break;
              }
            }
          }
          else{
            switch (get_){
              case ROLO:
              return 0x3FFF;
              break;
              case INCLINACAO:
              return 0x3FFF;
              break;
              case GUINADA:
              return 0x3FFF;
              break;
            }
          }
        }
      }
      else{
        delayMicroseconds(100);
        if(_PB.reset_acelerometroCmd()){
          _PB.write_ace100us(0x13);
          if(_PB.reset_acelerometroDado()){
            _PB.read_bytes_acelerometro(Giro, 6);
            switch (get_){
              case ROLO:
              return GetRolo(Giro);
              break;
              case INCLINACAO:
              return GetInclinacao(Giro);
              break;
              case GUINADA:
              return GetGuinada(Giro);
              break;
            }
          }
        }
        else{
          switch (get_){
            case ROLO:
            return 0x3FFF;
            break;
            case INCLINACAO:
            return 0x3FFF;
            break;
            case GUINADA:
            return 0x3FFF;
            break;
          }
        }
      }
    break;
    case PC:
      if(_PC.reset_acelerometroCmd()){
        _PC.write_ace100us(0x13);
        if(_PC.reset_acelerometroDado()){
          _PC.read_bytes_acelerometro(Giro, 6);
          switch (get_){
            case ROLO:
            return GetRolo(Giro);
            break;
            case INCLINACAO:
            return GetInclinacao(Giro);
            break;
            case GUINADA:
            return GetGuinada(Giro);
            break;
          }
        }
        else{
          delayMicroseconds(100);
          if(_PC.reset_acelerometroCmd()){
            _PC.write_ace100us(0x13);
            if(_PC.reset_acelerometroDado()){
              _PC.read_bytes_acelerometro(Giro, 6);
              switch (get_){
                case ROLO:
                return GetRolo(Giro);
                break;
                case INCLINACAO:
                return GetInclinacao(Giro);
                break;
                case GUINADA:
                return GetGuinada(Giro);
                break;
              }
            }
          }
          else{
            switch (get_){
              case ROLO:
              return 0x3FFF;
              break;
              case INCLINACAO:
              return 0x3FFF;
              break;
              case GUINADA:
              return 0x3FFF;
              break;
            }
          }
        }
      }
      else{
        delayMicroseconds(100);
        if(_PC.reset_acelerometroCmd()){
          _PC.write_ace100us(0x13);
          if(_PC.reset_acelerometroDado()){
            _PC.read_bytes_acelerometro(Giro, 6);
            switch (get_){
              case ROLO:
              return GetRolo(Giro);
              break;
              case INCLINACAO:
              return GetInclinacao(Giro);
              break;
              case GUINADA:
              return GetGuinada(Giro);
              break;
            }
          }
        }
        else{
          switch (get_){
            case ROLO:
            return 0x3FFF;
            break;
            case INCLINACAO:
            return 0x3FFF;
            break;
            case GUINADA:
            return 0x3FFF;
            break;
          }
        }
      }
    break;
    case PD:
      if(_PD.reset_acelerometroCmd()){
        _PD.write_ace100us(0x13);
        if(_PD.reset_acelerometroDado()){
          _PD.read_bytes_acelerometro(Giro, 6);
          switch (get_){
            case ROLO:
            return GetRolo(Giro);
            break;
            case INCLINACAO:
            return GetInclinacao(Giro);
            break;
            case GUINADA:
            return GetGuinada(Giro);
            break;
          }
        }
        else{
          delayMicroseconds(100);
          if(_PD.reset_acelerometroCmd()){
            _PD.write_ace100us(0x13);
            if(_PD.reset_acelerometroDado()){
              _PD.read_bytes_acelerometro(Giro, 6);
              switch (get_){
                case ROLO:
                return GetRolo(Giro);
                break;
                case INCLINACAO:
                return GetInclinacao(Giro);
                break;
                case GUINADA:
                return GetGuinada(Giro);
                break;
              }
            }
          }
          else{
            switch (get_){
              case ROLO:
              return 0x3FFF;
              break;
              case INCLINACAO:
              return 0x3FFF;
              break;
              case GUINADA:
              return 0x3FFF;
              break;
            }
          }
        }
      }
      else{
        delayMicroseconds(100);
        if(_PD.reset_acelerometroCmd()){
          _PD.write_ace100us(0x13);
          if(_PD.reset_acelerometroDado()){
            _PD.read_bytes_acelerometro(Giro, 6);
            switch (get_){
              case ROLO:
              return GetRolo(Giro);
              break;
              case INCLINACAO:
              return GetInclinacao(Giro);
              break;
              case GUINADA:
              return GetGuinada(Giro);
              break;
            }
          }
        }
        else{
          switch (get_){
            case ROLO:
            return 0x3FFF;
            break;
            case INCLINACAO:
            return 0x3FFF;
            break;
            case GUINADA:
            return 0x3FFF;
            break;
          }
        }
      }
    break;
  }

}

byte CodigoVermelho = 0;

/*
byte getSensorColor(){

  sens_cor.check_for_data();
  
  //sens_cor.listen_sensor();
  
  if (sens_cor.get_status() == DATA_MODE) {     
    if ((sens_cor.get_current_mode() != 2) && (sens_cor.get_type() == 29)) {
        int mode = 2;      
        if (mode >= 0 && mode < sens_cor.get_number_of_modes()) {
          sens_cor.set_mode(mode);
        }}

    float sample[sens_cor.sample_size()];
    sens_cor.fetch_sample(sample, 0);
    if(sens_cor.get_type() == 29){
    for (int i = 0; i < sens_cor.sample_size(); i++) {
      //Serial.println(COR[int(sample[i])]);
      //Serial.println(byte(sample[i]));
      CodigoVermelho = sample[i];
    }}
    
  }
  
  return CodigoVermelho;
}
*/
byte lerSensor_de_Cor(byte pin, byte get_){
     static uint8_t CodigoVermelho [2] = {0x00, 0x00}; 
     static uint8_t VerdeAzul [2] = {0x00, 0x00};
     static uint8_t controle = 0;
  switch (pin) {
    case P1:
      if(_P1.reset_sensorCor()&&controle==0){_P1.write_bytes_cor100us(cmd1,2);_P1.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P1.reset_sensorCor()&&controle==1){_P1.write_bytes_cor100us(cmd2,2);_P1.reset_finalSensorCor();_P1.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P1.reset_sensorCor()&&controle==2){_P1.write_bytes_cor100us(cmd3,2);_P1.reset_finalSensorCor();_P1.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
          
    break;
    case P2:
      if(_P2.reset_sensorCor()&&controle==0){_P2.write_bytes_cor100us(cmd1,2);_P2.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P2.reset_sensorCor()&&controle==1){_P2.write_bytes_cor100us(cmd2,2);_P2.reset_finalSensorCor();_P2.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P2.reset_sensorCor()&&controle==2){_P2.write_bytes_cor100us(cmd3,2);_P2.reset_finalSensorCor();_P2.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;
    case P3:
      if(_P3.reset_sensorCor()&&controle==0){_P3.write_bytes_cor100us(cmd1,2);_P3.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P3.reset_sensorCor()&&controle==1){_P3.write_bytes_cor100us(cmd2,2);_P3.reset_finalSensorCor();_P3.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P3.reset_sensorCor()&&controle==2){_P3.write_bytes_cor100us(cmd3,2);_P3.reset_finalSensorCor();_P3.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;
    case P4:
      if(_P4.reset_sensorCor()&&controle==0){_P4.write_bytes_cor100us(cmd1,2);_P4.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P4.reset_sensorCor()&&controle==1){_P4.write_bytes_cor100us(cmd2,2);_P4.reset_finalSensorCor();_P4.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P4.reset_sensorCor()&&controle==2){_P4.write_bytes_cor100us(cmd3,2);_P4.reset_finalSensorCor();_P4.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case P5:
      if(_P5.reset_sensorCor()&&controle==0){_P5.write_bytes_cor100us(cmd1,2);_P5.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P5.reset_sensorCor()&&controle==1){_P5.write_bytes_cor100us(cmd2,2);_P5.reset_finalSensorCor();_P5.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P5.reset_sensorCor()&&controle==2){_P5.write_bytes_cor100us(cmd3,2);_P5.reset_finalSensorCor();_P5.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case P6:
      if(_P6.reset_sensorCor()&&controle==0){_P6.write_bytes_cor100us(cmd1,2);_P6.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P6.reset_sensorCor()&&controle==1){_P6.write_bytes_cor100us(cmd2,2);_P6.reset_finalSensorCor();_P6.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P6.reset_sensorCor()&&controle==2){_P6.write_bytes_cor100us(cmd3,2);_P6.reset_finalSensorCor();_P6.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case P7:
      if(_P7.reset_sensorCor()&&controle==0){_P7.write_bytes_cor100us(cmd1,2);_P7.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P7.reset_sensorCor()&&controle==1){_P7.write_bytes_cor100us(cmd2,2);_P7.reset_finalSensorCor();_P7.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P7.reset_sensorCor()&&controle==2){_P7.write_bytes_cor100us(cmd3,2);_P7.reset_finalSensorCor();_P7.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case P8:
      if(_P8.reset_sensorCor()&&controle==0){_P8.write_bytes_cor100us(cmd1,2);_P8.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_P8.reset_sensorCor()&&controle==1){_P8.write_bytes_cor100us(cmd2,2);_P8.reset_finalSensorCor();_P8.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_P8.reset_sensorCor()&&controle==2){_P8.write_bytes_cor100us(cmd3,2);_P8.reset_finalSensorCor();_P8.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case PA:
      if(_PA.reset_sensorCor()&&controle==0){_PA.write_bytes_cor100us(cmd1,2);_PA.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_PA.reset_sensorCor()&&controle==1){_PA.write_bytes_cor100us(cmd2,2);_PA.reset_finalSensorCor();_PA.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_PA.reset_sensorCor()&&controle==2){_PA.write_bytes_cor100us(cmd3,2);_PA.reset_finalSensorCor();_PA.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case PB:
      if(_PB.reset_sensorCor()&&controle==0){_PB.write_bytes_cor100us(cmd1,2);_PB.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_PB.reset_sensorCor()&&controle==1){_PB.write_bytes_cor100us(cmd2,2);_PB.reset_finalSensorCor();_PB.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_PB.reset_sensorCor()&&controle==2){_PB.write_bytes_cor100us(cmd3,2);_PB.reset_finalSensorCor();_PB.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case PC:
      if(_PC.reset_sensorCor()&&controle==0){_PC.write_bytes_cor100us(cmd1,2);_PC.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_PC.reset_sensorCor()&&controle==1){_PC.write_bytes_cor100us(cmd2,2);_PC.reset_finalSensorCor();_PC.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_PC.reset_sensorCor()&&controle==2){_PC.write_bytes_cor100us(cmd3,2);_PC.reset_finalSensorCor();_PC.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;

    case PD:
      if(_PD.reset_sensorCor()&&controle==0){_PD.write_bytes_cor100us(cmd1,2);_PD.reset_finalSensorCor();controle=1;}
          delay(64);
          if(_PD.reset_sensorCor()&&controle==1){_PD.write_bytes_cor100us(cmd2,2);_PD.reset_finalSensorCor();_PD.read_bytes_sensorCor(CodigoVermelho, 2);controle=2;}
          if(_PD.reset_sensorCor()&&controle==2){_PD.write_bytes_cor100us(cmd3,2);_PD.reset_finalSensorCor();_PD.read_bytes_sensorCor(VerdeAzul, 2);controle=0;
          }else{return 0;}

          switch (get_) {
            case LIDO:
              return CodigoVermelho[0];
            break;
            case G:
              return VerdeAzul[0];
            break;
            case M2:
              return VerdeAzul[1];
            break;
            case R:
              return CodigoVermelho[1];
            break;
            case REFLETIVO:
             byte value = map(VerdeAzul[0] + VerdeAzul[1] + CodigoVermelho[1],0,516,0,100);
             if(value>=100){value = 100;}
              return value;
            break;
          }
    break;
  }
}

// NOVA FUNÇÃO: Overload para suportar retorno específico se for necessário obter milímetros
uint16_t lerSensor_de_Distancia(byte pin_, byte get_){
  uint16_t cm = lerSensor_de_Distancia(pin_);
  if(get_ == MILIMETROS){
    return cm * 10;
  }
  return cm;
}

uint8_t lerSensor_de_Distancia(byte pin_){
  static uint8_t dist = 0, cmd = 0x13;
  switch(pin_){
    case P1:
      delay(50); if(_P1.reset_ultrassom()){_P1.write_100us(cmd);dist=_P1.read_ultrassom();if(dist == 0 ){return 0;}else{return dist;}}
    break;
    case P2:
      delay(50); if(_P2.reset_ultrassom()){_P2.write_100us(cmd);dist=_P2.read_ultrassom();if(dist == 0){return 0;}else{return dist;}} 
    break;
    case P3:
      delay(50); if(_P3.reset_ultrassom()){_P3.write_100us(cmd);dist=_P3.read_ultrassom();if(dist == 0){return 0;}else{return dist;}} 
    break;
    case P4:
      delay(50); if(_P4.reset_ultrassom()){_P4.write_100us(cmd);dist=_P4.read_ultrassom();if(dist == 0){return 0;}else{return dist;}} 
    break;
    case P5:
      delay(50); if(_P5.reset_ultrassom()){_P5.write_100us(cmd);dist=_P5.read_ultrassom();if(dist == 0){return 0;}else{return dist;}}  
    break;
    case P6:
      delay(50); if(_P6.reset_ultrassom()){_P6.write_100us(cmd);dist=_P6.read_ultrassom();if(dist == 0){return 0;}else{return dist;}} 
    break;
    case P7:
      delay(50); if(_P7.reset_ultrassom()){_P7.write_100us(cmd);dist=_P7.read_ultrassom();if(dist == 0){return 0;}else{return dist;}} 
    break;
    case P8:
      delay(50); if(_P8.reset_ultrassom()){_P8.write_100us(cmd);dist=_P8.read_ultrassom();if(dist == 0){return 0;}else{return dist;}}
    break;
    case PA:
      delay(50); if(_PA.reset_ultrassom()){_PA.write_100us(cmd);dist=_PA.read_ultrassom();if(dist == 0){return 0;}else{return dist;}} 
    break;
    case PB:
      delay(50); if(_PB.reset_ultrassom()){_PB.write_100us(cmd);dist=_PB.read_ultrassom();if(dist == 0){return 0;}else{return dist;}} 
    break;
    case PC:
      delay(50); if(_PC.reset_ultrassom()){_PC.write_100us(cmd);dist=_PC.read_ultrassom();if(dist == 0){return 0;}else{return dist;}} 
    break;
    case PD:
      delay(50); if(_PD.reset_ultrassom()){_PD.write_100us(cmd);dist=_PD.read_ultrassom();if(dist == 0){return 0;}else{return dist;}}
    break;
  }
}
