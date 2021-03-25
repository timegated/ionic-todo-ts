import React from 'react'
import TaskListItem from './TaskListItem';
import styled from 'styled-components';

type ToggleComplete = (selectedTask: string) => void;

type Tasks = {
  id: number,
  text: string,
  complete: boolean
}

interface TaskListProps {
  tasks: Array<Tasks>,
  toggleComplete: ToggleComplete
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete }) => {
  return (
    <TaskUL>
      {tasks.map((task: any) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
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
const TaskItem = styled(TaskListItem)`
  display: flex;
  justify-content: space-between;
  background: gray;
`

export default TaskList
