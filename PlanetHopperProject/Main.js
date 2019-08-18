function main() {
   var renderer =  new THREE.WebGLRenderer({antialias: true});
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);

   const ambLight = new THREE.AmbientLight(0x808080);
   const pntLight = new THREE.PointLight(0xFFFFFF, .7);
   pntLight.position.set(5, 5, 10);

   var scene = new THREE.Scene();
   scene.add(ambLight);
   scene.add(pntLight);

   const loader = new THREE.CubeTextureLoader();
   const skyTexture = loader.load([
      'skybox/bkg/lightblue/right.png',
      'skybox/bkg/lightblue/left.png',
      'skybox/bkg/lightblue/top.png',
      'skybox/bkg/lightblue/bot.png',
      'skybox/bkg/lightblue/front.png',
      'skybox/bkg/lightblue/back.png'
   ]);
   scene.background = skyTexture;

    var pList = [];
   for (var i = 0; i < 1000; i++) {
      var planet = new Planet();
      var material = new THREE.MeshPhongMaterial({color: Math.random() * 0xFFFFFF});
      planet.geometry.scale(scaleRand(), 
       scaleRand(), scaleRand()).translate(getRand(-100, 100), 
       getRand(-100, 100), getRand(-100, 100));
      var mesh = new THREE.Mesh(planet.geometry, material);
      pList.push(mesh);
   } 
   pList.forEach((p)=> {
      scene.add(p);
   });
 
   var character = new Character();
   scene.add(character);
   var camera = new THREE.PerspectiveCamera(30, 
      window.innerWidth/window.innerHeight, 0.1, 1000);
     
     camera.position.z = 10;
     

   new topDownCamera(camera, ()=> renderer.render(scene, camera), false);
   new topDownCamera(scene, ()=> renderer.render(scene, camera), true);

   function animate() {
      requestAnimationFrame(animate);
      //pList.forEach((obj)=> {obj.rotateX(0.05); obj.rotateY(0.01)});
      renderer.render(scene, camera);
   }
   animate();
}

function scaleRand() {
   return (Math.random() * (2 - 0.5) + 1);
}

function getRand(min, max) {
   var diff = max - (min);
   return Math.floor((Math.random()) * diff - (max));
}

main();

