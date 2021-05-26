import React, { Fragment } from 'react';
import './home.css';

var taskvalue = '';

function Home() {
  function handleInputSpace(e) {
    taskvalue = e.target.value;
  }

  function handleAddBtn(e) {
    if (taskvalue) {
      e.preventDefault();
      makeHTML();
    }

    taskvalue = '';
  }

  function makeHTML() {
    let div = document.createElement('div');
    let checkbox = document.createElement('input');
    let taskcheckwrapper = document.createElement('div');

    var taskListSpace = document.getElementById('taskListSpace');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'check-box');

    div.setAttribute('class', 'each-task');
    div.innerText = taskvalue;
    if (taskListSpace) {
      taskcheckwrapper.appendChild(div);
      taskcheckwrapper.appendChild(checkbox);
      taskListSpace.appendChild(taskcheckwrapper);
    }
    taskcheckwrapper.setAttribute('class', 'task-check-wrapper');
  }

  function handleClearBtn() {
    const taskdivs = document.querySelectorAll('.task-check-wrapper');
    const tasklist = document.querySelector('.task-list');
    console.log(taskdivs);
    console.log(tasklist);
    taskdivs.forEach((task) => {
      tasklist.removeChild(task);
    });
  }
  return (
    <Fragment>
      <div className='container'>
        <div className='wrapper'>
          <h3 className='schedule-heading'>Schedule Today's Tasks</h3>
          <h4 className=''>Never Settle !</h4>
          <div className='input-task-area'>
            <input
              onChange={handleInputSpace}
              id='addInputSpace'
              className='search-input'
              type='search'
              placeholder='Enter your task'
            />
            <input
              onClick={handleAddBtn}
              id='addBtn'
              className='submit-btn'
              type='submit'
              value='Add task'
            />
            <input
              onClick={handleClearBtn}
              id='clearBtn'
              className='submit-btn'
              type='submit'
              value='Clear All'
            />
          </div>

          <div id='taskListSpace' className='task-list'></div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
