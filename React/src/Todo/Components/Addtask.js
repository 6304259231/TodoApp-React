import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../Store/store';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const taskCart = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const lastId = taskCart.length ? taskCart[taskCart.length - 1].id : 0;

  const taskInputHandler = (value) => {
    setInputValue(value);
  };

  const submitHandler = () => {
    if (inputValue) {
      const newId = lastId + 1;
      dispatch(addTask({ id: newId, value: inputValue, status: 'Active' }));
      setInputValue('');
    } else {
      alert('Please enter task name before adding!');
    }
  };

  const addToTask = {
    width: '75%',
    margin: '20px auto',
    boxShadow: '5px 5px 8px black',
  };

  return (
    // Add task input field
    <div id='add-task-section' className='p-3' style={addToTask}>
      <h2 style={{ fontFamily: 'Rubik', color: '#ffffff', textAlign: 'center' }}>Task Manager</h2>
      <div className="input-group flex-nowrap" style={{ width: '75%', margin: '20px auto', minHeight: '60px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Add your task here.."
          value={inputValue}
          onChange={(event) => taskInputHandler(event.target.value)}
        />
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={submitHandler}
          style={{ color: 'ffffff', marginLeft: '10px' }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
