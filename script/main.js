'use strict';

const modal = document.getElementById('modal');
const modalBlocker = document.getElementById('block');

document.addEventListener('mousedown', ({ target }) => {
    if ( target.id == 'swiper' ) {
        modal.style.filter = 'opacity(1)';
        modalBlocker.style.display = 'none';
    }
});

document.addEventListener('mouseup', ({ target }) => {
    modal.style.filter = 'opacity(0)';
    modalBlocker.style.display = 'block';
});