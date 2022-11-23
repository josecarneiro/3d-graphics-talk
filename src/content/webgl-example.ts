const canvas = document.createElement('canvas')

canvas.width = 600
canvas.height = 600

document.body.appendChild(canvas)

const gl = canvas.getContext('webgl')

const vertices = [
  -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1,
  -1, 1, -1, -1, 1, 1, -1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1,
  -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1,
]

const colors = [
  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
  1, 0, 0, 1, 0, 0,
]

const indices = [
  0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16,
  18, 19, 20, 21, 22, 20, 22, 23,
]

const vertexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

const colorBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW)

const indexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW)

const vertCode =
  'attribute vec3 position;' +
  'uniform mat4 Pmatrix;' +
  'uniform mat4 Vmatrix;' +
  'uniform mat4 Mmatrix;' +
  'attribute vec3 color;' +
  'varying vec3 vColor;' +
  'void main(void) { ' +
  'gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(position, 1.0);' +
  'vColor = color;' +
  '}'

const fragCode =
  'precision mediump float;' +
  'varying vec3 vColor;' +
  'void main(void) {' +
  'gl_FragColor = vec4(vColor, 1.);' +
  '}'

const vertShader = gl.createShader(gl.VERTEX_SHADER)
gl.shaderSource(vertShader, vertCode)
gl.compileShader(vertShader)

const fragShader = gl.createShader(gl.FRAGMENT_SHADER)
gl.shaderSource(fragShader, fragCode)
gl.compileShader(fragShader)

const shaderProgram = gl.createProgram()
gl.attachShader(shaderProgram, vertShader)
gl.attachShader(shaderProgram, fragShader)
gl.linkProgram(shaderProgram)

const Pmatrix = gl.getUniformLocation(shaderProgram, 'Pmatrix')
const Vmatrix = gl.getUniformLocation(shaderProgram, 'Vmatrix')
const Mmatrix = gl.getUniformLocation(shaderProgram, 'Mmatrix')

gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
const position = gl.getAttribLocation(shaderProgram, 'position')
gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0)

// Position
gl.enableVertexAttribArray(position)
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
const color = gl.getAttribLocation(shaderProgram, 'color')
gl.vertexAttribPointer(color, 3, gl.FLOAT, false, 0, 0)

// Color
gl.enableVertexAttribArray(color)
gl.useProgram(shaderProgram)

function getProjection(angle: number, a: number, zMin: number, zMax: number) {
  const ang = Math.tan((angle * 0.5 * Math.PI) / 180)
  return [
    0.5 / ang,
    0,
    0,
    0,
    0,
    (0.5 * a) / ang,
    0,
    0,
    0,
    0,
    -(zMax + zMin) / (zMax - zMin),
    -1,
    0,
    0,
    (-2 * zMax * zMin) / (zMax - zMin),
    0,
  ]
}

const projMatrix = getProjection(40, canvas.width / canvas.height, 1, 100)
const movMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
const viewMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

viewMatrix[14] = viewMatrix[14] - 6

function rotateZ(m, angle) {
  const c = Math.cos(angle)
  const s = Math.sin(angle)
  const mv0 = m[0]
  const mv4 = m[4]
  const mv8 = m[8]

  m[0] = c * m[0] - s * m[1]
  m[4] = c * m[4] - s * m[5]
  m[8] = c * m[8] - s * m[9]

  m[1] = c * m[1] + s * mv0
  m[5] = c * m[5] + s * mv4
  m[9] = c * m[9] + s * mv8
}

function rotateX(m, angle) {
  const c = Math.cos(angle)
  const s = Math.sin(angle)
  const mv1 = m[1]
  const mv5 = m[5]
  const mv9 = m[9]

  m[1] = m[1] * c - m[2] * s
  m[5] = m[5] * c - m[6] * s
  m[9] = m[9] * c - m[10] * s

  m[2] = m[2] * c + mv1 * s
  m[6] = m[6] * c + mv5 * s
  m[10] = m[10] * c + mv9 * s
}

function rotateY(m, angle) {
  const c = Math.cos(angle)
  const s = Math.sin(angle)
  const mv0 = m[0]
  const mv4 = m[4]
  const mv8 = m[8]

  m[0] = c * m[0] + s * m[2]
  m[4] = c * m[4] + s * m[6]
  m[8] = c * m[8] + s * m[10]

  m[2] = c * m[2] - s * mv0
  m[6] = c * m[6] - s * mv4
  m[10] = c * m[10] - s * mv8
}

let timeOld = 0

function animate(time) {
  const dt = time - timeOld
  rotateZ(movMatrix, dt * 0.0005)
  rotateY(movMatrix, dt * 0.0002)
  rotateX(movMatrix, dt * 0.0003)
  timeOld = time

  gl.enable(gl.DEPTH_TEST)
  gl.depthFunc(gl.LEQUAL)
  gl.clearColor(0.5, 0.5, 0.5, 0.0)
  gl.clearDepth(1.0)

  gl.viewport(0.0, 0.0, gl.drawingBufferWidth, gl.drawingBufferHeight)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
  gl.uniformMatrix4fv(Pmatrix, false, projMatrix)
  gl.uniformMatrix4fv(Vmatrix, false, viewMatrix)
  gl.uniformMatrix4fv(Mmatrix, false, movMatrix)
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
  gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0)

  window.requestAnimationFrame(animate)
}

animate(0)
