import { IonHeader, IonPage, IonContent, IonModal, IonButton, IonTextarea} from "@ionic/react";
import { useState, FormEvent } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import EditForm from '../components/EditForm';
import styled from 'styled-components';

type ToggleComplete = (selectedTask: string) => void;
type DeleteTask = (id: number) => void;
type ShowModal = () => void;
type AddTask = (newTask: string) => void;
type EditTask = (...args: any) => void;

type Tasks = {
  id: number,
  text: string,
  complete: boolean
};

const Home: React.FC = () => {
  const { localStorage } = window;
  const taskerinos = JSON.parse(localStorage.getItem("tasks") || "[]");

  const [tasks, setTasks] = useState<Array<Tasks>>(taskerinos);
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleComplete: ToggleComplete = (selectedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.text === selectedTask) {
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

  const editTask: EditTask = (id: any, editText:string) => {
    const updatedTask = tasks.map((task: any) => {
      if (id === task.id) {
        return {...task, text: editText}
      }
      return task;
    });
  };

  const deleteTask: DeleteTask = (id:number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  };

  const handleShowModal: ShowModal = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  return (
    <IonPage>
      <Header>
        <TaskForm addTask={ addTask }/>
      </Header>
      <IonContent>
        <IonModal isOpen={showModal}>
          <EditForm id={1} editTask={editTask} handleShowModal={handleShowModal}/>
        </IonModal>
        <TaskList tasks={tasks} toggleComplete={toggleComplete} handleShowModal={handleShowModal} deleteTask={deleteTask} />
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
