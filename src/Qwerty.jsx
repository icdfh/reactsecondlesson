import './Qwerty.css'
import { useState } from 'react';


function Qwerty(props) {

   const [isCompleted, setIsCompleted] = useState(false)

  return(
   <div className='container'>
    <p className={ isCompleted ? 'completed' : 'notCompleted'}>
        {props.name}
    </p>
    <button onClick={() => setIsCompleted(!isCompleted)}>
        {isCompleted ? 'Отменить' : 'Завершить'}
    </button>
    <button>
        Change
    </button>
   </div>
  );
}
export default Qwerty;
