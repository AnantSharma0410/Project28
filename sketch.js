const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone,ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var boy,boyImg;

function preload()
{
	boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,550);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	tree = new Tree(900,320,30,300);
	ground = new Ground(600,600,2000,20);
	mango1 = new Mango(900,250,30);
	mango2 = new Mango(800,200,30);
	mango3 = new Mango(800,280,30);
	mango4 = new Mango(1000,250,30);
	mango5 = new Mango(670,300,30);
	mango6 = new Mango(900,150,30);
	mango7 = new Mango(900,250,30);
	stone = new Stone(150,550,30);
	boyShot = new Shot(stone.body,{x:150,y:500});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");

  textSize(20);
  fill("red");
  text("Press Space to Take the Stone Back",100,20);

  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  boyShot.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    boyShot.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);

}
}