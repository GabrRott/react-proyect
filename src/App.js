import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';

import UserData from './components/container/user_data';
import Example1 from './hooks/Example1';
import Example2 from './hooks/Example2';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <TaskListComponent task='defaultTask'></TaskListComponent> */}
        <UserData></UserData> 
        {/* ejemplo de uso de jooks */}
     
        {/* <Example1></Example1>      */}
        {/* <Example2></Example2> */}
=======


      </header>
    </div>
  );
}

export default App;
