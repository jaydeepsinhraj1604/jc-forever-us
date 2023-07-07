// Jay mataji🙏
  const clickAudio = document.getElementById("click-audio");
  const jsConfetti =new JSConfetti();
  const jcHeart =document.querySelector("#jc-heart");
  let icon = document.querySelector('ion-icon');

  icon.onclick = function() {
    icon.classList.toggle('active');
  }

  var vol= 2.0;
  var interval=250;
  var fadeOutVolume;
    jcHeart.addEventListener('click',()=>{
      setTimeout(()=>{
        document.location="/html/jcforever.html"}, 2400),
      jsConfetti.addConfetti({
        emojis: ['💖','🌸','🌹','🌷'],
        emojiSize: 20,
        confettiNumber: 800,
      }),
      clickAudio.play(),
      fadeOutVolume=setInterval(()=>{
        if(vol>0){
          vol-=0.18;
          clickAudio.volume=vol;
        }
        else{
          clearInterval(fadeOutVolume)
        }
      }, interval)
    })

    // *********************************************** *JC-Forever* *****************************************************************