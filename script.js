const toggleButton = document.getElementById('toggleButton');
const navLinks = document.getElementById('navLinks');
const headline = document.getElementById('headline')
const links = document.querySelectorAll('.nav-links li'); 

let previousMargin = '2rem 0'; 

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
