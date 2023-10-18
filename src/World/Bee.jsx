import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Bee = () => {
    const { scene, animations } = useGLTF("/assets/models/bee/scene.gltf");

    const beeRef = useRef();
    const { actions } = useAnimations(animations, beeRef);

    useEffect(() => {
        const action = actions["All Animations"];
        action.play();
    }, []);

    return (
        <mesh ref={beeRef} position-x={2} rotation-y={-Math.PI * 0.15} scale={2}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Bee;
