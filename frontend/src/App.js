import { Routes, Route } from "react-router-dom";
import Inicio from './componentes/Inicio'
import Simulacion from "./componentes/Simulacion";


function App(){
    return (
        <div className="container text-center">
        <Routes>
        <Route path='/' element={<Inicio></Inicio>} ></Route>
        <Route path='/simulacion/:cantidadLineasASimular/:duracionSimulacion/:lineaInicioVisualizacion/:lineaFinVisualizacion/:cantidadSurtidores/:cantidadEmpleadosGomeria/:cantidadEmpleadosVentaAccesorios/:llegadaClientesMedia/:llegadaClientesDesviacion/:aDuracionCargaCombustible/:bDuracionCargaCombustible/:aDuracionAtGomeria/:bDuracionAtGomeria/:aDuracionVentaAccesorios/:bDuracionVentaAccesorios' element={<Simulacion></Simulacion>} ></Route>
        </Routes>
        </div>
    )
}

export default App