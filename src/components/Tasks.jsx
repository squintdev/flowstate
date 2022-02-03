import React, { useState, useCallback, useEffect } from 'react';

const Tasks = () => {
  // hooks
  const [newTask, setNewTask] = useState('');

  const [tasks, setTasks] = useState(() => {

    //get stored tasks
    const saved = localStorage.getItem('tasks');

    if (saved === null){
      console.log('null');
      localStorage.setItem('tasks', JSON.stringify([]));
      window.location.reload();
    }

    //parse to JSON
    const parsed = JSON.parse(saved);

    //filter completed tasks from array
    const clean = parsed.filter(checkDone);

    //function for identifying complete tasks
    function checkDone(task) {
      return !task.done;
    }

    const initialValue = clean;
    return initialValue || '';
  });


  const onNewTaskChange = useCallback((event) => {
    setNewTask(event.target.value);
  }, []);

  const formSubmitted = useCallback((event) => {
    event.preventDefault();

    if(!newTask.trim()) return;

    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        content: newTask,
        done: false,
      }
    ]);

    setNewTask('');
  }, [newTask, tasks]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((task, index) => (event) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1, {
        ...task,
        done: !task.done
      });
      setTasks(newTasks);
  }, [tasks]);

    return (
        <div className="w-full m-auto mt-10 px-4 text-center lg:w-1/2">

            <form onSubmit={formSubmitted} autoComplete="off">
                <div className="flex justify-between">
                  <input
                      className="placeholder:text-primary-dark border-solid border-4 lg:border-8 border-primary-dark w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-retro-screen"
                      id="newTask"
                      placeholder="Enter a new task..."
                      name="newTask"
                      value={newTask} 
                      onChange={onNewTaskChange} 
                  />
                  <button className="border-solid border-4 lg:border-8 border-primary-dark bg-retro-shadow hover:bg-dark-active text-retro-screen hover:text-retro-screen w-1/5 font-bold text-3xl py-2 px-3">Add</button>
                </div>

            </form>

                  <ul className="my-10 text-left taskList">
                    {tasks.map((task, index) => {
                      return (
                       

                            <li key={task.content+task.index}className={task.done ? 'w-full py-2 px-4 mb-1 flex justify-between done italic line-through border-b-2 text-xl lg:text-3xl' : 'w-full py-2 px-4 mb-1 flex justify-between font-bold border-b-2 text-xl lg:text-3xl'}>
                            
                            {task.content.length > 35 ? task.content.slice(0,35) + '...' : task.content}
                
                            <input
                                value={task.done}
                                type="checkbox"
                                className="appearance-none bg-retro-screen cursor-pointer border-2 w-6 h-6 checked:bg-retro-shadow"
                                onChange={addTask(task, index)}
                            />
                
                
                            </li>                            
                              
                      );

                    })}

                  </ul>                  

        </div>
    );
};

export default Tasks;
