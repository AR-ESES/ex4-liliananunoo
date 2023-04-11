let espLarg = 5;
let espAltura = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate((i * width) / espLarg, (j * height) / espAltura);
      scale (0.25);
      posX = 0;
      posY = 0;
      noFill();
      stroke(0);
      strokeWeight(3);

      fill(255, 200, 150); // cabeça
      circle(posX, posY, height / 3);

      fill(255); //olhos
      circle(posX - height / 3 / 4, posY - height / 3 / 4, height / 15);
      circle(posX + height / 3 / 4, posY - height / 3 / 4, height / 15);

      fill(0); //pupilas
      circle(posX - height / 3 / 4, posY - height / 3 / 4, height / 20);
      circle(posX + height / 3 / 4, posY - height / 3 / 4, height / 20);

      fill(255, 0, 0); //nariz
      circle(posX + height / 12 / 20, posY - height / 12 / 20, height / 22);

      fill(0, 128, 0); //corpo
      ellipse(posX, posY + 220, 170, 200);

      fill(255, 200, 150); //braços
      ellipse(posX - 40, posY + 358, 50, 100);
      ellipse(posX + 40, posY + 358, 50, 100);

      fill(255, 200, 150); //pernas
      ellipse(posX - 130, posY + 190, 100, 50);
      ellipse(posX + 130, posY + 190, 100, 50);
      pop();
    }
  }
}
