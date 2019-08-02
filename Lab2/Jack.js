class Jack extends CompoundModel {
   constructor(gl) {
      super();

      const rect = new CubeModel(gl);

      super.addChild(rect, mat4.scale(mat4.create(), mat4.create(), [1, 0.1, 0.1]));

      const rect2T = mat4.create();
      super.addChild(rect, mat4.rotateZ(rect2T, mat4.scale(rect2T, rect2T, [0.1, 0.1, 1]), Math.PI/2));
      //super.addChild(rect, mat4.scale(rect2T, mat4.rotateZ(rect2T, rect2T, Math.PI/2), [1, 0.1, 0.1]));   //<- scale first then rotate.

      const rect3T = mat4.create();
      super.addChild(rect, mat4.rotateY(rect3T, mat4.scale(rect3T, rect3T, [0.1, 1, 0.1]), Math.PI/2));
      //super.addChild(rect, mat4.scale(rect3T, mat4.rotateY(rect3T, rect3T, Math.PI / 2), [1, 0.1, 0.1]));  //<- scale first then rotate.
   }
}