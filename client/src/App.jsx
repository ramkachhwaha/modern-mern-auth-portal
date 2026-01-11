import ProtectedRoute from './routes/protected.jsx';
import Home from './pages/Home.jsx';
import { Route, Routes } from "react-router"
import Auth from "./pages/Auth"
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.addEventListener("offline", () => {
      toast.error("Your Net Connection Is Lost")
    });

    window.addEventListener("online", () => {
      toast.info("Connected to Net")
    })
  }, [])

  return (
    <>

      <Routes>

        <Route path='/' element={<ProtectedRoute />}>
          <Route index element={<Home />} />
        </Route>

        <Route path='/login' element={<Auth />} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />


      </Routes>
      <ToastContainer />

    </>
  )
}

export default App;