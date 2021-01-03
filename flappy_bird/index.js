const canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

class Rectangle {
    constructor(){
        this.x = 100
        this.y = Math.random()
        this.width = 30
        this.topHeight = Math.random()*1000
        this.bottomHeight = Math.random()*10000
    }

    drawRectangle(){
        console.log(this.x,this.y,this.topHeight,this.bottomHeight);
        c.beginPath()
        c.fillStyle = "green"
        c.fillRect(this.x,this.y,this.width, this.topHeight)
        c.closePath()
        c.beginPath()
        c.fillStyle = "green"
        c.fillRect(this.x,this.y - 100,this.width, this.bottomHeight)
        c.closePath()
    }

    updateRectangle(){
        this.x -= 1
    }
}

let obj = new Rectangle()

// function animate() {
//     let id = requestAnimationFrame(animate)

// }
setInterval(
    () => {
        obj.drawRectangle()
        obj.updateRectangle()
    },100
)