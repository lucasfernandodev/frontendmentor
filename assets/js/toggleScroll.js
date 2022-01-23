import debounce from './debounce.js';

const toggleScroll = () => {

    const body = document.querySelector('body');

    if (!body.classList.contains('scrollShow')) {
        body.classList.add('scrollShow');
    }

    window.addEventListener('scroll', debounce(function () {
        body.classList.remove('scrollShow');
    }, 1000))
};

export default toggleScroll;