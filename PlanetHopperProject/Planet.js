class Planet extends THREE.Mesh {
   constructor() { //8, 3, 5

      function getRand() {
         return Math.random() * 2;
      }

      function randCoord(min, max) {
         var diff = max - (min);
         return Math.floor((Math.random()) * diff - (max));
      }

      const functionList = [
         function() {
            var geometry = new THREE.BoxGeometry().scale(getRand(), getRand(), 
             getRand()).translate(randCoord(-8, 8), 
             randCoord(-3, 3), randCoord(-5, 5));
            console.log(randCoord(-8, 8));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.ConeGeometry().scale(getRand(), getRand(), 
             getRand()).translate(randCoord(-8, 8), 
             randCoord(-3, 3), randCoord(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.CylinderGeometry().scale(getRand(), 
             getRand(), getRand()).translate(randCoord(-8, 8), 
             randCoord(-3, 3), randCoord(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.DodecahedronGeometry().scale(getRand(), 
             getRand(), getRand()).translate(randCoord(-8, 8), 
             randCoord(-3, 3), randCoord(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.IcosahedronGeometry().scale(getRand(), 
             getRand(), getRand()).translate(randCoord(-8, 8), 
             randCoord(-3, 3), randCoord(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.OctahedronGeometry().scale(getRand(), 
             getRand(), getRand()).translate(randCoord(-8, 8), 
             randCoord(-3, 3), randCoord(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.SphereGeometry().scale(getRand(), 
             getRand(), getRand()).translate(randCoord(-8, 8), 
             randCoord(-3, 3), randCoord(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.TetrahedronGeometry().scale(getRand(), 
             getRand(), getRand()).translate(randCoord(-8, 8), 
             randCoord(-3, 3), randCoord(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.TorusGeometry().scale(getRand(), getRand(), 
             getRand()).translate(randCoord(-8, 8), 
             randCoord(-3, 3), randCoord(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.TorusKnotGeometry().scale(getRand(), 
             getRand(), getRand()).translate(randCoord(-8, 8), 
             randCoord(-3, 3), randCoord(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         }
      ];

      var newShape = functionList[Math.floor(Math.random() * Math.floor(10))]();
      console.log(newShape);
      super(newShape.geo, newShape.mat);
   }
}