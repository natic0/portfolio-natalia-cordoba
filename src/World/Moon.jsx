import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

const Moon = (props) => {
const { nodes, materials } = useGLTF("/assets/models/moon/moon.glb");
const groupRef = useRef();
const [rotationSpeed] = useState(0.001); 

useFrame(() => {
    if (groupRef.current) {
    // Rotar el grupo hacia la izquierda.
    groupRef.current.rotation.y += rotationSpeed;
    }
});

    return (
        <group {...props} dispose={null} ref={groupRef}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials["Material.001"]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        </group>
    );
};

export default Moon;
useGLTF.preload("/assets/models/moon/moon.glb");
