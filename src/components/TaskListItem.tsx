import React from 'react';
import styled from 'styled-components';
import { TrashOutline, PencilOutline } from 'react-ionicons';

type ToggleComplete = (selectedTask: string) => void;
type EditTask = (selectedTask: string) => void;
type DeleteTask = (selectedTask: string) => void;

type Tasks = {
  id: number,
  text: string,
  complete: boolean
}

interface TaskListItemProps {
  task: Tasks,
  toggleComplete: ToggleComplete,
  editTask: EditTask,
  deleteTask: DeleteTask
}
const TaskListItem: React.FC<TaskListItemProps> = ({task, toggleComplete, editTask, deleteTask}) => {
  return (
    <ListItemContainer>
      <ListItem>
      {task.complete ? <ItemLabelLt>{ task.text }</ItemLabelLt> : <ItemLabel>{ task.text }</ItemLabel>}
      <CheckBox type="checkbox"
        checked={task.complete}
        onChange={() => toggleComplete(task.text)}
      />
      </ListItem>
      <div>
        <PencilOutline style={{cursor: 'pointer', marginRight: '0.50rem'}} onClick={() => editTask(task.text)}/>
        <TrashOutline style={{ cursor: 'pointer', marginRight: '0.50rem' }} onClick={() => deleteTask(task.text) }/>
      </div>
    </ListItemContainer>
  )
}
const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 2px 2px .25em black;
`;

const CheckBox = styled.input`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 24px;
`;
const ItemLabel = styled.label`
  order: 1;
  margin-left: 0.75rem;
`;

const ItemLabelLt = styled.label`
  order: 1;
  margin-left: 0.75rem;
  text-decoration: line-through
`;

export default TaskListItem
