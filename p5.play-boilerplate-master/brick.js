class brick {


constructor(x,y,width,height){
 this.body = createSprite(x,y,width,height);
 this.width = width;
 this.height = height;
 this.body.shapeColor = "brown";

}

display(){
    drawSprites();
}
}
