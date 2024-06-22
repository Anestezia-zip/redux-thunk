import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Todos from '../components/Todos.tsx'
import Albums from '../components/Albums.tsx'
import Comments from '../components/Comments.tsx'
import Navbar from '../components/Navbar.tsx'
import RicknMorty from '../components/RicknMorty.tsx';

const AppLayout = () => {
  return(
      <div>
          <Navbar/>
          <Outlet/>
      </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Todos />,
      },
      {
        path: 'albums',
        element: <Albums />,
      },
      {
        path: 'comments',
        element: <Comments />,
      },
      {
        path: 'ricknmorty',
        element: <RicknMorty />,
      }
    ]
  }
]);
