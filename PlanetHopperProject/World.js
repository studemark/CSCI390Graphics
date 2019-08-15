class World extends Planets {
   constructor(scene) {
      this.newPlanet = new Planets();

      for (;) {
      scene.add(this.newPlanet);
      }
   }
}