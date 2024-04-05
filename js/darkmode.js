const imgToggle = document.getElementById('img-toggle');
const sunUrl = 'images/icon-sun.svg';
const moonUrl = 'images/icon-moon.svg';

const heroTop = document.querySelector('.hero-top');
const heroBottom = document.querySelector('.hero-bottom');
const formItems = document.getElementsByClassName('form-items')

imgToggle.addEventListener('click', function () {
    if (imgToggle.getAttribute('src') === moonUrl) {
        // DARK MODE
        imgToggle.setAttribute('src', sunUrl);
        heroTop.style.backgroundImage = "url('../images/bg-mobile-dark.jpg')";
        heroBottom.style.backgroundColor = "var(--very-dark-blue)";
        for (i = 0; i < formItems.length; i++) {
            formItems[i].style.backgroundColor = "var(--very-dark-desaturated-blue)";
        }
    } else {
        // LIGHTMODE
        imgToggle.setAttribute('src', moonUrl);
        heroTop.style.backgroundImage = "url('../images/bg-mobile-light.jpg')";
        heroBottom.style.backgroundColor = "var(--very-light-gray)";
        for (i = 0; i < formItems.length; i++) {
            formItems[i].style.backgroundColor = "white";
        }

    }
});