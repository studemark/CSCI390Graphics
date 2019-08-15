class Sphere extends LeafModel {
   constructor(gl, latSteps, lngSteps, mat) {
      super(mat);

      //const numSlices = 4;
      const radius = 1;
      
      console.log("Rad per step: " + (Math.PI*2)/latSteps);
      for (var lat = (Math.PI/2)-(Math.PI/lngSteps); 
       lat > -Math.PI/2; lat-=((Math.PI)/lngSteps)) {         
         for (var lng = 0; lng < Math.PI*2; lng+=((Math.PI*2)/latSteps)) {
            this.positions.push( //Vertices
             Math.cos(lng)*Math.cos(lat), 
             Math.cos(lng)*Math.sin(lat),
             Math.sin(lng));
         }
      }

      
      this.positions.push(0, 1, 0); //northpole
      this.positions.push(0, -1, 0); //southpole
      const normals = this.positions;

      const positionBuffer = this.makeVBO(gl, this.positions);
      const normBuffer = this.makeVBO(gl, normals);

      //indices
      for (var i = 0; i < latSteps; i++) {
         for (var j = 1; j < lngSteps; j++) {
            this.indices.push(i, (j+1), (j+1)%lngSteps);
            //this.indices.push(i, (i+1)%numSlices, numSlices+1);
         }
      }

      console.log(this.positions);
      console.log(this.indices);

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