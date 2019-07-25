main();

function main() {
   /* var lat = 38.948 * (Math.PI/180), lng = -90.351 * (Math.PI/180); //Degrees converted to rads and lng is negative because we're moving west

   console.log(vec4.transformMat4(vec4.create(), [6500, 0, 0, 1], mat4.multiply(mat4.create(), mat4.rotateY(mat4.create(), mat4.create(), lng), mat4.rotateZ(mat4.create(), mat4.create(), lat)))); */

   console.log(vec4.scale([], [0, 1, 0, 1], 3));
   console.log(vec4.scale([], [0, -1, 0, 1], 3));
   console.log(vec4.transformMat4([], vec4.scale([], [0, 1, 0, 1], 3),  mat4.rotateZ(mat4.create(), mat4.create(), Math.PI/2)));
   console.log(vec4.transformMat4([], vec4.scale([], [0, -1, 0, 1], 3), mat4.rotateZ(mat4.create(), mat4.create(), Math.PI/2)));

   const xfm = mat4.create();
   mat4.translate(xfm, xfm, [0, 0, -2]);
   mat4.rotateZ(xfm, xfm, -Math.PI/2);
   mat4.scale(xfm, xfm, [1, 3, 1]);

   var north = [0, 1, 0, 1];
   var south = [0, -1, 0, 1];

   console.log(vec4.transformMat4(north, north, xfm), vec4.transformMat4(south, south, xfm));
}
