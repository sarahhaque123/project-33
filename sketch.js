const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var backgroundimg,snowball,snowimg,snowball1,snowball2,snowimg2;
var snowball3 = [];
var x = 1;


function preload(){

  backgroundimg = loadImage("snow3.jpg");
  snowimg = loadImage("snow4.webp");
  snowimg2 = loadImage("snow5.webp")

}
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  for(var i = 0; i<10;i++){
  snowball = new Snow(Math.round(random(3,770)),0,1);
  snowball2 = new Snow(Math.round(random(3,770)),0,2);
  }



}

function draw() {
  background(backgroundimg);  

Engine.update(engine);
//for (var i = 0; i <10;i++){
snowball.display();
//}
//} else if (frameCount%5 === 3 ){
//snowball2.display()

//}


if(frameCount%5 === 0){
if(x===1){
  x = 2
} else{x = 1}


  snowball3.push(new Snow(Math.round(random(3,770)),0,x));

  
  
  }

 

if(snowball3!=null){
  for(var p = 0; p < snowball3.length; p++){ 

snowball3[p].display();
  }
}
 

 //snowball.body.velocity.Y = 10



  drawSprites();
}



