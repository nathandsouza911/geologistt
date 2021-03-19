class Rubber{
  constructor(x,y,width,height){
      var options={
          restitution:0.3,
          friction:5,
          density:1,
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