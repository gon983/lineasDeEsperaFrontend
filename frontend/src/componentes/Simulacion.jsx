import {useParams} from "react-router-dom";
import axios from 'axios'
import {useEffect, useState} from 'react'

function Simulacion(){
    const {cantidadLineasASimular,duracionSimulacion, lineaInicioVisualizacion, lineaFinVisualizacion, cantidadSurtidores, cantidadEmpleadosGomeria, 
        cantidadEmpleadosVentaAccesorios, llegadaClientesMedia, llegadaClientesDesviacion, aDuracionCargaCombustible, bDuracionCargaCombustible,
        aDuracionAtGomeria, bDuracionAtGomeria, aDuracionVentaAccesorios, bDuracionVentaAccesorios} = useParams()
    const [tabla, setTabla] = useState(0) 
    

    async function getSimulacion(){
        const {data} = await axios.get(`http://localhost:8000/simulacion/${cantidadLineasASimular}/${duracionSimulacion}/${lineaInicioVisualizacion}/${lineaFinVisualizacion}/${cantidadSurtidores}/${cantidadEmpleadosGomeria}/${cantidadEmpleadosVentaAccesorios}/${llegadaClientesMedia}/${llegadaClientesDesviacion}/${aDuracionCargaCombustible}/${bDuracionCargaCombustible}/${aDuracionAtGomeria}/${bDuracionAtGomeria}/${aDuracionVentaAccesorios}/${bDuracionVentaAccesorios}`)
        setTabla(data)
    }

    useEffect(() => {
        getSimulacion();
    }, []);


    return (
        <>
        {tabla ? (
                <>
                    <h1>Duración Simulación: {tabla.duracionSimulacion}</h1>
                    <h2>Línea Inicio Simulación: {tabla.lineaInicioVisualizacion}</h2>
                    <h3>Linea fin visualizacion: {tabla.lineaFinVisualizacion}</h3>
                </>
            ) : (
                <h1>Cargando...</h1>
            )
        }
        </>
    )
}
export default Simulacion