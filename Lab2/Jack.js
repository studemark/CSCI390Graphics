class Jack extends CompoundModel {
   constructor(gl) {
      super();

      function makeJack(transform, rad, axis, scale) {
         mat4.rotate(transform, mat4.create(), rad, axis);
         mat4.scale(transform, transform, scale);
      }
      const rect = new CubeModel(gl);

      const rect1T = mat4.create();

      mat4.scale(rect1T, mat4.create(), [1, 0.1, 0.1]);
      super.addChild(rect, rect1T);


      const rect2T = mat4.create();
      super.addChild(rect, makeJack(rect, rect2T, Math.PI/2, [0, 0, 1], [1, 0.1, 0.1]));
      /* mat4.rotateZ(rect2T, rect2T, Math.PI/2);
      mat4.scale(rect2T, rect2T, [1, 0.1, 0.1]);
      super.addChild(rect, rect2T); */

      const rect3T = mat4.create();
      super.addChild(rect, makeJack(rect, rect3T, Math.PI/2, [0, 1, 0], [1, 0.1, 0.1]));
      /* mat4.rotateY(rect3T, rect3T, Math.PI/2);
      mat4.scale(rect3T, rect3T, [1, 0.1, 0.1])
      super.addChild(rect, rect3T); */    
   }
}