class LeafModel {
   constructor(mat) {
      this.positions = [];
      this.indices = [];
      this.properties = {};
      if (mat)
         this.material = mat;
   }

   render(gl, prgInfo, mvMatrix) {
      const numComponents = 3;
      const type = gl.FLOAT;
      const normalize = false;
      const stride = 0;
      const offset = 0;
      gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
      gl.vertexAttribPointer(
       prgInfo.attLocs.positions,
       numComponents,
       type,
       normalize,
       stride,
       offset);
      gl.enableVertexAttribArray(prgInfo.attLocs.positions);
      const propArray = Object.keys(this.properties);
      if (propArray[0]) {
         for (var i = 0; i < propArray.length; i++) {
            var prop = propArray[i];
            const normalize = false;
            const stride = 0;
            const offset = 0;
            gl.bindBuffer(gl.ARRAY_BUFFER, this.properties[prop].buf);
            gl.vertexAttribPointer(
             prgInfo.attLocs[prop],
             this.properties[prop].numComponents,
             this.properties[prop].type,
             normalize,
             stride,
             offset);
            gl.enableVertexAttribArray(prgInfo.attLocs[prop]);
         }
      }
      if (this.material)
         this.material.setUniform(gl, prgInfo, "material");        
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
      gl.uniformMatrix4fv(
       prgInfo.ufmLocs.viewMatrix,
       false,
       mvMatrix);

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