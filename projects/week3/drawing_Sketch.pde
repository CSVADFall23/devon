

import processing.serial.*;

import cc.arduino.*;

Arduino arduino;
int num= 20;
int pval;

void setup() {
  size(900, 500);
  arduino = new Arduino(this, "/dev/tty.usbmodem21401", 57600);
  frameRate(20);

}

void draw() {
  background(0);
  stroke(255);
  num = arduino.analogRead(5);
  for(int i=0; i < num; i++){
    line(random(0, width), random(0, height), random(0, width), random(0, height));
  }
  
}
