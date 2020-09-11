'use strict';

const modal = document.getElementById('modal');
const modalBlocker = document.getElementById('block');

const modaler = document.getElementById('modaler');
const widget = document.getElementById('widget');
const widgetContent = document.getElementById('widget-content');

let touched = false;

document.addEventListener('mousedown', ({ target }) => {
    if ( target.id == 'swiper' ) {
        modal.style.filter = 'opacity(1)';
        modalBlocker.style.display = 'none';
    }
});

document.addEventListener('touchend', ({ target }) => {
    if ( target.id == 'swiper' ) {
        if (!touched) {
            touched = true;
            modal.style.filter = 'opacity(1)';
            modalBlocker.style.display = 'none';
        } else {
            touched = false;
            modal.style.filter = 'opacity(0)';
            modalBlocker.style.display = 'block';
        }
    }
});

document.addEventListener('mouseup', ({ target }) => {
    if ( target.id == 'modal-block' || target.parentNode.id == 'modal-block' ) {
        if (target.id == 'modal-block') showModal(target);
        if (target.parentNode.id == 'modal-block') showModal(target.parentNode);
    }
    modal.style.filter = 'opacity(0)';
    modalBlocker.style.display = 'block';
});

function showModal(target) {
    widget.style.transform = 'translate(-50%, -50%) scale(1)';
    modaler.style.filter = 'opacity(1)';
    modaler.style.transform = 'scale(1)';
}
function closeModal() {
    widget.style.transform = 'translate(-50%, -50%) scale(0)';
    modaler.style.filter = 'opacity(0)';
    setTimeout(() => { modaler.style.transform = 'scale(0)'}, 300 );
}