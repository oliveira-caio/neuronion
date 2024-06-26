import * as THREE from 'three';


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

function animateBigRectangle() {
    let sceneObj = initThreeJS('big-rectangle');
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(geometry, material);
    sceneObj.scene.add(cube);
    sceneObj.animate = function () {
        requestAnimationFrame(sceneObj.animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        sceneObj.renderer.render(sceneObj.scene, sceneObj.camera);
    };
    sceneObj.animate();
}

function animateSmallRectangle(container) {
    let sceneObj = initThreeJS(container);
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    let cube = new THREE.Mesh(geometry, material);
    sceneObj.scene.add(cube);
    sceneObj.animate = function () {
        requestAnimationFrame(sceneObj.animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        sceneObj.renderer.render(sceneObj.scene, sceneObj.camera);
    };
    sceneObj.animate();
}

let buttons = {
    big: document.getElementById("big-button"),
    small1: document.getElementById("small-button-1"),
    small2: document.getElementById("small-button-2"),
};

buttons['big'].onclick = function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    fileInput.click();
    fileInput.onchange = function() {
        animateBigRectangle();
    }
    this.hidden = true;
}

buttons['small1'].onclick = function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    fileInput.click();
    fileInput.onchange = function() {
        animateSmallRectangle('small-rectangle-1');
    }
    this.hidden = true;
}

buttons['small2'].onclick = function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    fileInput.click();
    fileInput.onchange = function() {
        animateSmallRectangle('small-rectangle-2');
    }
    this.hidden = true;
}