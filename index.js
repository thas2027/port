let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");

}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}

const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Web Desiner','Backend Developer'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });

function toggleReadMore() {
    const content = document.getElementById("more-content");
    const btn = document.getElementById("readBtn");

    content.classList.toggle("show");

    if (content.classList.contains("show")) {
        btn.innerText = "Read Less";
    } else {
        btn.innerText = "Read More";
    }
}

