import Glide from '@glidejs/glide';

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
