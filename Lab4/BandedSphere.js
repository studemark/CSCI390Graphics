class BandedSphere extends LeafModel {
   constructor(gl, latSteps, lngSteps, mat) {
      super(mat);

      //const numSlices = 4;
      const latStep = Math.PI / latSteps;
      const lngStep = (Math.PI * 2) / lngSteps;

      this.positions.push(0, -1, 0); //southpole
      for (var lat = 1; lat < latSteps; lat++) {         
         for (var lng = 0; lng < lngSteps; lng++) {
            var angle = (lat * latStep) - Math.PI / 2;
            this.positions.push( //Vertices
             Math.cos(angle) * Math.cos(lng * lngStep), 
             Math.sin(angle),
             Math.cos(angle) * Math.sin(lng * lngStep));
         }
      }
      this.positions.push(0, 1, 0); //northpole

      const normals = this.positions;
      const normBuffer = this.makeVBO(gl, normals);
      const positionBuffer = this.makeVBO(gl, this.positions);

      //indices
      for (var step = 0; step < lngSteps; step++) {
         this.indices.push(step + 1, ((step + 1) % lngSteps) + 1, 0);
         this.indices.push(((lngSteps * (latSteps - 2)) + step) + 1,
          ((lngSteps * (latSteps - 2)) + ((step + 1) % lngSteps)) + 1,
          (this.positions.length / 3) - 1);
      }
      for (var lat = 1; lat < latSteps; lat++) {
         for (var step = (lat - 1) * lngSteps; step < lngSteps * lat; step++) {
            this.indices.push(step + 1, step + 1 + lngSteps, 
             (((step + 1) % (lngSteps)) + lngSteps * lat) + 1);
            this.indices.push(step + 1, 
             (((step + 1) % (lngSteps)) + lngSteps * lat) - (lngSteps - 1), 
             (((step + 1) % (lngSteps)) + lngSteps * lat) + 1);
         }
      }
      
      const indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), 
       gl.STATIC_DRAW);
      this.positionBuffer = positionBuffer;
      this.indexBuffer = indexBuffer;
      this.properties = {
         normal : {
            vals : normals,
            buf : normBuffer,
            type : gl.FLOAT,
            numComponents : 3
         }
      }
   }
}