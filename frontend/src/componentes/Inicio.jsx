import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import { useEffect , useState} from "react";



function Inicio(){
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}, setValue} = useForm()
    const [isSubmitting, setIsSubmitting] = useState(false)

    function verSimulacion(cantidadLineasASimular,duracionSimulacion,lineaInicioVisualizacion, lineaFinVisualizacion, cantidadSurtidores, cantidadEmpleadosGomeria, 
        cantidadEmpleadosVentaAccesorios, llegadaClientesMedia, llegadaClientesDesviacion, aDuracionCargaCombustible, bDuracionCargaCombustible,
        aDuracionAtGomeria, bDuracionAtGomeria, aDuracionVentaAccesorios, bDuracionVentaAccesorios){

        navigate(`/simulacion/${cantidadLineasASimular}/${duracionSimulacion}/${lineaInicioVisualizacion}/${lineaFinVisualizacion}/${cantidadSurtidores}/${cantidadEmpleadosGomeria}/${cantidadEmpleadosVentaAccesorios}/${llegadaClientesMedia}/${llegadaClientesDesviacion}/${aDuracionCargaCombustible}/${bDuracionCargaCombustible}/${aDuracionAtGomeria}/${bDuracionAtGomeria}/${aDuracionVentaAccesorios}/${bDuracionVentaAccesorios}`)
    }
    
    async function onSubmit(data){
        setIsSubmitting(true)
        verSimulacion(data.cantidadLineasASimular,data.duracionSimulacion, data.lineaInicioVisualizacion, data.lineaFinVisualizacion, data.cantidadSurtidores, data.cantidadEmpleadosGomeria, 
            data.cantidadEmpleadosVentaAccesorios, data.llegadaClientesMedia, data.llegadaClientesDesviacion, data.aDuracionCargaCombustible, data.bDuracionCargaCombustible,
            data.aDuracionAtGomeria, data.bDuracionAtGomeria, data.aDuracionVentaAccesorios, data.bDuracionVentaAccesorios)
        setIsSubmitting(false)
    }

    function setDefaultValues() {
        setValue("cantidadLineasASimular", 10);
        setValue("duracionSimulacion", 1);
        setValue("lineaInicioVisualizacion", 1);
        setValue("lineaFinVisualizacion", 10);
        setValue("cantidadSurtidores", 3);
        setValue("cantidadEmpleadosGomeria", 2);
        setValue("cantidadEmpleadosVentaAccesorios", 1);
        setValue("llegadaClientesMedia", 24);
        setValue("llegadaClientesDesviacion", 23);
        setValue("aDuracionCargaCombustible", 45);
        setValue("bDuracionCargaCombustible", 55);
        setValue("aDuracionAtGomeria", 600);
        setValue("bDuracionAtGomeria", 1560);
        setValue("aDuracionVentaAccesorios", 60);
        setValue("bDuracionVentaAccesorios", 300);
    }

    useEffect(() => {
        setDefaultValues();
    }, []);


    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mt-3">
            <h1>Simulacion Estacion de Servicio</h1>
            <div className="row mt-4 justify-content-center">
            <button type="submit" className="btn btn-success col-1" disabled={isSubmitting}>Simular</button>
        </div>
        </div>

        <div className="row text-center mt-5">
            <label className="col-3 h5"> Cantidad de lineas a Simular: </label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('cantidadLineasASimular', {required: 'El cantidadLineasASimular es requerido', validate: {
                isNumeric: (value) => !isNaN(value) || 'Debe ser numérico',
                maxValue: (value) => parseInt(value) <= 100000 || 'Debe ser igual o inferior a 10,000'
            }})}></input>
            {errors.cantidadLineasASimular && <span className='text-danger'>{errors.cantidadLineasASimular.message}</span>}
            </div>
        </div>

        {/* <div className="row mt-3">
            <label className="col-3 h5"> Duracion de la simulacion:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('duracionSimulacion', {required: 'duracionSimulacion es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.duracionSimulacion && <span className="text-danger">{errors.duracionSimulacion.message}</span>}
            </div>
            
        </div> */}

        <div className="row mt-3">
            <label className="col-3 h5"> Numero de linea de inicio de visualizacion:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('lineaInicioVisualizacion', {required: 'lineaInicioVisualizacion es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.lineaInicioVisualizacion && <span className="text-danger">{errors.lineaInicioVisualizacion.message}</span>}
            </div>
            
        </div>

        <div className="row mt-3">
            <label className="col-3 h5"> Numero de linea de fin de visualizacion:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('lineaFinVisualizacion', {required: 'lineaFinVisualizacion es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.lineaFinVisualizacion && <span className="text-danger">{errors.lineaFinVisualizacion.message}</span>}
            </div>
            
        </div>

        <div className="row mt-3">
            <label className="col-3 h5"> Cantidad de surtidores:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('cantidadSurtidores', {required: 'cantidadSurtidores es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.cantidadSurtidores && <span className="text-danger">{errors.cantidadSurtidores.message}</span>}
            </div>
            
        </div>

        <div className="row mt-3">
            <label className="col-3 h5"> Cantidad de empleados en gomeria:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('cantidadEmpleadosGomeria', {required: 'cantidadEmpleadosGomeria es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.cantidadEmpleadosGomeria && <span className="text-danger">{errors.cantidadEmpleadosGomeria.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> Cantidad de empleados en venta de accesorios:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('cantidadEmpleadosVentaAccesorios', {required: 'cantidadEmpleadosVentaAccesorios es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.cantidadEmpleadosVentaAccesorios && <span className="text-danger">{errors.cantidadEmpleadosVentaAccesorios.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> Media de la llegada de clientes:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('llegadaClientesMedia', {required: 'llegadaClientesMedia es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.llegadaClientesMedia && <span className="text-danger">{errors.llegadaClientesMedia.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> Desviacion de la llegada de clientes:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('llegadaClientesDesviacion', {required: 'llegadaClientesDesviacion es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.llegadaClientesDesviacion && <span className="text-danger">{errors.llegadaClientesDesviacion.message}</span>}
            </div>
            
        </div>
        <h7> Los siguientes inputs son para las distribuciones uniformes de los fines de atencion</h7>
        <div className="row mt-3">
            <label className="col-3 h5"> "A" Minima duracion en carga de combustible:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('aDuracionCargaCombustible', {required: 'aDuracionCargaCombustible es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.aDuracionCargaCombustible && <span className="text-danger">{errors.aDuracionCargaCombustible.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> "B" Maxima duracion en carga de combustible:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('bDuracionCargaCombustible', {required: 'bDuracionCargaCombustible es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.bDuracionCargaCombustible && <span className="text-danger">{errors.bDuracionCargaCombustible.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> "A" Minima duracion en atencion de la gomeria:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('aDuracionAtGomeria', {required: 'aDuracionAtGomeria es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.aDuracionAtGomeria && <span className="text-danger">{errors.aDuracionAtGomeria.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> "B" Maxima duracion en atencion de la gomeria:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('bDuracionAtGomeria', {required: 'bDuracionAtGomeria es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.bDuracionAtGomeria && <span className="text-danger">{errors.bDuracionAtGomeria.message}</span>}
            </div>
            
        </div>

        <div className="row mt-3">
            <label className="col-3 h5"> "A" Minima duracion en venta accesorios:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('aDuracionVentaAccesorios', {required: 'aDuracionVentaAccesorios es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.aDuracionVentaAccesorios && <span className="text-danger">{errors.aDuracionVentaAccesorios.message}</span>}
            </div>
            
        </div>
        <div className="row mt-3">
            <label className="col-3 h5"> "B" Maxima duracion en venta accesorios:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('bDuracionVentaAccesorios', {required: 'bDuracionVentaAccesorios es requerido', validate: (value) => { return !isNaN(value) || 'Debe ser numérico' }})}></input>
            {errors.bDuracionVentaAccesorios && <span className="text-danger">{errors.bDuracionVentaAccesorios.message}</span>}
            </div>
            
        </div>

        
        
        </form>
        </>
    
    )
}
export default Inicio