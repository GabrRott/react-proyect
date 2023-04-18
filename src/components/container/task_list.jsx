import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/forms/task';

const TaskListComponent = () => {

  const defaultTask = new Task( 'Example', 'Default description', false, LEVELS.NORMAL);

  // const changeState = (id) =>{
  //   console.log('To do: Cambiar estado de un tarea')
  // }d

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

