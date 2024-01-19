import * as THREE from "three";

import App from "../App.js";

import assetStore from "../Utils/AssetStore.js";

import Portal from "./Portal.js";
import ModalContentProvider from "../UI/ModalContentProvider.js";

export default class Environment {
  constructor() {
    this.app = new App();
    this.scene = this.app.scene;
    this.physics = this.app.world.physics;
    this.pane = this.app.gui.pane;

    this.assetStore = assetStore.getState()
    this.environment = this.assetStore.loadedAssets.environment


    this.loadEnvironment();
    this.addLights();
    this.addGround();
    this.addPortals()
  }

  loadEnvironment() {
    // load environment here
    const environmentScene= this.environment.scene;
    this.scene.add(environmentScene)

    environmentScene.position.set(-4.8, 0, -7.4)
    environmentScene.rotation.set(0, -.60, 0)
    environmentScene.scale.setScalar(1.3)

    environmentScene.traverse((obj) => {
      if (obj.isMesh) {
        this.physics.add(obj, 'fixed', 'cuboid')
      }
    })

    const physicalObjects = ['trees', 
      'terrain',
      'rocks',
      'stairs',
      'gates',
      'floor',
      'bushes',
      'Japanese_Shrine',
      '18370_Shinto-Torii_Gate_v1',
      'Net',
      'Frame'
    ]
    const shadowCasters = ['trees', 
      'terrain',
      'rocks',
      'stairs',
      'gates',
      'bushes',
      'Japanese_Shrine',
      '18370_Shinto-Torii_Gate_v1',
      'Net',
      'Frame'
    ]
    const shadowReceivers = [
      'terrain',
      'floor',
    ]

    console.log(this.scene.children)
    // loop through the top level of the environment scene
    for (const child of environmentScene.children){
      //check if name includes any strings
      const isPhysicalObject = physicalObjects.some((keyword) => child.name.includes(keyword));
      // yes => traverse and target scene
      if (isPhysicalObject){
        child.traverse((obj) => {
          if (obj.isMesh) {
            this.physics.add[obj, 'fixed', 'cuboid']
          }
        })
      }

      const isShadowCaster = physicalObjects.some((keyword) => child.name.includes(keyword));
      // yes => traverse and target scene
      if (isShadowCaster){
        child.traverse((obj) => {
          if (obj.isMesh) {
            obj.castShadow = true
          }
        })
      }

      const isShadowReceiver = physicalObjects.some((keyword) => child.name.includes(keyword));
      // yes => traverse and target scene
      if (isPhysicalObject){
        child.traverse((obj) => {
          if (obj.isMesh) {
            obj.receiveShadow = true;
          }
        })
      }

    }
    
    



  }

  




  addLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    this.directionalLight.position.set(1, 1, 1);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.camera.top = 30
    this.directionalLight.shadow.camera.right = 30
    this.directionalLight.shadow.camera.left = -30
    this.directionalLight.shadow.camera.bottom = -30
  

    this.scene.add(this.directionalLight);
  }

  addGround() {
    const groundGeometry = new THREE.BoxGeometry(1000, 0, 1000);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: "turquoise",

    });
    this.groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    this.scene.add(this.groundMesh);
    this.physics.add(this.groundMesh, "fixed", "cuboid");
  }

  addPortals() {

    const portalMesh1 = this.environment.scene.getObjectByName('portals')
    const portalMesh2 = this.environment.scene.getObjectByName('portals001')
    const portalMesh3 = this.environment.scene.getObjectByName('portals002')
    const portalMesh4 = this.environment.scene.getObjectByName('portals005')
    const portalMesh5 = this.environment.scene.getObjectByName('portals003')

    const modalContentProvider = new ModalContentProvider()


    this.portal1 = new Portal(portalMesh1, modalContentProvider.getModalInfo('intro'))
    this.portal2 = new Portal(portalMesh2, modalContentProvider.getModalInfo('projects'))
    this.portal3 = new Portal(portalMesh3, modalContentProvider.getModalInfo('contactMe'))
    this.portal4 = new Portal(portalMesh4, modalContentProvider.getModalInfo('aboutMe'))
    this.portal5 = new Portal(portalMesh5, modalContentProvider.getModalInfo('interests'))
  }

  loop() {
    this.portal1.loop()
    this.portal2.loop()
    this.portal3.loop()
    this.portal4.loop()
    this.portal5.loop()

  }

}
