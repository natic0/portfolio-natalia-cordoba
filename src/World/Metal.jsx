import { useGLTF, useTexture } from "@react-three/drei";
import React from "react";


const Metal = (props) => {
    const {nodes} = useGLTF("/assets/models/metal/rust_coarse_01_4k.gltf");
    const PATH = "/assets/textures/metal/"

    const propsTexture = useTexture({
        map: PATH + 'rust_coarse_01_diff_4k.jpg'
    })
    return(
        <group {...props} dispose={null}>
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Metal.geometry}
            >
                    <meshStandardMaterial {...propsTexture}/>
                </mesh>
        </group>
    )
}

export default Metal;
useGLTF.preload("/assets/models/metal/rust_coarse_01_4k.gltf");