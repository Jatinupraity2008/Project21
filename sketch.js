var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(120,130);
  weight = random(30,52);
  thickness = random(22,50)
  bullet = createSprite(10,200,50,10);
  bullet.shapeColor = ("black");
  wall = createSprite(1200, 200,thickness,height/2);
  wall.shapeColor = (80,0,0);
  
}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;

   if(hascollided(bullet,wall))
   {
     bullet.velocityX=0;
     var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);

      if(damage>10)
      {
      wall.shapeColor = color(0,250,0);
      }
      if(damage<10 )
      {
       wall.shapeColor = color(255,0,0);
      }
   }
  
  drawSprites();
}
 function hascollided(Lbullet,Lwall){
   bulletRightEdge=Lbullet.x+Lbullet.width;
   wallLeftEdge=Lwall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true;
   }
   return false;
 }