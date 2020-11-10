const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,bodies;
var paperball,paper1;
var ground1;
var dustbin1;
var chain1,chain2,chain3,chain4;
var paper2,paper3,paper4;



function setup() {
  var canvas = createCanvas(400,400);
 
engine = Engine.create();
world = engine.world; 
bodies = Bodies.rectangle(200,100,50,50);
paper1 = new Paper(80,200,30);
paper2 = new Paper(100,250,30);
paper3 = new Paper(120,280,30);
paper4 = new Paper(280,320,30);
ground1 = new Ground(200,390,400,20);
dustbin1 = new Dustbin(200,100,250,20);
chain1 = new Chain(dustbin1.body,paper1.body);
chain2 = new Chain(dustbin1.body,paper2.body);
chain3 = new Chain(dustbin1.body,paper3.body);
chain4 = new Chain(dustbin1.body,paper4.body);
}

function draw() {
  background("white"); 
  Engine.update(engine);
rectMode(CENTER);
paper1.display();
ground1.display();
dustbin1.display();
chain1.display();
chain2.display();
chain3.display();
chain4.display();
paper3.display();
paper2.display();
paper4.display();

keypressed();
}
 function keypressed(){
   if(keyCode===UP_ARROW){
     Matter.Body.applyForce(paperball.Body.paperball.Body.position,{x:85,y:85})
   }
 }