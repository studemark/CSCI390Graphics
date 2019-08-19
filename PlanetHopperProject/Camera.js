class topDownCamera{
   constructor(trg, planets, refresh, isShift) {
      
      this.itr = 0;
      this.planets = planets;
      this.trg = trg;
      var objAxisY = new THREE.Vector3(0,1,0);
      var objAxisX = new THREE.Vector3(1, 0, 0);
      const angleStep = Math.PI / 20, translateStep = .5;
      const keyMap = {
         "ArrowDown": () => trg.rotateOnAxis(objAxisX, -angleStep),
         "ArrowUp": () => trg.rotateOnAxis(objAxisX, angleStep),
         "ArrowRight": () => trg.rotateOnAxis(objAxisY, -angleStep),
         "ArrowLeft": () => trg.rotateOnAxis(objAxisY, angleStep),
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
      trg.lookAt(this.planets[this.itr].geometry.boundingSphere.center);
   }

   itrPlanetNext() {
      if (this.itr < this.planets.length - 1) {
         this.itr++;
         this.trg.lookAt(this.planets[this.itr].geometry.boundingSphere.center);
      }
      /* if (this.itr === this.planets.length) { "Work in progress"
         this.itr = 0;
         this.itrPlanetNext();
      } */
   }

   itrPlanetPrev() {
      if (this.itr !== 0) {
         this.itr--;
         this.trg.lookAt(this.planets[this.itr].geometry.boundingSphere.center);
      }
   }
}
