class CubeModel extends LeafModel {
   
   constructor(gl) {
      super();

      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

      this.positions = [];
      const colors = [];

      for (let x = -1; x <= 1; x += 2) {
         for (let y = -1; y <= 1; y += 2) {
            for (let z = -1; z <= 1; z += 2) {
               this.positions.push(x, y, z);

               colors.push(((x-y-z)/6) + (1/2), ((y-x-z)/6) + (1/2), ((z-x-y)/6) + (1/2), 1);
            }
         }
      }

      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.positions), gl.STATIC_DRAW);

      const colorBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

      const indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

      this.indices = [
       0, 1, 2, 1, 2, 3, //front
       4, 5, 6, 5, 6, 7, //back
       0, 2, 6, 0, 4, 6, //left
       1, 3, 7, 1, 5, 7, //right
       0, 1, 4, 1, 4, 5, //top
       2, 3, 6, 7, 6, 3, //bottom
      ];

      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);

      this.positionBuffer = positionBuffer;
      this.indexBuffer = indexBuffer;
      this.properties = {
         color : {
            vals : colors, 
            buf : colorBuffer, 
            type : gl.FLOAT, 
            numComponents : 4
         }
      };
   };
}