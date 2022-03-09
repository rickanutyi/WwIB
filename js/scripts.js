let context, analyser, src, array;
const round1 = document.getElementById("music__round").style;
const audio1 = document.getElementById("audio");
const play1 = document.getElementById("play");

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
//white theme

const sun = document.getElementById("sun");

// sun.onclick = function () {
//   leftCard.style.border = "3px solid red";
//   leftCard.style.animationName = "whiteBorder";
//   leftCard.style.animationDuration = "2s";
//   leftCard.style.animationFillMode = "forwards";
// };

// sections
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
// section 1 canvas

// !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
(function () {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let w = (canvas.width = innerWidth);
  let h = (canvas.height = innerHeight);

  let particles = [];
  let properties = {
    bgColor: "rgba(0,0,0,1)",
    particleColor: "rgba(255,255,0,1)",
    particleRadius: 3,
    particleCount: 100,
    particleMaxVelocity: 0.5,
    lineLength: 150,
    particleLife: 6,
  };

  setTimeout(() => {
    properties.particleColor = "rgba(255,40,40,1)";
  }, 10000);

  function changeColor() {}
  document.getElementById("right__side").appendChild(canvas);

  window.onresize = function () {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  };

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.velocityX =
        Math.random() * (properties.particleMaxVelocity * 2) -
        properties.particleMaxVelocity;
      this.velocityY =
        Math.random() * (properties.particleMaxVelocity * 2) -
        properties.particleMaxVelocity;
      this.life = Math.random() * properties.particleLife * 60;
    }

    position() {
      //x
      (this.x + this.velocityX > w && this.velocityX > 0) ||
      (this.x + this.velocityX < 0 && this.velocityX < 0)
        ? (this.velocityX *= -1)
        : this.velocityX;
      //y
      (this.y + this.velocityY > h && this.velocityY > 0) ||
      (this.y + this.velocityY < 0 && this.velocityY < 0)
        ? (this.velocityY *= -1)
        : this.velocityY;
      //
      this.x += this.velocityX;
      this.y += this.velocityY;
    }

    reDraw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = properties.particleColor;
      ctx.fill();
    }

    recalcLife() {
      if (this.life < 1) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.velocityX =
          Math.random() * (properties.particleMaxVelocity * 2) -
          properties.particleMaxVelocity;
        this.velocityY =
          Math.random() * (properties.particleMaxVelocity * 2) -
          properties.particleMaxVelocity;
        this.life = Math.random() * properties.particleLife * 60;
      }
      this.life--;
    }
  }

  function reDrowBackground() {
    ctx.fillStyle = properties.bgColor;
    ctx.fillRect(0, 0, w, h);
  }

  function drawLines() {
    let x1, y1, x2, y2, length, opacity;
    for (let i in particles) {
      for (let j in particles) {
        x1 = particles[i].x;
        y1 = particles[i].y;
        x2 = particles[j].x;
        y2 = particles[j].y;

        length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        if (length < properties.lineLength) {
          opacity = 1 - length / properties.lineLength;
          ctx.lineWidth = "0.5";
          ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }
  }

  function reDrowParticles() {
    for (let i in particles) {
      particles[i].recalcLife();
      particles[i].position();
      particles[i].reDraw();
    }
  }

  function loop() {
    reDrowBackground();
    reDrowParticles();
    drawLines();
    requestAnimationFrame(loop);
  }

  function init() {
    for (let i = 0; i < properties.particleCount; i++) {
      particles.push(new Particle());
    }
    loop();
  }

  init();
})();

// !ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

//card animation
const leftCard = document.getElementById("left__card");
const roundMouse = document.getElementById("round__mouse");

// leftCard.onmousemove = function (event) {
//   roundMouse.style.opacity = "1";
//   roundMouse.style.top = `${event.clientY - 68}px`;
//   roundMouse.style.left = `${event.clientX - 265}px`;
//   // console.log(leftCard);
//   console.log(event.clientY);
// };
// leftCard.onmouseleave = function (event) {
//   setTimeout(() => {
//     roundMouse.style.opacity = "0";
//   }, 1000);
// };
// leftCard.onmouseover = function () {
//   blackBg.classList.add("black__fon");
// };
// leftCard.onmouseleave = function () {
//   blackBg.classList.remove("black__fon");
// };

function clearWall() {
  hobbyWall.innerHTML = "";
  hobby1.classList.remove("active");
  hobby2.classList.remove("active");
  hobby3.classList.remove("active");
  hobby4.classList.remove("active");
}

section1.onwheel = function (event) {
  clearWall();
  if (event.deltaY > 0) {
    section1.classList.remove("first__section");
    section2.classList.add("second__section");
  } else {
    section1.classList.remove("first__section");
    section4.classList.add("fourth__section");
  }
};
section2.onwheel = function (event) {
  clearWall();
  if (event.deltaY > 0) {
    section3.classList.add("third__section");
    section2.classList.remove("second__section");
  } else {
    section1.classList.add("first__section");
    section2.classList.remove("second__section");
  }
};
section3.onwheel = function (event) {
  clearWall();
  if (event.deltaY > 0) {
    section3.classList.remove("third__section");
    section4.classList.add("fourth__section");
  } else {
    section2.classList.add("second__section");
    section3.classList.remove("third__section");
  }
};

section4.onwheel = function (event) {
  clearWall();
  if (event.deltaY > 0) {
    section4.classList.remove("fourth__section");
    section1.classList.add("first__section");
  } else {
    section3.classList.add("third__section");
    section4.classList.remove("fourth__section");
  }
};
