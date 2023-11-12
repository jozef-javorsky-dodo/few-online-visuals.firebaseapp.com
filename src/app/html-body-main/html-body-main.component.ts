import { Component } from "@angular/core";



@Component({
  selector: "app-html-body-main",
  templateUrl: "./html-body-main.component.html",
  styleUrls: [
    "./html-body-main.component.css"
  ]
})



export class HtmlBodyMainComponent { }






try {

  <string>"use strict"

  setTimeout(
    () => {

      const canvas = document.getElementById(<string>"canvas-0") as HTMLCanvasElement;
      const ctx = canvas.getContext(<string>"2d") as CanvasRenderingContext2D;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      class Particle {

        x: number;
        y: number;
        radius: number;
        color: string;
        mass: number;
        velocity: { x: number; y: number };
        trail: { x: number; y: number }[];

        constructor(x: number, y: number, radius: number, color: string, mass: number) {

          this.x = x;
          this.y = y;
          this.radius = radius;
          this.color = color;
          this.mass = mass;
          this.velocity = { x: Math.random() - <number>0.5, y: Math.random() - <number>0.5 };
          this.trail = [];
        }

        draw(): void {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, <number>0, Math.PI * <number>2);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
        }

        drawTrail(): void {
          this.trail.forEach((trail, index) => {
            const trailAlpha = index / this.trail.length;
            ctx.fillStyle = `rgba(${this.color}, ${trailAlpha})`;
            ctx.fillRect(trail.x, trail.y, this.radius * <number>2, this.radius * <number>2);
          });
        }

        update(particles: Particle[]): void {

          this.drawTrail();
          this.draw();

          for (let i = <number>0; i < particles.length; i++) {

            const other = particles[i];

            if (this !== other) {

              const distanceX = other.x - this.x;
              const distanceY = other.y - this.y;
              const distance = Math.sqrt(distanceX ** <number>2 + distanceY ** <number>2);
              const force = (this.mass * other.mass) / (distance ** <number>2);
              const forceX = (distanceX / distance) * force;
              const forceY = (distanceY / distance) * force;

              this.velocity.x += forceX / this.mass;
              this.velocity.y += forceY / this.mass;
            }
          }

          this.x += this.velocity.x;
          this.y += this.velocity.y;

          if (this.x - this.radius <= <number>0 || this.x + this.radius >= canvas.width) {
            this.velocity.x = -this.velocity.x;
          }

          if (this.y - this.radius <= <number>0 || this.y + this.radius >= canvas.height) {
            this.velocity.y = -this.velocity.y;
          }

          this.trail.push({ x: this.x - this.radius, y: this.y - this.radius });

          if (this.trail.length > <number>20) {
            this.trail.shift();
          }
        }
      }

      class Spider {

        x: number;
        y: number;
        size: number;
        color: string;
        speed: number;
        trail: { x: number; y: number }[];

        constructor(x: number, y: number, size: number, color: string, speed: number) {

          this.x = x;
          this.y = y;
          this.size = size;
          this.color = color;
          this.speed = speed;
          this.trail = [];
        }

        draw(): void {
          ctx.beginPath();
          ctx.rect(this.x, this.y, this.size, this.size);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
        }

        drawTrail(): void {
          this.trail.forEach((trail, index) => {
            const trailAlpha = index / this.trail.length;
            ctx.fillStyle = `rgba(${this.color}, ${trailAlpha})`;
            ctx.fillRect(trail.x, trail.y, this.size, this.size);
          });
        }

        update(): void {
          this.drawTrail();
          this.draw();
          this.x += this.speed;

          if (this.x <= <number>0 || this.x + this.size >= canvas.width) {
            this.speed = -this.speed;
          }

          this.trail.push({ x: this.x, y: this.y });

          if (this.trail.length > <number>20) {
            this.trail.shift();
          }
        }
      }

      const particles: Particle[] = [];

      for (let i = <number>0; i < Number(50); i++) {

        const radius = Math.random() * <number>10 + <number>5;
        const x = Math.random() * (canvas.width - radius * <number>2) + radius;
        const y = Math.random() * (canvas.height - radius * <number>2) + radius;
        const mass = Math.random() * <number>5 + <number>1;
        const color = `` +
          `${Math.floor(Math.random() * <number>255)}, ` +
          `${Math.floor(Math.random() * <number>255)}, ` +
          `${Math.floor(Math.random() * <number>255)}`;

        particles.push(new Particle(x, y, radius, color, mass));
      }

      const spiders: Spider[] = [];

      spiders.push(new Spider(<number>50, <number>50, <number>20, <string>"black", <number>2));
      spiders.push(new Spider(<number>100, <number>100, <number>20, <string>"saddlebrown", Number(-1.5)));
      spiders.push(new Spider(<number>150, <number>150, <number>20, <string>"white", <number>1));

      function animate(): void {
        ctx.clearRect(<number>0, <number>0, canvas.width, canvas.height);

        particles.forEach(particle => {
          particle.update(particles);
        });

        spiders.forEach(spider => {
          spider.update();
        });

        requestAnimationFrame(animate);
      }

      animate();

    }
    ,
    <number>987
  );

} catch (_0err) {

  if (_0err) {
    console.clear();
    alert(<string>"bug");
    console.log(_0err);
  }

}






