class Box extends BaseClass{
  constructor(x, y, width, height){
   // var options = {
     // isStatic: true
  
  //this.body = Bodies.rectangle(x,y,width,height,options);
    super(x,y,width,height)
    this.image=loadImage("sprites/wood1.png")
  }
 
}  
   

