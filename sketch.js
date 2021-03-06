var fixedRect,MovingRect;
 function setup() { 
   createCanvas(800,400);
   fixedRect = createSprite(400, 20, 50, 80);
    fixedRect.shapeColor = "green";
    fixedRect.velocityY = +2
      MovingRect = createSprite(400,380,20,20);
      MovingRect.shapeColor = "green"; 
     MovingRect.velocityY = -2;
    }
      
      function draw() {
      background("black");
      // MovingRect.x = mouseX; MovingRect.y = mouseY;
      if(MovingRect.x - fixedRect.x < MovingRect.width/2 + fixedRect.width/2 &&
      fixedRect.x - MovingRect.x < MovingRect.width/2 + fixedRect.width/2 ){
        fixedRect.velocityX=fixedRect.velocityX*(-1);
        MovingRect.velocityX=MovingRect.velocityX*(-1);

      }
              if(MovingRect.y - fixedRect.y < MovingRect.height/2 + fixedRect.height/2 &&
               fixedRect.y - MovingRect.y < MovingRect.height/2 + fixedRect.height/2){
                fixedRect.velocityY=fixedRect.velocityY*(-1);
        MovingRect.velocityY=MovingRect.velocityY*(-1);  
                       } 
                       drawSprites();
                       }