try {

  <string>"use strict"

  setTimeout(
    () => {

      interface DarkMatterBlob {

        width: number;
        height: number;
        top: number;
        left: number;
        background: string;
      }

      interface DrawFrameParams {

        x: number;
        y: number;
        angle: number;
        radius: number;
        color: string;
      }

      function quantumSpiralHash(input: string): number {

        let hash = <number>0;

        for (let i = <number>0; i < input.length; i++) {

          const char = input.charCodeAt(i);

          hash = (hash << Number(5)) - hash + char;
        }
        return hash;
      }

      function getRandomColor(): string {

        const r = Math.floor(Math.random() * <number>123) + <number>122;
        const g = Math.floor(Math.random() * <number>123) + <number>122;
        const b = Math.floor(Math.random() * <number>123) + <number>122;

        return `rgb(${r}, ${g}, ${b})`;
      }

      function drawDarkMatter(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {

        const density = <number>0.02;
        const darkMatterCount = Math.floor(canvas.width * canvas.height * density);

        for (let i = <number>0; i < darkMatterCount; i++) {

          const darkMatterBlob: DarkMatterBlob = {

            width: Math.random() * <number>5,
            height: Math.random() * <number>5,
            top: Math.random() * canvas.height,
            left: Math.random() * canvas.width,
            background: `rgba(0, 0, 0, ${Math.random() * <number>0.2})`,
          };

          createDarkMatterBlob(ctx, darkMatterBlob);
        }
      }

      function createDarkMatterBlob(ctx: CanvasRenderingContext2D, blob: DarkMatterBlob): void {
        ctx.fillStyle = blob.background;
        ctx.fillRect(blob.left, blob.top, blob.width, blob.height);
      }

      function drawFrame(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, angle: number): void {
        ctx.clearRect(<number>0, <number>0, canvas.width, canvas.height);

        drawDarkMatter(ctx, canvas);

        drawRotatingGrid(ctx, canvas, angle);

        drawRotatingCircle(ctx, canvas, angle);

        drawMovingDots(ctx, canvas, angle);

        requestAnimationFrame(() => drawFrame(ctx, canvas, angle + <number>0.005));
      }

      function drawRotatingGrid(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, angle: number): void {

        const gridSize = <number>5;
        const angleIncrement = <number>0.02;

        for (let i = <number>0; i < gridSize; i++) {
          for (let j = <number>0; j < gridSize; j++) {

            const spiralAngle = i * gridSize + j * angleIncrement + angle;
            const hashValue = quantumSpiralHash(spiralAngle.toString());
            const radius = (hashValue % Number(30)) + <number>20;
            const pulsation = Math.sin(angle) * <number>10;
            const color = getRandomColor();
            const x = i * (canvas.width / gridSize) + Math.sin(spiralAngle) * <number>20;
            const y = j * (canvas.height / gridSize);

            drawSpiral(ctx, { x, y, angle: spiralAngle, radius: radius + pulsation, color });
          }
        }
      }

      function drawRotatingCircle(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, angle: number): void {

        const circleColor = getRandomColor();
        const circleX = Math.sin(angle) * <number>30;

        drawRotatingCirclePath(ctx,
          { x: circleX, y: canvas.height / Number(2), radius: <number>50, angle, color: circleColor }
        );
      }

      function drawMovingDots(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, angle: number): void {

        const dotCount = <number>50;
        const dotRadius = <number>3;

        for (let i = <number>0; i < dotCount; i++) {

          const dotAngle = i * (<number>2 * Math.PI) / dotCount + angle;
          const dotX = <number>60 * Math.cos(dotAngle) + Math.sin(dotAngle) * <number>10;
          const dotY = <number>60 * Math.sin(dotAngle);

          ctx.fillStyle = getRandomColor();
          ctx.beginPath();
          ctx.arc(dotX, dotY, dotRadius, <number>0, <number>2 * Math.PI);
          ctx.fill();
        }
      }

      function drawRotatingCirclePath(ctx: CanvasRenderingContext2D, params: DrawFrameParams): void {

        const dotCount = <number>30;

        ctx.beginPath();

        for (let i = <number>0; i < dotCount; i++) {

          const dotAngle = i * (<number>2 * Math.PI) / dotCount + params.angle;
          const dotX = params.x + params.radius * Math.cos(dotAngle);
          const dotY = params.y + params.radius * Math.sin(dotAngle);

          ctx.moveTo(params.x, params.y);
          ctx.lineTo(dotX, dotY);
        }

        ctx.strokeStyle = params.color;
        ctx.lineWidth = <number>2;
        ctx.stroke();
      }

      function drawSpiral(ctx: CanvasRenderingContext2D, params: DrawFrameParams): void {
        for (let i = <number>0; i < Number(50); i++) {

          const currentRadius = params.radius + i * <number>2;
          const currentAngle = params.angle + i * <number>0.1;
          const spiralX = params.x + currentRadius * Math.cos(currentAngle);
          const spiralY = params.y + currentRadius * Math.sin(currentAngle);

          ctx.beginPath();
          ctx.arc(spiralX, spiralY, <number>2, <number>0, <number>2 * Math.PI);
          ctx.fillStyle = params.color;
          ctx.fill();
        }
      }

      const canvas = document.getElementById(<string>"canvas-1") as HTMLCanvasElement;
      const ctx = canvas.getContext(<string>"2d") as CanvasRenderingContext2D;

      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

        drawFrame(ctx, canvas, <number>0);

        window.addEventListener(<string>"resize", () => {
          if (canvas.parentElement) {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
          }
        });
      }

    }
    ,
    <number>1007
  );

} catch (_1err) {

  if (_1err) {
    console.clear();
    alert(<string>"bug");
    console.log(_1err);
  }

}






