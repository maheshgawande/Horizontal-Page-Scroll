const img = document.querySelector('img');
const outer_wrapper = document.getElementById('outer_wrapper');
const wrapper = document.getElementById('wrapper');

let scrollable = wrapper.scrollWidth - document.documentElement.scrollWidth;
i = 1;

img.addEventListener('click', () => {
    let scrolled = document.documentElement.scrollWidth * i;
    outer_wrapper.scrollTo(0, scrolled);
    i++;
});