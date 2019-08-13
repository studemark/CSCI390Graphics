class ShaderProg {
   constructor(gl, vsSource, fsSource, attNames, ufmNames) {
      this.gl = gl;
      const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
      const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
      const shaderProgram = gl.createProgram();
      
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);
      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
         console.log('Unable to initialize the shader program: ' + 
          gl.getProgramInfoLog(shaderProgram));
         return null;
      }
   
      var attLocs = {};
      attNames.forEach(function(name) {
         attLocs[name] = gl.getAttribLocation(shaderProgram, name);
      });
   
      var ufmLocs = {};
      ufmNames.forEach(function(name) {
         ufmLocs[name] = gl.getUniformLocation(shaderProgram, name);
      });

      this.program = {shaderProgram, attLocs, ufmLocs};
   }

   use() {
      this.gl.useProgram(this.program.shaderProgram);
   }

   setAtt(name, buf, dim, type) {
      const normalize = false;
      const stride = 0;
      const offset = 0;
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buf);
      this.gl.vertexAttribPointer(this.program.attLocs[name], dim, type, 
       normalize, stride, offset);
      this.gl.enableVertexAttribArray(this.program.attLocs[name]);
   }

   setIndices(buf) {
      this.program.indices = buf;
   }

   uniform1f(name, val) {
      this.gl.uniform1f(this.program.ufmLocs[name], val);
   }

   uniform3fv(name, val) {
      this.gl.uniform3fv(this.program.ufmLocs[name], val);
   }

   uniform4fv(name, val) {
      this.gl.uniform4fv(this.program.ufmLocs[name], val);
   }

   uniformMatrix3fv(name, val) {
      this.gl.uniformMatrix3fv(this.program.ufmLocs[name], false, val);
   }

   uniformMatrix4fv(name, val) {
      this.gl.uniformMatrix4fv(this.program.ufmLocs[name], false, val);
   }
}