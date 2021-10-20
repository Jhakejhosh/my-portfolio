const intro = document.querySelector(".intro");
const about = document.querySelector(".about");
const profileImage = document.querySelector(".profile-img")

//load events
window.addEventListener ("DOMContentLoaded", function() {
    intro.classList.add("intro-slide");
    about.classList.add("about-scale");
    profileImage.classList.add("profile-scale");
    navToggleBar();
    changeTheme();
    smoothScroll();
    quoteSlide();
});

//scroll events
window.addEventListener ("scroll", function() {
    fixedNavbar();
    slideScroll();
    skillFade();
})

//for fixed navbar
const navbar = document.querySelector(".nav-header");
const arrowUp = document.querySelector(".arrow-up");
const themes = document.querySelector(".themes");

fixedNavbar = () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-navbar");

    }else {
        navbar.classList.remove("fixed-navbar");
    }
    if (scrollHeight > 700) {
        arrowUp.classList.add("show-arrow");
    }else {
        arrowUp.classList.remove("show-arrow");
    }
}

//show navbar menus
const navMenu = document.querySelector(".nav-menu");
const menuLinks = document.querySelector(".menu-links");
navToggleBar = () => {
    const navToggle = document.getElementById("bars");
    navToggle.addEventListener ("click", function() {
        const linksHeight = menuLinks.getBoundingClientRect().height;
        const navMenuheight =navMenu.getBoundingClientRect().height;
        if (navMenuheight === 0) {
            navMenu.style.height = `${linksHeight}px`;
        }else {
            navMenu.style.height = 0;
        }
    })
}

// change themes
changeTheme = () => {
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    const bodyContainer = document.querySelector(".container");
    sun.addEventListener("click", function() {
        bodyContainer.classList.add("light-mode");
        moon.classList.remove("active");
        sun.classList.add("active");
    });
    moon.addEventListener("click", function() {
        bodyContainer.classList.remove("light-mode");
        sun.classList.remove("active");
        moon.classList.add("active");
    })
}
//links scroll events
const nav = document.querySelector(".nav");
smoothScroll = () => {
    const links = document.querySelectorAll(".scroll-link");
    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const id = e.currentTarget.getAttribute("href").slice(1);
            const element = document.getElementById(id);
            const navHeight = nav.getBoundingClientRect().height;
            const navMenuheight =navMenu.getBoundingClientRect().height;
            const position = element.offsetTop;
            window.scrollTo ({
                left : 0,
                top : position,
            })
            navMenu.style.height = 0;
        })
    })
}

//for scrolling : to display each elements in their container
slideScroll = () => {
    const serviceContainer = document.querySelector(".service-container");
    const theWork = document.querySelector(".the-works");
    const serviceHeight = serviceContainer.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 200) {
        theWork.classList.add("theworks")
    }else{
        theWork.classList.remove("theworks")
    }
}

// for quotes
const quotesList = [
    {
        name : "Mark Zuckerberg",
        title : "Facebook CEO",
        img : "./images/mark.jpg",
        quote : "People can be really smart or have skills that are directly applicable, but if they don't really believe in it, then they are not going to really work hard."
    },
    {
        name : "Jeff Bezos",
        title : "Amazon CEO",
        img : "./images/jeff.jpg",
        quote : "If your customer base is aging with you, then eventually you're going to become obsolete or irrelevant. You need to be constantly figuring out who are your new customers and what are you doing to remain forever young."
    },
    {
        name : "Jack Dorsey",
        title : "Twitter CEO",
        img : "./images/jack.jpg",
        quote : "Everyone has an idea. But it's really about executing the idea and attracting other peopleto help you work on the idea"
    },
    {
        name : "Elon Musk",
        title : "Tesla CEO",
        img : "./images/elon.jpg",
        quote : "If something has to be designed and invented, and you have to figure out how to ensure that the value of the thing you create is greater than the cost of the inputs, then that's is probably my core skill."
    }
]
const quotes = document.getElementById("quote");
const imgProfile = document.querySelector(".img-profile");
const author = document.getElementById("author");
const work = document.getElementById("work");
const quoteText = document.querySelector(".the-quotes")

let count = 0;
quoteSlide = () => {
     setInterval(function(){
         if(count > quotesList.length-1){
            count = 0;
            showPerson(count)
         }else {
            count++;
            showPerson(count);
         }
     }, 4000)
}
showPerson = (slide) => {
    const review = quotesList[slide];
    imgProfile.src = review.img;
    author.textContent = review.name;
    work.textContent = review.title;
    quotes.textContent = review.quote;
};

//for skills fade effects
const skillText = document.querySelector(".skills-text");
skillFade = () => {
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > 3000) {
        skillText.classList.add("skills-textslide");
    }
    else {
        skillText.classList.remove("skills-textslide");
    }
}
