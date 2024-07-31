import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import axios from 'axios'


function Inicio(){
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm()

    function verSimulacion(cantidadLineasASimular,duracionSimulacion,lineaInicioVisualizacion, lineaFinVisualizacion, cantidadSurtidores, cantidadEmpleadosGomeria, 
        cantidadEmpleadosVentaAccesorios, llegadaClientesMedia, llegadaClientesDesviacion, aDuracionCargaCombustible, bDuracionCargaCombustible,
        aDuracionAtGomeria, bDuracionAtGomeria, aDuracionVentaAccesorios, bDuracionVentaAccesorios){

        navigate(`/simulacion/${cantidadLineasASimular}/${duracionSimulacion}/${lineaInicioVisualizacion}/${lineaFinVisualizacion}/${cantidadSurtidores}/${cantidadEmpleadosGomeria}/${cantidadEmpleadosVentaAccesorios}/${llegadaClientesMedia}/${llegadaClientesDesviacion}/${aDuracionCargaCombustible}/${bDuracionCargaCombustible}/${aDuracionAtGomeria}/${bDuracionAtGomeria}/${aDuracionVentaAccesorios}/${bDuracionVentaAccesorios}`)
    }
    
    async function onSubmit(data){
        verSimulacion(data.cantidadLineasASimular,data.duracionSimulacion, data.lineaInicioVisualizacion, data.lineaFinVisualizacion, data.cantidadSurtidores, data.cantidadEmpleadosGomeria, 
            data.cantidadEmpleadosVentaAccesorios, data.llegadaClientesMedia, data.llegadaClientesDesviacion, data.aDuracionCargaCombustible, data.bDuracionCargaCombustible,
            data.aDuracionAtGomeria, data.bDuracionAtGomeria, data.aDuracionVentaAccesorios, data.bDuracionVentaAccesorios)
    }


    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mt-3">
            <h1>nombre tema final</h1>
        </div>

        <div className="row text-center mt-5">
            <label className="col-3 h5"> cantidadLineasASimular: </label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('cantidadLineasASimular', {required: 'El cantidadLineasASimular es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.cantidadLineasASimular && <span className='text-danger'>{errors.cantidadLineasASimular.message}</span>}
            </div>
        </div>

        <div className="row mt-3">
            <label className="col-3 h5"> duracionSimulacion:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('duracionSimulacion', {required: 'duracionSimulacion es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.duracionSimulacion && <span className="text-danger">{errors.duracionSimulacion.message}</span>}
            </div>
            
        </div>

        <div className="row mt-3">
            <label className="col-3 h5"> lineaInicioVisualizacion:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('lineaInicioVisualizacion', {required: 'lineaInicioVisualizacion es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.lineaInicioVisualizacion && <span className="text-danger">{errors.lineaInicioVisualizacion.message}</span>}
            </div>
            
        </div>

        <div className="row mt-3">
            <label className="col-3 h5"> lineaFinVisualizacion:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('lineaFinVisualizacion', {required: 'lineaFinVisualizacion es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.lineaFinVisualizacion && <span className="text-danger">{errors.lineaFinVisualizacion.message}</span>}
            </div>
            
        </div>

        <div className="row mt-3">
            <label className="col-3 h5"> cantidadSurtidores:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('cantidadSurtidores', {required: 'cantidadSurtidores es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.cantidadSurtidores && <span className="text-danger">{errors.cantidadSurtidores.message}</span>}
            </div>
            
        </div>

        <div className="row mt-3">
            <label className="col-3 h5"> cantidadEmpleadosGomeria:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('cantidadEmpleadosGomeria', {required: 'cantidadEmpleadosGomeria es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.cantidadEmpleadosGomeria && <span className="text-danger">{errors.cantidadEmpleadosGomeria.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> cantidadEmpleadosVentaAccesorios:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('cantidadEmpleadosVentaAccesorios', {required: 'cantidadEmpleadosVentaAccesorios es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.cantidadEmpleadosVentaAccesorios && <span className="text-danger">{errors.cantidadEmpleadosVentaAccesorios.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> llegadaClientesMedia:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('llegadaClientesMedia', {required: 'llegadaClientesMedia es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.llegadaClientesMedia && <span className="text-danger">{errors.llegadaClientesMedia.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> llegadaClientesDesviacion:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('llegadaClientesDesviacion', {required: 'llegadaClientesDesviacion es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.llegadaClientesDesviacion && <span className="text-danger">{errors.llegadaClientesDesviacion.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> aDuracionCargaCombustible:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('aDuracionCargaCombustible', {required: 'aDuracionCargaCombustible es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.aDuracionCargaCombustible && <span className="text-danger">{errors.aDuracionCargaCombustible.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> bDuracionCargaCombustible:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('bDuracionCargaCombustible', {required: 'bDuracionCargaCombustible es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.bDuracionCargaCombustible && <span className="text-danger">{errors.bDuracionCargaCombustible.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> aDuracionAtGomeria:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('aDuracionAtGomeria', {required: 'aDuracionAtGomeria es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.aDuracionAtGomeria && <span className="text-danger">{errors.aDuracionAtGomeria.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> bDuracionAtGomeria:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('bDuracionAtGomeria', {required: 'bDuracionAtGomeria es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.bDuracionAtGomeria && <span className="text-danger">{errors.bDuracionAtGomeria.message}</span>}
            </div>
            
        </div>

        <div className="row mt-3">
            <label className="col-3 h5"> aDuracionVentaAccesorios:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('aDuracionVentaAccesorios', {required: 'aDuracionVentaAccesorios es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.aDuracionVentaAccesorios && <span className="text-danger">{errors.aDuracionVentaAccesorios.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> bDuracionVentaAccesorios:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('bDuracionVentaAccesorios', {required: 'bDuracionVentaAccesorios es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.bDuracionVentaAccesorios && <span className="text-danger">{errors.bDuracionVentaAccesorios.message}</span>}
            </div>
            
        </div>

        <div className="row mt-4 justify-content-center">
            <button type="submit" className="btn btn-success col-1">Simular</button>
        </div>
        
        </form>
        </>
    
    )
}
export default Inicio