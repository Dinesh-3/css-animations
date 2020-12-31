let canvas = document.querySelector("canvas")

let c = canvas.getContext("2d")
console.log(c)
canvas.width = innerWidth
canvas.height = innerHeight

class Bubble {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, this.color, false)
        c.fillStyle = this.color
        c.fill()
    }
    update(){
        this.radius += 0.2
    }
}
const Bubbles = []

setInterval(
    () => {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        let bubbleInstance = new Bubble(x, y, 30, "blue")
        Bubbles.push(bubbleInstance)
    }, 1000
)

function animate() {
    requestAnimationFrame(animate)
    // c.clearRect(0,0,canvas.width,canvas.height);
    Bubbles.forEach(bubble => {
        bubble.draw()
        bubble.update()
    })
}


animate();