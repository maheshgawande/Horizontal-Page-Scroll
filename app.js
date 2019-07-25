const img = document.querySelectorAll('img');
const left_arrow = document.getElementById('left-arrow');
const right_arrow = document.getElementById('right-arrow')
const outer_wrapper = document.getElementById('outer-wrapper');
const wrapper = document.getElementById('wrapper');

const initial_doc_width = document.documentElement.scrollWidth;
let scrollable = wrapper.scrollWidth - document.documentElement.scrollWidth;
let scrolled = 0;

outer_wrapper.addEventListener('scroll', () => {
    scrolled = outer_wrapper.scrollTop;
    if (scrolled == 0) {
        img[0].style.opacity = '.5';
        left_arrow.style.pointerEvents = 'none';
    } else if (scrolled > 0 && scrolled < initial_doc_width * 3) {
        img[0].style.opacity = '1';
        left_arrow.style.pointerEvents = 'all';
        img[1].style.opacity = '1';
        right_arrow.style.pointerEvents = 'all';
    } else if (scrolled > 0 && scrolled == initial_doc_width *3 ) {
        img[1].style.opacity = '.5';
        right_arrow.style.pointerEvents = 'none';
    }
});

left_arrow.addEventListener('click', () => {
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
right_arrow.addEventListener('click', () => {
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