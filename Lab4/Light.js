class Light {
   constructor(ambient, diffuse, specular, position) {
      this.ambient = ambient;
      this.diffuse = diffuse;
      this.specular = specular;
      this.position = position;
   }

   setUniform(prgInfo, name) {
      prgInfo.uniform4fv(`${name}.ambient`, this.ambient);
      prgInfo.uniform4fv(`${name}.diffuse`, this.diffuse);
      prgInfo.uniform4fv(`${name}.specular`, this.specular);
      prgInfo.uniform3fv(`${name}.position`, this.position);
   }
}

Light.l1 = new Light(
   [0.0, 0.0, 0.0, 1.0], 
   [1.0, 1.0, 1.0, 1.0], 
   [1.0, 1.0, 1.0, 1.0],
   [0, 0, 20]
)