import React ,{useState , useContext} from 'react';
import { myContext } from '../../App';

const Addtask = () => {
    const [taskCart , setTaskCart] = useContext(myContext)
    const [inputValue, setInputValue] = useState('');
    const [lastId, setLastId] = useState(1);
   
    const taskInputHandler = (value)=>{
        setInputValue(value)
    }

    const submitHandler = ()=>{
        if(inputValue){
            const newId = lastId + 1;
            setLastId(newId);
            let newTask = [ ...taskCart, {id : newId, value : inputValue , status : "Active"}]
            setTaskCart(newTask)
            console.log(newTask)
            setInputValue('');
        }
        else{
           alert(' ! please enter task name before adding !')
        }
    }

    const addToTask = {
        width : '75%',
        margin : '20px auto',
        boxShadow : '5px 5px 8px black'
    }
    
    return (
        <div id='add-task-section' className='p-3' style={addToTask}>
           <h2 style={{fontFamily : 'Rubik' , color : '#ffffff' , textAlign : 'center'}}>Task manager</h2>
            <div className="input-group flex-nowrap" style={{width : '75%' , margin : '20px auto' , minHeight : '60px'}}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add your task here.."
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    value={inputValue}
                    onChange={(event)=>{
                        taskInputHandler(event.target.value)
                    }}
                />
                <button type="button" className="btn btn-outline-warning" onClick={submitHandler} style={{color : 'ffffff' , marginLeft : '10px'}}>Add</button>
            </div>
        </div>
    )
}

export default Addtask