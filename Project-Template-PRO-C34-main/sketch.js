const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero,monster,rope,ground;
arr=[]
function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 690, 1150, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 200, y: 60 });
  monster = new Monster(1100,550,300);

 /* for (var i=250;i<600;i+=60){
    arr.push(new box(600,i,60,60)	)
    }*/
    for (var i=200;i<600;i+=60){
      arr.push(new box(600,i,60,60)	)
      if(i!=250&&i!=0){
      arr.push(new box(700,i,60,60))
      if(i!=250&&i!=0){
      arr.push(new box(900,i,60,60))
      if(i!=250&&i!=0)	{
      arr.push(new box(800,i,60,60))
      }}}}
      
console.log(arr)
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  
  hero.display();
  rope.display();
  monster.display();
  for( var i=0;i<arr.length;i++){
    arr[i].display()
  }
}
function mouseDragged() {
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
  }
