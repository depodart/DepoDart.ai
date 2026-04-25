// BauhausGrid.jsx — animated 2D canvas background for the How-It-Works section.
//
// - Slow-drifting orthogonal grid (subtle).
// - Occasional Bauhaus primitives (circles, squares, triangles) spawn, drift, fade.
// - Palette: brand orange + gold + white, all at low alpha.
// - Pauses when off-screen (IntersectionObserver) or tab hidden.
// - DPR-aware. No deps. Pure 2D canvas + RAF.

import { useEffect, useRef } from "react";

const COLORS = [
  { r: 210, g: 59, b: 12 },   // orange #D23B0C
  { r: 255, g: 196, b: 9 },   // gold   #FFC409
  { r: 255, g: 255, b: 255 }, // white
];

const rand = (min, max) => min + Math.random() * (max - min);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function makePrimitive(width, height) {
  const shape = pick(["circle", "square", "triangle"]);
  const color = pick(COLORS);
  const size = rand(24, 72);
  return {
    shape,
    color,
    size,
    x: rand(0, width),
    y: rand(height, height + 80),
    vy: rand(-0.25, -0.08),
    rot: rand(0, Math.PI * 2),
    vrot: rand(-0.002, 0.002),
    alpha: 0,
    targetAlpha: rand(0.08, 0.16),
    life: 0,
    lifeMax: rand(600, 1200),
  };
}

function drawShape(ctx, p) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rot);
  ctx.globalAlpha = p.alpha;
  ctx.strokeStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},1)`;
  ctx.lineWidth = 1.5;
  const s = p.size / 2;
  if (p.shape === "circle") {
    ctx.beginPath();
    ctx.arc(0, 0, s, 0, Math.PI * 2);
    ctx.stroke();
  } else if (p.shape === "square") {
    ctx.strokeRect(-s, -s, s * 2, s * 2);
  } else {
    // triangle
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.lineTo(s, s);
    ctx.lineTo(-s, s);
    ctx.closePath();
    ctx.stroke();
  }
  ctx.restore();
}

const BauhausGrid = ({ className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let offset = 0;
    const gridSize = 48;
    const primitives = [];
    const maxPrimitives = 6;
    let rafId = 0;
    let running = false;
    let visible = true;
    let lastSpawn = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(210, 59, 12, 0.07)";
      ctx.lineWidth = 1;
      const shift = offset % gridSize;
      ctx.beginPath();
      for (let x = shift; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = shift; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    const tick = (t) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      // grid slow drift
      offset += 0.08;
      drawGrid();

      // primitive spawn
      if (primitives.length < maxPrimitives && t - lastSpawn > 2200) {
        primitives.push(makePrimitive(width, height));
        lastSpawn = t;
      }

      // update + draw primitives
      for (let i = primitives.length - 1; i >= 0; i--) {
        const p = primitives[i];
        p.life += 16;
        // fade in then out
        const half = p.lifeMax / 2;
        if (p.life < half) {
          p.alpha = Math.min(p.targetAlpha, p.alpha + 0.005);
        } else {
          p.alpha = Math.max(0, p.alpha - 0.003);
        }
        p.y += p.vy;
        p.rot += p.vrot;
        if (p.life >= p.lifeMax || p.y < -p.size) {
          primitives.splice(i, 1);
          continue;
        }
        drawShape(ctx, p);
      }

      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || !visible || document.visibilityState === "hidden") return;
      running = true;
      rafId = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    resize();
    // seed with one primitive so it's not empty at first
    primitives.push(makePrimitive(width, height));
    start();

    const handleResize = () => {
      resize();
    };

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") stop();
      else start();
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible = entry.isIntersecting;
          if (visible) start();
          else stop();
        });
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stop();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};

export default BauhausGrid;
