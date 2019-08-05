attribute vec4 positions;
attribute vec4 color;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
varying lowp vec4 vColor;
void main(void) {
   gl_Position = projectionMatrix * viewMatrix * positions;
   vColor = color;
}