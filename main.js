import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Pane } from "tweakpane";

// initialize pane
const pane = new Pane();

// initialize the scene
const scene = new THREE.Scene();
scene.color = new THREE.Color("black")


// add textureLoader
const textureLoader = new THREE.TextureLoader();
// const cubeTextureLoader = new THREE.CubeTextureLoader()
// cubeTextureLoader.setPath('./static')
// console.log(cubeTextureLoader)

// adding textures
const sunTexture = textureLoader.load("2k_sun.jpg");
sunTexture.colorSpace = THREE.SRGBColorSpace  
const mercuryTexture = textureLoader.load("2k_mercury.jpg");
mercuryTexture.colorSpace = THREE.SRGBColorSpace
const venusTexture = textureLoader.load("2k_venus_surface.jpg");
venusTexture.colorSpace = THREE.SRGBColorSpace
const earthTexture = textureLoader.load("2k_earth_daymap.jpg");
earthTexture.colorSpace = THREE.SRGBColorSpace
const marsTexture = textureLoader.load("2k_mars.jpg");
marsTexture.colorSpace = THREE.SRGBColorSpace
const jupiterTexture = textureLoader.load("2k_jupiter.jpg");
marsTexture.colorSpace = THREE.SRGBColorSpace
const saturnTexture = textureLoader.load("2k_saturn.jpg");
marsTexture.colorSpace = THREE.SRGBColorSpace
const saturnringTexture = textureLoader.load("2k_saturn_ring_alpha.png");
marsTexture.colorSpace = THREE.SRGBColorSpace
const uranusTexture = textureLoader.load("2k_uranus.jpg");
marsTexture.colorSpace = THREE.SRGBColorSpace
const neptuneTexture = textureLoader.load("2k_neptune.jpg");
marsTexture.colorSpace = THREE.SRGBColorSpace
const moonTexture = textureLoader.load("2k_moon.jpg");
moonTexture.colorSpace = THREE.SRGBColorSpace
const sceneTexture = textureLoader.load("8k_stars_milky_way.jpg");
moonTexture.colorSpace = THREE.SRGBColorSpace

// const backgroundCodemap = cubeTextureLoader
// .load( [
//   'nx.png',
//   'ny.png',
//   'nz.png',
//   'px.png',
//   'py.png',
//   'pz.png'
// ] );
// scene.background = backgroundCodemap
scene.background = sceneTexture

// add materials
const mercuryMaterial = new THREE.MeshPhysicalMaterial({
  map: mercuryTexture,
});
const venusMaterial = new THREE.MeshPhysicalMaterial({
  map: venusTexture,
});
const earthMaterial = new THREE.MeshPhysicalMaterial({
  map: earthTexture,
});
const marsMaterial = new THREE.MeshPhysicalMaterial({
  map: marsTexture,
});
const moonMaterial = new THREE.MeshPhysicalMaterial({
  map: moonTexture,
});

const jupiterMaterial = new THREE.MeshPhysicalMaterial({
  map : jupiterTexture
})
const uranusMaterial = new THREE.MeshPhysicalMaterial({
  map : uranusTexture
})
const saturnMaterial= new THREE.MeshPhysicalMaterial({
  map:saturnTexture
})
const neptuneMaterial = new THREE.MeshPhysicalMaterial({
  map:neptuneTexture,
})


// add stuff here
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({
  map: sunTexture,
});

const sun = new THREE.Mesh(sphereGeometry, sunMaterial);
sun.scale.setScalar(5);
scene.add(sun);

