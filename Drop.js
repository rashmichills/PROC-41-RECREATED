class Drop{
    constructor(x,y){
          var options = {
              friction:0.001,
              restituition:0.1,
                  
          }
          this.r = 7;
          this.rain = Bodies.circle(x, y, 7, options)
          World.add(world, this.rain);
          }

          showDrop(){
          fill("blue")
          
          ellipseMode(CENTER)
          ellipse(this.rain.position.x,this.rain.position.y,this.r, this.r)
          }

    updateY(){
          if(this.rain.position.y>height){
              Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
          }
    }

}