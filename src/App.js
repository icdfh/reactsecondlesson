import './App.css';
import Qwerty from './Qwerty';




function App() {
  const tasks = [
    {
      id:1, name:'Выучить React'
    },
    {
      id:2, name:'Сделать домашку'
    },
    {
      id:3, name:'Прогуляться на свежем воздухе'
    }
  ]
  return(
    <div>
      <h1>Список заданий</h1>
      {tasks.map((task) =>(
        <Qwerty key={task.id} name={task.name}/>
      ))}
    </div>
    
  );
}
export default App;
