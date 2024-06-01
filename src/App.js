import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import About from './Components/About';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
        msg:message,
        type:type
    });
    setTimeout(
      ()=>{
       setAlert(null);
      },1500);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Alert alert={alert}/><div className="container"><Home showAlert = { showAlert } /></div></>,
    },
    {
      path: "/about",
      element: <><Navbar/><Alert alert={alert} /><div className="container"><About/></div></>,
    },
    {
      path: "/signup",
      element: <><Navbar/><Alert alert={alert} /><div className="container"><Signup showAlert = { showAlert } /></div></>,
    },
    {
      path: "/login",
      element: <><Navbar/><Alert alert={alert}/><div className="container"><Login showAlert = { showAlert }/></div></>,
    }
  ]);
  return (
    <>
    <NoteState>
    <RouterProvider router={router}/>
    </NoteState>
    </>
  );
}

export default App;
