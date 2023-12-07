const int forwardPin1 = 8;
const int backwardPin1 =12;
const int forwardPin2 = 7;
const int backwardPin2 =11;
const int delayTime = 1300;
const int unwindDelayTime = 400;

void setup() {
  pinMode(forwardPin1, OUTPUT);
  pinMode(backwardPin1, OUTPUT);
  pinMode(forwardPin2, OUTPUT);
  pinMode(backwardPin2, OUTPUT);
}

void loop() {
  triangle();
}

function randState(){

}

function triangle(){
  //stop
  digitalWrite(forwardPin1, LOW);
  digitalWrite(backwardPin1, LOW);
  digitalWrite(forwardPin2, LOW);
  digitalWrite(backwardPin2, LOW);
  delay(delayTime);

  //upper spin forward
  digitalWrite(forwardPin2, HIGH);
  digitalWrite(backwardPin2, LOW);
  // digitalWrite(forwardPin1, LOW);
  // digitalWrite(backwardPin1, HIGH);
  delay(delayTime);

  //stop
  digitalWrite(forwardPin1, LOW);
  digitalWrite(backwardPin1, LOW);
  // digitalWrite(forwardPin2, HIGH);
  // digitalWrite(backwardPin2, HIGH);
  delay(delayTime);

//upper spin backwards
  digitalWrite(forwardPin2, LOW);
  digitalWrite(backwardPin2, HIGH);
  delay(unwindDelayTime);

//stop upper
digitalWrite(forwardPin2, HIGH);
  digitalWrite(backwardPin2, HIGH);
  // delay(delayTime);

  //lower spin forwards
  digitalWrite(forwardPin1, LOW);
  digitalWrite(backwardPin1, HIGH);
  delay(delayTime);

//   //lower stop
   digitalWrite(forwardPin1, LOW);
  digitalWrite(backwardPin1, LOW);
  delay(delayTime);

//   //lower spin backwards
  digitalWrite(forwardPin1, HIGH);
  digitalWrite(backwardPin1, LOW);
  delay(unwindDelayTime);
}
