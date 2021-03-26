import React from 'react'
import TaskListItem from './TaskListItem';
import styled from 'styled-components';

type ToggleComplete = (id: number) => void;
type DeleteTask = (id: number) => void;
type EditTask = (id: number, editText: string) => void;

type Tasks = {
  id: number,
  text: string,
  complete: boolean
};

interface TaskListProps {
  tasks: Array<Tasks>,
  toggleComplete: ToggleComplete,
  deleteTask: DeleteTask,
  editTask: EditTask
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, editTask, deleteTask }) => {
  return (
    <TaskUL>
      {tasks.map((task: any) => {
        return (
          <TaskListItem
            key={task.id}
            id={task.id}
            task={task}
            editTask={editTask}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
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
