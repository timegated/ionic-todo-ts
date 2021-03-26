import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

type AddTask = (newTask: string) => void;

interface AddTaskFormProps {
  addTask: AddTask
}
const TaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [newTask, setTask] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // checks that letters and numbers are only entered into the field -- includes dashes and commas
    const inputCheck = new RegExp(/^[a-zA-Z0-9\s.\-_']+$/)
    inputCheck.test(newTask) ? addTask(newTask) : alert('Input Invalid');
    setTask('');
  };

  return (
    <>
      <FormContainer>
        <HeaderTitle>My To Do List</HeaderTitle>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input type="text" value={newTask} onChange={handleChange} />
            <SubmitButton>Add To List</SubmitButton>
          </InputContainer>
        </Form>
      </FormContainer>
    </>
  )
};



const FormContainer = styled.div`
  background-color: #2E1465;
  margin: 2.5rem 0 0 0;
  padding: 1.5rem;
`;

const HeaderTitle = styled.h1`
  text-align: center;
  margin: 0;
  color: #FFFFFF;
  font-weight: 600;
`;

const Form = styled.form`
  margin: 0;
`;
const InputContainer = styled.div`
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 2.5rem;
  @media (max-width: 375px){
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;
const Input = styled.input`
font-size: 32px;
min-width: 50%;
width: 50%;
border-radius:  10px 0 0 10px;
padding: 0.15em;
margin: 0;
@media (max-width: 375px)  {
    font-size: 18px;
    border-radius: 10px;
    width: 100%;
  }
@media (max-width: 576px)  {
    font-size: 18px;
    border-radius: 10px;
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  background: #000000;
  color: #FFFFFF;
  font-size: 32px;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border: none;
  outline: none;
  border-radius: 0px 10px 10px 0px;

  @media (max-width: 375px) {
    font-size: 18px;
    border-radius: 10px;
  }
  @media (max-width: 576px) {
    font-size: 18px;
    border-radius: 10px;
  }
`;
export default TaskForm
