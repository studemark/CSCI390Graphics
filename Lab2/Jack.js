class Jack extends CompoundModel {
   constructor(gl) {
      super();

      const rect = new CubeModel(gl);

      const rect1T = mat4.create();
      const vector = [1, 0.1, 0.1];

      mat4.scale(rect1T, mat4.create(), vector);
      super.addChild(rect, rect1T);

      const rect2T = mat4.create();
      mat4.rotateZ(rect2T, rect2T, Math.PI/2);
      mat4.scale(rect2T, rect2T, vector);
      super.addChild(rect, rect2T);

      const rect3T = mat4.create();
      mat4.rotateY(rect3T, rect3T, Math.PI / 2);
      mat4.scale(rect3T, rect3T, vector)
      super.addChild(rect, rect3T);    
   }
}