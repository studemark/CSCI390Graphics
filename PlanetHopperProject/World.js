class World  {
   constructor(scene) {
      this.newPlanet = new Planet();

      for (;;) {
      scene.add(this.newPlanet);
      }
   }
}