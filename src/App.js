import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



function App() {
  // toggle the add task form
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([{
    id: 2,
    text: "practice",
    day: "tue",
    reminder: true
  },
  {
    id: 3,
    text: "makes perf",
    day: "wed",
    reminder: false
  }])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header 
      onAdd={()=> setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask &&
        <AddTask onAdd={addTask} />
      }
      {tasks.length > 0 ? (
        <Tasks onDelete={deleteTask} tasks={tasks}
          onToggle={toggleReminder} />
      ) : (
        "No tasks to show "
      )}
    </div>
  );
}
export default App;
