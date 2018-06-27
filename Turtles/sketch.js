var numTurtles=12;
let turtles=[];
let shore;
function preload(){
  shore = loadImage('images/shoreline.jpg');
}
function setup() {
createCanvas(displayWidth,displayHeight);
for(var i=0;i<numTurtles;i++){
var roll=Math.trunc(random(45));
if(roll==1)
{
var n=2;
var d=1;
}
if(roll==2)
{
var n=3;
var d=1;
}
if(roll==3)
{
var n=4;
var d=1;
}
if(roll==4)
{
var n=5;
var d=1;
}
if(roll==5)
{
var n=6;
var d=1;
}
if(roll==6)
{
var n=7;
var d=1;
}
if(roll==7)
{
var n=3;
var d=2;
}
if(roll==8)
{
var n=4;
var d=2;
}
if(roll==9)
{
var n=5;
var d=2;
}
if(roll==10)
{
var n=7;
var d=2;
}
if(roll==12)
{
var n=2;
var d=3;
}
if(roll==13)
{
var n=4;
var d=3;
}
if(roll==14)
{
var n=5;
var d=3;
}
if(roll==15)
{
var n=7;
var d=3;
}
if(roll==16)
{
var n=1;
var d=4;
}
if(roll==17)
{
var n=3;
var d=4;
}
if(roll==18)
{
var n=5;
var d=4;
}
if(roll==19)
{
var n=6;
var d=4;
}
if(roll==20)
{
var n=7;
var d=4;
}
if(roll==21)
{
var n=2;
var d=5;
}
if(roll==22)
{
var n=4;
var d=5;
}
if(roll==23)
{
var n=6;
var d=5;
}
if(roll==24)
{
var n=7;
var d=5;
}
if(roll==25)
{
var n=1;
var d=6;
}
if(roll==26)
{
var n=4;
var d=6;
}
if(roll==27)
{
var n=5;
var d=6;
}
if(roll==28)
{
var n=7;
var d=6;
}
if(roll==29)
{
var n=2;
var d=7;
}
if(roll==30)
{
var n=3;
var d=7;
}
if(roll==31)
{
var n=4;
var d=7;
}
if(roll==32)
{
var n=5;
var d=7;
}
if(roll==33)
{
var n=6;
var d=7;
}
if(roll==34)
{
var n=1;
var d=8;
}
if(roll==35)
{
var n=2;
var d=8;
}
if(roll==36)
{
var n=3;
var d=8;
}
if(roll==37)
{
var n=5;
var d=8;
}
if(roll==38)
{
var n=6;
var d=8;
}
if(roll==39)
{
var n=7;
var d=8;
}
if(roll==40)
{
var n=2;
var d=9;
}
if(roll==41)
{
var n=4;
var d=9;
}
if(roll==42)
{
var n=5;
var d=9;
}
if(roll==43)
{
var n=6;
var d=9;
}
if(roll==44)
{
var n=7;
var d=9;
}

turtles[i]= new Turtle(random(100,displayWidth-100),random(50,displayHeight-50),random(1,2),n,d);
}
print(roll);
}

