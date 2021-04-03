class Hero {
  constructor(x,y,r)
	{
		var options = { 
			'density': 20, 
			'friction': 1
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("superhero1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER);
			fill(255,0,255);
			imageMode(CENTER);
			ellipse(this.x,this.y,this.radius);
			image(this.image, 0,0,this.r+170, this.r+100)
			pop();

			//this.body.position.x = mouseX;
            //this.body.position.y = mouseY;
			
	}
}
