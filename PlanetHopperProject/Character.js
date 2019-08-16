class Character extends THREE.Group {
   constructor() {
      super();

      var body = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshPhongMaterial({color: 0xFFFF00});
      var bodyMesh = new THREE.Mesh(body, material);
      this.add(bodyMesh);

      var eye = new THREE.SphereGeometry(0.2, 32, 32);
      var eyeMat = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
      this.add(new THREE.Mesh(eye, eyeMat).translateOnAxis(new THREE.Vector3(1, 0, 0), -0.25)
       .translateOnAxis(new THREE.Vector3(0, 1, 0), 0.3).translateOnAxis(new THREE.Vector3(0, 0, 1), 0.5));
      this.add(new THREE.Mesh(eye, eyeMat).translateOnAxis(new THREE.Vector3(1, 0, 0), 0.25)
       .translateOnAxis(new THREE.Vector3(0, 1, 0), 0.3).translateOnAxis(new THREE.Vector3(0, 0, 1), 0.5));

      var leg = new THREE.CylinderGeometry(0.1, 0.1, 0.75, 20, 20);
      var legMat = new THREE.MeshPhongMaterial({color: 0xFFFF00});
      this.add(new THREE.Mesh(leg, legMat).translateOnAxis(new THREE.Vector3(1, 0, 0), -0.25)
       .translateOnAxis(new THREE.Vector3(0, 0.5, 0), -1));
      this.add(new THREE.Mesh(leg, legMat).translateOnAxis(new THREE.Vector3(1, 0, 0), 0.25)
       .translateOnAxis(new THREE.Vector3(0, 0.5, 0), -1));

      var sock = new THREE.CylinderGeometry(0.1, 0.1, 0.25, 20, 20);
      var sockMat = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
      this.add(new THREE.Mesh(sock, sockMat).translateOnAxis(new THREE.Vector3(1, 0, 0), -0.25)
       .translateOnAxis(new THREE.Vector3(0, 1, 0), -1));
      this.add(new THREE.Mesh(sock, sockMat).translateOnAxis(new THREE.Vector3(1, 0, 0), 0.25)
       .translateOnAxis(new THREE.Vector3(0, 1, 0), -1));

      var shoe = new THREE.BoxGeometry(.25, .25, .50);
      var shoeMat = new THREE.MeshPhongMaterial({color: 0x8B4513});
      this.add(new THREE.Mesh(shoe, shoeMat).translateOnAxis(new THREE.Vector3(1, 0, 0), -0.25)
       .translateOnAxis(new THREE.Vector3(0, 1, 0), -1.25).translateOnAxis(new THREE.Vector3(0, 0, 1), 0.15));
      this.add(new THREE.Mesh(shoe, shoeMat).translateOnAxis(new THREE.Vector3(1, 0, 0), 0.25)
       .translateOnAxis(new THREE.Vector3(0, 1, 0), -1.25).translateOnAxis(new THREE.Vector3(0, 0, 1), 0.15));

       var pupil = new THREE.SphereGeometry(0.1, 32, 32);
       var pupilMat = new THREE.MeshPhongMaterial({color: 0x000000});
       this.add(new THREE.Mesh(pupil, pupilMat).translateOnAxis(new THREE.Vector3(1, 0, 0), -0.25)
        .translateOnAxis(new THREE.Vector3(0, 1, 0), 0.3).translateOnAxis(new THREE.Vector3(0, 0, 1), 0.63));
       this.add(new THREE.Mesh(pupil, pupilMat).translateOnAxis(new THREE.Vector3(1, 0, 0), 0.25)
        .translateOnAxis(new THREE.Vector3(0, 1, 0), 0.3).translateOnAxis(new THREE.Vector3(0, 0, 1), 0.63));

      var band = new THREE.TorusGeometry(.78, .1, .1, .1, 3.2);
      var bandMat = new THREE.MeshPhongMaterial({color: 0xFF0000});
      this.add(new THREE.Mesh(band, bandMat));

      var headPhones = new THREE.SphereGeometry(0.30, 32, 32);
       var headPhonesMat = new THREE.MeshPhongMaterial({color: 0xFF0000});
       this.add(new THREE.Mesh(headPhones, headPhonesMat).translateOnAxis(new THREE.Vector3(1, 0, 0), -0.5));
       this.add(new THREE.Mesh(headPhones, headPhonesMat).translateOnAxis(new THREE.Vector3(1, 0, 0), 0.5));
   }
}