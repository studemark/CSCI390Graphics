//#version 430

precision highp float;

varying vec4 varyingColor;

//  uniforms match those in the vertex shader,
//  but aren't used directly in this fragment shader
struct PositionalLight {
	vec4 ambient;  
	vec4 diffuse;  
	vec4 specular;  
	vec3 position;
};

struct Material {	
	vec4 ambient;  
	vec4 diffuse;  
	vec4 specular;  
	float shininess;
};

uniform vec4 globalAmbient;
uniform PositionalLight light;
uniform Material material;
uniform mat4 mvMatrix;	 
uniform mat4 projMatrix;
uniform mat4 normMatrix;

//  interpolate lighted color
// (interpolation of gl_Position is automatic)
void main(void) {
	vec4 red;
	red = vec4(1.0, 0.0, 0.0, 1.0);	
	gl_FragColor = red;
}