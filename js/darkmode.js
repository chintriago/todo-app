const mediaQuery = window.matchMedia('(min-width: 525px)');
const imgToggle = document.getElementById('img-toggle');
const sunUrl = 'images/icon-sun.svg';
const moonUrl = 'images/icon-moon.svg';
const bgDarkMobile = "url('./images/bg-mobile-dark.jpg')"
const bgDarkDesktop = "url('./images/bg-desktop-dark.jpg')"
const bglightMobile = "url('./images/bg-mobile-light.jpg')"
const bgLightDesktop = "url('./images/bg-desktop-light.jpg')"


const heroTop = document.querySelector('.hero-top');
const heroBottom = document.querySelector('.hero-bottom');
const formItems = document.querySelectorAll('.form-items')
const formItemsMiddle = document.querySelectorAll('.form-items-middle')
const completed = document.querySelector('.completed');
const circles = document.querySelectorAll('.circles');
const fontColors = document.querySelectorAll('.font-colors');

// HAVE TO FIX RESIZE ISSUE BELOW
// window.addEventListener('resize', function () {
//     if (mediaQuery.matches) {
//         heroTop.style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
//     } else {
//         heroTop.style.backgroundImage = "url('./images/bg-mobile-dark.jpg')";
//     };

// });

function darkMode(url) {
    imgToggle.setAttribute('src', sunUrl);
    heroTop.style.backgroundImage = url;
    heroBottom.style.backgroundColor = "var(--very-dark-blue)";
    completed.style.color = "var(--very-dark-grayish-blue)";
    // for loop for all .form-items
    for (i = 0; i < formItems.length; i++) {
        formItems[i].style.backgroundColor = "var(--very-dark-desaturated-blue)";
        formItems[i].style.color = "var(--light-grayish-blue)";
    }
    // for loop for only .form-middle .form-items
    for (i = 0; i < formItemsMiddle.length; i++) {
        formItemsMiddle[i].style.borderBottomColor = "var(--very-dark-grayish-blue)";
    }
    // for loop for all .circles
    for (i = 0; i < circles.length; i++) {
        circles[i].style.borderColor = "var(--very-dark-grayish-blue-light)";
    }
    // for loop for all .font-colors
    for (i = 0; i < fontColors.length; i++) {
        fontColors[i].style.color = "var(--very-dark-grayish-blue)";
    }
}

function lightMode(url) {
    imgToggle.setAttribute('src', moonUrl);
    heroTop.style.backgroundImage = url;
    heroBottom.style.backgroundColor = "var(--very-light-gray)";
    completed.style.color = "var(--light-grayish-blue-light)";
    // for loop for all .form-items
    for (i = 0; i < formItems.length; i++) {
        formItems[i].style.backgroundColor = "var(--very-light-gray)";
        formItems[i].style.color = "var(--very-dark-grayish-blue-light)";
    }
    // for loop for only .form-middle .form-items
    for (i = 0; i < formItemsMiddle.length; i++) {
        formItemsMiddle[i].style.borderBottomColor = "var(--light-grayish-blue)";
    }
    // for loop for all .circles
    for (i = 0; i < circles.length; i++) {
        circles[i].style.borderColor = "var(--light-grayish-blue)";
    }
    // for loop for all .font-colors
    for (i = 0; i < fontColors.length; i++) {
        fontColors[i].style.color = "var(--dark-grayish-blue)";
    }
}

imgToggle.addEventListener('click', function () {
    if (imgToggle.getAttribute('src') === moonUrl && window.innerWidth < 525) {
        darkMode(bgDarkMobile);
    } else if (imgToggle.getAttribute('src') === moonUrl && window.innerWidth > 525) {
        darkMode(bgDarkDesktop);
    } else if (imgToggle.getAttribute('src') === sunUrl && window.innerWidth < 525) {
        lightMode(bglightMobile);
    } else if (imgToggle.getAttribute('src') === sunUrl && window.innerWidth > 525) {
        lightMode(bgLightDesktop);
    }
});