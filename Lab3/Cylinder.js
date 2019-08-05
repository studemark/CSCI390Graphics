class Cylinder extends LeafModel {
   constructor(gl) {
      super();

      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

      this.postitions = [];
      this.indices = [];
      const colors = [];
      const sides = 4;

      for (var i = 0; i < Math.PI*2; i += Math.PI*2/sides) {
         this.postitions.push(Math.cos(i), 1, Math.sin(i)); //top
         this.postitions.push(Math.cos(i), 1, Math.sin(i)); //top
         this.postitions.push(Math.cos(i), -1, Math.sin(i));//bottom
         this.postitions.push(Math.cos(i), -1, Math.sin(i));//bottom 
      }

      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.postitions), gl.STATIC_DRAW);

      const colorBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

      const indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

      //indices go here
      for (var i = 0; i < sides; i++) {
         this.indices.push(i, i+1, sides+i);
         this.indices.push(i+1, sides+i, sides+1+i);
      }

      console.log(this.indices);

      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);

      this.positionBuffer = positionBuffer;
      this.indexBuffer = indexBuffer;
      this.properties = {
         color : {
            vals : colors,
            buf: colorBuffer,
            type : gl.FLOAT,
            numComponents : 4
         }
      }
   }
}