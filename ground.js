class Ground{
    constructor(x, y, width){
       var options = {
           isStatic: true,
           'friction':1.0,
           'restitution':0.8,
            'density':1.0
       } 
       this.body = Bodies.rectangle(x, y, width, 25, options);
       this.width = width;

      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
};