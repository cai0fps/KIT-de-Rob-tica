#include <SoftWire.h>
#include <AsyncDelay.h>

SoftWire sw(A8, 2);


void setup(void)
{
  Serial.begin(9600);
  Serial.println("Iniciando");

  sw.begin();

  sw.setTimeout_ms(40);
  
  const uint8_t firstAddr = 1;
  const uint8_t lastAddr = 0x7F;
  Serial.println();
  Serial.print("Interrogating all addresses in range 0x");
  Serial.print(firstAddr, HEX);
  Serial.print(" - 0x");
  Serial.print(lastAddr, HEX);
  Serial.println(" (inclusive) ...");

 // for (uint8_t addr = firstAddr; addr <= lastAddr; addr++) {
    digitalWrite(LED_BUILTIN, HIGH);
    delayMicroseconds(50);

    bool startResult = sw.llStart((0x68 << 1) + 1); // Signal a read
    bool startResult2 = sw.llStart((0x68 << 1) + 1); // Signal a read
    sw.stop();

    if (startResult == 0) {
      Serial.println("Sensor de Temperatura ");
    //  Serial.println(addr, HEX);
      Serial.flush();
    }else if(startResult2 == 0){
      Serial.println("Sensor Giroscopio ");
       Serial.flush();
    }
    digitalWrite(LED_BUILTIN, LOW);

    delay(50);
 // }
  Serial.println("Finished");

}


void loop(void)
{
  ;
}
