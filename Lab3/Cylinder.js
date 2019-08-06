class Cylinder extends LeafModel {
   constructor(gl) {
      super();

      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

      const colors = [];
      const sides = 60;

      var counter = 0;

      for (var i = 0; i < sides; i++) {
         this.positions.push(Math.cos(i*(Math.PI*2/sides)), 1, Math.sin(i*(Math.PI*2/sides))); //sides
         colors.push(0, 1, 1, 1);
      }
      for (var i = 0; i < sides; i++) {
         this.positions.push(Math.cos(i*(Math.PI*2/sides)), -1, Math.sin(i*(Math.PI*2/sides))); // sides
         colors.push(1, 0, 0, 1);
      }

      for (var i = 0; i < sides; i++) {
         this.positions.push(Math.cos(i*(Math.PI*2/sides)), 1, Math.sin(i*(Math.PI*2/sides))); //top
         colors.push(0, 1, 1, 1);
      }
      for (var i = 0; i < sides; i++) {
         this.positions.push(Math.cos(i*(Math.PI*2/sides)), -1, Math.sin(i*(Math.PI*2/sides))); //bottom
         colors.push(1, 0, 0, 1);
      }

      this.positions.push(0, 1, 0);//northpole
      colors.push(0, 1, 1, 1);
      this.positions.push(0, -1, 0);//southpole
      colors.push(1, 0, 0, 1);

      console.log(counter);
      console.log(this.positions);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.positions), gl.STATIC_DRAW);

      const colorBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

      const indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      
      //indices for the sides
      for (var i = 0; i < sides; i++) {
         this.indices.push(i, (i+1)%sides, sides+i);
         this.indices.push((i+1)%sides, sides+i, ((i+1)%sides)+sides);
      }
      //indices for the top
      for (var i = sides*2; i < sides*3; i++) {
         this.indices.push(i, sides*4, ((i+1)%sides)+sides*2);
      }
      //indices for the bottom
      for (var i = sides*3; i < sides*4; i++) {
         this.indices.push(i, sides*4+1, ((i+1)%sides)+sides*3);
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