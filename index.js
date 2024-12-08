'use strict'

const observedElements = document.querySelectorAll('.fadeup');

const options = {
    root: null,
    threshold: 0.1,
    rootMargin: '-50px'
};

const inViewCallback = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {entry.target.classList.add('in-view'); }, 200);
        }
    })
}

let observer = new IntersectionObserver(inViewCallback, options);

observedElements.forEach(element => {
    observer.observe(element);
})

document.querySelector('.previewButton').addEventListener('click', () => {
    const image = document.getElementById('previewContainer');
    image.style.display = image.style.display === 'none' ? 'inline-block' : 'none';
  });

document.querySelector('#previewContainer').addEventListener('click', () => {
    const image = document.getElementById('previewContainer');
    image.style.display = image.style.display === 'none' ? 'inline-block' : 'none';
});