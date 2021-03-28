var canvas;
var music;
var surfaces1,surfaces2,surfaces3,surfaces4, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box=createSprite(random(20,750),17,17);
    box.shapeColor="white"
    box.velocityY=2;
    box.velocityX=4;

    //create 4 different surfaces
    surfaces1=createSprite(150,500,150,10);
    surfaces1.shapeColor="blue";

    surfaces2=createSprite(300,500,150,10);
    surfaces2.shapeColor="red";

    surfaces3=createSprite(450,500,150,10);
    surfaces3.shapeColor="green";
   
    surfaces4=createSprite(600,500,150,10);
    surfaces4.shapeColor="yellow";
    
}

function draw() {
    background(0);
    //create edgeSprite
    
      edges=createEdgeSprites();
     box.bounceOff(edges)

    //add condition to check if box touching surface and make it box
    if (box.isTouching(surfaces1)&& box.bounceOff(surfaces1)){
        box.shapeColor = "blue"
        music.play()
    }

    if (box.isTouching(surfaces2)&& box.bounceOff(surfaces2)){
        box.shapeColor = "red"
        music.play()
    }
    if (box.isTouching(surfaces3)&& box.bounceOff(surfaces3)){
        box.shapeColor = "green"
        music.play()
    }
    if (box.isTouching(surfaces4)&& box.bounceOff(surfaces4)){
        box.shapeColor = "yellow"
        music.play()
    }


    drawSprites();
}

