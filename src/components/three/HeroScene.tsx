import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface HeroSceneProps {
  mouseX: number;
  mouseY: number;
}

/**
 * 3D hero scene — abstract developer-themed environment.
 * Floating geometric objects representing code structures, systems, and data flow.
 * Responds subtly to mouse position for depth and interactivity.
 *
 * This is a progressive enhancement — the hero works fully without it.
 */
export default function HeroScene({ mouseX, mouseY }: HeroSceneProps) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <SceneContent mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </div>
  );
}

function SceneContent({ mouseX, mouseY }: HeroSceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Subtle camera follow based on mouse
  useFrame(() => {
    if (!groupRef.current) return;
    const targetX = mouseX * 0.3;
    const targetY = -mouseY * 0.2;
    groupRef.current.rotation.y +=
      (targetX - groupRef.current.rotation.y) * 0.02;
    groupRef.current.rotation.x +=
      (targetY - groupRef.current.rotation.x) * 0.02;
  });

  return (
    <group ref={groupRef}>
      {/* Ambient light — soft base */}
      <ambientLight intensity={0.15} />

      {/* Key light — cool accent from top-right */}
      <pointLight
        position={[5, 5, 5]}
        intensity={0.6}
        color="#6366f1"
        distance={20}
      />

      {/* Fill light — warm from bottom-left */}
      <pointLight
        position={[-4, -3, 3]}
        intensity={0.3}
        color="#818cf8"
        distance={15}
      />

      {/* Abstract code block structures */}
      <CodeBlocks />

      {/* Data flow lines */}
      <DataLines />

      {/* Floating nodes — representing system architecture */}
      <SystemNodes />
    </group>
  );
}

/**
 * Abstract representations of code blocks —
 * thin rectangular planes with subtle glow, like floating editor windows.
 */
function CodeBlocks() {
  const blocks = useMemo(
    () => [
      { pos: [-2.5, 1.5, -1] as [number, number, number], scale: [1.2, 0.6, 0.02] as [number, number, number], speed: 1.2 },
      { pos: [2.8, -0.8, -2] as [number, number, number], scale: [0.9, 0.5, 0.02] as [number, number, number], speed: 0.8 },
      { pos: [-1.5, -1.8, -0.5] as [number, number, number], scale: [1.0, 0.4, 0.02] as [number, number, number], speed: 1.5 },
      { pos: [1.8, 2.0, -1.5] as [number, number, number], scale: [0.7, 0.35, 0.02] as [number, number, number], speed: 1.0 },
    ],
    [],
  );

  return (
    <>
      {blocks.map((block, i) => (
        <Float
          key={i}
          speed={block.speed}
          rotationIntensity={0.2}
          floatIntensity={0.4}
          floatingRange={[-0.1, 0.1]}
        >
          <mesh position={block.pos}>
            <boxGeometry args={block.scale} />
            <meshStandardMaterial
              color="#1a1a2e"
              emissive="#6366f1"
              emissiveIntensity={0.08}
              transparent
              opacity={0.6}
              roughness={0.8}
            />
          </mesh>
          {/* Edge wireframe for structure feel */}
          <lineSegments position={block.pos}>
            <edgesGeometry
              args={[new THREE.BoxGeometry(...block.scale)]}
            />
            <lineBasicMaterial color="#6366f1" opacity={0.3} transparent />
          </lineSegments>
        </Float>
      ))}
    </>
  );
}

/**
 * Thin lines representing data flow / connections between systems.
 */
function DataLines() {
  const linesRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!linesRef.current) return;
    linesRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.2) * 0.02;
  });

  const lines = useMemo(() => {
    const lineData: { points: THREE.Vector3[]; opacity: number }[] = [];

    // Create subtle curved connection lines
    const curves = [
      { start: [-3, 1, -1], end: [2, -1, -2], mid: [0, 2, 0] },
      { start: [3, 2, -1], end: [-2, -2, -1], mid: [1, 0, 1] },
      { start: [-1, -2, 0], end: [3, 1, -1], mid: [1, -0.5, 0.5] },
    ];

    curves.forEach((curve) => {
      const points: THREE.Vector3[] = [];
      for (let t = 0; t <= 1; t += 0.05) {
        const x =
          (1 - t) * (1 - t) * curve.start[0]! +
          2 * (1 - t) * t * curve.mid[0]! +
          t * t * curve.end[0]!;
        const y =
          (1 - t) * (1 - t) * curve.start[1]! +
          2 * (1 - t) * t * curve.mid[1]! +
          t * t * curve.end[1]!;
        const z =
          (1 - t) * (1 - t) * curve.start[2]! +
          2 * (1 - t) * t * curve.mid[2]! +
          t * t * curve.end[2]!;
        points.push(new THREE.Vector3(x, y, z));
      }
      lineData.push({ points, opacity: 0.15 });
    });

    return lineData;
  }, []);

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={line.points.length}
              array={new Float32Array(line.points.flatMap((p) => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#6366f1"
            opacity={line.opacity}
            transparent
          />
        </line>
      ))}
    </group>
  );
}

/**
 * Small glowing spheres — nodes in a system diagram.
 * Represent interconnected components/services.
 */
function SystemNodes() {
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const count = 12;

  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      pos.push([
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4 - 1,
      ]);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (!nodesRef.current) return;
    const dummy = new THREE.Object3D();
    const time = clock.elapsedTime;

    positions.forEach((pos, i) => {
      dummy.position.set(
        pos[0] + Math.sin(time * 0.5 + i) * 0.1,
        pos[1] + Math.cos(time * 0.3 + i * 0.5) * 0.1,
        pos[2],
      );
      const scale = 0.03 + Math.sin(time + i * 2) * 0.01;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      nodesRef.current!.setMatrixAt(i, dummy.matrix);
    });
    nodesRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={nodesRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color="#818cf8"
        emissive="#6366f1"
        emissiveIntensity={0.8}
        toneMapped={false}
      />
    </instancedMesh>
  );
}
