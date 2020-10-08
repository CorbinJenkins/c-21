var movingOval,fixedOval;

var oval1,oval2;



function setup() {
  createCanvas(800,400);
  movingOval = new Sprite(700,200,50,30);
  fixedOval = new Sprite(100,200,30,50);
  movingOval.shapeColor= "green";
  fixedOval.shapeColor= "green";

  oval1 = new Sprite(100,300,50,50);
  oval2 = new Sprite(700,300,50,50);
  oval1.vx=4;
  oval2.vx=-4;
  oval2.shapeColor="cyan";
  oval1.shapeColor = "purple";
}

function draw() {
  background(0);  

  movingOval.y=mouseY;
  movingOval.x=mouseX;
  
  movingOval.display();
  fixedOval.display();
  oval1.display();
  oval2.display();
  
  if(movingOval.isTouching(fixedOval)){
    movingOval.shapeColor="yellow";
    fixedOval.shapeColor = "yellow";
  }
  else{
    movingOval.shapeColor="green";
    fixedOval.shapeColor = "green";

  }
  oval2.bounceOff(oval1);
  
  
}

