class LeafModel {
   constructor() {
      this.positions = [];
      this.indices = [];
      this.properties = {};
   }

   render(gl, prgInfo, mvMatrix) {
      {
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
      }
   
      // Tell WebGL how to pull out the colors from the color buffer
      // into the vertexColor attribute.

      const propArray = Object.keys(this.properties);

      if (propArray[0]) {
         for (var i = 0; i < propArray.length; i++) {
            var prop = propArray[i];
            {
               const normalize = false;
               const stride = 0;
               const offset = 0;
               gl.bindBuffer(gl.ARRAY_BUFFER, this.properties[prop].buf); //    this.properties.color.buf
               gl.vertexAttribPointer(
                prgInfo.attLocs[prop], //    prgInfo.attLocs.color
                this.properties[prop].numComponents, //    this.properties.color.numComponents
                this.properties[prop].type, //   this.properties.color.type
                normalize,
                stride,
                offset);
               gl.enableVertexAttribArray(prgInfo.attLocs[prop]); //    prgInfo.attLocs.color
            }
         }
      }
      // Tell WebGL which indices to use to index the vertices
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
   
      // Tell WebGL to use our program when drawing
   
      // Set the shader uniforms
   
      gl.uniformMatrix4fv(
       prgInfo.ufmLocs.viewMatrix,
       false,
       mvMatrix);
   
      {
         const vertexCount = 36;
         const type = gl.UNSIGNED_SHORT;
         const offset = 0;
         gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
      }
   }
}