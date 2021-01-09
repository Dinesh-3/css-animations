const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
let score = document.querySelector("#score");

canvas.width = innerWidth;
canvas.height = innerHeight;

let point = 0;
let Bubbles = [];
let id;
let Projectiles = [];

class Bubble {
    constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
    }

    draw() {
        c.beginPath();
        c.fillStyle = this.c;
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.fill();
    }
    update(d) {
        this.draw()
        this.r += 1;
        for (let i = 0; i < d.length; i++) {
            if (this == d[i]) continue;

            const dist = Math.hypot(this.x - d[i].x, this.y - d[i].y)
            // console.log(this.r, d[i].r, Math.hypot(2, 2));
            if ((dist - this.r - d[i].r) < 0.5) {
                console.log(this.x, this.y, d[i].x, d[i].y, this.r, d[i].r, Math.hypot(2, 2));
                cancelAnimationFrame(id);
            }
        }


    }
}

class Projectile {
    constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
    }

    draw() {
        c.beginPath();
        c.fillStyle = this.c;
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.fill();
    }

}

function Animate() {
    id = requestAnimationFrame(Animate);
    c.fillStyle = "white"
    c.clearRect(0, 0, canvas.width, canvas.height);

    Bubbles.forEach((bubble, index) => {
        bubble.update(Bubbles);
    })


    Projectiles.forEach((data, i1) => {
        data.draw();

        Bubbles.forEach((bubble, index1) => {

            const dist = Math.hypot(data.x - bubble.x, data.y - bubble.y);
            if ((dist - data.r - bubble.r) < 1) {


                Projectiles.splice(i1, 1);
                Bubbles.splice(index1, 1);

                point += 1;
                score.innerHTML = point;

            } else {
                Projectiles.splice(i1, 1);
            }
        })
    })
}

function getBubble() {

    setInterval(() => {
        let x, y;
        let radius = 40;
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
        // console.log({
        //     x,y,radius
        // });
        for (let i = 0; i < Bubbles.length; i++) {
            const dist = Math.hypot(x - Bubbles[i].x, y - Bubbles[i].y);
            if ((dist - radius - Bubbles[i].r) < 1) {
                x = Math.random() * canvas.width;
                y = Math.random() * canvas.height;
                i--;
            }

        }

        Bubbles.push(new Bubble(x, y, radius, `rgba(${Math.random() * 360},${Math.random() * 270},${Math.random() * 180})`));

    }, 1000)
}

addEventListener('click', (event) => {
    Projectiles.push(new Projectile(event.clientX, event.clientY, 2, 'red'))
})

getBubble();
Animate();


