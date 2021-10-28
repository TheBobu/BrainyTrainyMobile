import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TodoListComponent from './TodoListComponent';

const TodoList:React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>To-Do List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">To-Do List</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <TodoListComponent />
            </IonContent>
        </IonPage>
        )
}

export default TodoList;