'use client';

import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/lib/redux/store';

export const ProvidersWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer position="top-center" hideProgressBar={true} />

        {children}
      </PersistGate>
    </Provider>
  );
};
