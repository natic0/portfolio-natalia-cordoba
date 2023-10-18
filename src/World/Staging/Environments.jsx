import { Stars, Cloud } from "@react-three/drei";

const SpaceEnvironment = () => {
    return (
        <>
             <Stars
                radius={100} // Radius of the inner sphere (default=100)
                depth={50} // Depth of area where stars should fit (default=50)
                count={5000} // Amount of stars (default=5000)
                factor={2} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
            />

            <Cloud
                position={[1.2, -4.5, 2]} // Posición de las nubes
                size={0.1} // Tamaño de las nubes
                opacity={0.3} // Opacidad de las nubes
                falloff={70} // Caída de las nubes
            />
        </>
    );
}

export default SpaceEnvironment;
