import { useEffect, useRef, useState } from "react";

const modules = [
  ["camera", "Seguridad"],
  ["network", "Conectividad"],
  ["energy", "Energía"],
  ["automation", "Domótica"],
];

const moduleCopy = {
  all: "Una solución coordinada, diseñada para el lugar y para quienes lo usan.",
  camera: "Una alarma tipo AX PRO integra sensores, contactos, cámaras y sirena para proteger accesos y espacios clave.",
  network: "Wi-Fi y cableado para que tus equipos se mantengan conectados.",
  energy: "Paneles y respaldo definidos según el consumo y las prioridades.",
  automation: "La pantalla táctil y la central reúnen alarmas y automatizaciones en un control sencillo.",
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

function makeSlats(THREE, parent, size, count, start, spacing, material) {
  const geometry = new THREE.BoxGeometry(...size);
  const mesh = new THREE.InstancedMesh(geometry, material.clone(), count);
  const item = new THREE.Object3D();
  for (let index = 0; index < count; index++) {
    item.position.set(start[0] + index * spacing, start[1], start[2]);
    item.updateMatrix();
    mesh.setMatrixAt(index, item.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
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
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.15;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
        camera.position.set(10.3, 7.8, 13.2);
        camera.lookAt(0, 1.1, 0);
        controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 1.05, 0);
        controls.enableDamping = true;
        controls.dampingFactor = 0.07;
        controls.enablePan = false;
        controls.minDistance = 9;
        controls.maxDistance = 23;
        controls.minPolarAngle = 0.48;
        controls.maxPolarAngle = 1.35;
        controls.autoRotate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        controls.autoRotateSpeed = 0.38;

        scene.add(new THREE.HemisphereLight(0xe7f0f4, 0x202723, 1.6));
        const keyLight = new THREE.DirectionalLight(0xffe5ca, 3.4);
        keyLight.position.set(-7, 12, 8);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.set(1024, 1024);
        keyLight.shadow.camera.left = -10;
        keyLight.shadow.camera.right = 10;
        keyLight.shadow.camera.top = 10;
        keyLight.shadow.camera.bottom = -10;
        keyLight.shadow.bias = -0.00025;
        scene.add(keyLight);
        const fillLight = new THREE.DirectionalLight(0x9bdde4, 1.4);
        fillLight.position.set(8, 6, 4);
        scene.add(fillLight);

        const mat = (color, emissive = 0x000000, metalness = 0.05, roughness = 0.82) => new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: 0.02, metalness, roughness });
        const plaster = mat(0xd6d2c7);
        const concrete = mat(0x777873);
        const charcoal = mat(0x252d30, 0x11191a, 0.18, 0.68);
        const cedar = mat(0x755744, 0x17100a, 0.02, 0.86);
        const roofMat = mat(0x343b3c, 0x080b0b, 0.25, 0.72);
        const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x73999b, emissive: 0x15282a, emissiveIntensity: 0.18, roughness: 0.18, metalness: 0.12, transparent: true, opacity: 0.7, depthWrite: false });
        const solarMat = mat(0x18303a, 0x071219, 0.42, 0.35);
        const statusCyan = mat(0x58c2c5, 0x1b6d72, 0.12, 0.45);
        const statusGreen = mat(0x91a966, 0x34431d, 0.08, 0.55);
        const pathMat = mat(0x9d9b90);
        const upholstery = mat(0x77776b, 0x080806, 0.02, 0.94);
        const warmLight = new THREE.MeshStandardMaterial({ color: 0xffe7b3, emissive: 0xf2c76e, emissiveIntensity: 0.65, roughness: 0.5 });
        const house = new THREE.Group();
        model = new THREE.Group();
        scene.add(model);
        model.add(house);

        // Contemporary single-storey home: restrained materials, a glazed living area and a separate garage volume.
        const site = makeBox(THREE, model, [13.4, 0.28, 10.4], [0.55, -0.02, 0.8], concrete);
        site.receiveShadow = true;
        makeBox(THREE, house, [10.9, 0.28, 5.7], [1.05, 0.26, -0.05], charcoal);
        makeBox(THREE, house, [10.55, 0.04, 5.42], [1.05, 0.42, -0.05], mat(0xb9b5a9));

        // Rear and side walls form a cutaway while keeping the architectural massing legible.
        makeBox(THREE, house, [0.2, 3.1, 5.15], [-4.08, 1.98, -0.02], plaster);
        makeBox(THREE, house, [0.2, 3.1, 5.15], [2.68, 1.98, -0.02], plaster);
        makeBox(THREE, house, [6.95, 3.1, 0.2], [-0.7, 1.98, -2.52], plaster);
        makeBox(THREE, house, [1.35, 3.1, 0.2], [-3.53, 1.98, 2.52], plaster);
        makeBox(THREE, house, [0.25, 3.1, 0.2], [2.43, 1.98, 2.52], plaster);

        // Wide framed glazing, timber entrance and vertical cedar screen.
        makeBox(THREE, house, [3.9, 2.55, 0.075], [-0.98, 2.0, 2.36], glassMat);
        for (const x of [-2.93, -1.95, 0.02, 0.99]) makeBox(THREE, house, [0.055, 2.62, 0.14], [x, 2.0, 2.42], charcoal);
        makeBox(THREE, house, [4.0, 0.075, 0.14], [-0.98, 0.72, 2.42], charcoal);
        makeBox(THREE, house, [4.0, 0.075, 0.14], [-0.98, 3.28, 2.42], charcoal);
        makeBox(THREE, house, [0.94, 2.34, 0.11], [1.93, 1.76, 2.43], cedar);
        makeBox(THREE, house, [0.045, 2.18, 0.045], [1.85, 1.76, 2.5], mat(0x2e2924, 0, 0.2));
        makeSlats(THREE, house, [0.035, 2.5, 0.05], 13, [-3.75, 2.0, 2.57], 0.105, cedar);

        // A quiet, dark-framed clerestory and slim skylight articulate the rear elevation.
        makeBox(THREE, house, [2.4, 0.72, 0.07], [0.8, 2.55, -2.4], glassMat);
        makeBox(THREE, house, [2.48, 0.07, 0.14], [0.8, 2.93, -2.4], charcoal);
        makeBox(THREE, house, [0.07, 0.78, 0.14], [-0.44, 2.55, -2.4], charcoal);
        makeBox(THREE, house, [0.07, 0.78, 0.14], [2.04, 2.55, -2.4], charcoal);

        // Sparse interior furniture helps the cutaway read as a lived-in home, not a display block.
        makeBox(THREE, house, [1.72, 0.34, 0.64], [-1.05, 0.72, 0.68], upholstery);
        makeBox(THREE, house, [1.72, 0.58, 0.2], [-1.05, 1.08, 0.91], upholstery);
        makeBox(THREE, house, [0.56, 0.2, 0.42], [-0.85, 0.54, 1.4], mat(0x8a7257));
        makeBox(THREE, house, [1.55, 0.08, 0.55], [0.95, 0.8, -0.72], mat(0x89785e));
        for (const x of [0.34, 1.56]) makeBox(THREE, house, [0.07, 0.32, 0.07], [x, 0.59, -0.72], charcoal);
        const pendant = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.11, 0.11, 16), warmLight.clone());
        pendant.position.set(-0.45, 3.07, 0.05);
        house.add(pendant);
        const pendantWire = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.43, 6), charcoal.clone());
        pendantWire.position.set(-0.45, 3.31, 0.05);
        house.add(pendantWire);

        // The second volume reads as a real garage and service wing, not another toy-like cube.
        makeBox(THREE, house, [3.25, 2.65, 3.55], [4.12, 1.72, -0.92], plaster);
        makeBox(THREE, house, [2.7, 2.3, 0.08], [4.12, 1.65, 0.88], charcoal);
        makeSlats(THREE, house, [0.035, 2.24, 0.035], 17, [2.85, 1.65, 0.94], 0.16, mat(0x777a73));
        makeBox(THREE, house, [3.55, 0.22, 3.9], [4.1, 3.1, -0.88], roofMat);
        makeBox(THREE, house, [2.6, 0.22, 0.25], [-0.25, 3.55, 2.68], roofMat);
        makeBox(THREE, house, [2.5, 0.12, 1.15], [-0.2, 3.42, 3.2], cedar);
        makeSlats(THREE, house, [0.035, 0.75, 1.12], 9, [-1.34, 3.0, 3.2], 0.28, cedar);

        // Front path and low planters anchor the building in a believable site.
        makeBox(THREE, house, [2.05, 0.08, 2.25], [2.38, 0.47, 3.42], pathMat);
        for (let i = 0; i < 3; i++) makeBox(THREE, house, [0.56, 0.055, 0.56], [2.0 + i * 0.72, 0.53, 4.12], mat(0xaaa79a));
        makeBox(THREE, house, [1.6, 0.48, 0.55], [-4.42, 0.36, 2.75], charcoal);
        makeBox(THREE, house, [1.6, 0.48, 0.55], [5.55, 0.36, 1.95], charcoal);
        for (const [x, z] of [[-4.8, 2.7], [-4.3, 2.8], [-3.9, 2.7], [5.2, 1.9], [5.6, 2], [5.95, 1.9]]) {
          const plant = new THREE.Mesh(new THREE.IcosahedronGeometry(0.28, 1), mat(0x58664c, 0x151b10, 0.02, 0.95));
          plant.position.set(x, 0.82, z);
          plant.scale.set(1, 0.74, 0.9);
          plant.castShadow = true;
          house.add(plant);
        }

        const roof = new THREE.Group();
        roof.position.set(0, 0, 0);
        house.add(roof);
        makeBox(THREE, roof, [7.45, 0.24, 5.75], [-0.7, 3.63, 0], roofMat);
        makeBox(THREE, roof, [0.07, 0.36, 5.78], [-4.38, 3.74, 0], mat(0x505655));
        makeBox(THREE, roof, [0.07, 0.36, 5.78], [2.98, 3.74, 0], mat(0x505655));

        const energy = new THREE.Group();
        energy.position.set(0, 0, 0);
        house.add(energy);
        makeBox(THREE, energy, [2.65, 0.075, 1.5], [-2.22, 3.79, -0.7], solarMat, "energy");
        for (let i = 0; i < 5; i++) makeBox(THREE, energy, [0.018, 0.022, 1.45], [-3.27 + i * 0.52, 3.84, -0.7], mat(0x73939a, 0, 0.3, 0.5), "energy");
        for (let i = 0; i < 3; i++) makeBox(THREE, energy, [2.58, 0.022, 0.018], [-2.22, 3.84, -1.2 + i * 0.5], mat(0x73939a, 0, 0.3, 0.5), "energy");
        makeBox(THREE, energy, [0.12, 0.62, 0.38], [5.82, 1.72, -1.35], charcoal, "energy");
        makeBox(THREE, energy, [0.025, 0.045, 0.13], [5.89, 1.91, -1.35], statusCyan, "energy");
        makeBox(THREE, energy, [0.34, 0.78, 0.54], [5.92, 0.79, -0.6], mat(0xd3d2cb, 0, 0.06, 0.72), "energy");
        makeBox(THREE, energy, [0.025, 0.025, 0.45], [6.1, 0.91, -0.6], mat(0xb8b8af), "energy");
        makeBox(THREE, energy, [0.025, 0.025, 0.45], [6.1, 0.69, -0.6], mat(0xb8b8af), "energy");
        const solarFeed = new THREE.CatmullRomCurve3([
          new THREE.Vector3(-0.88, 3.86, -0.7),
          new THREE.Vector3(1.8, 3.86, -0.7),
          new THREE.Vector3(3.6, 3.65, -1.1),
          new THREE.Vector3(5.6, 3.25, -2.3),
          new THREE.Vector3(5.8, 2.5, -1.7),
          new THREE.Vector3(5.95, 1.18, -0.6),
        ]);
        const solarConduit = new THREE.Mesh(new THREE.TubeGeometry(solarFeed, 36, 0.025, 6, false), mat(0x69726d, 0, 0.2, 0.72));
        solarConduit.userData.module = "energy";
        energy.add(solarConduit);

        const cameras = new THREE.Group();
        const addCamera = (x, y, z, direction) => {
          const mount = makeBox(THREE, cameras, [0.13, 0.05, 0.06], [x, y, z], charcoal, "camera");
          mount.rotation.y = direction;
          const body = makeBox(THREE, cameras, [0.2, 0.105, 0.12], [x, y - 0.075, z + Math.cos(direction) * 0.09], charcoal, "camera");
          body.rotation.y = direction;
          const lens = new THREE.Mesh(new THREE.SphereGeometry(0.032, 12, 8), statusCyan.clone());
          lens.position.set(x, y - 0.075, z + Math.cos(direction) * 0.15);
          lens.userData.module = "camera";
          cameras.add(lens);
        };
        addCamera(-3.95, 3.12, 2.6, 0);
        addCamera(6.0, 2.92, 0.82, 0.8);
        addCamera(2.18, 2.45, 2.61, 0);
        makeBox(THREE, cameras, [0.16, 0.11, 0.055], [-2.4, 2.85, 2.58], statusGreen, "camera");
        makeBox(THREE, cameras, [0.1, 0.075, 0.045], [2.38, 2.5, 2.58], statusGreen, "camera");
        makeBox(THREE, cameras, [0.14, 0.08, 0.045], [0.55, 2.78, 2.58], mat(0xe1ded1), "camera");
        house.add(cameras);
        moduleParts.camera = cameras;

        const network = new THREE.Group();
        const router = makeBox(THREE, network, [0.52, 0.1, 0.34], [-0.15, 0.78, 1.18], charcoal, "network");
        router.rotation.y = 0.38;
        makeBox(THREE, network, [0.3, 0.13, 0.24], [-0.84, 0.72, 1.1], mat(0x303b3a, 0x101714, 0.08, 0.5), "network");
        makeBox(THREE, network, [0.045, 0.018, 0.018], [-0.7, 0.75, 1.225], statusGreen, "network");
        for (const x of [-0.32, -0.15, 0.02]) {
          const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.22, 8), charcoal.clone());
          antenna.position.set(x, 0.93, 1.18);
          network.add(antenna);
        }
        const wifiRing = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.009, 5, 36, Math.PI), new THREE.MeshBasicMaterial({ color: 0x76c4c4, transparent: true, opacity: 0.42 }));
        wifiRing.rotation.x = Math.PI / 2;
        wifiRing.position.set(-0.15, 1.15, 1.18);
        wifiRing.userData.module = "network";
        network.add(wifiRing);
        const accessPoint = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.055, 24), mat(0xd2d0c7, 0, 0.04, 0.7));
        accessPoint.position.set(1.6, 3.38, -0.35);
        accessPoint.userData.module = "network";
        network.add(accessPoint);
        house.add(network);
        moduleParts.network = network;

        const automation = new THREE.Group();
        makeBox(THREE, automation, [0.16, 0.11, 0.055], [-2.4, 2.85, 2.58], statusGreen, "automation");
        makeBox(THREE, automation, [0.24, 0.42, 0.07], [2.15, 1.72, 2.55], charcoal, "automation");
        makeBox(THREE, automation, [0.12, 0.025, 0.02], [2.15, 1.88, 2.6], statusCyan, "automation");
        makeBox(THREE, automation, [0.11, 0.18, 0.045], [2.38, 1.55, 2.56], mat(0xa48b65), "automation");
        house.add(automation);
        moduleParts.energy = energy;
        moduleParts.automation = automation;

        makeBox(THREE, model, [1.1, 0.08, 0.8], [1.95, 0.52, 3.0], pathMat);

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
            energy: value ? [-0.15, 1.05, -0.8] : [0, 0, 0],
            network: value ? [0, -0.25, 1.25] : [0, 0, 0],
            automation: value ? [0.2, 0.2, 1.2] : [0, 0, 0],
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
