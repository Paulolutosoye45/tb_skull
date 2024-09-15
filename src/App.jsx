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
import Admindashboard from './Admin/dashboard/Admindashboard';
import PageMin from './Admin/dashboard/PageMin';
import MatchPanel from './Admin/MatchPanel';
import ErrorPage from './pages/Errorpage';
import NotFound from './pages/NotFound';
import SimpleForm from './Admin/show';
import Task from './pages/Task';
import ViewMatch from './Admin/match/ViewMatch';

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
      element: <Home />,
       errorElement:<ErrorPage/>
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
      path: '/tasks', 
      element: <Task />,
    },
    {
      path:'admin',
      element:<Admindashboard/>,
      children:[
        {
          index: true,
          element: <PageMin />,
        },
        {
          path: 'login', 
          element: <AdminLogin />,
        },
        {
          path: 'team', 
          element: <Option />,
        },
        {
          path: 'updatematch', 
          element: <TeamSelect />,
        },
        {
          path: 'viewmatches', 
          element: <ViewMatch />,
        },
      ]
    },
    {
      path:"*",
      element: <NotFound/>
    }
  ]);
  return (
    
    <>
      {opening ? <RouterProvider router={router} /> : <Open />}
      {/* <SimpleForm /> */}
      <ToastContainer />
    </>
  );
}

export default App;
