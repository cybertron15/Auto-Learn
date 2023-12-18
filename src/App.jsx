import { useState } from 'react'
import ErrorPage from './components/ErrorPage'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Root from './routes/Home';
import Authenticate from './routes/Authenticate';
// import Test from './components/Test';
import Subject, {loader as subjectLoader} from './routes/Subject';

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
        <Route
          path="/subject/:subjectID"
          element={<Subject />}
          loader={subjectLoader}
          // action={rootAction}
          errorElement={<ErrorPage />}
        ></Route>
      </Route>
      <Route
        path="login"
        element={<Authenticate />}
        // loader={rootLoader}
        // action={rootAction}
        errorElement={<ErrorPage />}
      ></Route>
      {/* <Route
        path="/test"
        element={<Test />}
        // loader={rootLoader}
        // action={rootAction}
        errorElement={<ErrorPage />}
      ></Route> */}
    </>
  ))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
