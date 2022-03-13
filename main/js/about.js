let section = document.querySelector(".first")
let about = document.querySelector(".about")
let video = document.querySelector("video")

section.addEventListener("click", () => {
    if (!about.classList.contains("about_in")) {
        about.classList.remove("about_out")
        about.classList.add("about_in");
        video.play()
    } else {
        about.classList.remove("about_in");
        about.classList.add("about_out");
        video.pause()
    }
})

video.volume = 0.3;
