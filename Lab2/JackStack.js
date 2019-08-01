class JackStack extends CompoundModel {
   constructor(gl, rot) {
      super();

      const jack = new Jack(gl);

      const jackT = mat4.create();
      mat4.translate(jackT, jackT, [0, 2, 0]);
      super.addChild(jack, jackT);

      const jack2T = mat4.create();
      mat4.rotateY(jack2T, jack2T, rot);
      super.addChild(jack, jack2T);

      const jack3T = mat4.create();
      mat4.translate(jack3T, jack3T, [0, -2, 0]);
      mat4.rotateY(jack3T, jack3T, rot*2);
      super.addChild(jack, jack3T);
   }
}