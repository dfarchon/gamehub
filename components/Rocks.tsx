import React, { useRef, useMemo, useCallback } from "react";
import * as THREE from "three";
import * as Curves from "three/examples/jsm/curves/CurveExtras.js";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";

function randomData(
  count: number,
  radius: number,
  size: number,
  scale: Function
) {
  let spline = new Curves.GrannyKnot();
  let track = new THREE.TubeGeometry(spline, 250, 0.2, 10, true);

  return new Array(count).fill({}).map(() => {
    const t = Math.random();
    const pos = track.parameters.path.getPointAt(t);
    pos.multiplyScalar(15);
    const offset = pos
      .clone()
      .add(
        new THREE.Vector3(
          -radius + Math.random() * radius * 2,
          -radius + Math.random() * radius * 2,
          -radius + Math.random() * radius * 2
        )
      );
    const speed = 0.1 + Math.random();
    return {
      scale: typeof scale === "function" ? scale() : scale,
      size,
      offset,
      pos,
      speed,
      radius,
      t,
      hit: new THREE.Vector3(),
      distance: 1000,
    };
  });
}

export default function Rocks() {
  const { nodes, materials } = useLoader(GLTFLoader, "/images/rock.gltf");

  const rocks = randomData(1, 0.1, 1, () => 1 + Math.random() * 0.2);
  return rocks.map((data, i) => (
    <Rock nodes={nodes} materials={materials} key={i} data={data} />
  ));
}

function Rock({
  nodes,
  materials,
  data,
}: {
  nodes: any;
  materials: any;
  data: any;
}) {
  const ref = useRef<THREE.Group>(null!);
  const clock = new THREE.Clock(false);
  useFrame(() => {
    const r = Math.cos((clock.getElapsedTime() / 2) * data.speed) * Math.PI;
    ref.current.rotation.set(r, r, r);
  });
  return (
    <group
      ref={ref}
      position={[10, 10, 10]}
      scale={[data.scale, data.scale, data.scale]}
    >
      <group
        position={[
          -0.016298329457640648, -0.012838120572268963, 0.24073271453380585,
        ]}
        rotation={[
          3.0093872578726644, 0.27444228385461117, -0.22745113653772078,
        ]}
        scale={[20, 20, 20]}
      >
        <mesh
          geometry={nodes.node_id4_Material_52_0.geometry}
          material={materials.Material_52}
          material-roughness={1}
          material-metalness={1}
        />
      </group>
    </group>
  );
}
