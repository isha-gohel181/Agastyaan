import { useEffect, useRef } from "react";

/**
 * Global Firefly Effect matching agastyaan-fireflies-midnight.html
 * 
 * Features:
 * - Bioluminescent flashing fireflies with warm glowing radial halos
 * - Interactive pointer attraction: Fireflies flock & swarm toward the cursor / touch position across the entire landing page
 * - Dynamic mouse halo aura
 * - Click / tap burst: Spawns a ring of 14 fireflies anywhere on the page
 * - Smooth wrap-around screen boundaries
 * - 100% non-blocking (pointer-events: none)
 */
const FireflyEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let t = 0;
    let last = performance.now();
    let animId = null;

    const pointer = { x: -999, y: -999, on: false };
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const flies = [];

    function makeFly(x, y) {
      return {
        x: x !== undefined ? x : Math.random() * W,
        y: y !== undefined ? y : Math.random() * H,
        vx: 0,
        vy: 0,
        a: Math.random() * 6.283,
        ph: Math.random() * 6.283,
        sp: 0.6 + Math.random() * 1.2,
        sz: 1.6 + Math.random() * 1.6,
        near: 0,
      };
    }

    function addFlies(n) {
      for (let i = 0; i < n; i++) {
        flies.push(makeFly());
      }
      if (flies.length > 180) {
        flies.splice(0, flies.length - 180);
      }
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawFlies(dt) {
      const isDark = document.documentElement.classList.contains("dark");
      ctx.clearRect(0, 0, W, H);
      // In light theme, remove background fireflies completely
      if (!isDark) return;

      ctx.globalCompositeOperation = "lighter";

      // Mouse glow aura
      if (pointer.on) {
        const pg = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          90
        );
        pg.addColorStop(0, "rgba(214,255,122,.22)");
        pg.addColorStop(1, "rgba(214,255,122,0)");
        ctx.fillStyle = pg;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 90, 0, 6.283);
        ctx.fill();
      }

      for (let i = 0; i < flies.length; i++) {
        const f = flies[i];
        if (!reduce) {
          f.a += (Math.random() - 0.5) * 0.35;
          let ax = Math.cos(f.a) * 0.03;
          let ay = Math.sin(f.a) * 0.03;

          // Pointer flocking & attraction field
          if (pointer.on) {
            const dx = pointer.x - f.x;
            const dy = pointer.y - f.y;
            const d = Math.sqrt(dx * dx + dy * dy) + 1;
            if (d < 520) {
              const k = 1 - d / 520;
              ax +=
                (dx / d) * 0.35 * k -
                (dy / d) * 0.12 * k * (f.ph > 3.1 ? 1 : -1);
              ay +=
                (dy / d) * 0.35 * k +
                (dx / d) * 0.12 * k * (f.ph > 3.1 ? 1 : -1);
              if (d < 45) {
                ax -= (dx / d) * 0.25;
                ay -= (dy / d) * 0.25;
              }
              f.near = k;
            } else {
              f.near = 0;
            }
          } else {
            f.near = 0;
          }

          f.vx = (f.vx + ax) * 0.97;
          f.vy = (f.vy + ay) * 0.97;

          const spd = Math.sqrt(f.vx * f.vx + f.vy * f.vy);
          if (spd > 5) {
            f.vx *= 5 / spd;
            f.vy *= 5 / spd;
          }

          f.x += f.vx * dt * 60;
          f.y += f.vy * dt * 60;

          // Wrap-around screen bounds
          if (f.x < -30) f.x = W + 30;
          if (f.x > W + 30) f.x = -30;
          if (f.y < -30) f.y = H + 30;
          if (f.y > H + 30) f.y = -30;
        }

        // Flash pulsating curve
        let b = reduce ? 0.8 : Math.max(0, Math.sin(t * f.sp + f.ph));
        b = b * b;
        if (f.near) b = Math.max(b, f.near * 0.9);

        const r = f.sz * (6 + b * 10);
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, r);
        g.addColorStop(0, "rgba(226,255,140," + (0.15 + b * 0.85) + ")");
        g.addColorStop(0.25, "rgba(190,255,90," + b * 0.35 + ")");
        g.addColorStop(1, "rgba(150,255,60,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(f.x, f.y, r, 0, 6.283);
        ctx.fill();

        // White-hot center core
        ctx.fillStyle = "rgba(255,255,220," + (0.35 + b * 0.65) + ")";
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.sz * 0.6, 0, 6.283);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
    }

    function frame(now) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      t += dt;

      drawFlies(dt);
      animId = requestAnimationFrame(frame);
    }

    function setP(e) {
      const p = e.touches ? e.touches[0] : e;
      pointer.x = p.clientX;
      pointer.y = p.clientY;
      pointer.on = true;
    }

    function handlePointerEnd() {
      pointer.on = false;
    }

    function handlePointerDown(e) {
      if (!document.documentElement.classList.contains("dark")) return;
      const p = e.touches ? e.touches[0] : e;
      const bx = p.clientX;
      const by = p.clientY;

      for (let i = 0; i < 14; i++) {
        const f = makeFly(bx, by);
        const an = Math.random() * 6.283;
        const sp = 1.5 + Math.random() * 3;
        f.vx = Math.cos(an) * sp;
        f.vy = Math.sin(an) * sp;
        flies.push(f);
      }
      if (flies.length > 150) {
        flies.splice(0, flies.length - 150);
      }
    }

    // Window events for whole website
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", setP, { passive: true });
    window.addEventListener("touchstart", setP, { passive: true });
    window.addEventListener("touchmove", setP, { passive: true });
    window.addEventListener("touchend", handlePointerEnd);
    window.addEventListener("mouseleave", handlePointerEnd);
    window.addEventListener("pointerdown", handlePointerDown);

    // Custom event to allow adding fireflies from anywhere (e.g. Hero button)
    const handleAddCustom = (e) => {
      const count = (e && e.detail && e.detail.count) || 12;
      addFlies(count);
    };
    window.addEventListener("add-fireflies", handleAddCustom);

    resize();
    addFlies(Math.round(Math.min(90, Math.max(45, W / 16))));
    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", setP);
      window.removeEventListener("touchstart", setP);
      window.removeEventListener("touchmove", setP);
      window.removeEventListener("touchend", handlePointerEnd);
      window.removeEventListener("mouseleave", handlePointerEnd);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("add-fireflies", handleAddCustom);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full block"
    />
  );
};

export default FireflyEffect;
