class Rubber{
  constructor(x,y,width,height){
      var options={
          restitution:1,
          friction:1.0,
          density:2.0,
      }
      this.body =Matter.Bodies.circle(x, y, width, options);
      this.width = width;
      this.height = height;
      World.add(world,this.body)
  }
  display(){
      ellipse(this.body.position.x,this.body.position.y,this.width);
      translate(this.body.position.x, this.body.position.y);
      ellipseMode(CENTER);
      fill("yellow");
  }
}