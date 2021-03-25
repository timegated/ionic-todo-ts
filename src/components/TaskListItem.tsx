import React from 'react';
import styled from 'styled-components';

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
    <ListItem>
      {task.complete ? <ItemLabelLt>{ task.text }</ItemLabelLt> : <ItemLabel>{ task.text }</ItemLabel>}
      <input type="checkbox"
        checked={task.complete}
        onChange={() => toggleComplete(task.text)}
      />
    
      
    </ListItem>
  )
}

const ListItem = styled.li`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 2px 2px .25em black;
  margin-top: 0.5rem;
  font-size: 24px;
`
const ItemLabel = styled.label`
 
`
const ItemLabelLt = styled.label`
  text-decoration: line-through
`
export default TaskListItem
