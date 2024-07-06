import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, markCompleted } from '../../Store/store';

const Tasks = () => {
  const taskCart = useSelector(state => state.tasks);
  const [Active, setActive] = useState(false);
  const [Completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  // filter Tasks based on status
  const filteredTasks = taskCart.filter(
    (task) =>
      (Active && task.status === 'Active') ||
      (Completed && task.status === 'Completed') ||
      (!Active && !Completed)
  );

  return (
    <div id='Tasks-section' className='w-75 p-4' style={{ margin: '20px auto', boxShadow: '6px 6px 10px black' }}>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="Active"
          onChange={() => setActive(!Active)}
        />
        <label className="form-check-label" htmlFor="Active" style={{ color: '#ffffff' }}>
          Active
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="Completed"
          onChange={() => setCompleted(!Completed)}
        />
        <label className="form-check-label" htmlFor="Completed" style={{ color: '#ffffff' }}>
          Completed
        </label>
      </div>

      {/* Tasks Rendering form top - bottom (Reverse order)*/}
      {filteredTasks &&
        filteredTasks.reverse().map((task, index) => (
          <div className="card" key={index} style={{ width: '100%', margin: '20px auto' }}>
            <div className="card-header">Status: <span style={{ color: 'green' }}>{task.status}</span></div>
            <div className="card-body">
              <h5 className="card-title">{task.value}</h5>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => dispatch(markCompleted(task.id))}
                  style={{ color: 'ffffff' }}
                  disabled={task.disabled}
                >
                  Mark as Completed
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => dispatch(deleteTask(task.id))}
                  style={{ color: 'ffffff' }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Tasks;