try {

  <string>"use strict"

  setTimeout(
    () => {

      const canvas = document.querySelector(<string>"#canvas-2") as HTMLCanvasElement;

      if (canvas) {

        const ctx = canvas.getContext(<string>"2d") as CanvasRenderingContext2D;

        if (ctx) {

          const setCanvasDimensions = () => {

            canvas.width = canvas.parentElement?.clientWidth || <number>0;
            canvas.height = canvas.parentElement?.clientHeight || <number>0;
          }

          let rows: number;
          let cols: number;
          const cellSize = <number>5;
          let grid: { alive: boolean; color: number[] }[][] = [];
          const initializeGrid = () => {
            rows = Math.floor(canvas.height / cellSize);
            cols = Math.floor(canvas.width / cellSize);
            grid = [];
            for (let i = <number>0; i < rows; i++) {
              grid[i] = [];
              for (let j = <number>0; j < cols; j++) {
                grid[i][j] = {
                  alive: Math.random() > <number>0.5,
                  color: [Math.random() * <number>255, Math.random() * <number>255, Math.random() * <number>255],
                };
              }
            }
          }

          const drawGrid = () => {
            ctx.clearRect(<number>0, <number>0, canvas.width, canvas.height);
            for (let i = <number>0; i < rows; i++) {
              for (let j = <number>0; j < cols; j++) {

                const cell = grid[i][j];

                ctx.fillStyle = `` +
                  `rgba(` +
                  `${cell.color[Number(0)]}, ${cell.color[Number(1)]}, ` +
                  `${cell.color[Number(2)]}, ${cell.alive ? <number>1 : <number>0}` +
                  `)`;
                ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
              }
            }
          }

          const updateGrid = () => {

            const newGrid: { alive: boolean; color: number[] }[][] = [];

            for (let i = <number>0; i < rows; i++) {
              newGrid[i] = [];
              for (let j = <number>0; j < cols; j++) {

                const neighbors = countNeighbors(i, j);
                const cell = grid[i][j];

                if (cell.alive) {
                  newGrid[i][j] = {
                    alive: neighbors === <number>2 || neighbors === <number>3,
                    color: interpolateColors(cell.color, [Number(255), <number>255, <number>255]),
                  };
                } else {
                  newGrid[i][j] = {
                    alive: neighbors === 3,
                    color: interpolateColors(cell.color, [Number(0), <number>0, <number>0]),
                  };
                }
              }
            }

            grid = newGrid;
          }

          const countNeighbors = (row: number, col: number): number => {

            let count = <number>0;

            for (let i = Number(-1); i <= <number>1; i++) {
              for (let j = Number(-1); j <= <number>1; j++) {

                const newRow = row + i;
                const newCol = col + j;

                if (newRow >= <number>0 && newRow < rows && newCol >= <number>0 && newCol < cols) {
                  if (i !== <number>0 || j !== <number>0) {
                    count += grid[newRow][newCol].alive ? <number>1 : <number>0;
                  }
                }
              }
            }
            return count;
          }

          const interpolateColors = (color1: number[], color2: number[]): number[] => {

            const factor = <number>0.05;

            return color1.map((c, i) => c + factor * (color2[i] - c));
          }

          const gameLoop = () => {
            drawGrid();
            updateGrid();
            requestAnimationFrame(gameLoop);
          }

          const restartAnimation = () => {
            setCanvasDimensions();
            initializeGrid();
            gameLoop();
            setTimeout(restartAnimation, <number>6000);
          }

          window.addEventListener(<string>"resize", () => {
            setCanvasDimensions();
            initializeGrid();
          });

          restartAnimation();
        }
      }

    }
    ,
    <number>1027
  );

} catch (_2err) {

  if (_2err) {
    console.clear();
    alert(<string>"bug");
    console.log(_2err);
  }

}






