var gardenImage;
var catImage,cat2Image;
var mouseImage,mouse2Image;

function preload() {
     gardenImage = loadImage("garden.png");
   
  catImage=loadImage("cat1.png")
  cat2Image=loadAnimation("cat2.png","cat3.png","cat4.png")
  
mouseImage=loadImage("mouse1.png");
  
mouse2Image=loadAnimation("mouse2.png","mouse3.png","mouse4.png");  

}

function setup(){
createCanvas(1000,800);

cat = createSprite(470,330,20,20);
cat.addAnimation("catRunning",catImage);
cat.scale=0.15;

mouse = createSprite(300,330,20,20);
mouse.addAnimation("mouseRunning",mouseImage);
mouse.scale=0.1;

    
}

function draw() {
background(gardenImage);

drawSprites();    
}


function keyPressed(){

 if(keyCode === LEFT_ARROW){
   cat.velocityX = -5;
   cat.addAnimation("catRunning",cat2Image);
   
   cat.changeAnimation("catRunning");
   
   mouse.addAnimation("mouseTeasing",mouse2Image);
   mouse.frameDelay = 25;
   
   mouse.changeAnimation("mouseTeasing",mouse2Image);
 }
  
  if(keyCode === RIGHT_ARROW){
   cat.velocityX = 5;
   cat.addAnimation("catRunning",cat2Image);
   
   cat.changeAnimation("catRunning");
   
   mouse.addAnimation("mouseTeasing",mouse2Image);
   mouse.frameDelay = 25;
   
   mouse.changeAnimation("mouseTeasing",mouse2Image);
 }
  
  if(keyCode === UP_ARROW){
   cat.velocityY = -5;
   cat.addAnimation("catRunning",cat2Image);
   
   cat.changeAnimation("catRunning");
   
   mouse.addAnimation("mouseTeasing",mouse2Image);
   mouse.frameDelay = 25;
   
   mouse.changeAnimation("mouseTeasing",mouse2Image);
 }
  
  if(keyCode === DOWN_ARROW){
   cat.velocityY = 5;
   cat.addAnimation("catRunning",cat2Image);
   
   cat.changeAnimation("catRunning");
   
   mouse.addAnimation("mouseTeasing",mouse2Image);
   mouse.frameDelay = 25;
   
   mouse.changeAnimation("mouseTeasing",mouse2Image);
 }
  
 
}