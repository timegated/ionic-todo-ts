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

  const { localStorage } = window;

  const addTask: AddTask = (newTask: any) => {
    setTasks([...tasks, { id: Math.floor(Math.random() * 1000), text: newTask, complete: false }])
    localStorage.setItem( 'tasks', JSON.stringify(tasks) )
  }

  console.log(tasks);
  console.log(localStorage);

  return (
    <>
      <TaskForm addTask={addTask}></TaskForm>
    </>
  )
}

export default CreateTask
