import { useState, FormEvent } from 'react'
import styled from 'styled-components';
import { IonTextarea } from '@ionic/react';

type EditTask = (...args: any) => void;
type ShowModal = () => void;

interface EditFormProps {
  id: any
  editTask: EditTask,
  handleShowModal: ShowModal
}

const EditForm: React.FC<EditFormProps> = ({ id, editTask, handleShowModal }) => {
  const [editText, setEditText] = useState<string>('the default text');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTask(id, editText);
    console.log(id)
  }

  return (
    <>
      <ModalHeader>Edit Task</ModalHeader>
          <Form onSubmit={handleSubmit}>
        <TextArea autofocus={true} placeholder="edit your item" value={editText} onIonChange={(e) => setEditText(e.detail.value!)}></TextArea>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MyButton>Save</MyButton>
          <Cancel onClick={() => handleShowModal()}>Cancel</Cancel>
        </div>
          
          </Form>
    </>
  )
}
const ModalHeader = styled.h1`
  text-align: center;
  margin-top: 0;
  padding: 1.5rem;
  background: #2E1465;
  color: #FFFFFF;
`
const MyButton = styled.button`
  background:linear-gradient(90deg,#0ba9a7,#44c983);
  padding: 0.75rem;
  width: 25%;
  border-radius: 10px;
  color: #000000;
  font-weight: 600;
  margin: 0.25rem 0.25rem;
`

const Form = styled.form`
  margin: 0;
  height: 450px;
  display: flex;
  flex-direction: column;
`
const TextArea = styled(IonTextarea)`
  border: 2px solid black;
  border-radius: 5px;
  margin-top: 0;
  margin-bottom: 0.75rem;
`

const Cancel = styled(MyButton)`
  background: #c20a0a;
  color: #FFFFFF;
`
export default EditForm
