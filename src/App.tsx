import {
  IonApp,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AppRoutes from './AppRoutes';
import { AuthProvider } from './AuthProvider';
import { AxiosProvider } from './context/AxiosContext';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

const App: React.FC = () => (
  <IonApp>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AxiosProvider>
          <AppRoutes />
        </AxiosProvider>
      </AuthProvider>
    </QueryClientProvider>
  </IonApp>
);

export default App;
