class CompoundModel { 
   constructor() {
      this.submodels = {};
      this.curTransform = [];
   }

   addChild(model, transform) {
      this.submodels[model] = transform;
   }

   render() {
      for (var models in this.submodels) {
         this.curTransform.push(this.submodels[models]);
      }
      for (var models in this.curTransform) {
         this.curTransform[models].transform;
      }
   }
}