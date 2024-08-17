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
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Help from './Components/Help';
import './global.css';
import Services from './Components/Services';
function App() {
  const style = {
    border: `1px solid black`
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(
      () => {
        setAlert(null);
      }, 1500);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Alert alert={alert} /><Home showAlert={showAlert} /><Footer /></>,
    },
    {
      path: "/about",
      element: <><Navbar /><Alert alert={alert} /><About /><Footer /></>,
    },
    {
      path: "/blog",
      element: <><Navbar /><Alert alert={alert} /><Blog /><Footer /></>,
    },
    {
      path: "/help",
      element: <><Navbar /><Alert alert={alert} /><Help showAlert={showAlert}/><Footer /></>,
    },
    {
      path: "/contact",
      element: <><Navbar /><Alert alert={alert} /><Contact showAlert={showAlert} /><Footer /></>,
    },
    {
      path: "/services",
      element: <><Navbar /><Alert alert={alert} /><Services /><Footer /></>,
    },
    {
      path: "/signup",
      element: <><Navbar /><Alert alert={alert} /><Signup showAlert={showAlert} /><Footer /></>,
    },
    {
      path: "/login",
      element: <><Navbar /><Alert alert={alert} /><Login showAlert={showAlert} /><Footer /></>,
    }
  ]);
  return (
    <>
      <NoteState>
        <RouterProvider router={router} />
      </NoteState>
    </>
  );
}

export default App;
