class Hammer{
  constructor(x,y,width,height){
      var options={
          'density': 2,
          'friction': 1.0,
          'restitution' :0.5,
          'isStatic': true,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
       this.height = height;
      World.add(world,this.body);
  }
  display(){
      rect(this.body.position.x, this.body.position.y,this.width,this.height)
      //translate(this.body.position.x, this.body.position.y);
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
  }
}