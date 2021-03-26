import React, {FormEvent} from 'react';
import styled from 'styled-components';
import { TrashOutline, PencilOutline } from 'react-ionicons';

type ToggleComplete = (selectedTask: string) => void;
type EditTask = (id: number, text: string) => void;
type DeleteTask = (selectedTask: string) => void;
type ShowModal = () => void;

type Tasks = {
  id: number,
  text: string,
  complete: boolean
}

interface TaskListItemProps {
  task: Tasks,
  toggleComplete: ToggleComplete,
  editTask: EditTask,
  deleteTask: DeleteTask,
  handleShowModal: ShowModal
}
const TaskListItem: React.FC<TaskListItemProps> = ({ task, toggleComplete, editTask, deleteTask, handleShowModal }) => {
  
  const multipleEvents = () => {
    handleShowModal();
    editTask(task.id, task.text);
  }
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
        <MyPencil onClick={() => multipleEvents()}/>
        <MyTrashCan style={{ cursor: 'pointer', marginRight: '0.50rem' }} onClick={() => deleteTask(task.text) }/>
      </div>
    </ListItemContainer>
  )
}

const MyPencil = styled(PencilOutline)`
  cursor: pointer;
  margin-right: 0.50rem;

  & svg {
    width: 30px;
    height: 30px; 
  }
`;

const MyTrashCan = styled(TrashOutline)`
  cursor: pointer;
  
  & svg {
    width: 30px;
    height: 30px; 
  }
`;

const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-radius: 5px;
  &:nth-child(odd) {
    background: lightgrey;
  }
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
  margin-top: 0.25rem;
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
