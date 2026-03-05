#ifndef CORULTRA
#define CORULTRA
#include <Arduino.h>


#define UART_HEAD	0xA5
#define UART_END	0xC3

#define BUF_SIZE_VMUART		64    //tamanho do buffer do serial


#define COLOR_RED			1
#define COLOR_GREEN			2
#define COLOR_BLUE			3
#define COLOR_YELLOW		4
#define COLOR_ORANGE		5
#define COLOR_WHITE			6

#define COLOR_BLACK			7
#define COLOR_LGRAY	8
#define COLOR_DGREY		9

#define COLOR_NONE			15


class CorUltra {
	public:
		CorUltra(){}
	    void Get_SoftSerialData(); //interpretar os dados dos sensores
		void Handler_SoftSerial(byte data);
		int PegarCor(); 
		float PegarUltra();
	private:
		byte Type;									// 传感器类型   sensor type
		byte Size;									// 数据长度域   data length field
		byte frame_data[BUF_SIZE_VMUART];				// 数据域    data field
		byte crc;
		byte RecOk;
		int inPotr_Digi[3]={0,0,0};
	
};

	
 /*
    struct SoftSerialData	   							// 虚拟串口结构体  Virtual serial port structure
	{
	//数据内容  data content
	byte Type;									// 传感器类型   sensor type
	byte Size;									// 数据长度域   data length field
	byte frame_data[BUF_SIZE_VMUART];				// 数据域    data field
	byte crc;
	byte RecOk;
	};
	*/
	//extern struct SoftSerialData   SoftSerial0;
	//extern struct SoftSerialData   SoftSerial1;
	//extern struct SoftSerialData   SoftSerial2;
	//extern struct SoftSerialData   SoftSerial3;
	
	//extern byte inPotr_Digi[4][3]; //matriz para salvar os dados de cada porta









//void vmUart4_SendEnable(void);
//void vmUart4_SendByte(byte ch);

//extern void vmUart4_Init(void);
//extern void vmUart3_Init(void);
//extern void vmUart2_Init(void);
//extern void vmUart1_Init(void);

//extern void vmUart_Enable(byte channel);
//extern void vmUart_Disable(byte channel);



#endif