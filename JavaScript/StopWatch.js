let start = document.querySelector("#btn1");
let stop = document.querySelector("#btn2");
let reset = document.querySelector("#btn3");
let display = document.querySelector("#display");

let pause = false;
let intervalId;
start.onclick = () => {
  startwatch();
  start.setAttribute("disabled", "");
}
stop.onclick = () => {
  if (!pause) {
    pause = true;
    clearInterval(intervalId);
    stop.textContent = "Resume";
  } else {
    pause = false;
    stop.textContent = "STOP";
  }
};

function startwatch() {
  let h1 = 0, h2 = 0, m1 = 0, m2 = 0, s2 = 0, s1 = 0;

  reset.onclick = () => {
    clearInterval(complex);
    display.innerHTML = "00:00:00";
    h1=0,h2=0,m1=0,m2=0,s2=0,s1=0;
    start.removeAttribute("disabled", "");
    pause = false;
    stop.textContent = "STOP";
  }

  let complex = setInterval(() => {
    if (!pause) {
      s2++;
      if (s2 > 9) {
        s2 = 0;
        s1++;
        if (s1 > 5) {
          s1 = 0;
          m2++;
          if (m2 > 9) {
            m2 = 0;
            m1++;
            if (m1 > 5) {
              m1 = 0;
              h2++;
              if (h2 > 9) {
                if (h1 == 2 && h2 > 3) {
                  clearInterval(complex);
                }
                h2 = 0;
                h1++;
              }
            }
          }
        }
      }

      display.innerHTML = "" + h1 + h2 + ":" + m1 + m2 + ":" + s1 + s2;
    }
    else {
      display.innerHTML = "" + h1 + h2 + ":" + m1 + m2 + ":" + s1 + s2;
    }
  }, 1000);
}