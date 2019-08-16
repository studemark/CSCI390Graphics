function main() {
   var renderer =  new THREE.WebGLRenderer({antialias: true});
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);

   const ambLight = new THREE.AmbientLight(0x808080);
   const pntLight = new THREE.PointLight(0xFFFFFF, .7);
   pntLight.position.set(5, 5, 10);

   var camera = new THREE.PerspectiveCamera(30, 
    window.innerWidth/window.innerHeight, 0.1, 1000);
   camera.position.z = 20;

   var scene = new THREE.Scene();
   scene.add(ambLight);
   scene.add(pntLight);

   var pList = [];
   for (var i = 0; i < 10; i++) {
      var planet = new Planet();
      console.log(planet);
      var material = new THREE.MeshPhongMaterial({color: Math.random() * 0xFFFFFF});
      planet.geometry.scale(scaleRand(), 
       scaleRand(), scaleRand()).translate(getRand(-8, 8), 
       getRand(-3, 3), getRand(-5, 5));
      var mesh = new THREE.Mesh(planet.geometry, material);
      pList.push(mesh);
   } 
   pList.forEach((p)=> {
      scene.add(p);
   });

   new topDownCamera(pList[0], ()=> renderer.render(scene, camera), false);
   new topDownCamera(scene, ()=> renderer.render(scene, camera), true);

   function animate() {
      requestAnimationFrame(animate);
      //pList.forEach((obj)=> {obj.rotateX(0.05); obj.rotateY(0.01)});
      renderer.render(scene, camera);
   }
   animate();
}

function scaleRand() {
   return (Math.random() * (2 - 0.5) + 0.5);
}

function getRand(min, max) {
   var diff = max - (min);
   return Math.floor((Math.random()) * diff - (max));
}

main();

