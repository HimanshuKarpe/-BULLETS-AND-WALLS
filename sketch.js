var bullet, wall;
var speed, weight, thickness;
var bulletRightEdge, wallLeftEdge;
var lbullet, lwall;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,600,20,20);
  bullet.shapColor=color(255,255,255)

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80); 
}

function draw() {
  background(0,255,255); 
  
  speed=random(223,321);
  weight=random(32,52);
  thickness=random(22,83);

  bullet.velocityX=speed;
     
    if(wall.x-bullet.x*bullet.width+wall.width/2)
    {
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
    if(damage>10)
    {
      wall.shapColor=color(255,0,0);
    }
  
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }

  hascollided();

  drawSprites();
}

function hascollided(lbullet,lwall)
{
  bulletRightEdge.lbullet.x+lbullet.width;
  wallLeftEdge.wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false;
}