import {useParams} from "react-router-dom";
import axios from 'axios'
import {useEffect, useState} from 'react'

function Simulacion(){
    const {cantidadLineasASimular,duracionSimulacion, lineaInicioVisualizacion, lineaFinVisualizacion, cantidadSurtidores, cantidadEmpleadosGomeria, 
        cantidadEmpleadosVentaAccesorios, llegadaClientesMedia, llegadaClientesDesviacion, aDuracionCargaCombustible, bDuracionCargaCombustible,
        aDuracionAtGomeria, bDuracionAtGomeria, aDuracionVentaAccesorios, bDuracionVentaAccesorios} = useParams()
    const [tabla, setTabla] = useState(null) 
    

    async function getSimulacion(){
        const {data} = await axios.get(`http://localhost:8000/simulacion/${cantidadLineasASimular}/${duracionSimulacion}/${lineaInicioVisualizacion}/${lineaFinVisualizacion}/${cantidadSurtidores}/${cantidadEmpleadosGomeria}/${cantidadEmpleadosVentaAccesorios}/${llegadaClientesMedia}/${llegadaClientesDesviacion}/${aDuracionCargaCombustible}/${bDuracionCargaCombustible}/${aDuracionAtGomeria}/${bDuracionAtGomeria}/${aDuracionVentaAccesorios}/${bDuracionVentaAccesorios}`)
        setTabla(data)
    }

    useEffect(() => {
        getSimulacion();
    }, []);


    return (
        <>
        <table className="table table-dark table-striped">
                <tbody>
                    {tabla && tabla.simulacion.map((element, index) => (
                        <tr key={index}>
                            {Array.isArray(element) ? (
                                element.map((subElement, subIndex) => (
                                    <td key={subIndex}>{subElement}</td>
                                ))
                            ) : (
                                <td>{element}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Simulacion