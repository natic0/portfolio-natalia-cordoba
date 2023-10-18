import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { Vector2, RepeatWrapping } from "three";
import { useFrame } from "react-three-fiber"; 

const Rockets = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/assets/models/rockets/rocket.glb");
    const { actions } = useAnimations(animations, group);

    const texture = useTexture("/assets/textures/metal/texture.jpg");
    
    texture.repeat = new Vector2(1, 1); 
    texture.wrapS = texture.wrapT = RepeatWrapping; 

    materials.lambert1.map = texture;

    // Variable para controlar la posición de la animación de flotación
    const floatingPosition = useRef([0, 0, 0]);
    const floatingSpeed = 0.15; // Velocidad de la animación de flotación

    // Función que actualiza la posición del objeto en cada frame
    useFrame(() => {
        // Actualiza la posición Y para la animación de flotación
        floatingPosition.current[1] = Math.sin(2 * Math.PI * floatingSpeed * performance.now() * 0.001) * 0.2;
        group.current.position.set(...floatingPosition.current);
    });

    return (
        <group name="Sketchfab_model" position={[-10, 5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 20, 5]}>
            <group
                name="d6fc1706383240cfaf14d1b6495e163dfbx"
                rotation={[Math.PI / 2, 0, 0]}
            >
                <group name="Object_2">
                <group name="RootNode">
                    <group
                    name="pCylinder1"
                    position={[-0.395, 6.043, 1.385]}
                    rotation={[0, Math.PI / 4, 0]}
                    scale={[1.245, 0.578, 1.245]}
                    >
                    <group name="transform2" />
                    </group>
                    <group
                    name="pCylinder2"
                    position={[-0.387, 8.458, 0.268]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.572, 0.021, 0.572]}
                    >
                    <group name="transform1" />
                    </group>
                    <group
                    name="back"
                    position={[-2.86, 2.412, -100.1]}
                    rotation={[0, -Math.PI / 2, 0]}
                    >
                    <group name="Object_9" />
                    </group>
                    <group name="pCylinder3">
                    <group name="transform4" />
                    </group>
                    <group
                    name="pCylinder4"
                    position={[-0.386, 8.457, 0.269]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.569, 0.028, 0.572]}
                    >
                    <group name="transform3" />
                    </group>
                    <group name="pCylinder5">
                    <group name="transform7" />
                    </group>
                    <group
                    name="pCube1"
                    position={[-3.224, 2.863, 2.904]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[1.383, 0.999, 0.583]}
                    >
                    <group name="transform6" />
                    </group>
                    <group
                    name="pCone1"
                    position={[-3.229, 2.452, 3.62]}
                    scale={[1.072, 2.111, 1.072]}
                    >
                    <group name="transform5" />
                    </group>
                    <group name="left" position={[-100.1, 0, 0]}>
                    <group name="Object_21" />
                    </group>
                    <group
                    name="pCube2"
                    position={[2.446, 0.135, -0.566]}
                    scale={[0.883, 0.964, 1]}
                    >
                    <group name="transform8" />
                    </group>
                    <group
                    name="pCube3"
                    position={[-0.204, 0.135, 4.836]}
                    rotation={[-Math.PI, -1.032, -Math.PI]}
                    scale={[0.883, 0.964, 1]}
                    >
                    <group name="transform9" />
                    </group>
                    <group
                    name="pCube4"
                    position={[-3.5, 0.135, -0.171]}
                    rotation={[-Math.PI, 1.065, -Math.PI]}
                    scale={[0.883, 0.964, 1]}
                    >
                    <group name="transform10" />
                    </group>
                    <group name="pCube5">
                    <mesh
                        name="pCube5_lambert1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube5_lambert1_0.geometry}
                        material={materials.lambert1}
                    />
                    </group>
                </group>
                </group>
            </group>
            </group>
        </group>
        </group>
        </group>
    );
}

export default Rockets;
useGLTF.preload("/assets/models/rockets/rocket.glb");