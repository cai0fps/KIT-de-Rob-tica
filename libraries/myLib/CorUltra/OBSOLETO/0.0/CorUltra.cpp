#include "CorUltra.h"
#include <Arduino.h>
/*
struct SoftSerialData   SoftSerial0;
struct SoftSerialData   SoftSerial1;
struct SoftSerialData   SoftSerial2;
struct SoftSerialData   SoftSerial3;
*/


//CorUltra::CorUltra(){
//}

void CorUltra::Handler_SoftSerial(byte data){
  
    static byte index = 0, ptr = 0;
    
    switch(index){
      case 0:  if(data==UART_HEAD) index=1;break;
      case 1:  Type=data; index=2;break;
      case 2:  Size=data; index=3;break;
      case 3:  frame_data[ptr++]=data; 
           if(ptr>=Size)index=4;break;
      case 4:  crc=data; index=5;break;
      case 5:  if(data==UART_END)RecOk=1;
           ptr=0; index=0;break;
      default: index=0;break;
    }

}

void CorUltra::Get_SoftSerialData(){
  
    static byte last_color=COLOR_NONE;
    static byte now_color;
    unsigned long  rx=0,gx=0,bx=0,lx=0,tmp=0;
    unsigned long  rx2=0,gx2=0,bx2=0;
    unsigned long sum=0;
  
    if(RecOk==1)
    {
      RecOk=0;  
      switch(Type)
      { 
        case 0x01:    // 颜色传感器 sensor de cor
        //Serial.println("caso 1");
          inPotr_Digi[0]=Type; 
          lx=((frame_data[1] << 0) & 0xFF) + ((frame_data[0] << 8) & 0xFFFF);
          //lx=lx/100;

          rx=((frame_data[3] << 0) & 0xFF) + ((frame_data[2] << 8) & 0xFFFF);
          rx=rx/100;

          gx=((frame_data[5] << 0) & 0xFF) + ((frame_data[4] << 8) & 0xFFFF);
          gx=gx/100;

          bx=((frame_data[7] << 0) & 0xFF) + ((frame_data[6] << 8) & 0xFFFF);
          bx=bx/100;

          inPotr_Digi[1]=0;
          if(rx<50 && gx<50 && bx<50)
          {
            now_color = COLOR_NONE;
          }
          else
          {  
            sum=rx+gx+bx; 
          
            rx2=long(rx)*100/sum; 
          
			gx2=long(gx)*100/sum; 

			bx2=long(bx)*100/sum;
			
            if(rx2>48 && gx2>22 && bx2<22) now_color=COLOR_ORANGE;
            else if(rx2>40 && gx2>(90-rx2)/2  && bx2>(90-rx2)/2) now_color=COLOR_RED;	//OK
            else if(gx2>37) now_color=COLOR_GREEN;									// OK
            else if(bx2>37) now_color=COLOR_BLUE;									//OK
            else if(rx2>38 && gx2>29 && bx2<24) now_color=COLOR_YELLOW;        		// OK
            else if((rx2>27 && gx2>30 && bx2>30) && (rx>150 && gx>150 && bx>150)) now_color=COLOR_WHITE; 				//OK
            else if((rx2>27 && gx2>30 && bx2>30) && (rx<80 && gx<80 && bx<80)) now_color=COLOR_BLACK; 				//OK
            else if((rx2>27 && gx2>30 && bx2>30) && (rx>120 && gx>150 && bx>150)) now_color=COLOR_LGRAY; 				//OK
            else if((rx2>27 && gx2>30 && bx2>30) && (rx>65 && gx>90 && bx>90)) now_color=COLOR_DGREY; 				//OK
            else now_color=COLOR_NONE;
            
          //  if(last_color == now_color)
          //  {
              inPotr_Digi[1] = now_color;
          //  }
          //  last_color = now_color;
               
          }
          if(lx>2)lx=25;
          inPotr_Digi[2]=lx; 
          break;
          
        case 0x02:    // 超声波传感器 ultrassom
          {
          	//Serial.println("caso 2");
            inPotr_Digi[0]=Type;
            tmp=((frame_data[1] << 0) & 0xFF) + ((frame_data[0] << 8) & 0xFFFF);
            tmp=tmp*10;
            if(tmp>7500)tmp=7500;  
            inPotr_Digi[1]=tmp;
          }
          break;
      }
    }
  
  }
  
int CorUltra::PegarCor(){
	this->Get_SoftSerialData();
	if(inPotr_Digi[0]!=0x01) {return 9000;}
	else {return inPotr_Digi[1];}
	
}

float CorUltra::PegarUltra(){
	this->Get_SoftSerialData();
	if(inPotr_Digi[0]!=0x02) {return 9000;}
	else {return inPotr_Digi[1];}
	}  
