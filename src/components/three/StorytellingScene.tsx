import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface StorytellingSceneProps {
  /** Ref that the parent writes scrollYProgress (0–1) into */
  scrollProgressRef: React.MutableRefObject<number>;
  /** Whether the section is currently visible in the viewport */
  isVisible?: boolean;
}

/**
 * 3D scene for the storytelling section — wireframe geometric shapes
 * that parallax at different rates based on scroll progress.
 *
 * Shapes are positioned around the edges so they don't compete with
 * centered text. Each shape has its own parallax factor and rotation speed.
 *
 * Updated for sticky horizontal scroll: shapes now drift both horizontally
 * and vertically based on scroll, with reduced opacity to stay subtle behind
 * the sliding text content.
 *
 * Performance:
 * - Pauses rendering when section is out of viewport (frameloop="demand")
 * - Disposes geometries/materials on unmount
 * - Low poly wireframes — minimal GPU cost
 */
export default function StorytellingScene({
  scrollProgressRef,
  isVisible = true,
}: StorytellingSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
      frameloop="demand"
    >
      <SceneContent
        scrollProgressRef={scrollProgressRef}
        isVisible={isVisible}
      />
    </Canvas>
  );
}

/** Shape definition for the wireframe objects */
interface ShapeConfig {
  geometry:
    | "icosahedron"
    | "octahedron"
    | "torus"
    | "dodecahedron"
    | "tetrahedron"
    | "torusKnot";
  basePosition: [number, number, number];
  scale: number;
  rotationSpeed: [number, number, number];
  /** Vertical parallax factor — reduced to ~40% of content speed */
  parallaxFactorY: number;
  /** Horizontal parallax factor — subtle drift opposite to content direction */
  parallaxFactorX: number;
}

const SHAPES: ShapeConfig[] = [
  {
    geometry: "icosahedron",
    basePosition: [-5.5, 3, -2],
    scale: 0.8,
    rotationSpeed: [0.002, 0.003, 0.001],
    parallaxFactorY: -1.5,
    parallaxFactorX: -2.0,
  },
  {
    geometry: "octahedron",
    basePosition: [5.2, -2, -3],
    scale: 0.7,
    rotationSpeed: [0.003, 0.001, 0.002],
    parallaxFactorY: -2.0,
    parallaxFactorX: -1.5,
  },
  {
    geometry: "torus",
    basePosition: [-4.5, -4, -1.5],
    scale: 0.6,
    rotationSpeed: [0.001, 0.003, 0.001],
    parallaxFactorY: -1.0,
    parallaxFactorX: -2.5,
  },
  {
    geometry: "dodecahedron",
    basePosition: [4.8, 4, -2.5],
    scale: 0.55,
    rotationSpeed: [0.002, 0.001, 0.003],
    parallaxFactorY: -1.8,
    parallaxFactorX: -1.2,
  },
  {
    geometry: "tetrahedron",
    basePosition: [-3, 6, -2],
    scale: 0.5,
    rotationSpeed: [0.003, 0.002, 0.001],
    parallaxFactorY: -2.5,
    parallaxFactorX: -3.0,
  },
  {
    geometry: "torusKnot",
    basePosition: [3.5, -5.5, -3],
    scale: 0.4,
    rotationSpeed: [0.001, 0.002, 0.003],
    parallaxFactorY: -1.2,
    parallaxFactorX: -1.8,
  },
  {
    geometry: "icosahedron",
    basePosition: [6, 1, -4],
    scale: 0.45,
    rotationSpeed: [0.002, 0.001, 0.001],
    parallaxFactorY: -2.0,
    parallaxFactorX: -2.2,
  },
  {
    geometry: "octahedron",
    basePosition: [-5.8, -1, -3.5],
    scale: 0.5,
    rotationSpeed: [0.001, 0.003, 0.002],
    parallaxFactorY: -2.2,
    parallaxFactorX: -1.0,
  },
];

function SceneContent({ scrollProgressRef, isVisible }: StorytellingSceneProps) {
  const { invalidate } = useThree();

  // When visible, continuously request new frames via rAF (since frameloop="demand")
  useEffect(() => {
    if (!isVisible) return;

    let rafId: number;
    const loop = () => {
      invalidate();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafId);
  }, [isVisible, invalidate]);

  return (
    <>
      {/* Soft ambient light */}
      <ambientLight intensity={0.08} />

      {/* Accent lights — dimmer to keep shapes subtle */}
      <pointLight
        position={[6, 4, 4]}
        intensity={0.25}
        color="#6366f1"
        distance={18}
      />
      <pointLight
        position={[-5, -3, 3]}
        intensity={0.15}
        color="#818cf8"
        distance={15}
      />

      {/* Wireframe shapes */}
      {SHAPES.map((shape, index) => (
        <WireframeShape
          key={index}
          config={shape}
          scrollProgressRef={scrollProgressRef}
          isVisible={isVisible}
        />
      ))}
    </>
  );
}

interface WireframeShapeProps {
  config: ShapeConfig;
  scrollProgressRef: React.MutableRefObject<number>;
  isVisible?: boolean;
}

function WireframeShape({
  config,
  scrollProgressRef,
  isVisible,
}: WireframeShapeProps) {
  const meshRef = useRef<THREE.Group>(null);

  // Create the geometry once
  const geometry = useMemo(() => {
    switch (config.geometry) {
      case "icosahedron":
        return new THREE.IcosahedronGeometry(1, 0);
      case "octahedron":
        return new THREE.OctahedronGeometry(1, 0);
      case "torus":
        return new THREE.TorusGeometry(1, 0.35, 8, 16);
      case "dodecahedron":
        return new THREE.DodecahedronGeometry(1, 0);
      case "tetrahedron":
        return new THREE.TetrahedronGeometry(1, 0);
      case "torusKnot":
        return new THREE.TorusKnotGeometry(0.8, 0.25, 48, 8);
      default:
        return new THREE.IcosahedronGeometry(1, 0);
    }
  }, [config.geometry]);

  const edgesGeometry = useMemo(
    () => new THREE.EdgesGeometry(geometry),
    [geometry],
  );

  // Dispose geometries on unmount to free GPU memory
  useEffect(() => {
    return () => {
      geometry.dispose();
      edgesGeometry.dispose();
    };
  }, [geometry, edgesGeometry]);

  // Animate rotation + scroll-driven parallax (both X and Y)
  useFrame(() => {
    if (!meshRef.current) return;
    if (!isVisible) return;

    // Slow constant rotation (slightly slower than before)
    meshRef.current.rotation.x += config.rotationSpeed[0];
    meshRef.current.rotation.y += config.rotationSpeed[1];
    meshRef.current.rotation.z += config.rotationSpeed[2];

    // Scroll-driven parallax: shift both X and Y based on scroll progress
    const progress = scrollProgressRef.current;
    const parallaxY =
      config.basePosition[1] + progress * config.parallaxFactorY;
    const parallaxX =
      config.basePosition[0] + progress * config.parallaxFactorX;

    meshRef.current.position.x = parallaxX;
    meshRef.current.position.y = parallaxY;
  });

  return (
    <group
      ref={meshRef}
      position={[
        config.basePosition[0],
        config.basePosition[1],
        config.basePosition[2],
      ]}
      scale={config.scale}
    >
      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial
          color="#6366f1"
          opacity={0.1}
          transparent
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}
