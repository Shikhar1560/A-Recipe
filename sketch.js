
//1/4 cupNESTLÉ a+ nourish Milk
//150 gButter
//150 gPowdered Sugar
//3Eggs
//125 gMaida ( Flour)
//3-4 tbsp (25 g)Cocoa Powder
//1.5 tspBaking Powder
//1 tspVanilla Essence
//1/4 tin (100 g)NESTLÉ MILKMAID Sweetened Condensed Milk
//4 tbspCocoa Powder
//50 gButter
//HOW TO MAKE CHOCOLATE CAKE
//Preheat oven to 180⁰ C.  Lightly grease an 8” diameter baking tin and dust with flour.
 
//Sieve together maida, cocoa powder and baking powder. Keep aside.
 
//Soften butter in a bowl, add powdered sugar and beat well to a creamy consistency. Add Vanilla essence and mix. Slowly beat in the eggs one by one, then fold in the sieved maida mixture and mix well.  Add the NESTLÉ a+ nourish Milk and mix to get a dropping consistency.
 
//Pour the batter into the prepared baking tin and bake in the preheated oven for 40 -45 minutes or till tooth pick inserted in the center of the cake comes out clean.
 
//Remove from oven, cool for a while. Turn out over a wire rack or plate.
 
//For Fudge Icing: Mix together NESTLÉ MILKMAID Sweetened Condensed Milk, cocoa powder and butter and beat well. Microwave for 20 seconds, mix well.
 
//Spread over the cooled cake and leave to set. Slice and serve




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, polygon, ground;
var stand1, stand2;
var polygon;
var slingShot;
var polygon_img;
function preload() {
  polygon_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390, 300, 250, 10);
  stand2 = new Stand(700, 200, 200, 10);

  block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);

  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);

  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);
  block16 = new Block(390, 155, 30, 40);

  blocks1 = new Block(640, 175, 30, 40);
  blocks2 = new Block(670, 175, 30, 40);
  blocks3 = new Block(700, 175, 30, 40);
  blocks4 = new Block(730, 175, 30, 40);
  blocks5 = new Block(760, 175, 30, 40);

  blocks6 = new Block(670, 135, 30, 40);
  blocks7 = new Block(700, 135, 30, 40);
  blocks8 = new Block(730, 135, 30, 40);

  blocks9 = new Block(700, 95, 30, 40);


  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  slingShot = new Slingshot(this.polygon, { x: 100, y: 200 });

}
function draw() {
  background(56, 44, 44);


  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks", 300, 30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!", 650, 350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("purple");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("purple");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  slingShot.display();

}
function mouseDragged() {
  Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}
function keyPressed() {
  //write code for extra chance of the player
}
