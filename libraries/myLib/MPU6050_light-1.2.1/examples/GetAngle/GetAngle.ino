/* Get tilt angles on X and Y, and rotation angle on Z
 * Angles are given in degrees
 * 
 * License: MIT
 */

#include "Wire.h"
#include <MPU6050_light.h>

MPU6050 mpu(Wire);
int x,y,z;
unsigned long timer = 0;

void setup() {
  Serial.begin(115200);
  Wire.begin();
  Serial.println("teste");
  mpu.begin();
 // Serial.print(F("MPU6050 status: "));
 // Serial.println(status);
 // while(status!=0){ } // stop everything if could not connect to MPU6050
  
  Serial.println(F("Calculating offsets, do not move MPU6050"));
  delay(1000);
   //mpu.upsideDownMounting = true; // uncomment this line if the MPU6050 is mounted upside-down
  mpu.calcOffsets(); // gyro and accelero
  Serial.println("Done!\n");
}

void loop() {
  mpu.update();
  
  if(!digitalRead(49)){
  x = 0;
  y = 0;
  z = 0;
  }

  if((millis()-timer)>10){ // print data every 10ms
  x = mpu.getAngleY();
  y = mpu.getAngleX();
  z = mpu.getAngleZ();


	Serial.print(x);
	Serial.print(",");
	Serial.print(y);
	Serial.print(",");
	Serial.println(z);
	timer = millis();  
  }
}
