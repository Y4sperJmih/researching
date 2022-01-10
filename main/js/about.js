let section = document.querySelector(".first")
let about = document.querySelector(".about")

section.addEventListener("click", () => {
    if (!about.classList.contains("about_in")) {
        about.classList.remove("about_out")
        about.classList.add("about_in");
    } else {
        about.classList.remove("about_in");
        about.classList.add("about_out");
    }
})
