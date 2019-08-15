class Planets {
   constructor() {}

   makePlanet() {
      const functionList = [
         function() {
            var geometry = new THREE.BoxGeometry();
            var material = new THREE.MeshBasicMaterial(
             {color: (Math.random() * 0xFFFFFF << 0).toString(16)});
            return new THREE.Mesh(geometry, material);
         },

         function() {
            var geometry = new THREE.ConeGeometry();
            var material = new THREE.MeshBasicMaterial(
             {color: (Math.random() * 0xFFFFFF << 0).toString(16)});
            return new THREE.Mesh(geometry, material);
         },

         function() {
            var geometry = new THREE.CylinderGeometry();
            var material = new THREE.MeshBasicMaterial(
             {color: (Math.random() * 0xFFFFFF << 0).toString(16)});
            return new THREE.Mesh(geometry, material);
         },

         function() {
            var geometry = new THREE.DodecahedronGeometry();
            var material = new THREE.MeshBasicMaterial(
             {color: (Math.random() * 0xFFFFFF << 0).toString(16)});
            return new THREE.Mesh(geometry, material);
         },

         function() {
            var geometry = new THREE.IcosahedronGeometry();
            var material = new THREE.MeshBasicMaterial(
             {color: (Math.random() * 0xFFFFFF << 0).toString(16)});
            return new THREE.Mesh(geometry, material);
         },

         function() {
            var geometry = new THREE.LatheGeometry();
            var material = new THREE.MeshBasicMaterial(
             {color: (Math.random() * 0xFFFFFF << 0).toString(16)});
            return new THREE.Mesh(geometry, material);
         },

         function() {
            var geometry = new THREE.OctahedronGeometry();
            var material = new THREE.MeshBasicMaterial(
             {color: (Math.random() * 0xFFFFFF << 0).toString(16)});
            return new THREE.Mesh(geometry, material);
         },

         function() {
            var geometry = new THREE.SphereGeometry();
            var material = new THREE.MeshBasicMaterial(
             {color: (Math.random() * 0xFFFFFF << 0).toString(16)});
            return new THREE.Mesh(geometry, material);
         },

         function() {
            var geometry = new THREE.TetrahedronGeometry();
            var material = new THREE.MeshBasicMaterial(
             {color: (Math.random() * 0xFFFFFF << 0).toString(16)});
            return new THREE.Mesh(geometry, material);
         },

         function() {
            var geometry = new THREE.TorusGeometry();
            var material = new THREE.MeshBasicMaterial(
             {color: (Math.random() * 0xFFFFFF << 0).toString(16)});
            return new THREE.Mesh(geometry, material);
         },

         function() {
            var geometry = new THREE.TorusKnotGeometry();
            var material = new THREE.MeshBasicMaterial(
             {color: (Math.random() * 0xFFFFFF << 0).toString(16)});
            return new THREE.Mesh(geometry, material);
         },

         function() {
            var geometry = new THREE.TubeGeometry();
            var material = new THREE.MeshBasicMaterial(
             {color: (Math.random() * 0xFFFFFF << 0).toString(16)});
            return new THREE.Mesh(geometry, material);
         }
      ];

      return functionList[Math.floor(Math.random() * Math.floor(12))];
   }
}