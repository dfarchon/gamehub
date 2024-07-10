"use client";
import * as THREE from "three";
import {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { Float, Line, Sphere, Stars, useTexture } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useSpring, animated } from "@react-spring/three";

import {
  SkyStrife,
  GAMES_ONE,
  GAMES_TWO,
  GAMES_THREE,
  SPONSORS_FOUR,
  PanelContext,
} from "@/constants";

const colors = [
  "black",
  "skyblue",
  "antiquewhite",
  "aquamarine",
  "blueviolet",
  "midnightblue",
  "pink",
  "#002b36", // Solarized Dark
  "#282a36", // Dracula
  "#2e3440", // Nord
  "#272822", // Monokai
  "#282828", // Gruvbox Dark
  "#263238"  // Material Dark
];

extend({ OrbitControls });

export default function BgCarousel(props: any) {
  const [bgColor, setBgColor] = useState(colors[11]);

  useEffect(() => {}, []);

  return (
    <div className="slider flex">
      <div className={`slide `} style={{ backgroundColor: bgColor }}></div>

      <Canvas
        shadows
        className="absolute w-full h-full z-10"
        camera={{
          position: [0, 0, 14],
        }}
      >
        {/* <color attach="background" args={[colors[slide]]} /> */}
        <ambientLight intensity={0.25} />

        <PlanetsThree datas={GAMES_THREE} />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
          {/* <Curves /> */}
          {/* <Logo
            position={[0, 0, 0.1]}
            speed={2}
            radius={0.5}
            data={SkyStrife}
            scale={2}
            handleClick={SkyStrife.handleClick}
          /> */}

          {/* <PlanetsOne datas={GAMES_ONE} /> */}
          {/* <PlanetsTwo datas={GAMES_TWO} /> */}
          {/* <PlanetsThree datas={GAMES_THTEE} /> */}
          {/* <PlanetsFour datas={SPONSORS_FOUR} /> */}
        </Float>

        <Stars
          count={5000}
          speed={0.9}
          radius={50}
          depth={10}
          factor={3}
          fade
        />
        <SunWithMoon position={[-130, 30, -120]} speed={0.2} radius={3.6} />

        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} intensity={1} />
        </EffectComposer>
        <CameraController />
      </Canvas>
    </div>
  );
}

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 14;
    controls.maxDistance = 14;
    // controls.maxPolarAngle = Math.PI / 1.8;
    // controls.minPolarAngle = Math.PI / 2.5;

    // controls.maxAzimuthAngle = Math.PI / 9;
    // controls.minAzimuthAngle = -Math.PI / 9;

    controls.maxPolarAngle = Math.PI;
    controls.minPolarAngle = -Math.PI;

    controls.maxAzimuthAngle = Math.PI;
    controls.minAzimuthAngle = -Math.PI;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

function Curves(props: any) {
  const pointsEllipse = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 9, 3.25, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  const pointsXL = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 9, 9, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  const pointsL = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 7, 7, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  const pointsM = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 5, 5, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  const pointsS = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 3, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  return (
    <group {...props}>
      <Line
        worldUnits
        points={pointsXL}
        color="white"
        lineWidth={0.05}
        position={[0, 0, 0]}
      />
      <Line
        worldUnits
        points={pointsL}
        color="white"
        lineWidth={0.05}
        position={[0, 0, 0]}
      />

      <Line
        worldUnits
        points={pointsS}
        color="white"
        lineWidth={0.05}
        rotation={[0, 0, 0]}
        position={[0, 0, 1]}
      />

      <Line
        worldUnits
        points={pointsEllipse}
        color="#e2e2e2"
        lineWidth={0.05}
        // dashed
        // dashSize={0.6}
        // dashScale={3}
      />
      <Line
        worldUnits
        points={pointsM}
        color="white"
        lineWidth={0.05}
        rotation={[0, 0, 0]}
        position={[0, 0, -0.5]}
        // dashed
        dashSize={0.2}
        dashScale={3}
      />
      <Line
        worldUnits
        points={pointsEllipse}
        color="#e2e2e2"
        lineWidth={0.05}
        rotation={[0, 0, 0.5]}
        // dashed
        dashSize={0.6}
        dashScale={3}
      />
      <Line
        worldUnits
        points={pointsEllipse}
        color="#e2e2e2"
        lineWidth={0.05}
        rotation={[0, 0, -0.5]}
        // dashed
        dashSize={0.6}
        dashScale={3}
      />
    </group>
  );
}
function PlanetsOne({ datas, ...props }: { datas: any }) {
  return datas.map((data: any, index: number) => {
    return (
      <Logo
        key={index}
        position={[
          Math.sin((2 * Math.PI * index) / datas.length) * 2.5,
          Math.cos((2 * Math.PI * index) / datas.length) * 2.5,
          0.1,
        ]}
        speed={2}
        radius={0.5}
        data={data}
        scale={1}
        handleClick={data.handleClick}
      />
    );
  });
}

