import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, PointLight, SpotLightHelper } from "three";

const Lights = () => {
    const directionalLight = useRef();
    const spotLightRef = useRef();
    useHelper(directionalLight, DirectionalLightHelper);

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={5} />
            <pointLight position={[-17,3,10]} intensity={20} color="blue" />

            <spotLight 
                ref={spotLightRef}
                position={[2.3,0,1]}
                angle = {Math.PI/12}
                intensity={500}
                color={"white"}
                penumbra={1}
                distance={8}
            />
            <hemisphereLight
                intensity={2}
                color = {"blue"}
            />
        </>
    );
}

export default Lights;
