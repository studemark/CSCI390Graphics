function makeShaderProgram(gl, vsSource, fsSource, attNames, ufmNames) {

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

  var attLocs = {};
  attNames.forEach(function(name){
      attLocs[name] = gl.getAttribLocation(shaderProgram, name);
  });

  var ufmLocs = {};
  ufmNames.forEach(function(name){
      ufmLocs[name] = gl.getUniformLocation(shaderProgram, name);
  });

  const programInfo = {
    program: shaderProgram,
    attLocs,
    ufmLocs,
  };
  
   return programInfo;
 }