var bg,issimg,seimg1,seimg2,seimg3,seimg4;
var hasDocked=false;
function preload(){
  bg=loadImage("spacebg.jpg");
  issimg=loadImage("iss.png");
  seimg1=loadImage("spacecraft1.png");
  seimg2=loadImage("spacecraft2.png");
  seimg3=loadImage("spacecraft3.png");
  seimg4=loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(800,400);
  spacecraft=createSprite(285, 240, 50, 50);
  spacecraft.addImage("se1",seimg1);
  spacecraft.scale=0.15;
  iss=createSprite(330,200);
  iss.addImage(issimg);
  iss.scale=0.5;

}

function draw() {
  background(bg);  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
    if(keyDown (UP_ARROW)){
      spacecraft.y=spacecraft.y-2;
    }
    if(keyDown (LEFT_ARROW)){
      spacecraft.x=spacecraft.x-1;
      spacecraft.addImage(seimg4);
    }
    if(keyDown (RIGHT_ARROW)){
      spacecraft.x=spacecraft.x+1;
      spacecraft.addImage(seimg3);
    }
    if(keyDown (DOWN_ARROW)){
     // spacecraft.x=spacecraft.x-1;
      spacecraft.addImage(seimg2);
    }
  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(25);
    fill("white");
    text("Docking Succesfull",200,300);
    
  }
  drawSprites();
}