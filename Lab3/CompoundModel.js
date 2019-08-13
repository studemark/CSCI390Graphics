class CompoundModel { 
   constructor(mat) {
      this.submodels = [];
      if (mat)
         this.material = mat;
   }

   addChild(model, transform) {
      this.submodels.push([model, transform]);
   }

   render(gl, prgInfo, mvMatrix) {
      if (this.material)
         this.material.setUniform(prgInfo, 'material');
      const finalTransform = mat4.create();
      for (var models of this.submodels) {
         mat4.multiply(finalTransform, mvMatrix, models[1]);
         models[0].render(gl, prgInfo, finalTransform);
      }
   }
}