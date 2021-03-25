import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

type AddTask = (newTask: string) => void;

interface AddTaskFormProps {
  addTask: AddTask
}
const TaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [task, setTask] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // checks that letters and numbers are only entered into the field -- includes dashes and commas
    setTask(e.target.value);
    console.log(task);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputCheck = new RegExp(/^[a-zA-Z0-9\s.\-_']+$/)
    inputCheck.test(task) ? addTask(task) : alert('Input Invalid');

  };
  console.log('This is indeed a function', typeof addTask);
  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input type="text" value={task} onChange={handleChange} />
            <SubmitButton>Add To List</SubmitButton>
          </InputContainer>
        </Form>
      </FormContainer>
    </>
  )
};

const FormContainer = styled.div`
  background-color: #2E1465;

`
const Form = styled.form`
  `
const InputContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5rem;
`
const Input = styled.input`
font-size: 32px;
border-radius:  10px 0 0 10px;
padding: 0.15em;
@media (max-width: 375px) {
    font-size: 18px;

  }
`

const SubmitButton = styled.button`
  background: #4AB866;
  color: #000000;
  font-size: 32px;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border: none;
  border-radius: 0px 10px 10px 0px;

  @media (max-width: 375px) {
    font-size: 18px;

  }
`
export default TaskForm