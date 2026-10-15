import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './HeroScene.module.css';

/* ─── Theme colors ──────────────────────────────────────────────────────── */
function isDark() {
  const t = document.documentElement.getAttribute('data-theme');
  if (t === 'dark') return true;
  if (t === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
const getAccent  = () => (isDark() ? 0x7C95FF : 0x2446E8);
const getAccent2 = () => (isDark() ? 0xF472B6 : 0xDB2777);
const getAccent3 = () => (isDark() ? 0x22D3EE : 0x0891B2);
const getSatColors = () => [getAccent(), getAccent2(), getAccent3()];

/* three r155+ changed light units */
const NEW_LIGHTS = parseInt(THREE.REVISION, 10) >= 155;
const DIR_K = NEW_LIGHTS ? Math.PI : 1;

export default function HeroScene({ theme }) {
  const wrapRef  = useRef(null);
  const stateRef = useRef({});

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const canvas = document.createElement('canvas');
    canvas.className = styles.canvas;
    canvas.setAttribute('aria-hidden', 'true');
    wrap.appendChild(canvas);

    const isMobile       = window.innerWidth < 640;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch        = window.matchMedia('(pointer: coarse)').matches;

    let renderer, scene, camera;
    let tiltGroup, globeGroup, sideGroup, orbitGroup, brL, brR;
    const rings = [];
    const sats = [];
    let rx = 9, ry = 2.2;          // satellite orbit radii (set by layoutSides)
    let dustSystem, dustCount = 0;
    const dustVel = [];
    let rafId = null;
    let heroVisible = true, tabActive = true;
    let rotXtgt = 0, rotYtgt = 0, rotXcur = 0, rotYcur = 0;
    let mounted = true;

    const geos = [];
    const mats = [];
    const track = (thing, list) => { list.push(thing); return thing; };

    let heroObs, resizeObs;
    let onMouseMove, onScrollTilt, onScrollFade, applySize, onVis;

    const cleanup = () => {
      mounted = false;
      stateRef.current.updateColors = null;
      if (rafId) cancelAnimationFrame(rafId);
      if (onMouseMove)  window.removeEventListener('mousemove', onMouseMove);
      if (onScrollTilt) window.removeEventListener('scroll', onScrollTilt);
      if (onScrollFade) window.removeEventListener('scroll', onScrollFade);
      if (applySize)    window.removeEventListener('resize', applySize);
      if (onVis)        document.removeEventListener('visibilitychange', onVis);
      heroObs?.disconnect();
      resizeObs?.disconnect();
      geos.forEach((g) => { try { g.dispose(); } catch { /* ignore */ } });
      mats.forEach((m) => { try { m.dispose(); } catch { /* ignore */ } });
      try { renderer?.dispose(); } catch { /* ignore */ }
      canvas.remove();
    };

    try {
      /* ── Size ───────────────────────────────────────────────────────── */
      let w = wrap.clientWidth || window.innerWidth;
      let h = wrap.clientHeight || window.innerHeight;
      if (h < 10) h = window.innerHeight;
      const aspect = w / h;

      /* ── Renderer / scene / camera ──────────────────────────────────── */
      renderer = new THREE.WebGLRenderer({
        canvas, alpha: true, antialias: !isMobile, powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h, false);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 200);
      camera.position.set(0, 0, 18);

      /* Lights (only used by the side shapes) */
      scene.add(new THREE.AmbientLight(0xffffff, 0.75 * DIR_K));
      const keyL = new THREE.DirectionalLight(0xffffff, 1.0 * DIR_K);
      keyL.position.set(6, 8, 10);
      scene.add(keyL);

      /* ── Centre: globe + rings ──────────────────────────────────────── */
      tiltGroup = new THREE.Group();
      globeGroup = new THREE.Group();
      tiltGroup.add(globeGroup);
      scene.add(tiltGroup);

      const fitScale = (a) => Math.max(0.5, Math.min(1, a * 1.05));
      tiltGroup.scale.setScalar(fitScale(aspect));

      const accent  = getAccent();
      const accent2 = getAccent2();

      const wireMat = track(new THREE.MeshBasicMaterial({
        color: accent, wireframe: true, transparent: true, opacity: 0.25,
      }), mats);
      globeGroup.add(new THREE.Mesh(
        track(new THREE.IcosahedronGeometry(4, isMobile ? 2 : 3), geos), wireMat
      ));

      const dotCount = isMobile ? 250 : 500;
      const dotPos = new Float32Array(dotCount * 3);
      for (let i = 0; i < dotCount; i++) {
        const u = Math.random() * 2 - 1;
        const p = Math.random() * Math.PI * 2;
        const r = Math.sqrt(1 - u * u);
        dotPos[i * 3]     = 4.05 * r * Math.cos(p);
        dotPos[i * 3 + 1] = 4.05 * u;
        dotPos[i * 3 + 2] = 4.05 * r * Math.sin(p);
      }
      const dotGeo = track(new THREE.BufferGeometry(), geos);
      dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));
      const dotMat = track(new THREE.PointsMaterial({
        color: accent2, size: 0.09, sizeAttenuation: true,
      }), mats);
      globeGroup.add(new THREE.Points(dotGeo, dotMat));

      [0, 1, 2].forEach((i) => {
        const mat = track(new THREE.MeshBasicMaterial({ color: i === 1 ? accent2 : accent }), mats);
        const ring = new THREE.Mesh(
          track(new THREE.TorusGeometry(5 + i * 0.5, 0.02, 8, isMobile ? 80 : 120), geos), mat
        );
        ring.rotation.set(1 + i * 0.7, i, 0);
        tiltGroup.add(ring);
        rings.push(ring);
      });

      /* ── Sides: wide orbit + satellites + < > brackets ──────────────── */
      sideGroup = new THREE.Group();
      scene.add(sideGroup);

      const std = (hex) => track(new THREE.MeshStandardMaterial({
        color: hex, metalness: 0.4, roughness: 0.35,
      }), mats);

      /* Wide tilted orbit path */
      orbitGroup = new THREE.Group();
      orbitGroup.rotation.z = -0.18;
      sideGroup.add(orbitGroup);

      const ellipsePts = [];
      for (let i = 0; i <= 128; i++) {
        const a = (i / 128) * Math.PI * 2;
        ellipsePts.push(new THREE.Vector3(Math.cos(a), Math.sin(a), 0));
      }
      const ellipseGeo = track(new THREE.BufferGeometry().setFromPoints(ellipsePts), geos);
      const ellipseMat = track(new THREE.LineBasicMaterial({
        color: accent, transparent: true, opacity: 0.3,
      }), mats);
      const ellipse = new THREE.Line(ellipseGeo, ellipseMat);
      orbitGroup.add(ellipse);

      /* Satellites travelling along that orbit */
      const satGeos = [
        track(new THREE.OctahedronGeometry(0.55, 0), geos),
        track(new THREE.BoxGeometry(0.8, 0.8, 0.8), geos),
        track(new THREE.TetrahedronGeometry(0.65, 0), geos),
        track(new THREE.IcosahedronGeometry(0.55, 0), geos),
        track(new THREE.TorusKnotGeometry(0.4, 0.13, 40, 8), geos),
        track(new THREE.OctahedronGeometry(0.45, 0), geos),
      ];
      const satCols = getSatColors();
      satGeos.forEach((g, i) => {
        const mesh = new THREE.Mesh(g, std(satCols[i % 3]));
        orbitGroup.add(mesh);
        sats.push({
          mesh,
          phase: (i / satGeos.length) * Math.PI * 2,
          speed: 0.22 + (i % 3) * 0.04,
          rs: (Math.random() - 0.5) * 0.02,
        });
      });

      /* Code brackets < > on far left / right */
      const bar = (len, x, y, rz) => {
        const m = new THREE.Mesh(
          track(new THREE.BoxGeometry(len, 0.42, 0.42), geos), std(accent)
        );
        m.position.set(x, y, 0);
        m.rotation.z = rz;
        return m;
      };
      const k = Math.PI / 4;
      brL = new THREE.Group();
      brL.add(bar(2.2, 0, 0.78, k), bar(2.2, 0, -0.78, -k));
      brR = new THREE.Group();
      brR.add(bar(2.2, 0, 0.78, -k), bar(2.2, 0, -0.78, k));
      sideGroup.add(brL, brR);
      const bracketMats = [...brL.children, ...brR.children].map((m) => m.material);

      /* Wide dust field for depth */
      dustCount = isMobile ? 70 : 220;
      const dPos = new Float32Array(dustCount * 3);
      for (let i = 0; i < dustCount; i++) {
        dPos[i * 3]     = (Math.random() - 0.5) * 36;
        dPos[i * 3 + 1] = (Math.random() - 0.5) * 18;
        dPos[i * 3 + 2] = -2 - Math.random() * 8;
        dustVel.push({ x: (Math.random() - 0.5) * 0.004, y: (Math.random() - 0.5) * 0.004 });
      }
      const dGeo = track(new THREE.BufferGeometry(), geos);
      dGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
      const dMat = track(new THREE.PointsMaterial({
        color: accent, size: 0.1, transparent: true, opacity: 0.5, sizeAttenuation: true,
      }), mats);
      dustSystem = new THREE.Points(dGeo, dMat);
      scene.add(dustSystem);

      /* Position side items by screen width; hide when screen is narrow */
      const layoutSides = (a) => {
        const halfW = Math.tan((45 / 2) * Math.PI / 180) * 18 * a;   // visible half-width at z=0
        sideGroup.visible = a >= 1.3;
        const bx = Math.min(12.5, halfW * 0.88);
        rx = Math.min(10.5, halfW * 0.72);
        ry = 2.4;
        brL.position.set(-bx, 0, 0);
        brR.position.set(bx, 0, 0);
        ellipse.scale.set(rx, ry, 1);
      };
      layoutSides(aspect);

      const updateSide = (t) => {
        for (let i = 0; i < sats.length; i++) {
          const s = sats[i];
          const a = t * s.speed + s.phase;
          s.mesh.position.set(Math.cos(a) * rx, Math.sin(a) * ry, Math.sin(a * 2) * 2.5);
          s.mesh.rotation.x += 0.01 + s.rs;
          s.mesh.rotation.y += 0.014;
        }
        brL.position.y = Math.sin(t * 1.1) * 0.35;
        brR.position.y = Math.sin(t * 1.1 + 1.5) * 0.35;
        brL.rotation.y = Math.sin(t * 0.6) * 0.5;
        brR.rotation.y = -Math.sin(t * 0.6) * 0.5;
      };

      /* ── Theme update ───────────────────────────────────────────────── */
      stateRef.current.updateColors = () => {
        if (!mounted) return;
        const a1 = getAccent(), a2 = getAccent2(), cols = getSatColors();
        wireMat.color.setHex(a1);
        dotMat.color.setHex(a2);
        rings.forEach((r, i) => r.material.color.setHex(i === 1 ? a2 : a1));
        ellipseMat.color.setHex(a1);
        dMat.color.setHex(a1);
        bracketMats.forEach((m) => m.color.setHex(a1));
        sats.forEach((s, i) => s.mesh.material.color.setHex(cols[i % 3]));
      };

      /* ── Scroll fade ────────────────────────────────────────────────── */
      const heroEl = wrap.closest('section');
      onScrollFade = () => {
        if (!heroEl || !mounted) return;
        const ratio = Math.max(0, Math.min(1, 1 - window.scrollY / (heroEl.offsetHeight * 0.75)));
        canvas.style.opacity = ratio.toFixed(3);
      };
      window.addEventListener('scroll', onScrollFade, { passive: true });
      onScrollFade();

      /* ── Visibility pause ───────────────────────────────────────────── */
      if (heroEl && 'IntersectionObserver' in window) {
        heroObs = new IntersectionObserver(
          ([e]) => { heroVisible = e.isIntersecting; },
          { threshold: 0 }
        );
        heroObs.observe(heroEl);
      }
      onVis = () => { tabActive = !document.hidden; };
      document.addEventListener('visibilitychange', onVis);

      /* ── Mouse / scroll tilt ────────────────────────────────────────── */
      onMouseMove = (e) => {
        rotYtgt = ((e.clientX / window.innerWidth) * 2 - 1) * 0.38;
        rotXtgt = ((e.clientY / window.innerHeight) * 2 - 1) * 0.28;
      };
      onScrollTilt = () => { rotXtgt = Math.sin(window.scrollY * 0.003) * 0.2; };
      if (!isTouch) window.addEventListener('mousemove', onMouseMove);
      else window.addEventListener('scroll', onScrollTilt, { passive: true });

      /* ── Resize ─────────────────────────────────────────────────────── */
      applySize = () => {
        if (!mounted) return;
        const nw = wrap.clientWidth || window.innerWidth;
        const nh = wrap.clientHeight || window.innerHeight;
        if (nw < 1 || nh < 1) return;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        tiltGroup.scale.setScalar(fitScale(nw / nh));
        layoutSides(nw / nh);
        renderer.setSize(nw, nh, false);
      };
      if ('ResizeObserver' in window) {
        resizeObs = new ResizeObserver(applySize);
        resizeObs.observe(wrap);
      }
      window.addEventListener('resize', applySize);

      /* ── Loop ───────────────────────────────────────────────────────── */
      const clock = new THREE.Clock();

      function animate() {
        if (!mounted) return;
        rafId = requestAnimationFrame(animate);
        if (!heroVisible || !tabActive) return;

        const t = clock.getElapsedTime();

        rotXcur += (rotXtgt - rotXcur) * 0.055;
        rotYcur += (rotYtgt - rotYcur) * 0.055;
        tiltGroup.rotation.x = rotXcur;
        tiltGroup.rotation.y = rotYcur;
        sideGroup.rotation.y = rotYcur * 0.4;   // gentle parallax on the sides

        globeGroup.rotation.y = t * 0.15;
        rings.forEach((r, i) => { r.rotation.z = t * (0.2 + i * 0.1); });

        updateSide(t);

        const pa = dGeo.attributes.position.array;
        for (let i = 0; i < dustCount; i++) {
          pa[i * 3]     += dustVel[i].x;
          pa[i * 3 + 1] += dustVel[i].y;
          if (Math.abs(pa[i * 3]) > 18)     pa[i * 3]     = -Math.sign(pa[i * 3]) * 17;
          if (Math.abs(pa[i * 3 + 1]) > 9)  pa[i * 3 + 1] = -Math.sign(pa[i * 3 + 1]) * 8;
        }
        dGeo.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      }

      if (prefersReduced) {
        updateSide(0);
        renderer.render(scene, camera);
      } else {
        animate();
      }

      return cleanup;
    } catch (err) {
      console.warn('HeroScene WebGL init failed:', err?.message || err);
      cleanup();
      return undefined;
    }
  }, []);

  /* Theme change → recolor */
  useEffect(() => {
    const id = setTimeout(() => stateRef.current.updateColors?.(), 60);
    return () => clearTimeout(id);
  }, [theme]);

  return <div ref={wrapRef} className={styles.canvasWrap} aria-hidden="true" />;
}