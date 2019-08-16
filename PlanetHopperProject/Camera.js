class topDownCamera{
   constructor(trg, refresh, isShift) {
      var objAxis = new THREE.Vector3(0,1,0);
      const angleStep = Math.PI / 20, translateStep = .5;
      const keyMap = {
         "ArrowDown": () => trg.rotateX(-angleStep),
         "ArrowUp": () => trg.rotateX(angleStep),
         "ArrowRight": () => trg.rotateOnAxis(objAxis, -angleStep),
         "ArrowLeft": () => trg.rotateOnWorldAxis(objAxis, angleStep),
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
