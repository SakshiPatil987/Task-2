let startTime;
let running = false;
let elapsed = 0;
let timerInterval;

function startStop() {
  if (!running) {
    startTime = Date.now() - elapsed;
    timerInterval = setInterval(updateTime, 100);
    running = true;
    document.querySelector("button").textContent = "Pause";
  } else {
    clearInterval(timerInterval);
    running = false;
    document.querySelector("button").textContent = "Start";
  }
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  elapsed = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  document.querySelector("button").textContent = "Start";
}

function updateTime() {
  elapsed = Date.now() - startTime;
  const totalSeconds = Math.floor(elapsed / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  const centiseconds = String(Math.floor((elapsed % 1000) / 10)).padStart(2, "0");
  document.getElementById("display").textContent = `${minutes}:${seconds}:${centiseconds}`;
}

function lap() {
  if (!running) return;
  const lapTime = document.getElementById("display").textContent;
  const lapList = document.getElementById("laps");
  const li = document.createElement("li");
  li.textContent = `Lap: ${lapTime}`;
  lapList.appendChild(li);
}
