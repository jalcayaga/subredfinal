import { useEffect, useRef, useState } from "react";

const modules = [
  ["camera", "Cámaras"],
  ["network", "Conectividad"],
  ["energy", "Energía"],
  ["automation", "Domótica"],
];

const moduleCopy = {
  all: "Una solución coordinada, diseñada para el lugar y para quienes lo usan.",
  camera: "Cámaras ubicadas para cubrir los accesos y espacios importantes.",
  network: "Wi-Fi y cableado para que tus equipos se mantengan conectados.",
  energy: "Paneles y respaldo definidos según el consumo y las prioridades.",
  automation: "Dispositivos compatibles trabajando en conjunto con Home Assistant.",
};

function makeBox(THREE, parent, size, position, material, module = "all") {
  const geometry = new THREE.BoxGeometry(...size);
  const mesh = new THREE.Mesh(geometry, material.clone());
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData.module = module;
  parent.add(mesh);
  return mesh;
}

function setModuleEmphasis(root, active) {
  root.traverse((object) => {
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    materials.forEach((material) => {
      if (!material?.emissive) return;
      const isActive = active === "all" || object.userData.module === active;
      material.emissiveIntensity = isActive ? 0.1 : 0.015;
      material.opacity = isActive ? 1 : 0.55;
      material.transparent = !isActive;
    });
  });
}

