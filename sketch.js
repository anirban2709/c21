const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
  var plinko = [];
  
  var width = 10;

function setup() {
  createCanvas(400,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();
  divider = new Divider(80,720,10,90);
  divider2 = new Divider(160,720,10,90);
  divider3 = new Divider(240,720,10,90);
  divider4 = new Divider(320,720,10,90);
  
  for(var j = 40; j <= width; j=j+50){
    plinko.push(new Plinko(j,75,10));
  }
  
  for(var j = 40; j <= width-10; j=j+50){
    plinko.push(new Plinko(j,175,10));
  }
  
  for(var j = 40; j <= width-20; j=j+50){
    plinko.push(new Plinko(j,275,10));
  }
  
  for(var j = 40; j <= width-30; j=j+50){
    plinko.push(new Plinko(j,375,10));
  }
  
  for(var j = 40; j <= width-40; j=j+50){
    plinko.push(new Plinko(j,475,10));
  }
  
  for(var j = 40; j <= width-40; j=j+50){
    plinko.push(new Plinko(j,575,10));
  }
  
  for(var j = 40; j <= width-40; j=j+50){
    plinko.push(new Plinko(j,675,10));
  }

  if(frameCount%90 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

}

function draw() {
  background(0);  
 
  for(var j = 0; j < plinko.length; j++){
    plinko[j].display();
  }

  drawSprites();

  ground.display();
  divider.display();
  divider2.display();
  divider3.display();
  divider4.display();

  Engine.run(engine);
}