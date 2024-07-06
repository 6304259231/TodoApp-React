import React from 'react';
import './App.css';
import AddTask from './Todo/Components/Addtask';
import Tasks from './Todo/Components/Tasks';
import store from './Store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTask />
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
