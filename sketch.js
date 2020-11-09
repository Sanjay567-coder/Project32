const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var bg = "bg.png";
var polygon_img;
var backgroundImg;
var score = 0;
 
function preload(){
  polygon_img=loadImage("hexagon (1).png");
  getTime();
}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);
  //level two
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  //level three
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  //level four
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  //level five
  block21 = new Block(385,115,30,40);

  //set two 
  //level one
  block22 = new Block(640,175,30,40);
  block23 = new Block(670,175,30,40);
  block24 = new Block(700,175,30,40);
  block25 = new Block(730,175,30,40);
  block26 = new Block(760,175,30,40);
  //level two
  block27 = new Block(670,135,30,40);
  block28 = new Block(700,135,30,40);
  block29 = new Block(730,135,30,40);
  //level three
  block30 = new Block(700,95,30,40);

  //ball  with slings
  ball = Bodies.circle(200,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
 }
 noStroke();
    textSize(35);
    fill("white");  
    text("Score : "+score,width-250,50);

  Engine.update(engine);
  
  strokeWeight(2)
  stroke("black")
  textSize(25);
  fill("red");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",40,340);

  
 // ground.display();
  strokeWeight(2);
  stroke(15);
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("yellow");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  fill("red");
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  fill("white");  
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("blue");  
  block19.display();
  block20.display();
  fill(73,207,193);
  block21.display();

  fill("yellow");
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  fill("red");
  block27.display();
  block28.display();
  block29.display();
  fill("white")
  block30.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x-50,ball.position.y-80,40,40);

  slingShot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();

  if(score===600){
    textSize(40);
    fill("gold");
    stroke("black");
    text("U Have destroyed all the BLOCKS",150,200);
    text("U ARE THE WINNER",300,300)
  }

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyIsPressed===true){
    slingShot.attach(ball.body);
  }
}

async function getTime(){   
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hourTime = dateTime.slice(11,13);

  if(hourTime <= 06 && hourTime >= 18 ){
      bg = "bg2.jpg"; 
  }   

  else{
      bg = "bg.png";  
  }
  backgroundImg = loadImage(bg);
}