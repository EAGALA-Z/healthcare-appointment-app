import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {AppointmentProvider} from './context/AppointmentContext'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import AllDoctorsPage from './components/AllDoctorsPage'
import DoctorProfile from './components/DoctorProfile'
import AppointmentForm from './components/AppointmentForm'

import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <AppointmentProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alldoctors" element={<AllDoctorsPage />} />
        <Route path="/doctors/:id" element={<DoctorProfile />} />

        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <AppointmentForm />
            </ProtectedRoute>
          }
        />
       
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </AppointmentProvider>
)

export default App
