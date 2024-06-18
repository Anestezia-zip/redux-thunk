import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Todos from '../components/Todos'
import Albums from '../components/Albums'
import Comments from '../components/Comments'
import Navbar from '../components/Navbar'

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
      }
    ]
  }
]);
