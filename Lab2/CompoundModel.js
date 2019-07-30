class CompoundModel { //Needs to be added to HTML script
   constructor() {
      this.submodels = {};
   }

   addChild(model, transform) {
      this.submodels[model] = transform;
   }

   render() {
      this.submodels
   }
}