function PlanetsTwo({ datas, ...props }: { datas: any }) {
  return datas.map((data: any, index: number) => {
    return (
      <Logo
        key={index}
        position={[
          Math.sin((2 * Math.PI * index) / datas.length) * 5,
          Math.cos((2 * Math.PI * index) / datas.length) * 5,
          0.1,
        ]}
        speed={2}
        radius={0.5}
        data={data}
        scale={1}
        handleClick={data.handleClick}
      />
    );
  });
}

function PlanetsThree({ datas, ...props }: { datas: any }) {
  const ref = useRef<THREE.Group>(null!);
  const { hoverPlanet, globalTime, setGlobalTime } = useContext(PanelContext);
  useFrame((state) => {
    if (!hoverPlanet) {
      if (!state.clock.running) {
        state.clock.start();
      }
      const t = state.clock.getElapsedTime();
      const angleDelta = 0.1 * Math.PI * t;
      ref.current.rotation.set(0, 0, globalTime + angleDelta);
    } else {
      setGlobalTime(ref.current.rotation.z);
      state.clock.stop();
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, 0]}>
      {" "}
      {datas.map((data: any, index: number) => {
        return (
          <Logo
            key={index}
            position={[
              Math.sin((2 * Math.PI * index) / datas.length) * 6.5,
              Math.cos((2 * Math.PI * index) / datas.length) * 6.5,
              0.1,
            ]}
            speed={2}
            radius={0.5}
            data={data}
            scale={2.5}
            handleClick={data.handleClick}
          />
        );
      })}
    </group>
  );
}
function PlanetsFour({ datas, ...props }: { datas: any }) {
  const ref = useRef<THREE.Group>(null!);
  return (
    <group ref={ref} rotation={[Math.PI / 6, 0, Math.PI / 2]}>
      {datas.map((data: any, index: number) => {
        return (
          <Logo
            key={index}
            position={[
              Math.sin((2 * Math.PI * index) / datas.length) * 10,
              Math.cos((2 * Math.PI * index) / datas.length) * 10,
              0.1,
            ]}
            speed={2}
            radius={1}
            data={data}
            scale={1}
            handleClick={data.handleClick}
          />
        );
      })}
    </group>
  );
}

function Logo({
  data,
  handleClick,
  radius = 3,
  speed = 6,
  position = [0, 0, 0],
  scale = 1,
  ...props
}: {
  data: typeof SkyStrife;
  handleClick: () => void;
  radius: number;
  speed: number;
  position: [number, number, number];
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const { setWorld, setHoverPlanet, hoverPlanet } = useContext(PanelContext);
  const [active, setActive] = useState(false);
  const { scaleAni } = useSpring({
    scaleAni: active ? scale * 1.5 : scale,
  });

  const handleToggle = useCallback(() => {
    document.body.style.cursor = !active ? "pointer" : "auto";
    setActive(!active);
    setHoverPlanet(!active);
    setWorld(data);
  }, [active]);

  const logoTexture = useTexture(data.logo);

  function createCircularTexture(radius: number) {
    const canvas = document.createElement("canvas");
    const size = radius * 2;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.beginPath();
    context.arc(radius, radius, radius, 0, 2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
    return new THREE.CanvasTexture(canvas);
  }

  const size = Math.min(logoTexture.image.width, logoTexture.image.height); 
  console.log(size);
  const circleMaskTexture = createCircularTexture(size);

  return (
    <mesh ref={ref} onClick={handleClick}>
      <animated.sprite
        position={position}
        scale={scaleAni}
        onPointerEnter={handleToggle}
        onPointerLeave={handleToggle}
      >
        <spriteMaterial
          map={logoTexture}
          opacity={1}
          transparent={true}
          toneMapped={false}
      />

        {/* todo: this make logo a little white */}

        {/* <spriteMaterial
          map={logoTexture}
          alphaMap={circleMaskTexture}
          transparent={true}
          depthWrite={false} 
        /> */}

        
      </animated.sprite>
    </mesh>
  );
}

function SunWithMoon({
  position = [0, 0, 0],
  speed = 3,
  radius = 3.7,
  ...props
}: {
  position: [number, number, number];
  speed: number;
  radius: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * 30,
      (Math.cos(t) * 25 * Math.atan(t)) / Math.PI,
      0
    );
  });
  const moon = useTexture("/images/moon.png");
  return (
    <group position={position} rotation={[Math.PI / 6, 0, Math.PI / 2]}>
      <Sphere args={[radius, 64, 64]}>
        <meshBasicMaterial color={[13.3, 9.4, 1]} toneMapped={false} />
      </Sphere>

      <mesh ref={ref}>
        <Sphere args={[radius - 2.2, 64, 64]}>
          <meshBasicMaterial toneMapped={false} map={moon} />
        </Sphere>
      </mesh>
    </group>
  );
}
