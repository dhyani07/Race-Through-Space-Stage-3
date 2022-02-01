var spaceShip,spaceShipImage;
var ISS, ISSImage;
var Alien, AlienImage;
var Energy, EnergyImage;

var Mercury, MercuryImage;
var Venus, VenusImage;
var Earth, EarthImage;
var Mars, MarsImage;
var Jupiter1, JupiterImage;
var Saturn, SaturnImage;
var Uranus, UranusImage;
var Neptune, NeptuneImage;

var gameState = 1;


function preload (){
    bgImage = loadImage("Images/BackgroundImage.gif");
    spaceShipImage = loadImage("Images/MainCharacter.png");
    ISSImage = loadImage("Images/DestinationImage.png");
    AlienImage = loadAnimation("Images/Enemy2Image.png", "Images/Enemy1Image.png");
    EnergyImage = loadImage("Images/EnergyImage.png");

    MercuryImage = loadImage("Images/MercuryImg.png");
    VenusImage = loadImage("Images/VenusImg.png");
    EarthImage = loadImage("Images/EarthImg.png");
    MarsImage = loadImage("Images/MarsImg.png");
    JupiterImage = loadImage("Images/JupiterImg.png");
    SaturnImage = loadImage("Images/SaturnImg.png");
    UranusImage = loadImage("Images/UranusImg.png");
    NeptuneImage = loadImage("Images/NeptuneImg.png");
}

function setup (){
    createCanvas (1000,600);
    spaceShip = createSprite(80,560,40,40);
    spaceShip.addImage("SpaceshipImage", spaceShipImage);
    spaceShip.scale = 0.1;

    ISS = createSprite(880,75,40,40);
    ISS.addImage("ISS", ISSImage);
    ISS.scale = 0.3;

    Alien = createSprite(350,150,40,40);
    Alien.addAnimation("Alien", AlienImage);
    Alien.scale = 0.15;


    Mercury = createSprite(420,530,40,40);
    Mercury.addImage("Mercury", MercuryImage);
    Mercury.scale = 0.07;

    Venus = createSprite(280,360,40,40);
    Venus.addImage("Venus", VenusImage);
    Venus.scale = 0.07;

    Earth = createSprite(260,130,40,40);
    Earth.addImage("Earth", EarthImage);
    Earth.scale = 0.04;

    Mars = createSprite(557,111,40,40);
    Mars.addImage("Mars", MarsImage);
    Mars.scale = 0.1;

    Jupiter= createSprite(572,299,40,40);
    Jupiter.addImage("Jupiter", JupiterImage);
    Jupiter.scale = 0.3;

    Saturn = createSprite(774,429,40,40);
    Saturn.addImage("Saturn", SaturnImage);
    Saturn.scale = 0.15;

    Uranus = createSprite(85,225,40,40);
    Uranus.addImage("Uranus", UranusImage);
    Uranus.scale = 0.04;

    Neptune = createSprite(800,226,40,40);
    Neptune.addImage("Neptune", NeptuneImage);
    Neptune.scale = 0.05;

    Energygroup = new Group();
}


function draw (){
    background (bgImage);
    text(mouseX + "," + mouseY, mouseX, mouseY);
    
    if (gameState == 1){
        if (keyIsDown(RIGHT_ARROW)){
            spaceShip.x = spaceShip.x + 2;
        }

        if (keyIsDown(LEFT_ARROW)){
            spaceShip.x = spaceShip.x - 2;
        }

        if (keyIsDown(UP_ARROW)){
            spaceShip.y = spaceShip.y - 2;
        }

        if (keyIsDown(DOWN_ARROW)){
            spaceShip.y = spaceShip.y + 2;
        }

        spawnEnergy();

        if (spaceShip.isTouching(Energy)){
            Energygroup.destroyEach();
        }
    }
    else if (gameState == 0){
        text("Game Over");
    }


    
    drawSprites();
}

function spawnEnergy() {

    if (World.frameCount%60 === 0)
      {
      //rand = Math.round(random(80,120));
      Energy = createSprite(600,120,10,10);
      Energy.x = Math.round(random(100,900));
      Energy.y = Math.round(random(100,500));
      //console.log(rand);
      Energy.addImage ("Energy", EnergyImage);
      Energy.scale = 0.1;
      //Energy.velocityX = -5;
      //trex.depth = Energy.depth +  1;
      //Energy.lifetime = 150;
      Energygroup.add(Energy);
      }
    }