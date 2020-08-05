class Paper{
    constructor(x,y) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y,20,options);
        this.height = 40;
        this.width = 40;

        this.image = loadImage("paper.png");
    
        World.add(world, this.body);
    }
    display() {

        
    var pos = this.body.position;
          push();
          translate(pos.x, pos.y);
          stroke("black");
          fill("lightBlue");
          //ellipseMode(CENTER);
         // ellipse(0,0,this.width,this.height);
          imageMode(CENTER);
          image(this.image,0,0,this.width,this.height);
          pop();

          console.log(pos.x,pos.y);
    }
    }