const modalContainer = document.querySelector('.modal-container');
const deleteBtn = document.getElementById('delete-btn');
const closeBtn = document.querySelector('.close-btn');

// Open modal
if (deleteBtn) {
    deleteBtn.addEventListener('click', function() {
        modalContainer.style.display = 'block';
    });
}

// Close modal
if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        modalContainer.style.display = 'none';
    });
}