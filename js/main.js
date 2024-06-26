import * as THREE from 'three';

// Initialization of three.js scenes
let scenes = {
    big: initThreeJS('big-rectangle'),
    small1: initThreeJS('small-rectangle-1'),
    small2: initThreeJS('small-rectangle-2')
};

function initThreeJS(containerId) {
    let container = document.getElementById(containerId);
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    camera.position.z = 5;

    let animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();

    return { scene, camera, renderer };
}

function animateBigRectangle(sceneObj, cube) {
    sceneObj.animate = function () {
        requestAnimationFrame(sceneObj.animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        sceneObj.renderer.render(sceneObj.scene, sceneObj.camera);
    };
    sceneObj.animate();
}

function loadFile(type) {
    // Handle the file loading and update the scene
    // For demonstration, we'll just add a cube to the scene
    let sceneObj = scenes[type];
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(geometry, material);
    sceneObj.scene.add(cube);

    // Adjust camera or scene settings based on file type
    if (type === 'big') {
        animateBigRectangle(sceneObj, cube)
    } else {
        animateBigRectangle(sceneObj, cube)
    }
}

let buttons = {
    big: document.getElementById("big-button"),
    small1: document.getElementById("small-button-1"),
    small2: document.getElementById("small-button-2"),
};

console.log('hi');

buttons['big'].onclick = function() {
    loadFile('big');
}