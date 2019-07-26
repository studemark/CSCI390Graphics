function makeCubeModel(gl) {

// Create a buffer for the cube's vertex positions.

const positionBuffer = gl.createBuffer();

// Select the positionBuffer as the one to apply buffer
// operations to from here out.

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

// Now create an array of positions for the cube.

const positions = [];
const colors = [];


for (let x = -1; x <= 1; x += 2) {
   for (let y = -1; y <= 1; y += 2) {
      for (let z = -1; z <= 1; z += 2) {
         positions.push(x, y, z);

         colors.push(
            ((x-y-z)/6) + (1/2), 
            ((y-x-z)/6) + (1/2), 
            ((z-x-y)/6) + (1/2),
            1);
         /* x === 1 ? colors.push(0, 0, 1, 1) : colors.push(1, 1, 0, 1);
         y === 1 ? colors.push(1, 0, 0, 1) : colors.push(0, 1, 1, 1);
         z === 1 ? colors.push(0, 1, 0, 1) : colors.push(1, 0, 1, 1); */
      }
   }
}
// Now pass the list of positions into WebGL to build the
// shape. We do this by ceating a Float32Array from the
// JavaScript array, then use it to fill the current buffer.

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

// Now set up the colors for the faces. We'll use solid colors
// for each face.

// Convert the array of colors into a table for all the vertices.

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

// Build the element array buffer; this specifies the indices
// into the vertex arrays for each face's vertices.

const indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

// This array defines each face as two triangles, using the
// indices into the vertex array to specify each triangle's
// position.

const indices = [
 0, 1, 2, 1, 2, 3, //front
 4, 5, 6, 5, 6, 7, //back
 0, 2, 6, 0, 4, 6, //left
 1, 3, 7, 1, 5, 7, //right
 0, 1, 4, 1, 4, 5, //top
 2, 3, 6, 7, 6, 3, //bottom
];

// Now send the element array to GL


gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

return {
   positions: positions,
   positionBuf : positionBuffer,
   indices: indices,
   indexBuf: indexBuffer,
   properties : {
      color : {
         vals : colors,
         buf : colorBuffer,
         type : gl.FLOAT,
         numComponents: 4 
      }
   }
};
}