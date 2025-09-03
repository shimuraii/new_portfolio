import * as THREE from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { sizesStore } from './Utils/Store.js';


import App from './App.js'

export default class Camera{
    constructor() {
        this.app = new App()
        this.canvas = this.app.canvas

        this.sizesStore = sizesStore

        this.sizes = this.sizesStore.getState()

        this.setInstance()
        this.setControls()
        this.setResizeLister()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            35,
            this.sizes.width / this.sizes.height,
            1,
            600
          );
          this.instance.position.z = 100
        this.instance.position.y = 20
    }

    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas);
        this.controls.enableDamping = false;
        this.controls.enableRotate = false;
        this.controls.enablePan = false;
        this.controls.enableZoom = false;
    }

    setResizeLister() {
        this.sizesStore.subscribe((sizes)=>{
            this.instance.aspect = sizes.width / sizes.height
            this.instance.updateProjectionMatrix()
        })
    }

    loop(deltaTime = 0) {
        this.controls.update()
        const dt = Math.max(0, Math.min(deltaTime || 0, 0.1));
        const smoothAlpha = 1 - Math.exp(-6.0 * dt);
        this.characterController = this.app.world.characterController?.rigidBody
        if(this.characterController) {


            const characterPosition = this.characterController.translation()
            const characterRotation = this.characterController.rotation()

            const cameraOffset = new THREE.Vector3(0, 28, 35)
            cameraOffset.applyQuaternion(characterRotation)
            cameraOffset.add(characterPosition)

            const targetOffset = new THREE.Vector3(0, 8, 0)
            targetOffset.applyQuaternion(characterRotation)
            targetOffset.add(characterPosition)

            this.instance.position.lerp(cameraOffset, smoothAlpha)
            this.controls.target.lerp(targetOffset, smoothAlpha)
        }
    }
}
