import {useParams} from "react-router-dom";

function Simulacion(){
    const {param1, param2} = useParams()


    return (
        <>
        <h1>El parametro 1 es {param1}</h1>
        <h2>El parametro 2 es {param2}</h2>
        </>
    

    )
}
export default Simulacion