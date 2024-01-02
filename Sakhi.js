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

// ---------------------------------

let http = new XMLHttpRequest();

http.open("get", "sakhi.json", true);

http.send();

http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let sakhi = JSON.parse(this.responseText);
        let quote = "";
        sakhi.forEach((item) => {
            quote += `
            <p class="a">${item.data}</p><hr>
            `;
        });
        document.querySelector(".quote").innerHTML = quote;
    }
}
