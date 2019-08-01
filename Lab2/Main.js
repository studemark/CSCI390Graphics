var cubeRotation = 0.0;
main();

function main() {
   const canvas = document.querySelector('#glcanvas');
   const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

   if (!gl) {
      alert('Unable to initialize WebGL. Your browser or machine may not support it.');
      return;
   }

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

   const fsSource = `
   varying lowp vec4 vColor;
   void main(void) {
      gl_FragColor = vColor;
   }
   `;

   const programInfo = makeShaderProgram(gl, vsSource, fsSource, ['positions', 'color'], ['projectionMatrix', 'viewMatrix']);

   const mvMatrix = mat4.create();
   mat4.translate(mvMatrix, mvMatrix, [0, 0, -10]);
   
   const jack = new JackStackAttack(gl);
   
   function doFrame(now) {
      now *= 0.001;  // convert to seconds
      
      drawScene(gl, programInfo, jack, now, mvMatrix);
      
      requestAnimationFrame(doFrame);
   }
   requestAnimationFrame(doFrame);
   
   var lat = 0;
   var lng = 0;
   var r = -10;
   var translation = [0, 0, r];

   document.addEventListener("keydown", event => {
      if (event.code === "ArrowDown" ) {
         lat -= Math.PI/10;
      }
   
      else if (event.code === "ArrowUp" ) {
         lat += Math.PI/10;
      }
   
      else if (event.code === "ArrowLeft" ) {
         lng -= Math.PI/10;
      }
   
      else if (event.code === "ArrowRight" ) {
         lng += Math.PI/10;
      }

      else if (event.code === "KeyF") {
         r -= 0.1;
      }

      else if (event.code === "KeyG") {
         r += 0.1;
      }
      
      mat4.rotate(mvMatrix, mvMatrix, lat, [1, 0, 0]);
      mat4.rotate(mvMatrix, mvMatrix, lng, [0, 1, 0]);
      console.log(lat);
      console.log(lng);
      console.log(mvMatrix);

      //mat4.translate(mvMatrix, mvMatrix, translation);
   });

} 

function drawScene(gl, programInfo, jack, time, mvMatrix) {
   gl.clearColor(0.0, 0.0, 0.0, 1.0);  
   gl.clearDepth(1.0);                 
   gl.enable(gl.DEPTH_TEST);           
   gl.depthFunc(gl.LEQUAL);            


   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

   const fieldOfView = 45 * Math.PI / 180;
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

   gl.shaderSource(shader, source);

   gl.compileShader(shader);

   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
   }

   return shader;
}