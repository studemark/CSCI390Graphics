class Jack extends CompoundModel {
   constructor(gl, mat) {
      super(mat);

      const object = new Cylinder(gl, mat);

      super.addChild(object, mat4.scale(mat4.create(), mat4.create(), [0.2, 1, 0.2]));

      const obj2T = mat4.create();
      super.addChild(object, mat4.scale(obj2T, mat4.rotateZ(obj2T, obj2T, Math.PI/2), [0.2, 1, 0.2]));

      const obj3T = mat4.create();
      super.addChild(object, mat4.scale(obj3T, mat4.rotateX(obj3T, obj3T, Math.PI/2), [0.2, 1, 0.2]));
   }
}

class JackStack extends CompoundModel {
   constructor(gl, rot, mat) {
      super(mat);

      const jack = new Jack(gl, mat);

      super.addChild(jack, mat4.translate(mat4.create(), mat4.create(), [0, 2, 0]));

      super.addChild(jack, mat4.rotateY(mat4.create(), mat4.create(), rot));

      super.addChild(jack, mat4.rotateY(mat4.create(), mat4.translate(mat4.create(), mat4.create(), [0, -2, 0]), rot*2));
   }
}

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