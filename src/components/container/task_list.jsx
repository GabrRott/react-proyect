import React, { useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/forms/task';

const TaskListComponent = () => {

  const defaultTask = new Task( 'Example', 'Default description', false, LEVELS.NORMAL);

  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida del componente
  useEffect(()=>{
    console.log('Task State has been modified');
    return () =>{
      console.log('TaskList component es going to unmount...');
    }
  },  [tasks])
  

   const changeCompleted = (id) =>{
     console.log('To do: Cambiar estado de un tarea')
   }

  return (
    <div>
      <div>
        Your Task:  
      </div>
      {/* To do: Aplicar un for/Map para renderizar una lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}



export default TaskListComponent;

