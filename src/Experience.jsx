import Moon from "./World/Moon"
import Lights from "./World/Staging/Lights"
import Rockets from "./World/Rockets"
import Environments from "./World/Staging/Environments"

const Experience = () => {
    return ( 
        <>
            <Environments/>
            <Moon  position = {[2.3,-1.5,1]} scale = {1.4}/>
            <Lights/>
            <Rockets position = {[-17,3,-3]} scale = {0.59}/>
        </>
    )
}

export default Experience;

