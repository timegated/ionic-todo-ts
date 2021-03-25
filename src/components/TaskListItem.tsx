import React from 'react'

type ToggleComplete = (selectedTask: string) => void;

type Tasks = {
  id: number,
  text: string,
  complete: boolean
}

interface TaskListItemProps {
  task: Tasks,
  toggleComplete: ToggleComplete
}
const TaskListItem: React.FC<TaskListItemProps> = ({task, toggleComplete}) => {
  return (
    <li>
      <label>{task.complete ? "complete" : undefined}</label>
      <input type="checkbox"
        checked={task.complete}
        onChange={() => toggleComplete(task.text)}
      />
      {task.text}
    </li>
  )
}

export default TaskListItem
