class topDownCamera{
   constructor(trg, refresh, isShift) {
      
      var objAxisY = new THREE.Vector3(0,1,0);
      var objAxisX = new THREE.Vector3(1, 0, 0);
      const angleStep = Math.PI / 20, translateStep = .5;
      const keyMap = {
         "ArrowDown": () => trg.rotateOnAxis(objAxisX, -angleStep),
         "ArrowUp": () => trg.rotateOnAxis(objAxisX, angleStep),
         "ArrowRight": () => trg.rotateOnAxis(objAxisY, -angleStep),
         "ArrowLeft": () => trg.rotateOnAxis(objAxisY, angleStep),
         "KeyA": () => trg.translateZ(-translateStep),
         "KeyS": () => trg.translateZ(translateStep)
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
   }
}
