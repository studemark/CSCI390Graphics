var cubeRotation = 0.0;
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

   const mvMatrix = mat4.create();
   mat4.translate(mvMatrix, mvMatrix, [0, 0, -10]);
   
   // Here's where we call the routine that builds all the
   // objects we'll be drawing.
   //const cube = new CubeModel(gl);
   const jack = new JackStackAttack(gl);
   
   // Draw the scene repeatedly
   function doFrame(now) {
      now *= 0.001;  // convert to seconds
      
      drawScene(gl, programInfo, jack, now, mvMatrix);
      
      requestAnimationFrame(doFrame);
   }
   requestAnimationFrame(doFrame);

   /* var x = 0;
   var y = 0;
   var z = -10;  */  

   document.addEventListener("keydown", event => {
      if (event.code === "ArrowDown" ) {
         mat4.rotate(mvMatrix, mvMatrix, Math.PI/10, [-1, 0, 0]);      
      }
   
      else if (event.code === "ArrowUp" ) {
         mat4.rotate(mvMatrix, mvMatrix, Math.PI/10, [1, 0, 0]);      
      }
   
      else if (event.code === "ArrowLeft" ) {
         mat4.rotate(mvMatrix, mvMatrix, Math.PI/10, [0, 1, 0]);      
      }
   
      else if (event.code === "ArrowRight" ) {
         mat4.rotate(mvMatrix, mvMatrix, Math.PI/10, [0, -1, 0]);      
      }

      else if (event.code === "KeyF") {
         mat4.translate(mvMatrix, mvMatrix, [0, 0, -0.1]);      
      }

      else if (event.code === "KeyG") {
         mat4.translate(mvMatrix, mvMatrix, [0, 0, 0.1]);
      }
      //mat4.rotate(mvMatrix, mvMatrix, Math.PI/10, [x, y, z]);
      //mat4.translate(mvMatrix, mvMatrix, [x, y, z])
   });

} 

function drawScene(gl, programInfo, jack, time, mvMatrix) {
   gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
   gl.clearDepth(1.0);                 // Clear everything
   gl.enable(gl.DEPTH_TEST);           // Enable depth testing
   gl.depthFunc(gl.LEQUAL);            // Near things obscure far things


   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

   const fieldOfView = 45 * Math.PI / 180;   // in radians
   const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
   const zNear = 0.1;
   const zFar = 100.0;
   const projectionMatrix = mat4.create();

   mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

   /* mat4.translate(mvMatrix,     // destination matrix
    mvMatrix,     // matrix to translate
    [0.0, 0.0, -10.0]);  // amount to translate */
   /* mat4.rotate(mvMatrix,  // destination matrix
    mvMatrix,  // matrix to rotate
    cubeRotation * Math.PI / 4,     // amount to rotate in radians
    [0, 0, 1]);       // axis to rotate around (Z)
   mat4.rotate(mvMatrix,  // destination matrix
    mvMatrix,  // matrix to rotate
    cubeRotation * Math.PI / 4,// amount to rotate in radians
    [1, 1, 0]);       // axis to rotate around (Y) */
   
   gl.useProgram(programInfo.program);

   gl.uniformMatrix4fv(
    programInfo.ufmLocs.projectionMatrix,
    false,
    projectionMatrix); 

   jack.render(gl, programInfo, mvMatrix);

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