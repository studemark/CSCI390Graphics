function makeShaderProgram(gl, vsSource, fsSource, attNames, ufmNames) {

   const program = {
      program: shaderProgram,
      attLocs: {
        vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
      },
      ufmLocs: {
        projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
        modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      },
    };

   const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
   const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
 
   // Create the shader program
 
   const shaderProgram = gl.createProgram();
   gl.attachShader(shaderProgram, vertexShader);
   gl.attachShader(shaderProgram, fragmentShader);
   gl.linkProgram(shaderProgram);
 
   // If creating the shader program failed, alert
 
   if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
     console.log('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
     return null;
   }
 
   return program;
 }