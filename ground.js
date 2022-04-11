class Ground {
    constructor(x,y,w,h){
        let options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w
        this.h = h
        World .add(world,this.body)
    }
    display(){
        let Pos = this.body.position
        push ()
        rectMode(CENTER)
        fill (148,127,146)
        rect (Pos.x,Pos.y,this.w,this.h)
        pop ()

    }
}