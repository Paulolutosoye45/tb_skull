import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Open from './components/Open';
import { useEffect, useState, useContext } from 'react';
import Profile from './pages/Profile';
import ScorePage from './pages/ScorePage';
import Board from './pages/Board';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from './Admin/Option';
import AdminLogin from './Admin/AdminLogin';
import TeamSelect from './Admin/TeamSelect';

function App() {
    const [opening, setOpening] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {
      setOpening(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/profile', 
      element: <Profile />,
    },
    {
      path: '/score', 
      element: <ScorePage />,
    },
    {
      path: '/dashboard', 
      element: <Board />,
    },
    {
      path: '/admin', 
      element: <Option />,
    },
    {
      path: '/team', 
      element: <TeamSelect />,
    },
  ]);
  return (
    
    <>
      {opening ? <RouterProvider router={router} /> : <Open />}
      <ToastContainer />
    </>
  );
}

export default App;
