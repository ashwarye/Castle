const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Tower1, Tower2, Tower3, Tower4, Tower5;
var Main1, Main2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  Tower1 = new Tower(25, 150, 50, 300);
  Tower2 = new Tower(375, 150, 50, 300);
  Tower3 = new Tower(200, 175, 50, 375);
  Tower4 = new Tower(25, 325, 50,50);
  Tower5 = new Tower(375, 325, 50, 50);

  Main1 = new Main(75, 75, 150, 150);
  Main2 = new Main(325, 75, 150, 150);
}

function draw() {
  Engine.update(engine);

  background(255,255,255); 

  Tower1.display();
  Tower2.display();
  Tower3.display();
  Tower4.display();
  Tower5.display();

  Main1.display();
  Main2.display();

  drawSprites();
}
