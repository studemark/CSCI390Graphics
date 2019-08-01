class JackStackAttack extends CompoundModel {
   constructor(gl) {
      super();

      const jackStackL = new JackStack(gl, 120 * Math.PI/180);
      const jackStackM = new JackStack(gl, Math.PI/2);
      const jackStackR = new JackStack(gl, 30 * Math.PI/180);

      const transformL = mat4.create();
      mat4.translate(transformL, transformL, [-2, 0, 0])
      mat4.scale(transformL, transformL, [0.5, 0.5, 0.5])
      super.addChild(jackStackL, transformL);

      super.addChild(jackStackM, mat4.create());

      const transformR = mat4.create();
      mat4.translate(transformR, transformR, [2, 0, 0]);
      mat4.scale(transformR, transformR, [0.5, 0.5, 0.5]);
      super.addChild(jackStackR, transformR);

   }
}