
main();

//
// Start here
//
function main() {
   const canvas = document.querySelector('#glcanvas');
   const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  // If we don't have a GL context, give up now

   if (!gl) {
      alert('Unable to initialize WebGL. Your browser or machine may not support it.');
      return;
   }

  // Vertex shader program

   const vsSource = `
   attribute vec4 positions;
   attribute vec4 color;
   uniform mat4 viewMatrix;
   uniform mat4 projectionMatrix;
   varying lowp vec4 vColor;
   void main(void) {
      gl_Position = projectionMatrix * viewMatrix * positions;
      vColor = color;
   }
   `;

  // Fragment shader program

   const fsSource = `
   varying lowp vec4 vColor;
   void main(void) {
      gl_FragColor = vColor;
   }
   `;

   // Initialize a shader program; this is where all the lighting
   // for the vertices and so forth is established.

   const programInfo = makeShaderProgram(gl, vsSource, fsSource, ['positions', 'color'], ['projectionMatrix', 'viewMatrix']);

   // Collect all the info needed to use the shader program.
   // Look up which attributes our shader program is using
   // for positions, aVevrtexColor and also
   // look up uniform locations.

   // Here's where we call the routine that builds all the
   // objects we'll be drawing.
   //const cube = new CubeModel(gl);
   const jack = new Jack(gl);

   // Draw the scene repeatedly
   function doFrame(now) {
      now *= 0.001;  // convert to seconds
    
      drawScene(gl, programInfo, jack, now);
    
      requestAnimationFrame(doFrame);
   }
   requestAnimationFrame(doFrame);
} 
//
// Draw the scene.
//
function drawScene(gl, programInfo, jack, time) {
   gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
   gl.clearDepth(1.0);                 // Clear everything
   gl.enable(gl.DEPTH_TEST);           // Enable depth testing
   gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

   // Clear the canvas before we start drawing on it.

   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

   // Create a perspective matrix, a special matrix that is
   // used to simulate the distortion of perspective in a camera.
   // Our field of view is 45 degrees, with a width/height
   // ratio that matches the display size of the canvas
   // and we only want to see objects between 0.1 units
   // and 100 units away from the camera.

   const fieldOfView = 45 * Math.PI / 180;   // in radians
   const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
   const zNear = 0.1;
   const zFar = 100.0;
   const projectionMatrix = mat4.create();

   // note: glmatrix.js always has the first argument
   // as the destination to receive the result.
   mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

   // Set the drawing position to the "identity" point, which is
   // the center of the scene.
   const modelViewMatrix = mat4.create();

   // Now move the drawing position a bit to where we want to
   // start drawing the square.

   mat4.translate(modelViewMatrix,     // destination matrix
    modelViewMatrix,     // matrix to translate
    [0.0, 0.0, -6.0]);  // amount to translate
   mat4.rotate(modelViewMatrix,  // destination matrix
    modelViewMatrix,  // matrix to rotate
    Math.PI / 4,     // amount to rotate in radians
    [0, 0, 1]);       // axis to rotate around (Z)
   mat4.rotate(modelViewMatrix,  // destination matrix
    modelViewMatrix,  // matrix to rotate
    Math.PI / 4,// amount to rotate in radians
    [1, 1, 0]);       // axis to rotate around (Y)
   
   gl.useProgram(programInfo.program);

   gl.uniformMatrix4fv(
    programInfo.ufmLocs.projectionMatrix,
    false,
    projectionMatrix); 

   // Tell WebGL how to pull out the positions from the position
   // buffer into the vertexPosition attribute
   //cube.render(gl, programInfo, modelViewMatrix);
   jack.render(gl, programInfo, modelViewMatrix);
   // Update the rotation for the next draw

   //cubeRotation = time;
}

function loadShader(gl, type, source) {
   const shader = gl.createShader(type);

   // Send the source to the shader object

   gl.shaderSource(shader, source);

   // Compile the shader program

   gl.compileShader(shader);

   // See if it compiled successfully

   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
   }

   return shader;
}