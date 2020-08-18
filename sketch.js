const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops=[];
var maxDrops=100;

function preload(){
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

umbrella = new Umbrella(300,300);
for (var i = 0; i <maxDrops; i++) {
    drops.push(new Drops(random(0,1000),random(0,500)));
   
}
}

function draw(){
    
        background(0);
    Engine.update(engine);

   

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
       drops[i].update();
        
    }
   umbrella.display();
}

