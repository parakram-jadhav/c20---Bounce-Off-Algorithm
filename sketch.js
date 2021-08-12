var fixedRect,movingRect

function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(400,100, 50, 100);
  fixedRect.shapeColor="blue";
  fixedRect.velocityY = 5

  movingRect=createSprite(400,700,100,50);
  movingRect.shapeColor="blue"
  movingRect.velocityY=-5
}

function draw() {
  background(0,0,0);  

  if(movingRect.height/2 + fixedRect.height/2 >
    fixedRect.y - movingRect.y &&

    movingRect.height/2 + fixedRect.height/2 >
    movingRect.y -fixedRect.y
        ){
          fixedRect.velocityY = fixedRect.velocityY * (-1);
          movingRect.velocityY = movingRect.velocityY * (-1)
        }
  drawSprites();
}

