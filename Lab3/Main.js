var cubeRotation = 0.0;
main();

function main() {
   const canvas = document.querySelector('#glcanvas');
   const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

   if (!gl) {
      alert('Unable to initialize WebGL. Your browser or machine may not support it.');
      return;
   }
   const vsSourceUrl = "/Lab3/GouraudVrtShader.glsl";
   const fsSourceUrl = "/Lab3/GouraudFrgShader.glsl";
   function getSource(url) {
      var req = new XMLHttpRequest();
      req.open("GET", url, false);      
      req.send(null);
      return (req.status == 200) ? req.responseText : null;
   };

   const globalAmbient = [0.2, 0.2, 0.2, 1.0];
   const vsSource = getSource(vsSourceUrl);
   const fsSource = getSource(fsSourceUrl);
   const programInfo = makeShaderProgram(gl, vsSource, fsSource, ['position', 'normal'], ['globalAmbient', 'light.ambient', 'light.diffuse', 'light.specular', 'light.position', 'material.ambient', 'material.diffuse', 'material.specular', 'material.shininess', 'mvMatrix', 'projMatrix', 'normMatrix']);
   const mvMatrix = mat4.create();

   const object = new Cylinder(gl);
   
   function doFrame(now) {
      now *= 0.001;  // convert to seconds
      
      drawScene(gl, programInfo, object, now, mvMatrix, globalAmbient);
      
      requestAnimationFrame(doFrame);
   }
   requestAnimationFrame(doFrame);
   
   var lat = 0;
   var lng = 0;
   var r = -10;
   mat4.translate(mvMatrix, mat4.create(), [0, 0, r]);

   document.addEventListener("keydown", event => {
      if (event.code === "ArrowDown" ) {
         if (lat > -Math.PI/2) {
            lat -= Math.PI/10;
         }
      }
      else if (event.code === "ArrowUp" ) {
         if (lat < Math.PI/2) {
            lat += Math.PI/10;
         }
      }
      else if (event.code === "ArrowLeft" ) {
         lng += Math.PI/10;
      }
      else if (event.code === "ArrowRight" ) {
         lng -= Math.PI/10;
      }
      else if (event.code === "KeyF") {
         r -= 0.1;
      }
      else if (event.code === "KeyG") {
         r += 0.1;
      }

      mat4.translate(mvMatrix, mat4.create(), [0, 0, r]);
      mat4.rotate(mvMatrix, mvMatrix, lat, [1, 0, 0]);
      mat4.rotate(mvMatrix, mvMatrix, lng, [0, 1, 0]);
   });
} 

function drawScene(gl, programInfo, object, time, mvMatrix, ambient) {
   gl.clearColor(0.529, 0.808, 0.980, 1.0);  
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
   gl.useProgram(programInfo.program);
   gl.uniformMatrix4fv(
    programInfo.ufmLocs.projectionMatrix,
    false,
    projectionMatrix); 
   Light.l1.setUniform(gl, programInfo, 'light');
   gl.uniform4fv(programInfo.ufmLocs.globalAmbient, ambient);
   //console.log(programInfo.ufmLocs.globalAmbient);
   object.render(gl, programInfo, mvMatrix, );
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