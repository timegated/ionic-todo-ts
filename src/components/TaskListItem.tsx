import React, {useState} from 'react';
import { IonHeader, IonPage, IonContent, IonModal, IonButton, IonTextarea} from "@ionic/react";

import styled from 'styled-components';
import { TrashOutline, PencilOutline } from 'react-ionicons';
import EditForm from './EditForm';

type ToggleComplete = (id: number) => void;
type DeleteTask = (id: number) => void;
type ShowModal = () => void;
type EditTask = (id: number, editText: string) => void;

type Tasks = {
  id: number,
  text: string,
  complete: boolean
}

interface TaskListItemProps {
  task: Tasks,
  id: any,
  toggleComplete: ToggleComplete,
  deleteTask: DeleteTask,
  editTask: EditTask
}
const TaskListItem: React.FC<TaskListItemProps> = ({ id, task, editTask, toggleComplete, deleteTask }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal: ShowModal = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  return (
    <ListItemContainer>
      <ListItem>
      {task.complete ? <ItemLabelLt>{ task.text }</ItemLabelLt> : <ItemLabel>{ task.text }</ItemLabel>}
      <CheckBox type="checkbox"
        checked={task.complete}
        onChange={() => toggleComplete(id)}
      />
      </ListItem>
      <div>
        <MyPencil onClick={() => handleShowModal()}/>
        <MyTrashCan style={{ cursor: 'pointer', marginRight: '0.50rem' }} onClick={() => deleteTask(task.id) }/>
      </div>
      <IonModal isOpen={showModal}>
      <EditForm id={id} editTask={ editTask } handleShowModal={ handleShowModal }/>
      </IonModal>

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
