const button = document.querySelector('#button-menu');
const sidebar = document.querySelector('#menu');

button.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        button.classList.toggle("open");
    }, false);

        
