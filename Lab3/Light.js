class Light {
   constructor(ambient, diffuse, specular, position) {
      this.ambient = ambient;
      this.diffuse = diffuse;
      this.specular = specular;
      this.position = position;
   }

   setUniform(gl, prgInfo, name) {
      gl.uniform4fv(prgInfo.ufmLocs[name + '.ambient'], this.ambient);
      gl.uniform4fv(prgInfo.ufmLocs[name + '.diffuse'], this.diffuse);
      gl.uniform4fv(prgInfo.ufmLocs[name + '.specular'], this.specular);
      gl.uniform3fv(prgInfo.ufmLocs[name + '.position'], this.position);
   }
}

Light.l1 = new Light(
   [0.0, 0.0, 0.0, 1.0], 
   [1.0, 1.0, 1.0, 1.0], 
   [1.0, 1.0, 1.0, 1.0],
   [0, 0, 20]
)