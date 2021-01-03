const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

class Circle {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.xvelocity = 5
        this.yvelocity = 5
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = "red"
        c.stroke()
        // c.fillStyle = "red"
    }
    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.xvelocity = -this.xvelocity
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.yvelocity = -this.yvelocity
        }
        this.x += this.xvelocity
        this.y += this.yvelocity

    }
}

const circlesArray = []
let circle = new Circle(Math.random() * innerWidth, Math.random() * innerHeight, 30)

function animate() {
    requestAnimationFrame(animate)
    // c.clearRect(0, 0, innerWidth, innerHeight)
    circle.draw()
    circle.update()
}

animate()
// setInterval(() => {
//     let circle = new Circle(Math.random()*innerWidth, Math.random()*innerHeight,30)
//     Circle.push()
// })