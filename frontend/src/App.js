import { Routes, Route } from "react-router-dom";
import Inicio from './componentes/Inicio'
import Simulacion from "./componentes/Simulacion";


function App(){
    return (
        <div className="container text-center">
        <Routes>
        <Route path='/' element={<Inicio></Inicio>} ></Route>
        <Route path='/simulacion/:param1/:param2' element={<Simulacion></Simulacion>} ></Route>
        </Routes>
        </div>
    )
}

export default App