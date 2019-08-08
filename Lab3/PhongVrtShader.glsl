#version 430

precision highp float;

attribute vec3 position;
attribute vec3 normal;
varying vec3 varyingNormal;
varying vec3 varyingLightDir;
varying vec3 varyingVertPos;

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

void main(void) {	
	varyingVertPos = (mvMatrix * vec4(position, 1.0)).xyz;
	varyingLightDir = light.position - varyingVertPos;
	varyingNormal = (normMatrix * vec4(normal, 1.0)).xyz;

	gl_Position = projMatrix * mvMatrix * vec4(position, 1.0);
}