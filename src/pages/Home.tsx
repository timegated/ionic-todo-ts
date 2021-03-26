import { IonHeader, IonPage, IonContent, IonModal, IonButton, IonTextarea} from "@ionic/react";
import { useState, FormEvent } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import styled from 'styled-components';

type ToggleComplete = (selectedTask: string) => void;
type DeleteTask = (selectedTask: string) => void;
type EditTask = (id: number, text:string) => void;
type ShowModal = () => void;

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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>('');

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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  const handleShowModal: ShowModal = () => {
    showModal ? setShowModal(false) : setShowModal(true);
    console.log(showModal)
    console.log("handleShowModal")
  }

  const addTask: AddTask = (newTask: any) => {
    setTasks([...tasks, { id: Math.floor(Math.random() * 1000), text: newTask, complete: false }])
    taskerinos.push({ id: Math.floor(Math.random() * 1000), text: newTask, complete: false });
    localStorage.setItem('tasks', JSON.stringify(taskerinos));
  };

  const editTask: EditTask = (id:number) => {
    const updatedTask = taskerinos.map((task: any) => {
      if (id === task.id) {
        return {...task, text: editText}
      }
      return task;
    });
    setTasks(updatedTask);
    console.log('The task Id',id)
  };

  const deleteTask: DeleteTask = (selectedTask: any) => {
    const updatedTasks = tasks.filter(task => task.text !== selectedTask);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  };
  console.log(editText)
  return (
    <IonPage>
      <IonHeader>
        <HeaderTitle>Let's Add Some Tasks</HeaderTitle>
        <TaskForm addTask={ addTask }/>
      </IonHeader>
      <IonContent>
        <IonModal isOpen={showModal}>
          <h1 style={{ textAlign: 'center', marginTop: '2.5rem' }}>Edit Task</h1>
          <EditForm onSubmit={handleSubmit}>
          <IonTextarea autofocus={true} placeholder="edit your item" value={editText} onIonChange={(e) => setEditText(e.detail.value!)}></IonTextarea>
          <MyButton onClick={() => editTask}>Save</MyButton>
          </EditForm>
        </IonModal>
        <TaskList tasks={tasks} toggleComplete={toggleComplete} editTask={editTask} handleShowModal={handleShowModal} deleteTask={deleteTask} />
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

const MyButton = styled.button`
  background:linear-gradient(90deg,#0ba9a7,#44c983);
  padding: 0.75rem;
  width: 25%;
  border-radius: 10px;
  color: #000000;
  font-weight: 600;
  margin: 0.75rem auto;
`

const EditForm = styled.form`
  margin: 0;
  height: 450px;
  display: flex;
  flex-direction: column;
`
export default Home;
