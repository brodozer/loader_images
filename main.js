import loaderImages from './modules/loader-images.js';

const container = document.querySelector('.container');
const urls = ['img/img1.jpeg', 'img/ig2.jpeg', 'img/img3.jpeg'];
const url = 'img/img2.jpeg';

const renderImages = async (urls, elem) => {
    const urlsLoader = [];
    if(typeof urls === 'string') {
        urlsLoader.push(loaderImages(urls));
    } else {
        urls.forEach(url => {
            urlsLoader.push(loaderImages(url));
        });
    }
    const fragment = new DocumentFragment();    
    try {
        const images = await Promise.all(urlsLoader);
        images.forEach(img => {
            const responsive = document.createElement('div');
            responsive.className = 'responsive';
            responsive.appendChild(img);
            fragment.appendChild(responsive);
        });
        elem.appendChild(fragment);
    } catch (error) {
        console.log(error.message);
    }
    
}

renderImages(urls, container);