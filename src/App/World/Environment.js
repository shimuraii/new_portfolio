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
    this.addPortals()
    this.setupSoccer();
  }

  loadEnvironment() {
    // load environment here
    const environmentScene = this.environment.scene;
    this.scene.add(environmentScene);

    environmentScene.position.set(-4.8, 0, -7.4)
    environmentScene.rotation.set(0, -.60, 0)
    environmentScene.scale.setScalar(1.3)

    const physicalObjects = ['trees',
      'terrain',
      'rocks',
      'stairs',
      'gates',
      'floor',
      'bushes'
    ]

    const shadowCasters = ['trees',
      'terrain',
      'rocks',
      'stairs',
      'gates',
      'bushes'
    ]

    const shadowReceivers = ['floor',
      'terrain'
    ]

    for (const child of environmentScene.children) {
      child.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = shadowCasters.some((keyword) => child.name.includes(keyword))
          obj.receiveShadow = shadowReceivers.some((keyword) => child.name.includes(keyword))
          // Avoid creating blocking colliders for goal-related nodes; handled in setupSoccer()
          const isGoalRelated = /net|frame|goal|soccer/i.test(child.name);
          if (!isGoalRelated && physicalObjects.some((keyword) => child.name.includes(keyword))) {
            this.physics.add(obj, "fixed", "cuboid")
          }
        }
      })
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
    this.directionalLight.shadow.bias = -0.002
    this.directionalLight.shadow.normalBias = 0.072
    this.scene.add(this.directionalLight);
  }

  addPortals() {

    const portalMesh1 = this.environment.scene.getObjectByName('portals')
    const portalMesh2 = this.environment.scene.getObjectByName('portals001')
    const portalMesh3 = this.environment.scene.getObjectByName('portals002')

    const modalContentProvider = new ModalContentProvider()


    this.portal1 = new Portal(portalMesh1, modalContentProvider.getModalInfo('aboutMe'))
    this.portal2 = new Portal(portalMesh2, modalContentProvider.getModalInfo('projects'))
    this.portal3 = new Portal(portalMesh3, modalContentProvider.getModalInfo('contactMe'))
  }

  setupSoccer() {
    const root = this.environment.scene;
    // 1) Soccer ball: dynamic sphere with bouncy-ish material
    const findByNames = (names) => names.map(n => root.getObjectByName(n)).find(Boolean);
    const getFirstMesh = (obj) => {
      if (!obj) return null;
      if (obj.isMesh) return obj;
      let found = null;
      obj.traverse((o) => { if (!found && o.isMesh) found = o; });
      return found;
    }
    const ballNode = findByNames(['soccer_ball', 'Soccer_Ball', 'SoccerBall', 'ball']);
    // Collect all meshes under the ball node (some assets export multiple pieces)
    const ballMeshes = [];
    if (ballNode) {
      ballNode.traverse((o) => { if (o.isMesh) ballMeshes.push(o); });
    }
    // Choose a primary mesh (largest bounding sphere radius)
    let primaryBallMesh = null;
    let maxRadius = -Infinity;
    for (const m of ballMeshes) {
      if (!m.geometry) continue;
      m.geometry.computeBoundingSphere();
      const r = m.geometry.boundingSphere ? m.geometry.boundingSphere.radius : 0;
      if (r > maxRadius) { maxRadius = r; primaryBallMesh = m; }
    }
    const ballMesh = primaryBallMesh || getFirstMesh(ballNode);
    if (ballMesh) {
      // Reparent any additional meshes under the primary mesh so they move together
      const others = ballMeshes.filter((m) => m !== ballMesh);
      ballMesh.updateWorldMatrix(true, false);
      const invPrimary = new THREE.Matrix4().copy(ballMesh.matrixWorld).invert();
      for (const childMesh of others) {
        childMesh.updateWorldMatrix(true, false);
        const local = new THREE.Matrix4().multiplyMatrices(invPrimary, childMesh.matrixWorld);
        const pos = new THREE.Vector3();
        const quat = new THREE.Quaternion();
        const scl = new THREE.Vector3();
        local.decompose(pos, quat, scl);
        // Reparent while preserving world transform
        if (childMesh.parent) childMesh.parent.remove(childMesh);
        ballMesh.add(childMesh);
        childMesh.position.copy(pos);
        childMesh.quaternion.copy(quat);
        childMesh.scale.copy(scl);
      }

      // Ensure visibility if authoring hid it
      ballMesh.visible = true;
      // Add dynamic sphere collider with some restitution and damping
      this.physics.add(ballMesh, 'dynamic', 'ball', {
        restitution: 0.5,
        friction: 0.7,
        linearDamping: 0.2,
        angularDamping: 0.1,
      });
      // Store for goal detection
      this.soccerBall = ballMesh;
    }

    // 2) Goal: make net/frame collidable and add a sensor volume for scoring
    const netNode = findByNames(['Net', 'net']);
    const frameNode = findByNames(['Frame', 'frame', 'GoalFrame']);
    if (frameNode) {
      const meshes = [];
      frameNode.traverse((o) => { if (o.isMesh) meshes.push(o); });
      if (meshes.length === 0) {
        const m = getFirstMesh(frameNode);
        if (m) meshes.push(m);
      }
      // Use trimesh so the mouth of the goal remains open
      for (const m of meshes) this.physics.add(m, 'fixed', 'trimesh');
    }
    if (netNode) {
      const meshes = [];
      netNode.traverse((o) => { if (o.isMesh) meshes.push(o); });
      if (meshes.length === 0) {
        const m = getFirstMesh(netNode);
        if (m) meshes.push(m);
      }
      // Make net non-blocking by using sensor colliders (or skip entirely)
      for (const m of meshes) this.physics.add(m, 'fixed', 'trimesh', { sensor: true });
    }

    // Create a goal sensor volume roughly around the net bounds
    const goalSource = netNode || frameNode;
    if (goalSource) {
      const worldBox = new THREE.Box3().setFromObject(goalSource);
      const fullSize = worldBox.getSize(new THREE.Vector3());
      const fullCenter = worldBox.getCenter(new THREE.Vector3());
      // Slightly narrower than posts so balls near posts don't get blocked by sensor AABB
      const size = new THREE.Vector3(fullSize.x * 0.9, fullSize.y * 0.95, Math.max(0.2, fullSize.z * 0.5));
      const center = fullCenter.clone();
      const sensorGeom = new THREE.BoxGeometry(size.x, size.y, size.z);
      const sensorMat = new THREE.MeshBasicMaterial({ visible: false });
      const sensorMesh = new THREE.Mesh(sensorGeom, sensorMat);
      sensorMesh.position.copy(center);
      // Add directly to scene root so world transforms are correct
      this.scene.add(sensorMesh);
      this.goalSensorMesh = sensorMesh;
      this.physics.add(sensorMesh, 'fixed', 'cuboid', { sensor: true });
    }
  }

  loop() {
    this.portal1.loop()
    this.portal2.loop()
    this.portal3.loop()

    // Simple goal detection using the goal sensor box AABB
    if (this.soccerBall && this.goalSensorMesh) {
      const ballWorldPos = new THREE.Vector3();
      this.soccerBall.getWorldPosition(ballWorldPos);
      const goalBox = new THREE.Box3().setFromObject(this.goalSensorMesh);
      const scored = goalBox.containsPoint(ballWorldPos);
      if (scored && !this._scoredAlready) {
        this._scoredAlready = true;
        console.log('GOAL!');
      }
      if (!scored && this._scoredAlready) {
        // reset when ball leaves the goal volume
        this._scoredAlready = false;
      }
    }
  }

}
