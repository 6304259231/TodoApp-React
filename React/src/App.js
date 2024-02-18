import React, { useState , createContext } from 'react';
import './App.css';
import Addtask from './Todo/Components/Addtask';
import Tasks from './Todo/Components/Tasks';

export const myContext = createContext();

function App() {
  const [taskCart , setTaskCart] = useState([{id : 1 ,value : "Example Task to do now" , status : "Active"}])
  
  return (
    <myContext.Provider value={[taskCart , setTaskCart]}>
      <div className="App">
          <Addtask/>
          <Tasks/>
      </div>
    </myContext.Provider>
  );
}

export default App;
