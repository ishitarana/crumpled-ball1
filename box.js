class Box{
    constructor(x,y){
       this.x=x
       this.y=y
       this.boxwidth=200
       this.boxheight=100
       this.boxthikness=20
       this.angle=0
       this.bottombody=Bodies.rectangle(this.x,this.y,this.boxwidth,this.boxthikness,{isStatic:true})
       this.rightbody=Bodies.rectangle(this.x+this.boxwidth/2,this.y-this.boxheight/2,this.boxthikness,this.boxheight,{isStatic:true})
       this.leftbody=Bodies.rectangle(this.x-this.boxwidth/2,this.y-this.boxheight/2,this.boxthikness,this.boxheight,{isStatic:true})
       Matter.Body.setAngle(this.leftbody,this.angle)
       Matter.Body.setAngle(this.rightbody,-1*this.angle)
        World.add(world,this.bottombody)
        World.add(world,this.leftbody)
        World.add(world,this.rightbody)
    }
    display(){
        var pos=this.bottombody.position
        var posleft=this.leftbody.position
        var posright=this.rightbody.position
        push()
        translate(posleft.x,posleft.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill("brown")
        rotate(this.angle)
        rect(0,0,this.boxthikness,this.boxheight)
        pop()
        push()
        translate(posright.x,posright.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill("brown")
        rotate(-1*this.angle)
        rect(0,0,this.boxthikness,this.boxheight)
        pop()
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill("brown")
       
        rect(0,0,this.boxwidth,this.boxthikness)
        pop()
    }}