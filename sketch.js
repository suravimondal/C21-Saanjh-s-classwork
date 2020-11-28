var fixedRect, movingRect;
var car, wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car= createSprite(80,100,50,50);
car.shapeColor= "blue";
  wall= createSprite(700,100,20,100);
  wall.shapeColor= "purple";
  car.velocityX= 4;
}

function draw() {
  background(0,0,0);  
 movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(IS_TOUCHING(movingRect,wall)){
  movingRect.shapeColor= "cyan";
  textSize(30);
  text("TOUCHED!!",180,200);
}

BOUNCEOFF(car, wall);
COLLIDE(car, wall);
  drawSprites();
}

