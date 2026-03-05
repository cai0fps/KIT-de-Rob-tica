#include <TFT_eSPI.h> // Hardware-specific library
#include <SPI.h>


TFT_eSPI tft = TFT_eSPI();       // Invoke custom library
#define TFT_BACKGRAUD 7

char txt0[50];
void initTFT(){
  tft.init();
  tft.setRotation(2);
  tft.fillScreen(TFT_BACKGRAUD);                //iniciar com Tela de Fundo 
}

uint16_t rgb565(unsigned long rgb)
{
  uint16_t R_ = (rgb >> 16) & 0xFF;
  uint16_t G_ = (rgb >>  8) & 0xFF;
  uint16_t B_ = (rgb      ) & 0xFF;

  uint16_t ret  = (R_ & 0xF8) << 8;  // 5 bits
           ret |= (G_ & 0xFC) << 3;  // 6 bits
           ret |= (B_ & 0xF8) >> 3;  // 5 bits
       
  return( ret);
}

void createBoxDraw(char *label, int x, int y, uint16_t colorLabel, uint16_t number, uint16_t number2, uint8_t sensor)
{
  // Melhoria Visual da Caixa (Mais arredondado e limpo)
  int w = 57;
  int h = 40;
  tft.drawRoundRect(x, y, w, h + 18, 6, TFT_DARKGREY); // Contorno suavizado
  tft.drawRoundRect(x + 1, y + 1, w - 2, h + 16, 5, TFT_WHITE);
  tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
  tft.drawCentreString(label, x + w / 2, y + 2, 2);
  
  /*
    1-Sensor de toque / Analogico
    2-Sensor utrassonico
  */

  switch (sensor)
  {
  case 01:
    sprintf(txt0, "A: %04d", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 20, 2);
    sprintf(txt0, "D: %01d", number2);
    tft.setTextColor(TFT_CYAN, TFT_BACKGRAUD); // Paleta mais moderna
    tft.drawCentreString(String(txt0), x + w / 3.2, h + y - 3, 2);
    break;
  case 02:
    if (number == 0)
    {
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_RED);
      tft.setTextColor(TFT_WHITE, TFT_RED);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_RED);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    }
    else
    {
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_DARKGREEN);
      tft.setTextColor(TFT_WHITE, TFT_DARKGREEN);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_DARKGREEN);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    }

    break;
  case 03:
    sprintf(txt0, "%03dcm", number);
    if(number<20){
      tft.setTextColor(TFT_RED, TFT_BACKGRAUD);
    }else{
      tft.setTextColor(TFT_GREEN, TFT_BACKGRAUD);      
    }
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    break;
  case 04:
    sprintf(txt0, "A: %04d", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    break;
  case 05:
    switch (number)
    {
    case 0x00:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_BACKGRAUD);
      tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_BACKGRAUD);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x01:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_RED);
      tft.setTextColor(TFT_WHITE, TFT_RED);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_RED);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x02:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_DARKGREEN);
      tft.setTextColor(TFT_WHITE, TFT_DARKGREEN);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_DARKGREEN);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x03:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_BLUE);
      tft.setTextColor(TFT_WHITE, TFT_BLUE);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_BLUE);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x04:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_YELLOW);
      tft.setTextColor(TFT_BLACK, TFT_YELLOW);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(TFT_BLACK, TFT_YELLOW);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x05:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_ORANGE);
      tft.setTextColor(TFT_BLACK, TFT_ORANGE);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(TFT_BLACK, TFT_ORANGE);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x06:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_WHITE);
      tft.setTextColor(TFT_BLACK, TFT_WHITE);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(TFT_BLACK, TFT_WHITE);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;

    case 0x07:
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_BLACK);
      tft.setTextColor(TFT_WHITE, TFT_BLACK);
      tft.drawCentreString(label, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_BLACK);
      sprintf(txt0, " %01d ", number);
      tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
      break;
    }
    break;
  case 06:
    sprintf(txt0, "A: %04d", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 20, 2);
    sprintf(txt0, "M: %04d", number2);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 3, 2);
    break;
  case 07:
    sprintf(txt0, "%03d  C", number);
   
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    tft.drawCircle(216, h + y - 8.6,2,rgb565(0xffffff));
    break;
  }
}

void createBoxDraw(byte number0, int x, int y, uint16_t colorLabel, uint16_t number, uint16_t number2, uint8_t sensor)
{
  int w = 60;
  int h = 40;
  tft.drawRoundRect(x, y, w, h + 18, 6, TFT_DARKGREY);
  tft.drawRoundRect(x + 1, y + 1, w - 2, h + 16, 5, TFT_WHITE);
  tft.setTextColor(TFT_WHITE, TFT_BACKGRAUD);
  tft.drawCentreString(String(number0), x + w / 2, y + 2, 2);

  tft.setTextColor(colorLabel, TFT_BACKGRAUD);

  /*
    1-Sensor de toque / Analogico
    2-Sensor utrassonico
  */
  switch (sensor)
  {
  case 01:
    sprintf(txt0, "A: %04d", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 20, 2);
    sprintf(txt0, "D: %01d", number2);
    tft.setTextColor(TFT_CYAN, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 3.2, h + y - 3, 2);
    break;
  case 02:
    if (number)
    {
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_DARKGREEN);
      tft.setTextColor(TFT_WHITE, TFT_DARKGREEN);
      tft.drawCentreString(number, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_DARKGREEN);
    }
    else
    {
      tft.fillRoundRect(x + 2, y + 2, w - 4, h + 14, 4, TFT_RED);
      tft.setTextColor(TFT_WHITE, TFT_RED);
      tft.drawCentreString(number, x + w / 2, y + 2, 2);
      tft.setTextColor(colorLabel, TFT_RED);
    }
    sprintf(txt0, " %01d ", number);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    break;
  case 03:
    sprintf(txt0, "%03dcm", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    break;
  case 04:
    sprintf(txt0, "A: %04d", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    break;
  case 05:
    sprintf(txt0, "T: %03dC", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 12, 2);
    break;
  case 06:
    sprintf(txt0, "A: %04d", number);
    tft.setTextColor(colorLabel, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 2, h + y - 20, 2);
    sprintf(txt0, "M: %04d", number2);
    tft.setTextColor(TFT_CYAN, TFT_BACKGRAUD);
    tft.drawCentreString(String(txt0), x + w / 3.2, h + y - 3, 2);
    break;
  }
}
