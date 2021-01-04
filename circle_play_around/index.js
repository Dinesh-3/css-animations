const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight
let mousePosition = {
    x: undefined,
    y: undefined
}
const maxRadius = 30
const minRadius = 5
class Circle {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.xvelocity = Math.random()
        this.yvelocity = Math.random()
        this.color = `rgba(${Math.random()*80},${Math.random()*110},${Math.random()*120},0.7)`
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        // c.strokeStyle = `rgba(${Math.random()*100},${Math.random()*120},${Math.random()*90},0.7)`
        c.fillStyle = this.color
        // c.stroke()
        c.fill()
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

        // mouse Move activity
        if (mousePosition.x - this.x < 50 &&
            mousePosition.x - this.x > -50 &&
            mousePosition.y - this.y < 50 &&
            mousePosition.y - this.y > -50 &&
            this.radius < maxRadius
        ) {
            this.radius += 1
        } else if (this.radius > minRadius) {
            this.radius -= 1
        }
    }
}

const circlesArray = []
let circle = new Circle(Math.random() * innerWidth, Math.random() * innerHeight, 30)

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    for (let i = 0; i < circlesArray.length; i++) {
        circlesArray[i].draw()
        circlesArray[i].update()
    }
}

for (let i = 0; i < 1000; i++) {
    let circle = new Circle(Math.random() * innerWidth, Math.random() * innerHeight, 30)
    circlesArray.push(circle)
}

animate()
// setInterval(() => {
// let circle = new Circle(Math.random() * innerWidth, Math.random() * innerHeight, 30)
circlesArray.push(circle)
// }, 0.1)

window.addEventListener(
    "mousemove", event => {
        mousePosition.x = event.x;
        mousePosition.y = event.y
    }
)