import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'

import AppointmentForm from '../AppointmentForm'


import {
  ProfileContainer,
  DoctorImage,
  DoctorDetails,
  DoctorName,
  DoctorSpecialization,
  DoctorExperience,
} from './styledComponents'

const DoctorProfile = () => {
  const {id} = useParams()
  const [doctor, setDoctor] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctors')
        const doctorData = response.data.find(doc => doc.id === id)
        setDoctor(doctorData)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctor()
  }, [id])

  if (loading) return <p>Loading doctor details...</p>
  if (error || !doctor) return <p>Doctor not found.</p>

  return (
    <ProfileContainer>
      <DoctorImage src={doctor.imageUrl} alt={doctor.name} />
      <DoctorDetails>
        <DoctorName>{doctor.name}</DoctorName>
        <DoctorSpecialization>{doctor.specialization}</DoctorSpecialization>
        <DoctorExperience>{doctor.experience} years experience</DoctorExperience>
      </DoctorDetails>
      <AppointmentForm doctorName={doctor.name} />
    </ProfileContainer>
  )
}

export default DoctorProfile
