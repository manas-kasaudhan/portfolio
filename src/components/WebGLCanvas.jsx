'use client';

import { useEffect, useRef } from 'react';

const VERT_SRC = `
  attribute vec2 a_position;
  attribute float a_size;
  attribute float a_alpha;
  attribute float a_hue; 
  uniform vec2 u_resolution;
  varying float v_alpha;
  varying float v_hue;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = a_size;
    v_alpha = a_alpha;
    v_hue = a_hue;
  }
`;

const FRAG_SRC = `
  precision mediump float;
  varying float v_alpha;
  varying float v_hue;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    if (dist > 0.5) discard;
    float fade = smoothstep(0.5, 0.0, dist);
    // accent color #FF6B4A = (1.0, 0.42, 0.29), neutral = (0.85, 0.855, 0.867)
    vec3 accent = vec3(1.0, 0.42, 0.29);
    vec3 neutral = vec3(0.85, 0.855, 0.867);
    vec3 col = mix(neutral, accent, v_hue);
    gl_FragColor = vec4(col, fade * v_alpha);
  }
`;

function compileShader(gl, type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  return shader;
}

export default function WebGLCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: false });
    if (!gl) return;

    // Compile shaders
    const vs = compileShader(gl, gl.VERTEX_SHADER, VERT_SRC);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC);
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Attribute / uniform locations
    const aPos = gl.getAttribLocation(prog, 'a_position');
    const aSize = gl.getAttribLocation(prog, 'a_size');
    const aAlpha = gl.getAttribLocation(prog, 'a_alpha');
    const aHue = gl.getAttribLocation(prog, 'a_hue');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');

    const N = 80;
    const PX = new Float32Array(N);
    const PY = new Float32Array(N);
    const VX = new Float32Array(N);
    const VY = new Float32Array(N);
    const SIZE = new Float32Array(N);
    const ALPHA = new Float32Array(N);
    const HUE = new Float32Array(N);

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    // Init particles after first resize
    const init = () => {
      for (let i = 0; i < N; i++) {
        PX[i] = Math.random() * canvas.width;
        PY[i] = Math.random() * canvas.height;
        VX[i] = (Math.random() - 0.5) * 0.4;
        VY[i] = (Math.random() - 0.5) * 0.4;
        SIZE[i] = Math.random() * 2.5 + 1.0;
        ALPHA[i] = Math.random() * 0.35 + 0.1;
        HUE[i] = Math.random() > 0.82 ? 1.0 : 0.0;
      }
    };

    resize();
    init();
    window.addEventListener('resize', () => { resize(); });

    // Buffers
    const posBuf = gl.createBuffer();
    const sizeBuf = gl.createBuffer();
    const alphaBuf = gl.createBuffer();
    const hueBuf = gl.createBuffer();

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    let raf;
    const posData = new Float32Array(N * 2);

    const frame = () => {
      const W = canvas.width;
      const H = canvas.height;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      for (let i = 0; i < N; i++) {
        PX[i] += VX[i];
        PY[i] += VY[i];
        if (PX[i] < 0 || PX[i] > W) VX[i] *= -1;
        if (PY[i] < 0 || PY[i] > H) VY[i] *= -1;
        posData[i * 2] = PX[i];
        posData[i * 2 + 1] = PY[i];
      }

      // Upload pos
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
      gl.bufferData(gl.ARRAY_BUFFER, posData, gl.DYNAMIC_DRAW);
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      // Upload size
      gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuf);
      gl.bufferData(gl.ARRAY_BUFFER, SIZE, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aSize);
      gl.vertexAttribPointer(aSize, 1, gl.FLOAT, false, 0, 0);

      // Upload alpha
      gl.bindBuffer(gl.ARRAY_BUFFER, alphaBuf);
      gl.bufferData(gl.ARRAY_BUFFER, ALPHA, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aAlpha);
      gl.vertexAttribPointer(aAlpha, 1, gl.FLOAT, false, 0, 0);

      // Upload hue
      gl.bindBuffer(gl.ARRAY_BUFFER, hueBuf);
      gl.bufferData(gl.ARRAY_BUFFER, HUE, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aHue);
      gl.vertexAttribPointer(aHue, 1, gl.FLOAT, false, 0, 0);

      gl.drawArrays(gl.POINTS, 0, N);

      raf = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(prog);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}
