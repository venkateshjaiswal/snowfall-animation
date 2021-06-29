const Engine = Matter.Engine;
const World= Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var snow1;
var backgroundImg,platform;
var boyImg;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
  boyImg = loadImage("download.jpg");
}




function setup() {
  createCanvas(800,400);
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;


  //ground = new Ground(600,height,1200,20);
  

  //snow1 = new snow(300,200,600,344);
 // snow2 = new snow(446,326,700,100);
  //snow3 = new snow(336,555,234,222);
 // snow4 = new snow(400,600,331,333);
 // snow5 = new snow(500,300,221,110);
 var boy = createSprite(400, 300, 50, 50);
 boy.addImage(boyImg);
 boy.scale = 0.5;
}
function draw() {
  
  background(255,255,255);
  background(backgroundImg);
    Engine.update(engine);
    strokeWeight(3);
   // snow1.display();
   // snow2.display();
   // snow3.display();
   // snow4.display();
   // snow5.display();
   drawSprites();
}  
    

  




  



























































