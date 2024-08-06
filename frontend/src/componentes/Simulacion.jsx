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
        <div>
        {tabla.simulacion ? (
        
            <table className="table table-dark table-striped">
                <tbody>
                {tabla.simulacion.map((outerArray, outerIndex) =>
                    outerArray.map((middleArray, middleIndex) =>
                        middleArray.map((innerArray, innerIndex) => (
                            <tr key={`${outerIndex}-${middleIndex}-${innerIndex}`}>
                                {innerArray.map((item, itemIndex) => (
                                    <td key={itemIndex}>
                                        {item}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )
                )}
                </tbody>
            </table>
            ) : (
            
            <h3>{tabla && tabla.colasMaximas}</h3>
            )}
        </div>
            
        </>
    )
}
export default Simulacion