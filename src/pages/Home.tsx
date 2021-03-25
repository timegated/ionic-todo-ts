import {  IonHeader, IonPage,  } from '@ionic/react';
import CreateTask from '../components/CreateTodo';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <CreateTask />
      </IonHeader>
    </IonPage>
  );
};

export default Home;
