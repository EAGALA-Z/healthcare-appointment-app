import {Navigate} from 'react-router-dom'
import {useContext} from 'react'
import {AppointmentContext} from '../../context/AppointmentContext'

const ProtectedRoute = ({children}) => {
  const {isAuthenticated} = useContext(AppointmentContext)

  return isAuthenticated ? children : <Navigate to="/" replace />
}

export default ProtectedRoute
