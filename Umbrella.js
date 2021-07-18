class Umbrella {
  constructor(x,y){
      var options = {
          isStatic: true,
      }
      this.image = loadImage("Walking Frame/walking_1.png");
      this.image = loadImage("Walking Frame/walking_2.png");
      this.image = loadImage("Walking Frame/walking_3.png");
      this.image = loadImage("Walking Frame/walking_4.png");
      this.image = loadImage("Walking Frame/walking_5.png");
      this.image = loadImage("Walking Frame/walking_6.png");
      
      this.body = Bodies.circle(x,y,50,options);
      this.r = 50;
      World.add(world, this.body)
  }

  display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y+70,300,300);
  }
}
