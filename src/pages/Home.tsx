import { IonHeader, IonPage, IonContent } from '@ionic/react';
import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

type ToggleComplete = (selectedTask: string) => void;

type Tasks = {
  id: number,
  text: string,
  complete: boolean
};

type AddTask = (newTask: string) => void;

const initialTasks: Array<Tasks> = [
  {
    id: 1,
    text: 'walk dog',
    complete: false,
  },
  {
    id: 2,
    text: 'feed fish',
    complete: false
  }
];

const Home: React.FC = () => {
  const { localStorage } = window;

  const [tasks, setTasks] = useState<Array<Tasks>>(initialTasks);

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
    localStorage.setItem('tasks', JSON.stringify(tasks))
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(initialTasks))
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <TaskForm addTask={ addTask }/>
      </IonHeader>
      <IonContent>
        <TaskList tasks={tasks} toggleComplete={ toggleComplete}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
