main();

function main() {
   var lat = Math.PI/3, lng = Math.PI/5;

   console.log(mat4.create());
   var latRotate = mat4.fromZRotation(mat4.create(), lat);
   console.log(latRotate);
}
