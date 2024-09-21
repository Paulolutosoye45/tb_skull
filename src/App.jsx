import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Open from './components/Open';
import { useEffect, useState, useContext } from 'react';
import Profile from './pages/Profile';
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
import QuestionPage from './pages/QuestionsPage';
import AddClubs from './Admin/AddClubs';
import AdminErrorPage from './Admin/AdminErrorpage';
import Question from './Admin/Question';

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
      path: '/question', 
      element: <QuestionPage />,
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
      errorElement:<AdminErrorPage/>,
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
          path: 'viewmatches', 
          element: <TeamSelect />,
        },
        {
          path: 'updatematch', 
          element: <ViewMatch />,
        },
        {
          path: 'addclub', 
          element: <AddClubs />,
        },
        {
          path: 'questions', 
          element: <Question  />,
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
