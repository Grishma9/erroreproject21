var canvas,surface1,surface2,surface3,surface4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1=createSprite(0,580,360,30);
    surface1.shapeColour="blue";
    /*surface2=createSprite(900,200,50,40);
    surface2.shapeColour="orange";
   surface3=createSprite(900,300,50,40);
    surface3.shapeColour="green";
    surface4=createSprite(900,400,50,40);
   surface4.shapeColour="pink";*/

    //create box sprite and give velocity

}

function draw() {
    background("grey");
    //create edgeSprite
 
drawSprites();
    //add condition to check if box touching surface and make it box
}
