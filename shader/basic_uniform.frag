#version 460

// Input light intensity from vertex shader
in vec3 LightIntensity;

// Output fragment color
layout (location = 0) out vec4 FragColor;

void main() {
    // Set the fragment color, using the light intensity calculated in the vertex shader
    // Alpha value is set to 1.0 for full opacity
    FragColor = vec4(LightIntensity, 1.0);
}
