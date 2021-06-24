class Snow{
    constructor(x,y,c){
        var options = {
            'density' : 0.1,
            'restitution': 0,
            isStatic: false
        }
        console.log(x);

        this.body = Bodies.rectangle(x, y, 10,10, options);
        this.x = x;
        this.y = y;

        
        if(c === 1){
        this.image = loadImage ("snow4.webp")
        } else{
        this.image = loadImage ("snow5.webp")
        }
        World.add(world, this.body);

    
    }

    display(x){

        push ();
      //  translate (this.body.position.x, this.body.position.y);
        fill ("red")
        translate (this.body.position.x,this.body.position.y)
        noStroke();
        //rect (0,0,10,10);
     
            image(this.image, 0,0,50,50);


        pop ();     
    }
}