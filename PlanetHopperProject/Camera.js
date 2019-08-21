class topDownCamera{
   constructor(trg, planets, refresh, isShift) {
      
      this.itr = 0;
      this.planets = planets;
      this.trg = trg;
      const angleStep = Math.PI / 20, translateStep = .5;
      const keyMap = {
         "ArrowDown": () => this.planets[this.itr]
          .rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), -angleStep),
         "ArrowUp": () => this.planets[this.itr]
          .rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), angleStep),
         "ArrowRight": () => this.planets[this.itr]
          .rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), -angleStep),
         "ArrowLeft": () => this.planets[this.itr]
          .rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), angleStep),
         "KeyA": () => trg.translateZ(-translateStep),
         "KeyS": () => trg.translateZ(translateStep),
         "KeyX": () => this.itrPlanetNext(),
         "KeyZ": () => this.itrPlanetPrev()
      };
      
      document.addEventListener("keydown", function (evt) {
         if (keyMap[evt.code] && !!evt.shiftKey === isShift
            && !evt.altKey && !evt.ctrlKey) {
            evt.stopPropagation();
            evt.preventDefault();
            keyMap[evt.code]();
            refresh();
         }
      });
      trg.position.x = this.planets[this.itr].position.x;
      trg.position.y = this.planets[this.itr].position.y;
      trg.position.z = this.planets[this.itr].position.z + 15;
      trg.lookAt(this.planets[this.itr].position);
      console.log(this.planets[this.itr].position);
   }

   itrPlanetNext() {
      if (this.itr < this.planets.length - 1) {
         this.itr++;
         this.trg.position.x = this.planets[this.itr].position.x;
         this.trg.position.y = this.planets[this.itr].position.y;
         this.trg.position.z = this.planets[this.itr].position.z + 15;
         this.trg.lookAt(this.planets[this.itr].position);
      }
   }

   itrPlanetPrev() {
      if (this.itr !== 0) {
         this.itr--;
         this.trg.position.x = this.planets[this.itr].position.x;
         this.trg.position.y = this.planets[this.itr].position.y;
         this.trg.position.z = this.planets[this.itr].position.z + 15;
         this.trg.lookAt(this.planets[this.itr].position);
      }
   }
}
