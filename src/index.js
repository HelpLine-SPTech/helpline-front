import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';
import HelpLineRoutes from './routes';
import "./css/index.css";
import 'react-toastify/dist/ReactToastify.css';
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs';

dayjs.locale('pt-br')

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HelpLineRoutes />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);