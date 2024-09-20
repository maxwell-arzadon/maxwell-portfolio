import Glide from '../node_modules/@glidejs/glide/dist/glide.esm.js';
console.log("Initializing Glide...");
const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    gap: 20,
    breakpoints: {
        1024: { perView: 1 },
        600: { perView: 1 }
    }
});

console.log("Glide instance:", glide);
glide.mount();

