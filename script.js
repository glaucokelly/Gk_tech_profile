document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('theme-toggle');

    toggleButton.addEventListener('click', () => {
        if(document.body.classList.contains('light')) {
            document.body.classList.remove('light');
            toggleButton.textContent = '🌙';
        } else {
            document.body.classList.add('light');
            toggleButton.textContent = '☀️';
        }
    });

    console.log("Portfólio carregado");
});
