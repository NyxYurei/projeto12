var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
 pathImg = loadImage("path.png");
 boyImg = loadAnimation ("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path = createSprite (200, 200, 340, 400)
 path.addImage ("street", pathImg);
 path.scale=1.2;

 //crie um sprite de menino
 boy = createSprite (200, 300, 20, 20);
 boy.addAnimation ("runnin", boyImg);
 boy.scale=0.8;
  
 //crie um limite à esquerda
 leftBoundary = createSprite(0,0,100,800);
 leftBoundary.visible = false;

 //crie um limite à direita 
 rightBoundary = createSprite(410,0,100,800);
 rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX;



  edges= createEdgeSprites();
  boy.collide (edges[3]);
  boy.collide (leftBoundary)
  boy.collide (rightBoundary)
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
