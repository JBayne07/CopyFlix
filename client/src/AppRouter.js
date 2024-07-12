import { RootLayout } from './layouts/RootLayout';
import { Home } from './views/Home';
import { Movies } from './views/Movies';

import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

export const AppRouter = () => {

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='movies' element={<Movies />}/>
    </Route>
  )
)
  return(
    <RouterProvider router={router} />
  )
}