const planets = [
  {
    name: "Mercury",
    radius: 0.5,
    distance: 10,
    speed: 0.01,
    material: mercuryMaterial,
    moons: [],
  },
  {
    name: "Venus",
    radius: 0.8,
    distance: 15,
    speed: 0.007,
    material: venusMaterial,
    moons: [],
  },
  {
    name: "Earth",
    radius: 1,
    distance: 20,
    speed: 0.005,
    material: earthMaterial,
    moons: [
      {
        name: "Moon",
        radius: 0.3,
        distance: 3,
        speed: 0.015,
      },
    ],
  },
  {
    name: "Mars",
    radius: 0.7,
    distance: 25,
    speed: 0.003,
    material: marsMaterial,
    moons: [
      {
        name: "Phobos",
        radius: 0.1,
        distance: 2,
        speed: 0.02,
      },
      {
        name: "Deimos",
        radius: 0.2,
        distance: 3,
        speed: 0.015,
        color: 0xffffff,
      },
    ],
  },
  {
    name: "Jupiter",
    radius: 1.4,
    distance: 30,
    speed: 0.002,
    material: jupiterMaterial,
    moons: [
      {
        name: "Io",
        radius: 0.3,
        distance: 2,
        speed: 0.01,
      },
      {
        name: "Europa",
        radius: 0.3,
        distance: 2.5,
        speed: 0.008,
      },
      {
        name: "Ganymede",
        radius: 0.4,
        distance: 3,
        speed: 0.007,
      },
      {
        name: "Callisto",
        radius: 0.5,
        distance: 3.5,
        speed: 0.006,
      },
      // Additional moons
      {
        name: "Amalthea",
        radius: 0.2,
        distance: 1.8,
        speed: 0.01,
      },
      {
        name: "Himalia",
        radius: 0.4,
        distance: 11,
        speed: 0.002,
      },
      // Add more if needed
    ],
  },
  {
    name: "Saturn",
    radius: 1.2,
    distance: 35,
    speed: 0.004,
    material: saturnMaterial,
    moons: [
      {
        name: "Titan",
        radius: 0.4,
        distance: 3,
        speed: 0.005,
      },
      {
        name: "Rhea",
        radius: 0.3,
        distance: 3.5,
        speed: 0.004,
      },
      {
        name: "Iapetus",
        radius: 0.2,
        distance: 4,
        speed: 0.003,
      },
      {
        name: "Dione",
        radius: 0.2,
        distance: 3,
        speed: 0.003,
      },
      // Add more if needed
    ],
  },
  {
    name: "Uranus",
    radius: 1,
    distance: 40,
    speed: 0.003,
    material: uranusMaterial,
    moons: [
      {
        name: "Miranda",
        radius: 0.2,
        distance: 2,
        speed: 0.006,
      },
      {
        name: "Ariel",
        radius: 0.3,
        distance: 2.5,
        speed: 0.005,
      },
      {
        name: "Umbriel",
        radius: 0.3,
        distance: 3,
        speed: 0.004,
      },
      {
        name: "Titania",
        radius: 0.4,
        distance: 4,
        speed: 0.003,
      },
      {
        name: "Oberon",
        radius: 0.4,
        distance: 4.5,
        speed: 0.002,
      },
      // Add more if needed
    ],
  },
  {
    name: "Neptune",
    radius: 1,
    distance: 45,
    speed: 0.002,
    material: neptuneMaterial,
    moons: [
      {
        name: "Triton",
        radius: 0.4,
        distance: 3,
        speed: 0.007,
      },
      {
        name: "Nereid",
        radius: 0.2,
        distance: 5,
        speed: 0.003,
      },
      
    ],
  },
];


const createPlanet = (planet) =>{
  const planetMesh = new THREE.Mesh(
    sphereGeometry,
    planet.material
  )
  planetMesh.scale.setScalar(planet.radius)
  planetMesh.position.x = planet.distance
  return planetMesh
}

const createMoon = (moon) =>{
  const moonMesh = new THREE.Mesh(
    sphereGeometry,
    moonMaterial
  )
  moonMesh.scale.setScalar(moon.radius)
  moonMesh.position.x = moon.distance
  return moonMesh
}


const planetMeshes = planets.map((planet) =>{
  const planetMesh = createPlanet(planet)
  scene.add(planetMesh)

  planet.moons.forEach((moon) => {
    const moonMesh = createMoon(moon)
    planetMesh.add(moonMesh)
  })
  return planetMesh
})

console.log(planetMeshes)

// add lights
const ambientLight = new THREE.AmbientLight(
  "white",
  0
)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(
  'gray',
  5000
)
scene.add(pointLight)
 
// initialize the camera
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  400
);
camera.position.z = 100;
camera.position.y = 10;

// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// add controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 200;
controls.minDistance = 20;

// add resize listener
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});



const axeshelper = new THREE.AxesHelper(10);
sun.add(axeshelper)

// render loop
const renderloop = () => {
  const time = new Date().getTime();
  console.log(time);
  planetMeshes.forEach((planet, planetIndex)=>{
    console.log(time)
    planet.rotation.y +=  planets[planetIndex].speed
    planet.position.x = Math.sin(planet.rotation.y) * planets[planetIndex].distance
    planet.position.z = Math.cos(planet.rotation.y) * planets[planetIndex].distance
    planet.children.forEach((moon, moonIndex) =>{
      moon.rotation.y += planets[planetIndex].moons[moonIndex].speed
      moon.position.x = Math.sin(moon.rotation.y) * planets[planetIndex].moons[moonIndex].distance
      moon.position.z = Math.cos(moon.rotation.y) * planets[planetIndex].moons[moonIndex].distance
    })
  })
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();