class JackStack extends CompoundModel {
   constructor(gl, rot) {
      super();

      const jack = new Jack(gl);

      super.addChild(jack, mat4.translate(mat4.create(), mat4.create(), [0, 2, 0]));

      super.addChild(jack, mat4.rotateY(mat4.create(), mat4.create(), rot));

      super.addChild(jack, mat4.rotateY(mat4.create(), mat4.translate(mat4.create(), mat4.create(), [0, -2, 0]), rot*2));
   }
}