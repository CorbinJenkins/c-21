class Sprite{
    constructor(a,b,c,d){
        this.x = a;
        this.y = b;
        this.width = c;
        this.height = d;

        this.shapeColor = "grey";
        this.vx = 0;
        this.vy = 0;
    }

    display(){
        fill(this.shapeColor);
        this.x = this.x+this.vx;
        this.y = this.y+this.vy;
        ellipse(this.x,this.y,this.width,this.height);
    }

    isTouching(target){
        if (target.x-this.x<this.width/2+target.width/2 && this.x-target.x < this.width/2+target.width/2 &&
          target.y-this.y<target.height/2+this.height/2 && this.y-target.y<this.height/2+target.height/2){
            return true
       
        }
        else{
        
            return false;
        }
      }
      
    bounceOff(target){
        if (target.x-this.x<target.width/2+this.width/2 && this.x-target.x<this.width/2+target.width/2 &&
          target.y-this.y<this.height/2+target.height/2 && target.y-this.y<this.y/2+target.y/2){
        
        this.vx = this.vx *-1;
        this.vy = this.vy *-1;
        target.vx = target.vx *-1;
        target.vy = target.vy *-1;
      
      }
      
      }
}



