const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,500,100);
  rope = new Rope(hero.body, { x: 300, y: 50 });
  monster = new Monster(1100,550,200);

  box1 = new Box(620, 100, 70, 70);
  World.add(world, box1);
  box2 = new Box(620, 100, 70, 70);
  World.add(world, box2);
  box3 = new Box(620, 100, 70, 70);
  World.add(world, box3);
  box4 = new Box(620, 100, 70, 70);
  World.add(world, box4);
  
  box5 = new Box(750, 100, 70, 70);
  World.add(world, box5);
  box6 = new Box(750, 100, 70, 70);
  World.add(world, box6);
  box7 = new Box(750, 100, 70, 70);
  World.add(world, box7);
  box8 = new Box(750, 100, 70, 70);
  World.add(world, box8);

  box9 = new Box(900, 100, 70, 70);
  World.add(world, box5);
  box10 = new Box(900, 100, 70, 70);
  World.add(world, box6);
  box11= new Box(900, 100, 70, 70);
  World.add(world, box7);
  box12= new Box(900, 100, 70, 70);
  World.add(world, box8);
}

function draw() {
  background(bg);
  Engine.update(engine);

  if(monster.y>=570){
    textSize(60);
    fill("blue")
    textFont("Algerian")
    text("YOU WON",600,200);
  }

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  hero.display();
  rope.display();
  monster.display();


}

function mouseDragged(){
  
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  }


function mouseReleased(){
  rope.fly();
}


