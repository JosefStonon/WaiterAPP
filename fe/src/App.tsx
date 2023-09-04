

import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/index';
import { Orders } from './components/orders/index';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <GlobalStyles/>
      <Header />
      <Orders/>
      <ToastContainer position='bottom-center'/>
    </>

  );

}


