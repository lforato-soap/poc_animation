const cubeFrames = [
  "assets/5.png",
  "assets/10.png",
  "assets/15.png",
  "assets/20.png",
  "assets/25.png",
  "assets/30.png",
  "assets/35.png",
  "assets/40.png",
  "assets/45.png",
  "assets/50.png",
  "assets/55.png",
  "assets/60.png",
  "assets/65.png",
  "assets/70.png",
  "assets/75.png",
  "assets/80.png",
  "assets/85.png",
  "assets/0.png",
]

const bodyFrames = [
  "body/5.png",
  "body/10.png",
  "body/15.png",
  "body/20.png",
  "body/25.png",
  "body/30.png",
  "body/35.png",
  "body/40.png",
  "body/45.png",
  "body/50.png",
  "body/55.png",
  "body/60.png",
  "body/65.png",
  "body/70.png",
  "body/75.png",
  "body/80.png",
  "body/85.png",
  "body/90.png",
  "body/95.png",
  "body/100.png",
  "body/105.png",
  "body/110.png",
  "body/115.png",
  "body/120.png",
  "body/125.png",
  "body/130.png",
  "body/135.png",
  "body/140.png",
  "body/145.png",
  "body/150.png",
  "body/155.png",
  "body/160.png",
  "body/165.png",
  "body/170.png",
  "body/175.png",
  "body/180.png",
]


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleClick() {
  for (const frame of cubeFrames) {
    let img = document.getElementById('cube');
    img.src = frame;
    await delay(15);
  }
}

async function handleBodyClick() {
  for (const frame of bodyFrames) {
    let img = document.getElementById('body');
    img.src = frame;
    await delay(20);
  }
}