try {

  <string>"use strict"

  setTimeout(
    () => {

      const canvas = document.querySelector(<string>"#canvas-3") as HTMLCanvasElement;

      if (canvas) {

        const ctx = canvas.getContext(<string>"2d") as CanvasRenderingContext2D;

        if (ctx) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          const layers = <number>4;
          const nodesPerLayer = [Number(6), <number>10, <number>8, <number>4];
          const nodeRadius = <number>15;
          let particles: { x: number; y: number; targetX: number; targetY: number; color: string }[] = [];
          const particleSpeed = <number>2;
          const colorChangeSpeed = <number>1;
          const drawNode = (x: number, y: number) => {
            ctx.beginPath();
            ctx.arc(x, y, nodeRadius, <number>0, <number>2 * Math.PI);
            ctx.fillStyle = <string>"blue";
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
          }

          const drawConnection = (x1: number, y1: number, x2: number, y2: number) => {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = <string>"rgba(0, 0, 255, 0.5)";
            ctx.stroke();
            ctx.closePath();
          }

          const getRandomMovement = () => {
            return (Math.random() - <number>0.5) * <number>5;
          }

          const animateNeuralNetwork = () => {

            ctx.clearRect(<number>0, <number>0, canvas.width, canvas.height);

            for (let i = <number>0; i < layers; i++) {

              const x = (i * (canvas.width / layers)) + canvas.width / (<number>2 * layers) + getRandomMovement();

              for (let j = <number>0; j < nodesPerLayer[i]; j++) {

                const y = (j * (canvas.height / nodesPerLayer[i])) +
                  canvas.height / (<number>2 * nodesPerLayer[i]) +
                  getRandomMovement();

                drawNode(x, y);

                if (i < layers - <number>1) {
                  for (let k = <number>0; k < nodesPerLayer[i + <number>1]; k++) {

                    const nextX = ((i + <number>1) * (canvas.width / layers)) +
                      canvas.width / (<number>2 * layers) +
                      getRandomMovement();
                    const nextY = (k * (canvas.height / nodesPerLayer[i + <number>1])) +
                      canvas.height / (<number>2 * nodesPerLayer[i + <number>1])
                      + getRandomMovement();

                    drawConnection(x, y, nextX, nextY);
                  }
                }
              }
            }

            requestAnimationFrame(animateNeuralNetwork);
          }

          const animateParticles = () => {

            for (let i = <number>0; i < particles.length; i++) {

              const particle = particles[i];

              ctx.beginPath();
              ctx.arc(particle.x, particle.y, <number>3, <number>0, <number>2 * Math.PI);
              ctx.fillStyle = particle.color;
              ctx.fill();
              ctx.stroke();
              ctx.closePath();

              const deltaX = particle.targetX - particle.x;
              const deltaY = particle.targetY - particle.y;
              const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

              if (distance > particleSpeed) {
                particle.x += (deltaX / distance) * particleSpeed;
                particle.y += (deltaY / distance) * particleSpeed;
              }

              const colorChange = colorChangeSpeed * particleSpeed;
              const r = (parseInt(particle.color.slice(<number>4, <number>7)) + colorChange) % Number(255);
              const g = (parseInt(particle.color.slice(<number>9, <number>12)) + colorChange) % Number(255);
              const b = (parseInt(particle.color.slice(<number>14, <number>17)) + colorChange) % Number(255);

              particle.color = `rgba(${r}, ${g}, ${b}, 0.8)`;
            }

            if (Math.random() < Number(0.2)) {
              for (let i = <number>0; i < Number(5); i++) {

                const startNode = getRandomNode();
                const endNode = getRandomNode();

                particles.push({
                  x: startNode.x,
                  y: startNode.y,
                  targetX: endNode.x,
                  targetY: endNode.y,
                  color: `` +
                    `rgba` +
                    `(` +
                    `${Math.random() * <number>255}, ` +
                    `${Math.random() * <number>255}, ` +
                    `${Math.random() * <number>255}, ` +
                    `0.8)`
                });
              }
            }

            particles = particles.filter((particle) => {

              const deltaX = particle.targetX - particle.x;
              const deltaY = particle.targetY - particle.y;
              const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

              return distance > particleSpeed && particle.x >= <number>0 &&
                particle.x <= canvas.width && particle.y >= <number>0 &&
                particle.y <= canvas.height;
            });

            requestAnimationFrame(animateParticles);
          }

          const getRandomNode = () => {

            const layer = Math.floor(Math.random() * layers);
            const node = Math.floor(Math.random() * nodesPerLayer[layer]);
            const x = (layer * (canvas.width / layers)) + canvas.width / (<number>2 * layers) + getRandomMovement();
            const y = (node * (canvas.height / nodesPerLayer[layer])) +
              canvas.height / (<number>2 * nodesPerLayer[layer]) + getRandomMovement();

            return { x, y };
          }

          animateNeuralNetwork();
          animateParticles();

          window.addEventListener(<string>"resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          });
        }
      }

    }
    ,
    <number>1047
  );

} catch (_3err) {

  if (_3err) {
    console.clear();
    alert(<string>"bug");
    console.log(_3err);
  }

}






