int led1=12;
int led2=11;
int led3=10;
int led4=9;


void setup() {
  pinMode(led1,OUTPUT);
  pinMode(led2,OUTPUT);
  pinMode(led3,OUTPUT);
  pinMode(led4,OUTPUT);
  Serial.begin(9600);


}

void loop() {
  if (Serial.available()>0)
  {
    String returndata;
    String data=Serial.readString();
    data.trim();
    
    if (data=="INFO")
    {
      returndata = String(digitalRead(led1))+','+String(digitalRead(led2))+','+String(digitalRead(led3))+','+String(digitalRead(led4));
      Serial.println(returndata);
    }
    if (data=="LED1ON")
    {
      digitalWrite(led1,HIGH);
      returndata = String(digitalRead(led1))+','+String(digitalRead(led2))+','+String(digitalRead(led3))+','+String(digitalRead(led4));
      Serial.println(returndata);
    }
    if (data=="LED1OFF")
    {
      digitalWrite(led1,LOW);
      returndata = String(digitalRead(led1))+','+String(digitalRead(led2))+','+String(digitalRead(led3))+','+String(digitalRead(led4));
      Serial.println(returndata);
    }
    if (data=="LED2ON")
    {
      digitalWrite(led2,HIGH);
      returndata = String(digitalRead(led1))+','+String(digitalRead(led2))+','+String(digitalRead(led3))+','+String(digitalRead(led4));
      Serial.println(returndata);
    }
    if (data=="LED2OFF")
    {
      digitalWrite(led2,LOW);
      returndata = String(digitalRead(led1))+','+String(digitalRead(led2))+','+String(digitalRead(led3))+','+String(digitalRead(led4));
      Serial.println(returndata);
    }
    if (data=="LED3ON")
    {
      digitalWrite(led3,HIGH);
      returndata = String(digitalRead(led1))+','+String(digitalRead(led2))+','+String(digitalRead(led3))+','+String(digitalRead(led4));
      Serial.println(returndata);
    }
    if (data=="LED3OFF")
    {
      digitalWrite(led3,LOW);
      returndata = String(digitalRead(led1))+','+String(digitalRead(led2))+','+String(digitalRead(led3))+','+String(digitalRead(led4));
      Serial.println(returndata);
    }
    if (data=="LED4ON")
    {
      digitalWrite(led4,HIGH);
      returndata = String(digitalRead(led1))+','+String(digitalRead(led2))+','+String(digitalRead(led3))+','+String(digitalRead(led4));
      Serial.println(returndata);
    }
    if (data=="LED4OFF")
    {
      digitalWrite(led4,LOW);
      returndata = String(digitalRead(led1))+','+String(digitalRead(led2))+','+String(digitalRead(led3))+','+String(digitalRead(led4));
      Serial.println(returndata);
    }
    if (data=="ALLOFF")
    {
      digitalWrite(led1,LOW);
      digitalWrite(led2,LOW);
      digitalWrite(led3,LOW);
      digitalWrite(led4,LOW);

      returndata = String(digitalRead(led1))+','+String(digitalRead(led2))+','+String(digitalRead(led3))+','+String(digitalRead(led4));
      Serial.println(returndata);
    }

  }
  
}
