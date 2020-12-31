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

class ProjectTile {
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
}
const projectTiles = []
const Bubbles = []

setInterval(
    () => {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        let bubbleInstance = new Bubble(x, y, 30, `rgba(${Math.random() *90},${Math.random()*100},${Math.random()*90},0.1)`)
        Bubbles.push(bubbleInstance)
    }, 1000
)

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height);
    Bubbles.forEach(bubble => {
        bubble.draw()
        bubble.update()
    })

    projectTiles.forEach((tile, tileIndex) => {
        tile.draw()
        Bubbles.forEach((bubble, bubbleIndex) => {
            let spotX = tile.x-bubble.x 
            let spotY = tile.y - bubble.y
            let dist = Math.hypot(spotX, spotY)
            if( (dist - tile.radius - bubble.radius) < 1 ){
                Bubbles.splice(bubbleIndex,1)
                projectTiles.splice(tileIndex,1)
            }else{
                projectTiles.splice(tileIndex,1)
            }
        })
    })
}


animate();

addEventListener(
    "click", event => {
        let newTile = new ProjectTile(event.clientX, event.clientY, 20, "red")
        projectTiles.push(newTile)
        console.log(event);
    }
)