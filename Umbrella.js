class Umbrella {
    constructor(x, y) {
      var options = {
        
        isStatic: true
      }

      this.body = Bodies.circle(x, y,50,options);
      this.image = loadImage("sprites/smoke.png");
      World.add(world, this.body);
    }

    display(){
     
      
      
      imageMode(CENTER);
      image(this.image, this.body.position.x,this.body.position.y,100,100);
     
    }

  }