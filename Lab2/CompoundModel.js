class CompoundModel { 
   constructor() {
      this.submodels = [];
   }

   addChild(model, transform) {
      this.submodels.push([model, transform]);
   }

   render(gl, prgInfo, mvMatrix) {

      const finaltransform = mat4.create();

      for (var models in this.submodels) {
         mat4.multiply(finaltransform, this.submodels[models][1], mvMatrix);
         this.submodels[models][0].render(gl, prgInfo, finaltransform);
      }

   }
}