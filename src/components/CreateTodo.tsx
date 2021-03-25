import React, { useState } from 'react'
import TaskForm from './TaskForm';

type Tasks = {
  id: number,
  text: string,
  complete: boolean
}

type AddTask = (newTask: string) => void;

const CreateTask: React.FC = () => {
  const [tasks, setTasks] = useState<Array<Tasks>>([])

  // const { localStorage } = window;

  // console.log(localStorage);

  const addTask: AddTask = (newTask: any) => {
    setTasks([...tasks, { id: Math.floor(Math.random() * 1000), text: newTask, complete: false }])
    // localStorage.setItem('tasks', tasks.toString() )
  }

  console.log(tasks);

  return (
    <>
      <TaskForm addTask={addTask}></TaskForm>
    </>
  )
}

export default CreateTask
