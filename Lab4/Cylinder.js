class Cylinder extends LeafModel {
   constructor(gl, mat) {
      super(mat);

      const normals = [];
      const sides = 60;

      for (var i = 0; i < sides; i++) {
         this.positions.push(Math.cos(i*(Math.PI*2/sides)), 1, 
          Math.sin(i*(Math.PI*2/sides))); //sides
         normals.push(Math.cos(i*(Math.PI*2/sides)), 0, 
          Math.sin(i*(Math.PI*2/sides)));
      }
      for (var i = 0; i < sides; i++) {
         this.positions.push(Math.cos(i*(Math.PI*2/sides)), -1, 
          Math.sin(i*(Math.PI*2/sides))); // sides
         normals.push(Math.cos(i*(Math.PI*2/sides)), 0, 
          Math.sin(i*(Math.PI*2/sides)));
      }

      for (var i = 0; i < sides; i++) {
         this.positions.push(Math.cos(i*(Math.PI*2/sides)), 1, 
          Math.sin(i*(Math.PI*2/sides))); //top
         normals.push(0, 1, 0);
      }
      for (var i = 0; i < sides; i++) {
         this.positions.push(Math.cos(i*(Math.PI*2/sides)), -1, 
          Math.sin(i*(Math.PI*2/sides))); //bottom
         normals.push(0, -1, 0);
      }

      this.positions.push(0, 1, 0);//northpole
      normals.push(0, 1, 0);
      this.positions.push(0, -1, 0);//southpole
      normals.push(0, -1, 0);

      const positionBuffer = this.makeVBO(gl, this.positions);
      const normBuffer = this.makeVBO(gl, normals);
      
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

      const indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, 
       new Uint16Array(this.indices), 
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