
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var pend1,pend2,pend3,pend4,pend5;
var sling,sling2,sling3,sling4,sling5;


function setup() {
		createCanvas(1100,600);

		

		engine = Engine.create();
		world = engine.world;

    pend1 = new Pendulum(400,400,30,30);
    pend2 = new Pendulum(460,400,30,30);
    pend3 = new Pendulum(520,400,30,30);
    pend4 = new Pendulum(580,400,30,30);
    pend5 = new Pendulum(640,400,30,30);
		

    sling = new Sling(pend1.body,{x:400,y:80});
    sling2 = new Sling(pend2.body,{x:460,y:80});
    sling3 = new Sling(pend3.body,{x:520,y:80});
    sling4 = new Sling(pend4.body,{x:580,y:80});
    sling5 = new Sling(pend5.body,{x:640,y:80});

		

		Engine.run(engine); 


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  textSize(20);
  fill("white");
  text("Drag the first pendulum",20,40);

  pend1.display();
  pend2.display();
  pend3.display();
  pend4.display();
  pend5.display();
  sling.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

 
}

function mouseDragged(){
  Matter.Body.setPosition(pend1.body,{x:mouseX,y:mouseY});
}




