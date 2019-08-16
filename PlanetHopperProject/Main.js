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
      pList.push(planet);
   } 
   pList.forEach((p)=> {
      scene.add(p);
   });

   function animate() {
      requestAnimationFrame(animate);
      pList.forEach((obj)=> {obj.rotateX(0.1); obj.rotateY(0.1)});
      renderer.render(scene, camera);
   }
   animate();
}
main();