export default function HomeHeroScene({ activeModule, exploded }) {
  const canvasRef = useRef(null);
  const sceneApiRef = useRef(null);
  const [available, setAvailable] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let disposed = false;
    let renderer;
    let controls;
    let animationFrame = 0;
    let resizeObserver;
    let model;
    let moduleParts = {};
    let lastFrame = 0;
    let removeCanvasEvents = () => {};

    const mount = async () => {
      try {
        const THREE = await import("three");
        const { OrbitControls } = await import("three/addons/controls/OrbitControls.js");
        if (disposed || !canvasRef.current) return;

        const canvas = canvasRef.current;
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power", failIfMajorPerformanceCaveat: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
        camera.position.set(9.2, 7.4, 11.8);
        camera.lookAt(0, 1.1, 0);
        controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 1.05, 0);
        controls.enableDamping = true;
        controls.dampingFactor = 0.07;
        controls.enablePan = false;
        controls.minDistance = 9;
        controls.maxDistance = 19;
        controls.minPolarAngle = 0.48;
        controls.maxPolarAngle = 1.35;
        controls.autoRotate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        controls.autoRotateSpeed = 0.38;

        scene.add(new THREE.HemisphereLight(0xdaf8ff, 0x07111b, 2.1));
        const keyLight = new THREE.DirectionalLight(0x8beeff, 3.2);
        keyLight.position.set(-5, 10, 7);
        scene.add(keyLight);
        const greenLight = new THREE.PointLight(0x84bd00, 17, 20);
        greenLight.position.set(5, 4, -4);
        scene.add(greenLight);

        const mat = (color, emissive = 0x000000, metalness = 0.1, roughness = 0.68) => new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: 0.1, metalness, roughness });
        const wallMat = mat(0x193643, 0x09202a);
        const darkMat = mat(0x0a1721, 0x06121a);
        const roofMat = mat(0x234a55, 0x071e23, 0.32);
        const glassMat = new THREE.MeshStandardMaterial({ color: 0x36cfe1, emissive: 0x00a9be, emissiveIntensity: 1.1, metalness: 0.3, roughness: 0.2 });
        const solarMat = mat(0x315d43, 0x163b1b, 0.38, 0.36);
        const cyanMat = mat(0x00c9e4, 0x00a9be, 0.24, 0.38);
        const greenMat = mat(0x84bd00, 0x456500, 0.18, 0.4);
        const house = new THREE.Group();
        model = new THREE.Group();
        scene.add(model);
        model.add(house);

        // A small architectural cutaway gives the systems a real place in the scene.
        makeBox(THREE, house, [6.2, 0.34, 5], [0, 0.18, 0], darkMat);
        makeBox(THREE, house, [0.25, 3.05, 4.75], [-2.83, 1.86, 0], wallMat);
        makeBox(THREE, house, [0.25, 3.05, 4.75], [2.83, 1.86, 0], wallMat);
        makeBox(THREE, house, [5.9, 3.05, 0.25], [0, 1.86, -2.35], wallMat);
        makeBox(THREE, house, [0.92, 2.35, 0.12], [-2.18, 1.36, 2.12], mat(0x1c3339, 0x0a201e));
        makeBox(THREE, house, [0.92, 2.35, 0.12], [2.18, 1.36, 2.12], mat(0x1c3339, 0x0a201e));
        makeBox(THREE, house, [1.7, 0.38, 0.16], [0, 2.78, 2.22], wallMat);
        makeBox(THREE, house, [0.94, 1.18, 0.08], [0, 0.94, 2.22], mat(0x1c3339, 0x0a201e));
        makeBox(THREE, house, [1.1, 1.12, 0.12], [-1.78, 1.85, -2.18], glassMat);
        makeBox(THREE, house, [1.1, 1.12, 0.12], [1.78, 1.85, -2.18], glassMat);
        makeBox(THREE, house, [0.08, 1.16, 0.1], [-1.78, 1.85, -2.12], cyanMat);
        makeBox(THREE, house, [0.08, 1.16, 0.1], [1.78, 1.85, -2.12], cyanMat);

        const roof = new THREE.Group();
        roof.position.set(0, 3.5, 0);
        house.add(roof);
        const roofLeft = makeBox(THREE, roof, [3.45, 0.22, 5.35], [-1.34, 0.52, 0], roofMat);
        roofLeft.rotation.z = 0.32;
        const roofRight = makeBox(THREE, roof, [3.45, 0.22, 5.35], [1.34, 0.52, 0], roofMat);
        roofRight.rotation.z = -0.32;

        const energy = new THREE.Group();
        energy.position.set(0, 3.5, 0);
        house.add(energy);
        const solar = makeBox(THREE, energy, [2.15, 0.08, 2.8], [-1.34, 0.82, -0.35], solarMat, "energy");
        solar.rotation.z = 0.32;
        for (let i = 0; i < 4; i++) {
          const rib = makeBox(THREE, energy, [0.025, 0.035, 2.74], [-2.2 + i * 0.58, 0.89 + (i * 0.58) * 0.32, -0.35], greenMat, "energy");
          rib.rotation.z = 0.32;
        }

        const cameras = new THREE.Group();
        const addCamera = (x, y, z, direction) => {
          const mount = makeBox(THREE, cameras, [0.28, 0.1, 0.1], [x, y, z], darkMat, "camera");
          mount.rotation.y = direction;
          const body = makeBox(THREE, cameras, [0.38, 0.2, 0.24], [x, y - 0.13, z + Math.cos(direction) * 0.16], cyanMat, "camera");
          body.rotation.y = direction;
          const lens = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 8), mat(0x6defff, 0x00c9e4, 0.2, 0.2));
          lens.position.set(x, y - 0.13, z + Math.cos(direction) * 0.29);
          lens.userData.module = "camera";
          cameras.add(lens);
        };
        addCamera(-2.1, 3.12, 2.5, 0);
        addCamera(2.7, 3.12, 0.9, 0.8);
        house.add(cameras);
        moduleParts.camera = cameras;

        const network = new THREE.Group();
        const router = makeBox(THREE, network, [0.78, 0.18, 0.48], [0.4, 0.83, 0.8], cyanMat, "network");
        router.rotation.y = 0.38;
        for (const x of [0.15, 0.4, 0.65]) {
          const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.3, 8), darkMat);
          antenna.position.set(x, 1.08, 0.74);
          network.add(antenna);
        }
        const wifiRing = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.018, 6, 40, Math.PI), new THREE.MeshBasicMaterial({ color: 0x00c9e4, transparent: true, opacity: 0.7 }));
        wifiRing.rotation.x = Math.PI / 2;
        wifiRing.position.set(0.4, 1.45, 0.8);
        wifiRing.userData.module = "network";
        network.add(wifiRing);
        house.add(network);
        moduleParts.network = network;

        const automation = new THREE.Group();
        const sensor = makeBox(THREE, automation, [0.28, 0.16, 0.22], [-1.5, 2.55, 2.25], greenMat, "automation");
        sensor.rotation.y = -0.18;
        const panel = makeBox(THREE, automation, [0.42, 0.58, 0.09], [2.2, 1.76, 2.22], darkMat, "automation");
        panel.rotation.y = -0.12;
        makeBox(THREE, automation, [0.18, 0.04, 0.025], [2.2, 1.92, 2.27], greenMat, "automation");
        house.add(automation);
        moduleParts.energy = energy;
        moduleParts.automation = automation;

        const base = new THREE.Mesh(new THREE.CylinderGeometry(4.7, 5.15, 0.12, 6), mat(0x101f2a, 0x06161c, 0.18));
        base.rotation.y = Math.PI / 6;
        base.position.y = -0.12;
        model.add(base);

        const grid = new THREE.GridHelper(14, 22, 0x236071, 0x17313d);
        grid.position.y = -0.2;
        grid.material.opacity = 0.3;
        grid.material.transparent = true;
        scene.add(grid);

        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();
        let down = null;
        const selectFromCanvas = (event) => {
          if (!down || Math.hypot(event.clientX - down.x, event.clientY - down.y) > 5) return;
          const rect = renderer.domElement.getBoundingClientRect();
          pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
          raycaster.setFromCamera(pointer, camera);
          const hits = raycaster.intersectObjects(model.children, true);
          let hit = hits[0]?.object;
          while (hit && !hit.userData.module) hit = hit.parent;
          if (hit?.userData.module) window.dispatchEvent(new CustomEvent("subred-hero-select", { detail: hit.userData.module }));
        };
        const handleDown = (event) => { down = { x: event.clientX, y: event.clientY }; };
        const handleUp = (event) => { selectFromCanvas(event); down = null; };
        renderer.domElement.addEventListener("pointerdown", handleDown);
        renderer.domElement.addEventListener("pointerup", handleUp);
        removeCanvasEvents = () => {
          renderer?.domElement.removeEventListener("pointerdown", handleDown);
          renderer?.domElement.removeEventListener("pointerup", handleUp);
        };

        const resize = () => {
          if (!canvas.parentElement || !renderer) return;
          const { width, height } = canvas.parentElement.getBoundingClientRect();
          if (!width || !height) return;
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.render(scene, camera);
        };
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas.parentElement);
        resize();
        setAvailable(true);
        window.dispatchEvent(new CustomEvent("subred-hero-ready", { detail: true }));

        const render = (now) => {
          if (disposed) return;
          animationFrame = window.requestAnimationFrame(render);
          if (document.hidden || now - lastFrame < 33) return;
          lastFrame = now;
          Object.values(moduleParts).forEach((part) => {
            if (part.userData.targetPosition) part.position.lerp(part.userData.targetPosition, 0.12);
          });
          controls.update();
          renderer.render(scene, camera);
        };
        animationFrame = window.requestAnimationFrame(render);

        Object.values(moduleParts).forEach((part) => { part.userData.targetPosition = part.position.clone(); });
        sceneApiRef.current = {
          moduleParts,
          setExploded: (value) => {
          const destinations = {
            camera: value ? [0, 0.9, 1.05] : [0, 0, 0],
            energy: value ? [-0.15, 4.7, -0.8] : [0, 3.5, 0],
            network: value ? [0, -0.25, 1.25] : [0, 0, 0],
            automation: value ? [0.2, 0.2, -1.2] : [0, 0, 0],
          };
            Object.entries(moduleParts).forEach(([key, part]) => { part.userData.targetPosition.set(...destinations[key]); });
          },
        };
      } catch {
        if (!disposed) {
          setLoadError(true);
          window.dispatchEvent(new CustomEvent("subred-hero-ready", { detail: false }));
        }
      }
    };

    mount();
    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      controls?.dispose();
      removeCanvasEvents();
      sceneApiRef.current = null;
      if (renderer) {
        renderer.renderLists.dispose();
        renderer.dispose();
      }
    };
  }, []);

  useEffect(() => {
    const api = sceneApiRef.current;
    if (!api) return;
    const active = activeModule === "all" ? "all" : activeModule;
    Object.values(api.moduleParts).forEach((part) => setModuleEmphasis(part, active));
    api.setExploded(exploded);
  }, [activeModule, exploded, available]);

  return <canvas ref={canvasRef} className={`sr-hero-three${available ? " is-ready" : ""}`} aria-label="Modelo 3D interactivo de una vivienda con sistemas SubRed" data-error={loadError || undefined} />;
}

export { modules, moduleCopy };
