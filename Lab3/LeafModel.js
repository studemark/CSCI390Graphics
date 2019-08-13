class LeafModel {
   constructor(mat) {
      this.positions = [];
      this.indices = [];
      this.properties = {};
      if (mat)
         this.material = mat;
   }

   render(gl, prgInfo, mvMatrix) {
      prgInfo.setAtt("position", this.positionBuffer, 3, gl.FLOAT);
      const propArray = Object.keys(this.properties);

      propArray.forEach((prop) => {
         prgInfo.setAtt(this.properties[prop], this.properties[prop].buf, this.properties[prop].numComponents, this.properties[prop].type);
      });

      if (this.material)
         this.material.setUniform(gl, prgInfo.program, "material");        
      prgInfo.setIndices(this.indexBuffer);
      prgInfo.uniformMatrix4fv("mvMatrix", mvMatrix);
      const invTrMat = mat4.transpose(mat4.create(), 
       mat4.invert(mat4.create(), 
       mvMatrix));
      prgInfo.uniformMatrix4fv("normMatrix", invTrMat);

      const vertexCount = this.indices.length;
      gl.drawElements(gl.TRIANGLES, vertexCount, gl.UNSIGNED_SHORT, 0);
   }

   makeVBO(gl, data) {
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
      return buffer;
   }
}