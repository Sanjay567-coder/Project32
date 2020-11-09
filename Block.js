class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :1.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visiblity=255;
  }
display(){
  var angle = this.body.angle;
  var pos= this.body.position;
  
  if(this.body.speed<3){
    push ();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop ();
  }
  else{
    World.remove(world,this.body);
    push();
    this.visiblity=this.visiblity-5;
    tint(255,this.visiblity);
    pop();
  }
  
}

score(){
  if(this.visiblity < 0 && this.visiblity > -105){
    score++;
  }
}
}
