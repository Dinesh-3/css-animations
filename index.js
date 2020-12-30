let canvas = document.querySelector("canvas")

let c = canvas.getContext("2d")
console.log(c)
canvas.width = innerWidth
canvas.height = innerHeight

const x = canvas.width / 2
const y = canvas.height / 2
class Person{
    constructor(x,y,r,color){
        this.x = x
        this.y = y
        this.r = r
        this.color = color
    }

    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.r,0,Math.PI*2,this.color,false)
        c.fillStyle = this.color
        c.fill()
    }
}

class ProjectTile {
    constructor(x,y,r,velocity,color){
        this.x = x
        this.y = y
        this.r = r
        this.velocity = velocity
        this.color = color
    }

    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.r,0,Math.PI*2,this.color,false)
        c.fillStyle = this.color
        c.fill()
    }
    update() {
        this.draw()
        this.x=this.x+this.velocity.x;
        this.y=this.y+this.velocity.y   
    }

}

// const p = new ProjectTile(canvas.width/2,canvas.height/2,10,{x:2,y:1},"red")

// p.draw()

const projectTiles = []


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height);
    newPerson.draw()
    projectTiles.forEach(projectTile=> {
        projectTile.update();
    })
}


let newPerson = new Person(x,y,30,"blue")



addEventListener("click", (event) => {
    const angle=Math.atan2(event.clientY-canvas.height/2,event.clientX-canvas.width/2 );

    const velocity={
        x:Math.cos(angle),
        y:Math.sin(angle)
    }
   projectTiles.push(new ProjectTile(canvas.width/2,canvas.height/2,10,velocity,"red"));
})

animate();

