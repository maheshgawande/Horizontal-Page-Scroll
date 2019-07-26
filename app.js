const img = document.querySelectorAll('img');
const left_click = document.getElementById('left-click');
const right_click = document.getElementById('right-click')
const outer_wrapper = document.getElementById('outer-wrapper');
const wrapper = document.getElementById('wrapper');

// let scrollable = wrapper.scrollWidth - document.documentElement.scrollWidth;
let initial_doc_width = document.documentElement.scrollWidth;
let scrolled = 0;

window.addEventListener('resize', () => {
    initial_doc_width = document.documentElement.scrollWidth;
});

outer_wrapper.addEventListener('scroll', () => {
    scrolled = Math.ceil(outer_wrapper.scrollTop);
    if (scrolled == 0) {
        img[0].style.opacity = '.5';
        left_click.style.pointerEvents = 'none';
    } else if (scrolled > 0 && scrolled < initial_doc_width * 3) {
        img[0].style.opacity = '1';
        left_click.style.pointerEvents = 'all';
        img[1].style.opacity = '1';
        right_click.style.pointerEvents = 'all';
    } else if (scrolled > 0 && scrolled == initial_doc_width *3 ) {
        img[1].style.opacity = '.5';
        right_click.style.pointerEvents = 'none';
    }
});

left_click.addEventListener('click', () => {
    if (scrolled > 0 && scrolled <= initial_doc_width) {
        outer_wrapper.scrollTo(0, 0);
    } else if (scrolled > initial_doc_width && scrolled <= initial_doc_width * 2) {
        outer_wrapper.scrollTo(0, initial_doc_width);
    } else if (scrolled > initial_doc_width * 2 && scrolled <= initial_doc_width * 3) {
        outer_wrapper.scrollTo(0, initial_doc_width * 2);
    } else if (scrolled == initial_doc_width * 3) {
        outer_wrapper.scrollTo(0, initial_doc_width * 2);
    } else {
        console.log('error!');
    }
});
right_click.addEventListener('click', () => {
    if (scrolled >= 0 && scrolled < initial_doc_width) {
        outer_wrapper.scrollTo(0, initial_doc_width)
    } else if (scrolled >= initial_doc_width && scrolled < initial_doc_width * 2) {
        outer_wrapper.scrollTo(0, initial_doc_width * 2)
    } else if (scrolled >= initial_doc_width * 2 && scrolled < initial_doc_width * 3) {
        outer_wrapper.scrollTo(0, initial_doc_width * 3)
    } else {
        console.log('error!');
    }
});
