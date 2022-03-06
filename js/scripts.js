let context, analyser, src, array;
const round1 = document.getElementById("music__round").style;
const audio1 = document.getElementById("audio");
const play1 = document.getElementById("play");

// const round2 = document.getElementById("music__round2").style;
// const audio2 = document.getElementById("audio2");
// const play2 = document.getElementById("play2");

play1.onclick = () => {
  if (audio1.paused) {
    startPlay(round1, audio1, play1);
  } else {
    audio1.pause();
  }
};
function startPlay(round, audio, play) {
  if (!context) {
    preparation();
  }
  audio.play();
  loop();

  function preparation() {
    context = new AudioContext();
    analyser = context.createAnalyser();
    src = context.createMediaElementSource(audio);
    src.connect(analyser);
    analyser.connect(context.destination);

    loop();
  }

  function loop() {
    if (!audio.paused) {
      window.requestAnimationFrame(loop);
    }
    array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);

    console.log(array[40]);
    play.style.height = array[40] + "px";
    play.style.width = array[40] + "px";
    round.backgroundColor = `rgba(${array[0]},${array[20]},${array[40]},1)`;
    play.style.border = `1px solid rgba(${array[70]},${array[100]},${array[40]},1)`;

    if (audio.paused) {
      play.style.height = "100px";
      play.style.width = "100px";
      round.backgroundColor = `transparent`;
    }
  }
}

// sections
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");

section1.onwheel = function (event) {
  if (event.deltaY > 0) {
    section1.classList.remove("first__section");
    section2.classList.add("second__section");
  } else {
    section1.classList.remove("first__section");
    section4.classList.add("fourth__section");
  }
};
section2.onwheel = function (event) {
  if (event.deltaY > 0) {
    section3.classList.add("third__section");
    section2.classList.remove("second__section");
  } else {
    section1.classList.add("first__section");
    section2.classList.remove("second__section");
  }
};
section3.onwheel = function (event) {
  if (event.deltaY > 0) {
    section3.classList.remove("third__section");
    section4.classList.add("fourth__section");
  } else {
    section2.classList.add("second__section");
    section3.classList.remove("third__section");
  }
};

section4.onwheel = function (event) {
  if (event.deltaY > 0) {
    section4.classList.remove("fourth__section");
    section1.classList.add("first__section");
  } else {
    section3.classList.add("third__section");
    section4.classList.remove("fourth__section");
  }
};
