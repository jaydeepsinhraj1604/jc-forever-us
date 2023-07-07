// Jay mataji🙏
const jsConfetti =new JSConfetti();
const bovBadhu =document.querySelector("#bov-badhu");
const heartbeatAudio = document.getElementById("heartbeat-audio");

heartbeatAudio.play();
heartbeatAudio.playbackRate = 0.77;

bovBadhu.addEventListener('click',()=>{
    jsConfetti.addConfetti({
        emojis: ["🤍","❤️️"],
        emojiSize: 20,
        confettiNumber: 800,
      })
})

// ************************************************** *JC-Forever* **************************************************