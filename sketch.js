const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var ball;
var sling;

var bg = "Gainsboro";
var score = 0;

function setup() {
  var canvas = createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(690,265,250,10);
  ball = new Ball(200,150,50);
  block1 = new Block(630,235,30,40);
  block2 = new Block(660,235,30,40);
  block3 = new Block(690,235,30,40);
  block4 = new Block(720,235,30,40);
  block5 = new Block(750,235,30,40);
  block6 = new Block(660,195,30,40);
  block7 = new Block(690,195,30,40);
  block8 = new Block(720,195,30,40);
  block9 = new Block(690,155,30,40);
  sling = new Slingshot(ball.body, {x: 200, y: 50});
}

function draw() {
  background(bg);
  Engine.update(engine);

  text("Score = " + score, 750,40);

  ground.display();
  ball.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  sling.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}

function keyPressed() {
  if (keyCode == 32) {
    sling.attach(ball.body);
  }
}

function mouseReleased() {
  sling.fly();
}

async function getBgImage() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Australia/Melbourne");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);
  if (hour >= 6 && hour <= 19) {
    bg = "Gainsboro";
  } else {
    bg = "Dimgrey";
  }
}