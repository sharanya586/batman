class Drops {
    constructor(x, y) {
      var options = {
        'restitution': 1,
        'friction': 0.1,
        'isStatic': false
      }

      this.r=10;
      this.body = Bodies.circle(x, y,this.r, options);
     // this.color=color("white") 
      World.add(world, this.body);
    }

    display(){
    
      fill("white");
      ellipseMode(CENTER);
      ellipse(this.body.position.x,this.body.position.y,2, this.r);
      
    }
update(){
  
    
    if(this.body.position.y > 400){

        Matter.Body.setPosition(this.body, {x:random(0,1200), y:0})
    
}
}
  }