var xen,hraikurum,poison_mushrooms,obstacle_group,obstacle;

spawnobstacle;

function preload(){ 

}
function setup(){
  createCanvas(1536,600)
 xen = createSprite(50,580,20,20)
 hraikurum = createSprite(1520,580,20,20)
 poison_mushrooms= createSprite(1000,580,20,20)
 
}
function draw(){
  background(20,255,200)
drawSprites();
}
function spawnobstacle(){
  if(frameCount % 80===0){
    obstacle = createSprite()


  }
}