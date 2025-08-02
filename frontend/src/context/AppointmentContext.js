import {createContext, useState} from 'react'

export const AppointmentContext = createContext()

export const AppointmentProvider = ({children}) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [appointmentDetails, setAppointmentDetails] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(true) // change based on auth logic

  return (
    <AppointmentContext.Provider
      value={{
        selectedDoctor,
        setSelectedDoctor,
        appointmentDetails,
        setAppointmentDetails,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}

export default AppointmentProvider
