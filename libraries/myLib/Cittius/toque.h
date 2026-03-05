#ifndef TOQUE_H
#define TOQUE_H

bool sensorToque(uint8_t PORT){
  switch(PORT){
    case 1:
    return digitalRead(A3);
    break;

    case 2:
    return digitalRead(A4);
    break;

    case 3:
    return digitalRead(A5);
    break;

    case 4:
    return digitalRead(A6);
    break;
  }
  return false;
}

// NOVA FUNCAO: Adiciona "Debounce" ao toque fisico. Previne que um clique faca o robo entender varios cliques rapidamente
bool sensorToqueFiltro(uint8_t PORT){
  static unsigned long ultimoClique[5] = {0, 0, 0, 0, 0};
  bool estadoAtual = sensorToque(PORT);
  
  if (estadoAtual) {
    if (millis() - ultimoClique[PORT] > 50) { // 50ms de tolerancia
      ultimoClique[PORT] = millis();
      return true;
    }
  }
  return false;
}

#endif
