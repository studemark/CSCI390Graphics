class Planet {
   constructor() {
      const functionList = [
         function() {
            return new THREE.BoxGeometry();
         },

         function() {
            return new THREE.ConeGeometry();
         },

         function() {
            return new THREE.CylinderGeometry();
         },

         function() {
            return new THREE.DodecahedronGeometry();
         },

         function() {
            return new THREE.IcosahedronGeometry();
         },

         function() {
            return new THREE.OctahedronGeometry();
         },

         function() {
            return new THREE.SphereGeometry();
         },

         function() {
            return new THREE.TetrahedronGeometry();
         },

         function() {
            return new THREE.TorusGeometry();
         },

         function() {
            return new THREE.TorusKnotGeometry();
         }
      ];

      var newShape = functionList[Math.floor(Math.random() * Math.floor(10))]();
      this.geometry = newShape;
   }
}