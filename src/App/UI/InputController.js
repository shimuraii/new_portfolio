import { appStateStore, inputStore } from "../Utils/Store";
import { CineonToneMapping } from 'three';
import nipplejs from "nipplejs";
var manager;
export default class InputController {
  constructor() {
    this.startListening();
    this.inputStore = inputStore;
    this.keyPressed = {};
    
    appStateStore.subscribe((state) => {
      this.nipple = state.nippleReady
      console.log(state.nippleReady)
      if(this.nipple == true){
        this.createNipple();
      }
    });
  }
  createNipple(){
    manager = nipplejs.create({
      zone: document.getElementById("space"),
      mode: "dynamic",
      position: {
        left: "100px",
        top: "100px"
      },
      follow: false,
    });
    
    var current_direction = "";

    manager.on('move', function (event, nipple) {
      manager.position = nipple.position;
      manager.distance = nipple.distance;
      manager.direction = nipple.angle.radian;
      console.log(manager.distance);
      var total_angle = 6.279201325062565;

      

      if ((manager.direction >= 5.755934547974017 && manager.direction <= total_angle) || (manager.direction >= 0 && manager.direction <= 0.5232667770885471)){ // right
        console.log("right")
        if (current_direction != "r"){
          inputStore.setState({ forward: false });
          inputStore.setState({ left: false });
          inputStore.setState({ backward: false });

          inputStore.setState({ right: true });
          current_direction = "r";
        }
        
      }//each quadrant distance: 1.046533554177094 each square (12): 0.5232667770885471
      else if ((manager.direction >= 0.5232667770885471) && manager.direction <= 1.046533554177094){ //right + up // 
        console.log("right + up")
        
        if (current_direction != "ru"){
          inputStore.setState({ left: false });
          inputStore.setState({ backward: false });

          inputStore.setState({ right: true });
          inputStore.setState({ forward: true });
          current_direction = "ru";
        }
      }
      else if ((manager.direction >= 1.046533554177094) && manager.direction <= 2.093067108354188){ // up
        console.log("up")
        
        if (current_direction != "u"){
          inputStore.setState({ right: false });
          inputStore.setState({ left: false });
          inputStore.setState({ backward: false });

          inputStore.setState({ forward: true });
          current_direction = "u";
        }
      }
      else if ((manager.direction >= 2.093067108354188) && manager.direction <= 2.616333885442735){ // left + up
        console.log("left + up")
        

        if (current_direction != "lu"){
          inputStore.setState({ right: false });
          inputStore.setState({ backward: false });

          inputStore.setState({ forward: true });
          inputStore.setState({ left: true });
          current_direction = "lu";
        }
      }
      else if ((manager.direction >= 2.616333885442735) && manager.direction <= 3.662867439619829){ // left
        console.log("left")

        if (current_direction != "l"){
          inputStore.setState({ right: false });
          inputStore.setState({ forward: false });
          inputStore.setState({ backward: false });

          inputStore.setState({ left: true });
          current_direction = "l";
        }
      }
      else if ((manager.direction >= 3.662867439619829) && manager.direction <= 4.186134216708376){ // left + bottom
        console.log("left + bottom")

        if (current_direction != "lb"){
          inputStore.setState({ right: false });
          inputStore.setState({ forward: false });

          inputStore.setState({ left: true });
          inputStore.setState({ backward: true });
          current_direction = "lb";
        }
      }
      else if ((manager.direction >= 4.186134216708376) && manager.direction <= 5.23266777088547){ // bottom
        console.log("bottom")
        if (current_direction != "b"){
          inputStore.setState({ right: false });
          inputStore.setState({ forward: false });
          inputStore.setState({ left: false });

          inputStore.setState({ backward: true });
          current_direction = "b";
        }
      }
      else if ((manager.direction >= 5.23266777088547) && manager.direction <= 5.755934547974017){ // right + bottom
        console.log("right + bottom")
        
        if (current_direction != "rb"){ 
          inputStore.setState({ forward: false });
          inputStore.setState({ left: false });

          inputStore.setState({ backward: true });
          inputStore.setState({ right: true });
          current_direction = "rb";
        }
      }
    });
    manager.on('end', function (event, nipple) {
      inputStore.setState({ right: false });
      inputStore.setState({ forward: false });
      inputStore.setState({ left: false });
      inputStore.setState({ backward: false });
    });
  }
  startListening() {
    window.addEventListener("keydown", (event) => this.onKeyDown(event));
    window.addEventListener("keyup", (event) => this.onKeyUp(event));
  }   

  onKeyDown(event) {
    if (!this.keyPressed[event.code]) {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          console.log("forward");   
          inputStore.setState({ forward: true });
          break;
        case "KeyA":
        case "ArrowLeft":
          inputStore.setState({ left: true });
          break;
        case "KeyS":
        case "ArrowDown":
          inputStore.setState({ backward: true });
          break;
        case "KeyD":
        case "ArrowRight":
          inputStore.setState({ right: true });
          break;
      }
      this.keyPressed[event.code] = true;
    }
  }

  onKeyUp(event) {
    switch (event.code) {
      case "KeyW":
      case "ArrowUp":
        inputStore.setState({ forward: false });
        break;
      case "KeyA":
      case "ArrowLeft":
        inputStore.setState({ left: false });
        break;
      case "KeyS":
      case "ArrowDown":
        inputStore.setState({ backward: false });
        break;
      case "KeyD":
      case "ArrowRight":
        inputStore.setState({ right: false });
        break;
    }
    this.keyPressed[event.code] = false;
  }
}
