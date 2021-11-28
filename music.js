let audio = document.getElementById("audio")
let btnPlay = document.querySelector(".play")
let btnPause = document.querySelector(".pause")
let time = document.querySelector(".time")
let track = document.querySelector(".audio-track")
let count = 0;

btnPlay.addEventListener("click", function() {
    if (count % 2 != 0) {
        var intId = setInterval(function(){
            audio.play();
            audio.volume+=0.01;
            if(audio.volume == 0.3){
                clearInterval(intId);
            }
        },20)
        count++;
    } else {
        count = 0;
        audio.volume = 0.3;
        audio.currentTime = 0;
        audio.play();
        audioPlay = setInterval(function() {
            let audioTime = Math.round(audio.currentTime);
            let audioLength = Math.round(audio.duration);
            time.style.width = (audioTime * 100) / audioLength + '%';
        }, 10)
    }
})

btnPause.addEventListener("click", function() {
    if (count % 2 == 0) {
        var intId = setInterval(function(){
        audio.volume-=0.01;
        if(audio.volume <= 0.01){
            audio.pause();
            clearInterval(intId);
        }
    },20)
    }else {
        var intId = setInterval(function(){
            audio.play();
            audio.volume+=0.01;
            if(audio.volume == 0.3){
                clearInterval(intId);
            }
        },20)
    }
    count++;
})