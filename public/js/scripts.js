const modalContainer = document.querySelector('.modal-container');
const deleteBtn = document.querySelector('a#delete-btn');
const closeBtn = document.getElementById('close-btn');

// Close the modal
if (modalContainer) {
    modalContainer.addEventListener('click', function(event) {
        const target = event.target;
        if (target.className === 'modal-container') {
            modalContainer.style.display = 'none';
        } else if (target.id === 'close-btn') {
            modalContainer.style.display = 'none';
        } else if (target.tagName === 'I') {
            modalContainer.style.display = 'none';
        }
    });
}

// Open modal
if (deleteBtn) {
    deleteBtn.addEventListener('click', function() {
        modalContainer.style.display = 'block';
    });
}