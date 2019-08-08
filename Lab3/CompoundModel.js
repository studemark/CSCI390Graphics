class CompoundModel { 
   constructor(mat = null) {
      this.submodels = [];
      this.material = mat;
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
      if (mat != null)
         this.material.setUniform(gl, prgInfo, mat);
   }
}