import {useState} from 'react'
import {
  FormContainer,
  Input,
  Label,
  SubmitButton,
  SuccessMessage,
} from './styledComponents'

const AppointmentForm = ({doctorName}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateTime: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return submitted ? (
    <SuccessMessage>
      Appointment confirmed with <strong>{doctorName}</strong>!
    </SuccessMessage>
  ) : (
    <FormContainer onSubmit={handleSubmit}>
  <Label htmlFor="name">Patient Name</Label>
  <Input
    id="name"
    type="text"
    name="name"
    value={formData.name}
    required
    onChange={handleChange}
  />

  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    name="email"
    value={formData.email}
    required
    onChange={handleChange}
  />

  <Label htmlFor="dateTime">Preferred Date & Time</Label>
  <Input
    id="dateTime"
    type="datetime-local"
    name="dateTime"
    value={formData.dateTime}
    required
    onChange={handleChange}
  />

  <SubmitButton type="submit">Confirm Appointment</SubmitButton>
</FormContainer>

  )
}

export default AppointmentForm
