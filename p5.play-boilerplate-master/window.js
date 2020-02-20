class window{

    constructor(x,y,width,height){

     this.body = createSprite(x,y,70,70);
     this.width = 70;
     this.height = 70;
    this.body.shapeColor = "black";
    }

    display(){
        drawSprites();
    }
}