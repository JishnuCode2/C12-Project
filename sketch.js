
//creating variables
var boy, boy_running;
var path, path_img;
var invisiblewall1, invisiblewall2,edges;




function preload(){      
   //pre-loading images
      boy_running = loadAnimation("Runner-1.png","Runner-2.png");
      path_img = loadImage("path.png");
}




function setup(){
      //creating the canvas
      createCanvas(400,400);


      //create the path and adding image and scale
      path = createSprite(200,200);
      path.addImage("path", path_img);
      path.scale=1.2


      //creating the runner and adding animation and scale
      boy = createSprite(200,330,20,20);
      boy.addAnimation("boy running", boy_running);
      boy.scale=0.06;


      //creating the invisible walls
      invisiblewall1 = createSprite(-10,200,40,400);
      invisiblewall1.visible=false;
      invisiblewall2 = createSprite(410,200,40,400);
      invisiblewall2.visible=false;


      //creating the edges
      edges = createEdgeSprites();
}




function draw() {
      //setting the background
      background(0);


      //making the runner move with the mouse
      boy.x = World.mouseX;


      //making the boy collide with the walls and edges
      boy.collide(invisiblewall1);
      boy.collide(invisiblewall2);
      boy.collide(edges);


      // setting the velocityY of the path 
      path.velocityY=4;
    

      //making the path reset
     if(path.y>400){
          path.y=-100;
      }


      //displaying the sprites on the screen
      drawSprites();

}



