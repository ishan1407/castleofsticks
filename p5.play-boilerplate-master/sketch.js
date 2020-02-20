var box1,box2,box3,box4,box5;
var door;
function setup() { 
  createCanvas(1200,550);
  
  
  //base
  box1 = new brick(600,435,700,230);
  
  //leftpillar
  box2 = new brick(230,370,60,380);
  //right pillar
  box3 = new brick(930,370,60,380);
  box4 = new brick(600,270,500,100);
  box5 = new brick(600,170,300,100);
  
  door = createSprite(600,490,60,120);
  
  window1 = createSprite(450,280,50,80);
  window1.shapeColor = "black";
  window2 = createSprite(600,280,50,80);
  window2.shapeColor = "black";
  window3 = createSprite(750,280,50,80);
  window3.shapeColor = "black";
}

function draw() {
  background(0);  
  drawSprites();
}