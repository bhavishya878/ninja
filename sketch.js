var  particles=[];
var  plinkos=[];
var  divisions=[];
var divisonHeight=300;
var score=0;

function setup() {
  createCanvas(800,400);
  createSprite(400, 400, 800, 10);


  Engine = engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);



  for(var k=0; k <=width; k = k + 80){
    divisions.push(new Divisions( k,height - divisonHeight/2,10,divisonHeight));
  }


  for(var j=75;j<=width;j=j+50){
    Plinkos.push(new Plinkos(j,75));
  }

  for(var j=50;j<=width;j=j+50){
   Plinkos.push(new Plinkos(j,175));
  }

  for(var j=75;j<=width;j=j+50){
    Plinkos.push(new Plinkos(j,275));
  }

  for(var j=50;j<=width;j=j+50){
   Plinkos.push(new Plinkos(j,375));
  }
}

function draw() {
  background(255,255,255); 
  
  drawSprites();
}
function display(){
  
}