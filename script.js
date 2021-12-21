const BTN_ARROW_UP = document.getElementById('arrowUp');
const BTN_ARROW_DOWN = document.getElementById('arrowDown');
const GALLERY = document.getElementById('gallery');

const images = [
    'nure.png',
    'kharkiv.jpg',
    'dnipro.jpg',
]
const imagesStyle = [
    { width: '300px', height: '200px' },
    { width: '300px', height: '200px' },
    { width: '300px', height: '200px' },
]


function drawImages() {
    GALLERY.innerHTML = "";
    images.forEach( (imageUrl, index) => {
        GALLERY.innerHTML += `
            <img src="${imageUrl}" alt="${imageUrl}" style="width: ${imagesStyle[index].width}; height: ${imagesStyle[index].height};">
        `
    })
}


function imagesShift(shiftAlgorithm) {
    
    switch (shiftAlgorithm) {
        case 'down':
            images.unshift(images.pop());
            imagesStyle.unshift(imagesStyle.pop());
            break;
        case 'up':
            images.push(images.shift());
            imagesStyle.push(imagesStyle.shift());
            break;
        default:
            return;
    }
}

BTN_ARROW_DOWN.addEventListener('click', function onArrowDownClick() {
    imagesShift('down');
    drawImages();
});

BTN_ARROW_UP.addEventListener('click', function onArrowUpClick() {
    imagesShift('up');
    drawImages();
});

GALLERY.addEventListener('click', function onImageCLicked(event) {
    if (event.target.tagName === 'IMG') {
        const width = prompt('Enter width in px:');
        const height = prompt('Enter height in px:');

        if (!(width && height)) {
            return;
        }

        event.target.style.width = `${width}px`;
        event.target.style.height = `${height}px`;

        const index = images.findIndex(image => image === event.target.getAttribute('src'));
        imagesStyle[index].width = `${width}px`;
        imagesStyle[index].height = `${height}px`;
    }
})