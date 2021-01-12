var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed     = random(223,321);
  weight    = random(30,52);
  thickness = random(22,83);

  bullet  = createSprite(50, 150, 30, 30);
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "maroon";
  
  bullet.velocityX = speed;
}

function draw() {
  background("black"); 

  if (hasCollided(bullet,wall)) {

    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = "red";
      textSize(30);
      stroke("red");
      fill("red");
      text("WARNING: Wall is EFFECTIVE against the bullet", 220,150);
      
    }

    if (damage < 10) {
      wall.shapeColor = "green";
      textSize(30);
      stroke("green");
      fill("green");
      text("Wall is NOT effective against the bullet", 220,150);
    }

  }

  drawSprites();
}

function hasCollided(lbullet, lwall) {

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge    = lwall.x;

  if(bulletRightEdge >= wallLeftEdge) {
  return true;
  }

  return false;

}