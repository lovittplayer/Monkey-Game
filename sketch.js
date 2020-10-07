
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,play = 1, end = 0,win = 2 ,gameState  = play;
var score = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);

  monkey = createSprite(50,150,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  
  ground = createSprite(300,190,600,10);

  obstacleGroup = createGroup();
   FoodGroup = createGroup();
}


function draw() {
 background("white");
   text("Score: "+ score, 300,20); 
  
  
  monkey.velocityY = 5; 
      monkey.collide(ground);
      
  if (gameState === play){
  
    if(keyDown("space")&& monkey.y <160  ) {
        monkey.velocityY = -4;                     
      }                     
      if(FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach(); 
      score = score+5; 
      }
  
  
  if (gameState === end){  
  obstacleGroup.destroyEach();
  FoodGroup.destroyEach();
    monkey.visible = false;
    
    text("YOU LOSE", 300,100);
  }
  
  
    drawSprites();
    spawnObstacles() 
    spawnBananas();
    
}        
function spawnObstacles(){
 if (frameCount % 55=== 0){
var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -10 
    obstacle.addImage(obstaceImage);
  obstacle.scale = 0.1 ;
   obstacleGroup.add(obstacle);
    }

} 
function spawnBananas(){
 if (frameCount % 40 === 0){
var bananas = createSprite(600,50,10,40);
   bananas.velocityX = -10     
   bananas.addImage(bananaImage);
  bananas.scale = 0.1;
   FoodGroup.add(bananas);
    }
} 





}