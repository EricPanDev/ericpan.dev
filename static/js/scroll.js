function handeScroll() {
    const firstSection = document.querySelector('section'); // Select the first section
    const contentElements = firstSection.querySelectorAll('*'); // Select all elements inside the first section
    const fadeStart = window.innerHeight * 0.15; // 15vh
    const fadeEnd = window.innerHeight * 0.08; // 8vh

    contentElements.forEach(contentElement => {
        const parentElement = contentElement.parentElement;
        if (parentElement.tagName.toLowerCase() === 'div') { // Check if the parent is a div
            const rect = contentElement.getBoundingClientRect();
            if (rect.top < fadeStart) {
                if (rect.top < fadeEnd) {
                    contentElement.style.opacity = 0;
                } else {
                    const opacity = (rect.top - fadeEnd) / (fadeStart - fadeEnd);
                    contentElement.style.opacity = opacity;
                }
            } else {
                contentElement.style.opacity = 1;
            }
        }
    });
    var navbarHeight = document.getElementsByClassName('navbar-container')[0].offsetHeight;

    document.querySelector('section').style.top = `calc(-90vh + ${navbarHeight}px)`;
}
function handleResize() {
    var navbarHeight = document.getElementsByClassName('navbar-container')[0].offsetHeight;

    document.querySelector('section').style.top = `calc(-90vh + ${navbarHeight}px)`;
}

window.addEventListener('scroll', handeScroll);
window.addEventListener('resize', handleResize);

handleResize()