class Particle {
    constructor( x, y, r){

        var options = {
            density:0.5,
            restitution:0.5
        }

        this.r = r;
        this.body = Bodies.circle( x, y, this.r, options);
        this.color = color(random(0,225), random(0,225), random(0,225));
        World.add( world, this.body);
    }

    display(){
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    }
}