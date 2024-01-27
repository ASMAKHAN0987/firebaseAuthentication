import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import './App.css'
import { ContextProvider } from './context/UserAuthContext'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
        <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Route>
  )
)
function App() {
  return (
     <>
      <Container>
        <Row>
          <Col>
            <ContextProvider>
             <RouterProvider router={router}/>
            </ContextProvider>
          </Col>
        </Row>
      </Container>
     </>
    )
}

export default App