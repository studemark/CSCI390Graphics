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