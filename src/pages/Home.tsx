import { IonHeader, IonPage, IonContent, IonModal, IonButton, IonTextarea} from "@ionic/react";
import { useState, FormEvent } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import styled from 'styled-components';

type ToggleComplete = (id: number) => void;
type DeleteTask = (id: number) => void;
type AddTask = (newTask: string) => void;
type EditTask = (id: number, editText: string) => void;

type Tasks = {
  id: number,
  text: string,
  complete: boolean
};

const Home: React.FC = () => {
  const { localStorage } = window;
  const taskerinos = JSON.parse(localStorage.getItem("tasks") || "[]");

  const [tasks, setTasks] = useState<Array<Tasks>>(taskerinos);

  const toggleComplete: ToggleComplete = (id: number) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, complete: !task.complete}
      }
      return task;
    })
    setTasks(updatedTasks);
  };

  const addTask: AddTask = (newTask: any) => {
    setTasks([...tasks, { id: Math.floor(Math.random() * 1000), text: newTask, complete: false }])
    taskerinos.push({ id: Math.floor(Math.random() * 1000), text: newTask, complete: false });
    localStorage.setItem('tasks', JSON.stringify(taskerinos));
  };

  const editTask: EditTask = (id: number, editText:string) => {
    const updatedTask = tasks.map((task: any) => {
      if (id === task.id) {
        return {...task, text: editText}
      }
      return task;
    });
    setTasks(updatedTask);
    localStorage.setItem('tasks', JSON.stringify(updatedTask));
  };

  const deleteTask: DeleteTask = (id:number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  };


  return (
    <IonPage>
      <Header>
        <TaskForm addTask={ addTask }/>
      </Header>
      <IonContent>
        
        <TaskList tasks={tasks} editTask={ editTask } toggleComplete={toggleComplete} deleteTask={ deleteTask } />
      </IonContent>
    </IonPage>
  );
};
const Header = styled.header`
  background-color: #2E1465;
`
const CustomModal = styled(IonModal)`
  height: 450px;
  width: 450px;
  position: absolute;
  top: 50%;
  left: 40%;
`


export default Home;
