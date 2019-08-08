//#version 430

precision highp float;

attribute vec3 position;
attribute vec3 normal;
varying vec4 varyingColor;

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
   vec4 color;

	// convert vertex position to view space
	vec4 P = mvMatrix * vec4(position, 1.0);

	// convert normal to view space
	vec3 N = normalize((normMatrix * vec4(normal, 1.0)).xyz);

	// calculate view-space light vector (from point to light)
	vec3 L = normalize(light.position - P.xyz);

	//  view vector is negative of view space position
	vec3 V = normalize(-P.xyz);

	//  R is reflection of -L around the plane defined by N
	vec3 R = reflect(-L, N);

	// ambient, diffuse, and specular contributions
	vec3 ambient = ((globalAmbient * material.ambient) + (light.ambient * material.ambient)).xyz;
	vec3 diffuse = light.diffuse.xyz * material.diffuse.xyz * max(dot(N, L), 0.0);
	vec3 specular = pow(max(dot(R, V), 0.0), material.shininess) * material.specular.xyz * light.specular.xyz;

	// send the color output to the fragment shader
	varyingColor = vec4((ambient + diffuse + specular), 1.0);

	// send the position to the fragment shader, as before
	gl_Position = projMatrix * mvMatrix * vec4(position, 1.0);
}