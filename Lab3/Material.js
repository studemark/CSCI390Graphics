class Material {
   constructor(ambient, diffuse, specular, shininess) {
      this.ambient = ambient;
      this.diffuse = diffuse;
      this.specular = specular;
      this.shininess = shininess;
   }

   setUniform(gl, prgInfo, name) {
      //console.log(prgInfo.ufmLocs[name]);
      gl.uniformMatrix4fv(prgInfo.ufmLocs[name], false, this.ambient);
      gl.uniformMatrix4fv(prgInfo.ufmLocs[name], false, this.diffuse);
      gl.uniformMatrix4fv(prgInfo.ufmLocs[name], false, this.specular); 
      gl.uniform1f(prgInfo.ufmLocs[name], this.shininess);
   }
}
Material.gold = new Material (
   [0.24725, 0.1995, 0.0745, 1.0],
   [0.75164, 0.60648, 0.22648, 1.0],
   [0.62828, 0.5558, 0.36607, 1.0],
   51.2
)

Material.jade = new Material (
   [0.135, 0.2225, 0.1575, 0.95],
   [0.54, 0.89, 0.63, 0.95],
   [0.3162, 0.3162, 0.3162, 1.0],
   12.8
)

Material.pearl = new Material (
   [0.25, 0.20725, 0.20725, 0.922],
   [1.00, 0.829, 0.829, 0.922],
   [0.2966, 0.2966, 0.2966, 0.922],
   11.264
)