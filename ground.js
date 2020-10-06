class Ground {
    constructor(){
        var options ={
            isStatic : true
        }

        this.body = Bodies.rectangle(200,780,800,20,options);
        World.add(world,this.body);
    }

    display(){
      rectMode(CENTER);
      fill("white");
      rect(200, 780, 400, 30);
    }
}