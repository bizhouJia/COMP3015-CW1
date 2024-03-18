# CW 1

## Environment

Windows 11 Home Edition

Visual Studio Community 2022 - 17.5.1

glew - 2.1.0

glfw - 3.4

glm - 1.0.1

## Link

https://youtu.be/ioUHXVufCfE

## Codes

**initBuffers(&el, &p, &n, nullptr, nullptr);**: 

A call with the vectors of elements (indices), positions (vertices), and normals, along with two `nullptr` placeholders for additional data (not used here). This function is responsible for setting up the necessary OpenGL buffers and configurations to render the cup based on the calculated vertices, normals, and indices.

vector<GLfloat> p;

A vector to store the vertices of the cup. Each vertex consists of a position in 3D space.

vector<GLuint> el;

A vector to store the indices for elements (triangles) that make up the surface of the cup. These indices refer to vertices in the `p` vector.

vector<GLfloat> n;

A vector to store normals for each vertex. Normals are used in lighting calculations to determine how light interacts with the surface.

Cup::Cup(float topRadius, float bottomRadius, float height, unsigned int segments): 

The constructor for the Cup class, initializing a cup object with specific top and bottom radii, height, and the number of segments for the circular parts.