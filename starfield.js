function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let canvas = document.getElementById('starfield');
function starDraw() {
    // Make internal buffer dimensions match CSS dimensions.
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    let ctx = canvas.getContext('2d')
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    const stars = 2000;

    const colorrange = [0,60,240];
    for (let i = 0; i < stars; i++) {
        let x = Math.random() * canvas.offsetWidth;
        let y = Math.random() * canvas.offsetHeight,
        radius = Math.random() * 1.2,
        hue = colorrange[getRandom(0,colorrange.length - 1)],
        sat = getRandom(50,100);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 360);
        ctx.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
        ctx.fill();
    }
}

new ResizeObserver(() => starDraw()).observe(canvas)