function draw() {
background(0);
image(shore,0,0,displayWidth,displayHeight);
for(var i=0; i<turtles.length;i++)
{
turtles[i].show();
turtles[i].move();
}
}
class Turtle
{
  constructor(x,y,size,n,d){
    this.x=x;
    this.y=y;
    this.size=size;
    this.topFlip=40;//top variable for the top flippers
    this.bottomFlip=220;//bottom variable for the bottom flippers
    this.topUp=true;
    this.bottomUp=true;
    this.n=n;
    this.d=d;
    this.k=this.n/this.d;
  }

show(){
   if(this.topUp)
  {
  if(this.topFlip>=20)
  {
  this.topFlip-=.5;
  }
  if(this.topFlip<20)
  {
    this.topUp=false;
  }
  }
  if(this.topUp==false)
  {
    if(this.topFlip<=40)
    {
    this.topFlip+=.5;
    }
    if(this.topFlip>40)
    {
      this.topUp=true;
    }
  }
  /////////////////////////////
  if(this.bottomUp)
 {
 if(this.bottomFlip>=200)
 {
 this.bottomFlip-=.5;
 }
 if(this.bottomFlip<200)
 {
   this.bottomUp=false;
 }
 }
 if(this.bottomUp==false)
 {
   if(this.bottomFlip<=220)
   {
   this.bottomFlip+=.5;
   }
   if(this.bottomFlip>220)
   {
     this.bottomUp=true;
   }
 }
 ///////////////////////////////
  ellipseMode(CENTER);
  noStroke();
  fill(0,255,0);
  ellipse(this.x,this.y-50/this.size,40/this.size,60/this.size);//Head
  fill(0);
  ellipse(this.x-7/this.size,this.y-70/this.size,8/this.size,8/this.size);//left eye
  ellipse(this.x+7/this.size,this.y-70/this.size,8/this.size,8/this.size);//right eye
  push();//right top Flipper
  translate(this.x,this.y);
  rotate(radians(this.topFlip));
  fill(0,255,0);
  ellipse(10/this.size,-55/this.size,20/this.size,50/this.size);
  pop();

  push();//right bottom Flipper
  translate(this.x,this.y);
  rotate(radians(-this.bottomFlip));
  fill(0,255,0);
  ellipse(-10/this.size,-55/this.size,20/this.size,50/this.size);
  pop();

  push();//left top Flipper
  translate(this.x, this.y);
  rotate(radians(-this.topFlip));
  fill(0,255,0);
  ellipse(-10/this.size,-55/this.size,20/this.size,50/this.size);
  pop();

  push();//left bottom Flipper
  translate(this.x,this.y);
  rotate(radians(this.bottomFlip));
  fill(0,255,0);
  ellipse(10/this.size,-55/this.size,20/this.size,50/this.size);
  pop();


  //////////////////////////
  rectMode(CENTER);
  noStroke();
  fill(113,90,52);
  rect(this.x,this.y,100/this.size,110/this.size,150/this.size,100/this.size,140/this.size,140/this.size);//Shell of Body
  push();
  translate(this.x,this.y);
  beginShape();
  stroke(255);
  strokeWeight(1);
  noFill();
  for(var i=0;i<TWO_PI*this.d;i+=.05)
  {
    var r=(50/this.size)*cos(this.k*i);
    var x1=r*cos(i);
    var y1=r*sin(i);
    vertex(x1,y1);
  }
  endShape(CLOSE);
  pop();
}

move(){
  this.y-=1;
  if(this.y<-60)
  {
    this.x=random(10,displayWidth-10);
    var roll=Math.trunc(random(45));
    if(roll==1)
    {
    this.n=2;
    this.d=1;
    }
    if(roll==2)
    {
    this.n=3;
    this.d=1;
    }
    if(roll==3)
    {
    this.n=4;
    this.d=1;
    }
    if(roll==4)
    {
    this.n=5;
    this.d=1;
    }
    if(roll==5)
    {
    this.n=6;
    this.d=1;
    }
    if(roll==6)
    {
    this.n=7;
    this.d=1;
    }
    if(roll==7)
    {
    this.n=3;
    this.d=2;
    }
    if(roll==8)
    {
    this.n=4;
    this.d=2;
    }
    if(roll==9)
    {
    this.n=5;
    this.d=2;
    }
    if(roll==10)
    {
    this.n=7;
    this.d=2;
    }
    if(roll==12)
    {
    this.n=2;
    this.d=3;
    }
    if(roll==13)
    {
    this.n=4;
    this.d=3;
    }
    if(roll==14)
    {
    this.n=5;
    this.d=3;
    }
    if(roll==15)
    {
    this.n=7;
    this.d=3;
    }
    if(roll==16)
    {
    this.n=1;
    this.d=4;
    }
    if(roll==17)
    {
    this.n=3;
    this.d=4;
    }
    if(roll==18)
    {
    this.n=5;
    this.d=4;
    }
    if(roll==19)
    {
    this.n=6;
    this.d=4;
    }
    if(roll==20)
    {
    this.n=7;
    this.d=4;
    }
    if(roll==21)
    {
    this.n=2;
    this.d=5;
    }
    if(roll==22)
    {
    this.n=4;
    this.d=5;
    }
    if(roll==23)
    {
    this.n=6;
    this.d=5;
    }
    if(roll==24)
    {
    this.n=7;
    this.d=5;
    }
    if(roll==25)
    {
    this.n=1;
    this.d=6;
    }
    if(roll==26)
    {
    this.n=4;
    this.d=6;
    }
    if(roll==27)
    {
    this.n=5;
    this.d=6;
    }
    if(roll==28)
    {
    this.n=7;
    this.d=6;
    }
    if(roll==29)
    {
    this.n=2;
    this.d=7;
    }
    if(roll==30)
    {
    this.n=3;
    this.d=7;
    }
    if(roll==31)
    {
    this.n=4;
    this.d=7;
    }
    if(roll==32)
    {
    this.n=5;
    this.d=7;
    }
    if(roll==33)
    {
    this.n=6;
    this.d=7;
    }
    if(roll==34)
    {
    this.n=1;
    this.d=8;
    }
    if(roll==35)
    {
    this.n=2;
    this.d=8;
    }
    if(roll==36)
    {
    this.n=3;
    this.d=8;
    }
    if(roll==37)
    {
    this.n=5;
    this.d=8;
    }
    if(roll==38)
    {
    this.n=6;
    this.d=8;
    }
    if(roll==39)
    {
    this.n=7;
    this.d=8;
    }
    if(roll==40)
    {
    this.n=2;
    this.d=9;
    }
    if(roll==41)
    {
    this.n=4;
    this.d=9;
    }
    if(roll==42)
    {
    this.n=5;
    this.d=9;
    }
    if(roll==43)
    {
    this.n=6;
    this.d=9;
    }
    if(roll==44)
    {
    this.n=7;
    this.d=9;
    }
    this.k=this.n/this.d;
    this.y=displayHeight+60;
  }
}

}
