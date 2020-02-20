class dome{

constructor(x,y,radius){
this.body = Bodies.circle(x,y,radius);
this.body.shapeColor = "yellow";
this.x = x;
this.y = y;
World.add(world,this.body);
}

display(){
var pos = this.body.position;
translate(pos.x,pos.y);
circle(this.x,this.y,radius);
}

}