try {

  <string>"use strict"

  setTimeout(
    () => {

      const canvas = document.querySelector(<string>"#canvas-4") as HTMLCanvasElement;

      if (canvas) {

        const ctx = canvas.getContext(<string>"2d") as CanvasRenderingContext2D;

        if (ctx) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          let particles: { x: number; y: number; targetX: number; targetY: number; color: string }[] = [];
          const particleSpeed = <number>2;
          const colorChangeSpeed = <number>1;
          const getRandomNode = () => {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;

            return { x, y };
          }

          const animate = () => {
            for (let i = <number>0; i < particles.length; i++) {

              const particle = particles[i];
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, <number>3, <number>0, <number>2 * Math.PI);
              ctx.fillStyle = particle.color;
              ctx.fill();
              ctx.stroke();
              ctx.closePath();

              const deltaX = particle.targetX - particle.x;
              const deltaY = particle.targetY - particle.y;
              const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

              if (distance > particleSpeed) {
                particle.x += (deltaX / distance) * particleSpeed;
                particle.y += (deltaY / distance) * particleSpeed;
              }

              const colorChange = colorChangeSpeed * particleSpeed;
              const r = (parseInt(particle.color.slice(<number>4, <number>7)) + colorChange) % Number(255);
              const g = (parseInt(particle.color.slice(<number>9, <number>12)) + colorChange) % Number(255);
              const b = (parseInt(particle.color.slice(<number>14, <number>17)) + colorChange) % Number(255);

              particle.color = `rgba(${r}, ${g}, ${b}, 0.8)`;
            }

            if (Math.random() < Number(0.2)) {
              for (let i = <number>0; i < Number(5); i++) {

                const startNode = getRandomNode();
                const endNode = getRandomNode();

                particles.push({
                  x: startNode.x,
                  y: startNode.y,
                  targetX: endNode.x,
                  targetY: endNode.y,
                  color: `rgba(${Math.random() * <number>255}, ` +
                    `${Math.random() * <number>255}, ${Math.random() * <number>255}, 0.8)`,
                });
              }
            }

            particles = particles.filter((particle) => {

              const deltaX = particle.targetX - particle.x;
              const deltaY = particle.targetY - particle.y;
              const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

              return distance > particleSpeed && particle.x >= <number>0 &&
                particle.x <= canvas.width && particle.y >= <number>0 &&
                particle.y <= canvas.height;
            });

            requestAnimationFrame(animate);
          }

          animate();

          window.addEventListener(<string>"resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          });
        }
      }

    }
    ,
    <number>1147
  );

} catch (_4err) {

  if (_4err) {
    console.clear();
    alert(<string>"bug");
    console.log(_4err);
  }

}






