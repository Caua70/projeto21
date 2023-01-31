  
var towerImg, tower;
var cascaImg, casca, cascaGroup;
var mario, marioImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  cascaImg = loadImage("cascadomario.jpg");
  mariobrosImg = loadImage("mariobros.jpg");
}

function setup() {
  createCanvas(600,600);

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  cascaGroup = new Group();
  invisibleBlockGroup = new Group();
  
  mario = createSprite(200,200,50,50);
  mario.scale = 0.3;
  mario.addImage("mario", marioImg);
}


function draw() {
  background(0);
 if(tower.y > 400){
      tower.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
      mario.x = mario.x - 3;


    }
    if(keyDown("right_arrow")){
  
      mario.x = mario.x + 3;

      
    }
    if(keyDown("up_arrow")){
  
      mario.velocityY = -10;


      
    }
  
    mario.velocityY = mario.velocityY + 0.8;
  
   
      //escreva uma condição para a torre de rolagem infinita
    
      spawncascas();

  
//escreva um código para fazer invisibleBlockGroup (grupo de bloco invisível) colidir com o fantasma, destruir o fantasma e mudar o estado do jogo para end.
     if(cascaGroup.isTouching(mario)){
      casca.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(mario) || mario.y > 600){
      mario.destroy()
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("red");
    fill("red");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawncascas()
 {

  if (frameCount % 240 === 0) {
    var casca = createSprite(200, -50);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = casca.width;
    invisibleBlock.height = 2;


    casca.x=random(120,400)
    invisibleBlock.x=casca.x
    casca.addImage(cascaImg);

    
    casca.velocityY = 1;
    invisibleBlock.velocityY = 1;
   
     
    mario.depth = casca.depth + 1


     casca.lifetime = 800;
     invisibleBlock.lifetime = 800;

    
     cascasGroup.add(casca);
     invisibleBlock.debug = true;
     invisibleBlockGroup.add(invisibleBlock);
  }
}

