import React, { useState } from 'react'
import { IonModal, IonButton, IonContent } from '@ionic/react';

const Modal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <IonModal isOpen={showModal} cssClass="my-custom-class">
        <p>put a form here</p>
        <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
        
      </IonModal>
    </IonContent>
  )
}

export default Modal
