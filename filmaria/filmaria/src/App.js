import './style.css'
import Routes from "./routes";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
export default function App() {
  return (
    <div className='app'>
      <Routes/>
      <ToastContainer autoClose={2000} />
    </div>
  );
}


