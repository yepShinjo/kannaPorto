import './style.css'

import * as THREE from 'three';
// to start you ALWAYS need scene, camera and renderer

// this one import some stuff for us to use to allow us to move around the scene using our mouse
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// to start things off, you will alway need three stuff
// a scene, a camera, and a renderer

// a scene is like a container that holds all your objects, cameras and lights. scene == container

const scene = new THREE.Scene();

// first of all, we need a camera, here we use a camera that mimics what the human eyeballs would see

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.01, 1000);

// now we need a renderer to render out the actual graphics to the screen
// the renderer need to know whihc dom element to use. here we use the bg as the 

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

// once instatiated, we set that pixel ratio to the window pixel ratio and make it fullscreen

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize ( window.innerWidth, window.innerHeight);

// default camera is on the middle of the screen.  so we move the camera along the z axis.

camera.position.setZ(75);


// actually rendering it here

renderer.render( scene, camera ); 

// now we make the object

// make a bigass 3D ring
const geometry = new THREE.TorusGeometry( 13, 4, 30, 100 );

// give it a wrapping paper. here we use meshStandardMaterial so the object bounces light

const material = new THREE.MeshStandardMaterial({color: 0x89CFF0});

// make a mesh to combine geometry and material

const torus = new THREE.Mesh(geometry, material);

// make sure to add it to the scene

scene.add(torus);

// set a light, move it away from the center

const pointLight = new THREE.PointLight(0xFF0000);
pointLight.position.set(5,5,5);

// this one will light the entire scene equally
const ambientLight = new THREE.AmbientLight(0xFFFFFF);
// make sure to add this to the scene aswell
scene.add(pointLight, ambientLight);

// this one will help us to show the position of the point light (it gives this small wireframe near the object). turn this off for final show ( just turn it into a comment )
 // const lightHelper = new THREE.PointLightHelper(pointLight)
// well, this one draw a 2D grid on the scene ( turn these off for final show aswell )
 // const gridHelper = new THREE.GridHelper(200, 50);
 // scene.add(lightHelper, gridHelper)

// here we use something from line 7, this listen to domelement(like scroll) on our mouse, and update the camera accordingly
 const controls = new OrbitControls(camera, renderer.domElement);


// here, we populate the space with a bunch of randomly generated "stone", because why the f not.
function addstone() {
  const geometry = new THREE.IcosahedronGeometry(0.25, 5); // make a "ball"
  const material = new THREE.MeshStandardMaterial( { color: 0x404040}); // so that these stone can reflect light
  const stone = new THREE.Mesh( geometry, material );

  // here we randomly generate a stone
  // randomly generate x, y, and z value for the stone. How ? by filling an array of three value. Then we map the three value to the three JS randomFloatSpread function that generate a number between -100 to 100
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));

  // we can then take those random number and set the positon of the stone  and add it to the scene
  stone.position.set(x, y, z);
  scene.add(stone);

}
// i want 269 stone
Array(269).fill().forEach(addstone);

// load the space jpg into the code
const spaceTexture = new THREE.TextureLoader().load('space.jpg');

// make the jpg the backround scene
scene.background = spaceTexture;

// now let'ss try texture mapping
// wtf is that ? basically we take a bumch of 2D images, combine them together to form a 3D geometry
// here, let's just make an box of saitama's face
// i cant use the others as they look curse with saitamas face...

// same as before, first load up the image to the code
const saitamaTexture = new THREE.TextureLoader().load('saitama.png');

// create a mesh that contain a box geometry
const saitama = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial( {
      map: saitamaTexture
    }) // here we uses basic material cuz we dont want the object to reflect light. we want it to presetn an image
);

scene.add(saitama);


// now make moon
const moonTexture = new THREE.TextureLoader().load('moon2.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg'); // this one, so that the moon is not completely smooth. adding some depth

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(2, 24, 24),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
      normalMap: normalTexture,
    })
);

scene.add(moon);



const planetTexture = new THREE.TextureLoader().load('planet.jpg');

const planet = new THREE.Mesh(
    new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshStandardMaterial({
      map: planetTexture,
      normalMap: normalTexture,
    })
);

scene.add(planet);

const KannaTexture = new THREE.TextureLoader().load('KannaNom.png');

const kanna = new THREE.Mesh(
    new THREE.CircleGeometry(5.5, 60, 2.5),
    new THREE.MeshStandardMaterial({
      map: KannaTexture
    })
);

scene.add(kanna);


// re-position the moon down the z axis
 // with three JS, you can do something like using the = sign right here to set an object to a place, or
moon.position.setX(-10); // literally say setX or Y or Z (position)
moon.position.setY(5);

planet.position.setX(11);
planet.position.setY(-4);

kanna.position.setX(18);

saitama.position.z = -10;
saitama.position.setX(2);

torus.position.z = -20;


function moveCam() {

  // first, we need to calculate where to user is currently scrolled to.
  // the document.body.getboundingclientrect will exatcly do that. it will give us the dimention of the view port. and adding .top will show us how far we are from the top part of the page
  const t = document.body.getBoundingClientRect().top;

  //here we rotate the moon
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;
  //rotate the planet aswell
  planet.rotation.x += 0.05;
  planet.rotation.y += 0.075;
  planet.rotation.z += 0.05;

  // here we rotate the saitama
  saitama.rotation.y += 0.03;
  saitama.rotation.z += 0.03;
  // same with the torus
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.015;
  torus.rotation.z += 0.01;

  // most importantly, here we rotate the camera itself. 
  // the top value will always be negative (cuz we are scrolling down) thus why we're multiplyting it negative number
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;

}

// move cam will handle the document body on scroll event
document.body.onscroll = moveCam;
moveCam();

// as the name suggest, this will animate the objects without moving the cursor. so that these 3 objects will move even without being scrolled

function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  moon.rotation.x += 0.005;

  planet.rotation.x += 0.005;

   controls.update();

  renderer.render( scene, camera );
}

animate();