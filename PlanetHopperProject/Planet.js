class Planet extends THREE.Mesh {
   constructor() { //8, 3, 5

      function scaleRand() {
         return (Math.random() * (2 - 0.5) + 0.5);
      }

      function getRand(min, max) {
         var diff = max - (min);
         return Math.floor((Math.random()) * diff - (max));
      }

      const functionList = [
         function() {
            var geometry = new THREE.BoxGeometry().scale(scaleRand(), 
             scaleRand(), scaleRand()).translate(getRand(-8, 8), 
             getRand(-3, 3), getRand(-5, 5));
            console.log(scaleRand());
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.ConeGeometry().scale(scaleRand(), 
            scaleRand(), scaleRand()).translate(getRand(-8, 8), 
             getRand(-3, 3), getRand(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.CylinderGeometry().scale(scaleRand(), 
            scaleRand(), scaleRand()).translate(getRand(-8, 8), 
             getRand(-3, 3), getRand(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.DodecahedronGeometry().scale(scaleRand(), 
            scaleRand(), scaleRand()).translate(getRand(-8, 8), 
             getRand(-3, 3), getRand(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.IcosahedronGeometry().scale(scaleRand(), 
            scaleRand(), scaleRand()).translate(getRand(-8, 8), 
             getRand(-3, 3), getRand(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.OctahedronGeometry().scale(scaleRand(), 
            scaleRand(), scaleRand()).translate(getRand(-8, 8), 
             getRand(-3, 3), getRand(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.SphereGeometry().scale(scaleRand(), 
            scaleRand(), scaleRand()).translate(getRand(-8, 8), 
             getRand(-3, 3), getRand(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.TetrahedronGeometry().scale(scaleRand(), 
            scaleRand(), scaleRand()).translate(getRand(-8, 8), 
             getRand(-3, 3), getRand(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.TorusGeometry().scale(scaleRand(), 
            scaleRand(), scaleRand()).translate(getRand(-8, 8), 
             getRand(-3, 3), getRand(-5, 5));
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.TorusKnotGeometry().scale(scaleRand(), 
            scaleRand(), scaleRand()).translate(getRand(-8, 8), 
             getRand(-3, 3), getRand(-5, 5));
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