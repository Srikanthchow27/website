// index.js

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > window.innerHeight / 2) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
