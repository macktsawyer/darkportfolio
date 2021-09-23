'use strict'

const projectSliders= document.querySelectorAll('.slide-in');

const appearOptions = {};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    }
);
}, appearOptions);

projectSliders.forEach(slider => {
    appearOnScroll.observe(slider);
})