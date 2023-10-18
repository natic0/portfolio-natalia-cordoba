

import {createRoot} from "react-dom/client";
import Experience from "./Experience";
import Info from "./Info/Info";
import "./styles.css"
import { Canvas } from "@react-three/fiber";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        <Info name = {"NATALIA CORDOBA"}/>
        <Info biography={"Estudiante de Ingeniería de Sistemas en la universidad del Valle"}/>
        <Canvas camera = {{position: [2,0,5]}}>
            <Experience/>
        </Canvas>
    </>
);

