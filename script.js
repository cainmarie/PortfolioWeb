//FOOTER YEAR CHANGE
const year = document.querySelector('#current-year')
year.innerHTML = new Date().getFullYear()

//ACTIVE NAV BUTTON
document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    var navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active-nav');
        }
    });
});

var card = document.getElementById("myCard");

function flipCard() {
    var inner = card.querySelector(".flip-card-inner");
    inner.style.transform = inner.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
}

card.addEventListener("click", flipCard);