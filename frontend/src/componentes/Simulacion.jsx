import {useParams} from "react-router-dom";
import axios from 'axios'
import {useEffect, useState} from 'react'

function Simulacion(){
    const {param1, param2} = useParams()
    const [tabla, setTabla] = useState(0) 
    

    async function getSimulacion(){
        const {data} = await axios.get(`http://localhost:8000/simulacion/${param1}/${param2}`)
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
                    <h2>Línea Inicio Simulación: {tabla.lineaInicioSimulacion}</h2>
                </>
            ) : (
                <h1>Cargando...</h1>
            )
        }
        </>
    )
}
export default Simulacion