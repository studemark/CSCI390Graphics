class CompoundModel { 
   constructor() {
      this.submodels = [];
      this.material = Material.gold;
   }

   addChild(model, transform) {
      this.submodels.push([model, transform]);
   }

   render(gl, prgInfo, mvMatrix) {
      const finalTransform = mat4.create();
      for (var models of this.submodels) {
         mat4.multiply(finalTransform, mvMatrix, models[1]);
         models[0].render(gl, prgInfo, finalTransform);
      }
      this.material.setUniform(gl, prgInfo, "gold");
   }
}