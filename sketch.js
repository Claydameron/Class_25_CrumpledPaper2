//edited
var paper,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,652);
	dustbin = new Dustbin(1200,645);

	ground = Bodies.rectangle(width/2, 670, width, 20 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(192,192,192);
  paper.display();
  dustbin.display();
rect(ground.position.x,ground.position.y,width, 20)
	


  
  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-105});
}
}