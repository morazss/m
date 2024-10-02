const toggleButton = document.getElementById('dark-tema');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});
