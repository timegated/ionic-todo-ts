import React from 'react'
import TaskListItem from './TaskListItem';
import styled from 'styled-components';

type ToggleComplete = (selectedTask: string) => void;
type DeleteTask = (id: number) => void;
type HandleShowModal = () => void;

type Tasks = {
  id: number,
  text: string,
  complete: boolean
}

interface TaskListProps {
  tasks: Array<Tasks>,
  toggleComplete: ToggleComplete,
  deleteTask: DeleteTask,
  handleShowModal: HandleShowModal
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, deleteTask, handleShowModal }) => {
  return (
    <TaskUL>
      {tasks.map((task: any) => {
        return (
          <TaskListItem
            key={task.id}
            id={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            handleShowModal={handleShowModal}
          />
        )
      })}
    </TaskUL>
  )
}


const TaskUL = styled.ul`
  max-width: 1200px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
`


export default TaskList
