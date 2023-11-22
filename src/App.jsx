import { useState } from 'react'
import ErrorPage from './components/ErrorPage'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Root from './routes/Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      // loader={rootLoader}
      // action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />} element={<Root />}/>

    </Route>))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
