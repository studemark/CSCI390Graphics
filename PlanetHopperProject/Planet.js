class Planet extends THREE.Mesh {
   constructor() {

      function getRand() {
         return Math.random() * 2;
      }

      function getRandPos() {
         return (Math.round(Math.random()) * 2 - 1) * 3;
      }

      function xRand() {
         var diff = 8 - (-8);
         return Math.floor((Math.random()) * diff - (8));
      }

      const functionList = [
         function() {
            var geometry = new THREE.BoxGeometry().scale(getRand(), getRand(), 
             getRand()).translate(xRand(), getRandPos(), getRandPos());
            console.log(xRand());
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.ConeGeometry().scale(getRand(), getRand(), 
             getRand()).translate(xRand(), getRandPos(), getRandPos());
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.CylinderGeometry().scale(getRand(), 
             getRand(), getRand()).translate(xRand(), getRandPos(), 
             getRandPos());
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.DodecahedronGeometry().scale(getRand(), 
             getRand(), getRand()).translate(xRand(), getRandPos(), 
             getRandPos());
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.IcosahedronGeometry().scale(getRand(), 
             getRand(), getRand()).translate(xRand(), getRandPos(), 
             getRandPos());
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.OctahedronGeometry().scale(getRand(), 
             getRand(), getRand()).translate(xRand(), getRandPos(), 
             getRandPos());
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.SphereGeometry().scale(getRand(), 
             getRand(), getRand()).translate(xRand(), getRandPos(), 
             getRandPos());
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.TetrahedronGeometry().scale(getRand(), 
             getRand(), getRand()).translate(xRand(), getRandPos(), 
             getRandPos());
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.TorusGeometry().scale(getRand(), getRand(), 
             getRand()).translate(xRand(), getRandPos(), getRandPos());
            var material = new THREE.MeshPhongMaterial(
             {color: (Math.random() * 0xFFFFFF)});
            return {
               geo: geometry, 
               mat: material
            }
         },

         function() {
            var geometry = new THREE.TorusKnotGeometry().scale(getRand(), 
             getRand(), getRand()).translate(xRand(), getRandPos(), 
             getRandPos());
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