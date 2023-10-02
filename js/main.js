let links = document.querySelectorAll("header .links a");
links.forEach((a) => {
    a.addEventListener("click", (a) => {
        links.forEach((a) => {
            a.classList.remove("active");
        });
        a.currentTarget.classList.add("active");
    });
});
let dropDownMenu = document.querySelector(".dropDownMenu");
let span = document.querySelector(".dropDownMenu span:nth-child(2)");
let dropLinks = document.querySelector(".dropDownMenu .links");
dropDownMenu.addEventListener("click", () => {
    span.classList.toggle("w-100");
    dropLinks.classList.toggle("show");
});
// -------------------------------
let skills = document.querySelector(".about");
let progressSpan = document.querySelectorAll(".skills .progress span");
let progressP = document.querySelectorAll(".skills .progress p");

let educationBoxs = document.querySelectorAll(".education .education .box > span");
let experienceBoxs = document.querySelectorAll(".education .experience .box > span");


window.onscroll = () => {
    if (window.scrollY >= 800) {
        progressSpan.forEach((span) => {
            span.style.width = span.dataset.progress;
        });
        progressP.forEach((p) => {
            p.style.color = "white";
        });
    };

    if (window.scrollY >= 2252) {
        educationBoxs.forEach((box) => {
            box.style.width = "0";
        });
    }

    if (window.scrollY >= 2900) {
        experienceBoxs.forEach((box) => {
            box.style.width = "0";
        });
    }
}
// window.onscroll = () => {
//     console.log(window.scrollY);
// }
// -------------------------------------
let form = document.querySelector("form");
let formInputs = document.querySelectorAll("form input");
let textarea = document.querySelector("form textarea");
form.onsubmit = () => {
    formInputs.forEach((input) => {
        input.value = '';
    });
    textarea.value = ""
};