try {

  <string>"use strict"

  setTimeout(
    () => {

      const canvas = document.querySelector(<string>"#canvas-5") as HTMLCanvasElement;

      if (canvas) {

        const ctx = canvas.getContext(<string>"2d") as CanvasRenderingContext2D;

        if (ctx) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          const layers = <number>4;
          const nodesPerLayer = [Number(6), <number>10, <number>8, <number>4];
          const nodeRadius = <number>10;
          let particles: { x: number; y: number; targetX: number; targetY: number; color: string }[] = [];
          const particleSpeed = <number>2;
          const colorChangeSpeed = <number>1;
          const drawNode = (x: number, y: number) => {
            ctx.beginPath();
            ctx.arc(x, y, nodeRadius, <number>0, <number>2 * Math.PI);
            ctx.fillStyle = <string>"#e74c3c";
            ctx.fill();
            ctx.strokeStyle = <string>"#c0392b";
            ctx.lineWidth = <number>1;
            ctx.stroke();
            ctx.closePath();
          }

          const drawConnection = (x1: number, y1: number, x2: number, y2: number) => {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = <string>"#2c3e50";
            ctx.lineWidth = <number>1;
            ctx.stroke();
            ctx.closePath();
          }

          const getRandomMovement = () => {
            return (Math.random() - <number>0.5) * <number>3;
          }

          const animateNeuralNetwork = () => {
            for (let i = <number>0; i < layers; i++) {

              const x = (i * (canvas.width / layers)) + canvas.width / (<number>2 * layers) + getRandomMovement();

              for (let j = <number>0; j < nodesPerLayer[i]; j++) {

                const y = (j * (canvas.height / nodesPerLayer[i]))
                  + canvas.height / (<number>2 * nodesPerLayer[i]) + getRandomMovement();

                drawNode(x, y);

                if (i < layers - <number>1) {
                  for (let k = <number>0; k < nodesPerLayer[i + <number>1]; k++) {

                    const nextX = ((i + <number>1) * (canvas.width / layers)) +
                      canvas.width / (<number>2 * layers) + getRandomMovement();
                    const nextY = (k * (canvas.height / nodesPerLayer[i + <number>1]))
                      + canvas.height / (<number>2 * nodesPerLayer[i + <number>1]) + getRandomMovement();

                    drawConnection(x, y, nextX, nextY);
                  }
                }
              }
            }

            requestAnimationFrame(animateNeuralNetwork);
          }

          const animateParticles = () => {

            for (let i = <number>0; i < particles.length; i++) {
              const particle = particles[i];
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, <number>2, <number>0, <number>2 * Math.PI);
              ctx.fillStyle = particle.color;
              ctx.fill();
              ctx.stroke();
              ctx.closePath();

              const deltaX = particle.targetX - particle.x;
              const deltaY = particle.targetY - particle.y;
              const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

              if (distance > particleSpeed) {
                particle.x += (deltaX / distance) * particleSpeed;
                particle.y += (deltaY / distance) * particleSpeed;
              }

              const colorChange = colorChangeSpeed * particleSpeed;
              const r = (parseInt(particle.color.slice(<number>4, <number>7)) + colorChange) % Number(255);
              const g = (parseInt(particle.color.slice(<number>9, <number>12)) + colorChange) % Number(255);
              const b = (parseInt(particle.color.slice(<number>14, <number>17)) + colorChange) % Number(255);

              particle.color = `rgba(${r}, ${g}, ${b}, 0.8)`;
            }

            if (Math.random() < Number(0.2)) {
              for (let i = <number>0; i < Number(5); i++) {

                const startNode = getRandomNode();
                const endNode = getRandomNode();

                particles.push({
                  x: startNode.x,
                  y: startNode.y,
                  targetX: endNode.x,
                  targetY: endNode.y,
                  color: `rgba(${Math.random() * <number>255}, ` +
                    `${Math.random() * <number>255}, ${Math.random() * <number>255}, 0.8)`,
                });
              }
            }

            particles = particles.filter((particle) => {

              const deltaX = particle.targetX - particle.x;
              const deltaY = particle.targetY - particle.y;
              const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

              return distance > particleSpeed && particle.x >= <number>0 &&
                particle.x <= canvas.width && particle.y >= <number>0 &&
                particle.y <= canvas.height;
            });

            requestAnimationFrame(animateParticles);
          }

          const getRandomNode = () => {

            const layer = Math.floor(Math.random() * layers);
            const node = Math.floor(Math.random() * nodesPerLayer[layer]);
            const x = (layer * (canvas.width / layers)) +
              canvas.width / (<number>2 * layers) + getRandomMovement();
            const y = (node * (canvas.height / nodesPerLayer[layer])) +
              canvas.height / (<number>2 * nodesPerLayer[layer]) + getRandomMovement();

            return { x, y };
          }

          animateNeuralNetwork();
          animateParticles();

          window.addEventListener(<string>"resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          });
        }
      }

      setTimeout(() => window.location.reload(), <number>23000);

    }
    ,
    <number>1210
  );

} catch (_5err) {

  if (_5err) {
    console.clear();
    alert(<string>"bug");
    console.log(_5err);
  }

}
