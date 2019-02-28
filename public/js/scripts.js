const modalContainer = document.querySelector('.modal-container');
const deleteBtn = document.getElementById('delete-btn');
const closeBtn = document.querySelector('.close-btn');

if (deleteBtn) {
    deleteBtn.addEventListener('click', function() {
        modalContainer.style.display = 'block';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        modalContainer.style.display = 'none';
    });
}