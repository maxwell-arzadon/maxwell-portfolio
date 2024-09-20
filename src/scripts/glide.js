import Glide from '../../node_modules/@glidejs/glide/dist/glide.esm.js';

document.addEventListener('DOMContentLoaded', () => {
    const glide = new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        gap: 20,
        breakpoints: {
            1024: { perView: 1 },
            600: { perView: 1 }
        }
    });

    glide.mount();
});
