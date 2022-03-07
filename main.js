let scene, camera, renderer, cube;

function init() {
  // シーン
  scene = new THREE.Scene();

  // カメラ
  camera = new THREE.PerspectiveCamera(
    65,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // レンダラー
  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  // ボックスのサイズ決定、メッシュ、追加
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  // const material = new THREE.MeshBasicMaterial({ color: 0x000ff });

  const texture = new THREE.TextureLoader().load(
    "./textures/minecraft-box.png"
  );
  const material = new THREE.MeshBasicMaterial({ map: texture });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
}
// アニメーション制御

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// ウィンドウ変更時にサイズを維持する処理
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectinMatrix();
  renderer.setSize(window, innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize);

init();
animate();
