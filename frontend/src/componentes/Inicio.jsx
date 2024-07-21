import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";



function Inicio(){
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm()

    function verSimulacion(param1,param2){
        navigate(`/${param1}/${param2}`)
    }
    
    function onSubmit(data){
        verSimulacion(data.param1, data.param2)
    }


    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mt-3">
            <h1>nombre tema final</h1>
        </div>

        <div className="row text-center mt-5">
            <label className="col-3 h5"> Param1: </label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('param1', {required: 'El param1 es requerido'})}></input>
            {errors.param1 && <span className='text-danger'>{errors.param1.message}</span>}
            </div>
        </div>

        <div className="row mt-3">
            <label className="col-3 h5"> Param2:</label>
            <div className="col-5">
            <input type="text" className="form-control col-3 text-start" {...register('param2', {required: 'param2 es requerido'})}></input>
            {errors.param2 && <span className="text-danger">{errors.param2.message}</span>}
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