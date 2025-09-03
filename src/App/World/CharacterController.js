// Import necessary modules
import * as THREE from "three";
import App from "../App.js";
import { inputStore } from "../Utils/Store.js";

/**
 * Class representing a character controller.
 */
export default class CharacterController {
  /**
   * Create a character controller.
   */
  constructor() {
    // Initialize app, scene, physics, and character properties
    this.app = new App();
    this.scene = this.app.scene;
    this.physics = this.app.world.physics;
    this.character = this.app.world.character.instance;

    // Subscribe to input store and update movement values
    inputStore.subscribe((state) => {
      this.forward = state.forward;
      this.backward = state.backward;
      this.left = state.left;
      this.right = state.right;
    });

    // Instantiate controller and create rigid body and collider
    this.instantiateController();
  }

  /**
   * Instantiate the character controller, rigid body, and collider.
   */
  instantiateController() {
    // Create a kinematic rigid body
    this.rigidBodyType =
      this.physics.rapier.RigidBodyDesc.kinematicPositionBased();
    this.rigidBody = this.physics.world.createRigidBody(this.rigidBodyType);

    // Create a cuboid collider
    this.colliderType = this.physics.rapier.ColliderDesc.cuboid(.3, 1, .3);
    this.collider = this.physics.world.createCollider(
      this.colliderType,
      this.rigidBody
    );

    // Set rigid body position to character position
    const worldPosition = this.character.getWorldPosition(new THREE.Vector3());
    const worldRotation = this.character.getWorldQuaternion(
      new THREE.Quaternion()
    );
    this.rigidBody.setTranslation(worldPosition);
    this.rigidBody.setRotation(worldRotation);

    // Create character controller, set properties, and enable autostepping
    this.characterController =
      this.physics.world.createCharacterController(0.01);
    this.characterController.setApplyImpulsesToDynamicBodies(true);
    this.characterController.enableAutostep(1, 0.3, false);
    this.characterController.enableSnapToGround(1);
  }

  /**
   * Loop function that updates the character's position and movement.
   */
  loop(deltaTime = 0) {
    // Clamp delta to avoid huge steps
    const dt = Math.max(0, Math.min(deltaTime || 0, 0.1));
    // Movement speed in world units per second (was 0.04/frame ~ 2.4 u/s @60fps)
    const SPEED = 4;
    // Damping factor converted to dt-based alpha (0.1/frame ~= lambda 6.0)
    const smoothAlpha = 1 - Math.exp(-6.0 * dt);
    // Initialize movement vector based on input values
    const movement = new THREE.Vector3();
    if (this.forward) {  // anything thats not 0 doesnt change speed
      movement.z -= 1;
    }
    if (this.backward) {
      movement.z += 1;
    }
    if (this.left) {
      movement.x -= 1;
    }
    if (this.right) {
      movement.x += 1;
    }

    // Rotate character based on movement vector
    if (movement.length() !== 0) {
      const angle = Math.atan2(movement.x, movement.z) + Math.PI;
      const characterRotation = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        angle
      );
      this.character.quaternion.slerp(characterRotation, smoothAlpha);
    }

    // Normalize and scale by dt; apply gentle downward to stay grounded
    if (movement.lengthSq() > 0) {
      movement.normalize().multiplyScalar(SPEED * dt);
    }
    // Ensure controller remains grounded consistently across frame rates
    movement.y = -3.5 * dt;

    // Update collider movement and get new position of rigid body
    this.characterController.computeColliderMovement(this.collider, movement);
    const newPosition = new THREE.Vector3()
      .copy(this.rigidBody.translation())
      .add(this.characterController.computedMovement());

    // Set next kinematic translation of rigid body and update character position
    this.rigidBody.setNextKinematicTranslation(newPosition);
    this.character.position.lerp(this.rigidBody.translation(), smoothAlpha);
  }
}
