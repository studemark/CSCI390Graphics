class JackStackAttack extends CompoundModel {
   constructor(gl, mat1, mat2, mat3) {
      super();

      const jackStackL = new JackStack(gl, Math.PI/2, mat1);
      const jackStackM = new JackStack(gl, Math.PI/2, mat2);
      const jackStackR = new JackStack(gl, Math.PI/2, mat3);
      
      const transformL = mat4.create();
      mat4.translate(transformL, transformL, [-2, 0, 0])
      mat4.scale(transformL, transformL, [1, 1, 1])
      super.addChild(jackStackL, transformL);

      super.addChild(jackStackM, mat4.create());

      const transformR = mat4.create();
      mat4.translate(transformR, transformR, [2, 0, 0]);
      mat4.scale(transformR, transformR, [1, 1, 1]);
      super.addChild(jackStackR, transformR);
   }
}