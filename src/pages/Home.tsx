import { IonHeader, IonPage, IonContent } from "@ionic/react";
import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import styled from 'styled-components';

type ToggleComplete = (selectedTask: string) => void;
type EditTask = (selectedTask: string) => void;
type DeleteTask = (selectedTask: string) => void;

type Tasks = {
  id: number,
  text: string,
  complete: boolean
};

type AddTask = (newTask: string) => void;



const Home: React.FC = () => {
  const { localStorage } = window;
  const taskerinos = JSON.parse(localStorage.getItem("tasks") || "[]");

  const [tasks, setTasks] = useState<Array<Tasks>>(taskerinos);

  const toggleComplete: ToggleComplete = (selectedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.text === selectedTask) {
        return {...task, complete: !task.complete}
      }
      return task;
    })
    setTasks(updatedTasks);
    console.log('The selected task', selectedTask);
  };

  const addTask: AddTask = (newTask: any) => {
    setTasks([...tasks, { id: Math.floor(Math.random() * 1000), text: newTask, complete: false }])
    taskerinos.push({ id: Math.floor(Math.random() * 1000), text: newTask, complete: false });
    localStorage.setItem('tasks', JSON.stringify(taskerinos));
  };

  const editTask: EditTask = (selectedTask: any) => {
    console.log('editTask was called', selectedTask);
  };

  const deleteTask: DeleteTask = (selectedTask: any) => {
    const updatedTasks = tasks.filter(task => task.text !== selectedTask);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  };

  return (
    <IonPage>
      <IonHeader>
        <HeaderTitle>Let's Add Some Tasks</HeaderTitle>
        <TaskForm addTask={ addTask }/>
      </IonHeader>
      <IonContent>
        <TaskList tasks={tasks} toggleComplete={ toggleComplete} editTask={editTask} deleteTask={deleteTask} />
      </IonContent>
    </IonPage>
  );
};

const HeaderTitle = styled.h1`
  text-align: center;
  margin: 0;
  background-color: #2E1465;
  color: #FFFFFF;
`;
export default Home;
