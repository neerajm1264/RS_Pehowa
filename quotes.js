let http = new XMLHttpRequest();

http.open("get", "quotes.json", true);

http.send();

http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let quotes = JSON.parse(this.responseText);
        let quote = "";
        quotes.forEach((item) => {
            quote += `
            <p class="a">${item.data}</p><hr>
            `;
        });
        document.querySelector(".quote").innerHTML = quote;
    }
}
