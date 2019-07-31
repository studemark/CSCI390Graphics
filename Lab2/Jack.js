class Jack extends CompoundModel {
   constructor(gl) {
      super();

      const rect1 = new CubeModel(gl);
      const rect2 = new CubeModel(gl);
      const rect3 = new CubeModel(gl);

      const rect1T = mat4.create();
      const vector1 = vec3.create();

      vec3.set(vector1, 1, 0.1, 0.1);
      mat4.scale(rect1T, mat4.create(), vector1);
      super.addChild(rect1, rect1T);

      const rect2T = mat4.create();
      const vector2 = vec3.create();
            
      vec3.set(vector2, 0.1, 1, 0.1);
      mat4.scale(rect2T, mat4.create(), vector2);
      super.addChild(rect2, rect2T);

      const rect3T = mat4.create();
      const vector3 = vec3.create();

      vec3.set(vector3, 0.1, 0.1, 1);
      mat4.scale(rect3T, mat4.create(), vector3);
      super.addChild(rect3, rect3T);


   }
}