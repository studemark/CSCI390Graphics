class Sphere extends LeafModel {
   constructor(gl, mat) {
      super(mat);

      const numSlices = 4;
      
      for (var i = 0; i < numSlices; i++) {
         this.positions.push(Math.cos(i*(Math.PI*2/numSlices)), 0, 
          Math.sin(i*(Math.PI*2/numSlices)));
          console.log("x: " + (Math.cos(i*(Math.PI*2/numSlices))) * (Math.cos(i*(Math.PI*2/numSlices))));
          console.log("y: " + (Math.cos(i*(Math.PI*2/numSlices))) * (Math.sin(i*(Math.PI*2/numSlices))));
          console.log("z: " + Math.sin(i*(Math.PI*2/numSlices)));
      }

      
      this.positions.push(0, 1, 0); //northpole
      this.positions.push(0, -1, 0); //southpole

      const normals = this.positions;

      const positionBuffer = this.makeVBO(gl, this.positions);
      const normBuffer = this.makeVBO(gl, normals);

      //indices
      for (var i = 0; i < numSlices; i++) {
         this.indices.push(i, (i+1)%numSlices, numSlices); //top half
      }
      for (var i = 0; i < numSlices; i++) {
         this.indices.push(i, (i+1)%numSlices, numSlices+1); //bottom half
      }

      console.log(Math.cos(1*(Math.PI*2/numSlices)));
      console.log(Math.sin(1*(Math.PI*2/numSlices)));
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