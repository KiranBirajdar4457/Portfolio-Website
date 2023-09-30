




// Typewritter Effect

let typed = new Typed(".changeable", {
    strings: ["Web Developement.", "Android Development.", "Java Programmer", "Data Science."],
    typeSpeed: 46,
    backSpeed: 46,
    loop: true
})


// Music
let i = 1;
let music = () => {
    if (i % 3 == 1) {
        document.getElementById("music").play();
        i++;
    }
    else {
        document.getElementById("music").pause();
        i++;
    }
}