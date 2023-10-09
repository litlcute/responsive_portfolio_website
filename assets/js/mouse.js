const trailer = document.getElementById('trailer');

const animationTrailer = (e) => {
    // const x = e.clientX - trailer.offsetWidth / 2,
    const x = e.clientX + 15,
            y = e.clientY - trailer.offsetHeight / 2;
    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }
    trailer.animate(keyframes, {duration: 800, fill: 'forwards'});
}

window.onmousemove = e =>{
    

    animationTrailer(e);
}