
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
}