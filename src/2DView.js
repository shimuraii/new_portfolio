import './style.css'

// Minimal Three.js portrait renderer for the avatar model
async function initAvatarPortrait() {
  const canvas = document.getElementById('avatarPortrait')
  if (!canvas) return

  const [{ WebGLRenderer, Scene, PerspectiveCamera, Color, sRGBEncoding, ACESFilmicToneMapping, AmbientLight, DirectionalLight, Box3, Vector3 }, { GLTFLoader }, { DRACOLoader } ] = await Promise.all([
    import('three'),
    import('three/addons/loaders/GLTFLoader.js'),
    import('three/addons/loaders/DRACOLoader.js'),
  ])

  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.outputEncoding = sRGBEncoding
  renderer.toneMapping = ACESFilmicToneMapping
  renderer.setClearColor(new Color(0, 0, 0), 0)

  const scene = new Scene()
  const camera = new PerspectiveCamera(30, 1, 0.1, 100)

  // Lights
  scene.add(new AmbientLight(0xffffff, 0.6))
  const dirLight = new DirectionalLight(0xffffff, 1.0)
  dirLight.position.set(2, 3, 4)
  scene.add(dirLight)

  // Load avatar
  const draco = new DRACOLoader()
  draco.setDecoderPath('/draco/')
  const loader = new GLTFLoader()
  loader.setDRACOLoader(draco)

  let avatar
  await new Promise((resolve, reject) => {
    loader.load('/models/avatar.glb', (gltf) => {
      avatar = gltf.scene
      scene.add(avatar)
      resolve()
    }, undefined, reject)
  })

  // Frame the model nicely in the square canvas
  const box = new Box3().setFromObject(avatar)
  const size = new Vector3()
  const center = new Vector3()
  box.getSize(size)
  box.getCenter(center)

  // Place camera in front of model focusing on torso/face
  const maxDim = Math.max(size.x, size.y, size.z)
  const fitHeightDistance = maxDim / (2 * Math.tan((Math.PI * camera.fov) / 360))
  const distance = fitHeightDistance * 1.4

  camera.position.set(center.x, center.y + size.y * 0.1, center.z + distance)
  camera.lookAt(center)

  // Ensure model centered at origin for subtle rotation
  avatar.position.sub(center)

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const width = canvas.clientWidth || 180
    const height = canvas.clientHeight || 180
    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      renderer.setPixelRatio(dpr)
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
  }

  function tick() {
    resize()
    if (avatar) avatar.rotation.y += 0.005
    renderer.render(scene, camera)
    requestAnimationFrame(tick)
  }
  tick()
}

window.addEventListener('DOMContentLoaded', () => {
  initAvatarPortrait()
})
