import { useState } from 'react'
import ErrorPage from './components/ErrorPage'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Root from './routes/Root';
import Home from './Pages/Home';

// initializing react router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route
      path="/"
      element={<Root />}
      // loader={rootLoader}
      // action={rootAction}
      errorElement={<ErrorPage />}
      >
        
    </Route>
    <Route
      path="login"
      element={<Home />}
      // loader={rootLoader}
      // action={rootAction}
      errorElement={<ErrorPage />}
    ></Route>
      </>
    ))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
