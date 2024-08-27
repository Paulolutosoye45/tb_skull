import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Open from './components/Open';
import { useEffect, useState } from 'react';
import { UserProvider } from './context/UserContext';

function App() {
  const [opening, setOpening]=useState(false)
  useEffect(() => {
    const interval = 5000
    setInterval(() => {
      setOpening(true)
    }, interval);
    return () => clearInterval(interval)
  },[])
   const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
     <UserProvider>
      {opening ? (<RouterProvider router={router} />) : <Open /> }
     </UserProvider>
      
    </>
  )
}

export default App
