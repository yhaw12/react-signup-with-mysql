import {createBrowserRouter,createRoutesFromElements,  Route, RouterProvider}  from 'react-router-dom'
import Login from './login';
import Signup from './signup';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      {/* <Route path='/dashboard/*' element={<Dashboard />}>
        <Route path='employees' element={<Employees />} />
        <Route path='profile' element={<Profile />} />
      </Route> */}
    </Route>
  )
);
function App() {


  return (
    <RouterProvider router={router}>
        {/* Your components and routes go here */}
    </RouterProvider>
  );
}

export default App
