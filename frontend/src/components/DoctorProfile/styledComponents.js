import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  max-width: 800px;
  margin: 40px auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`

export const DoctorImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #0b69ff;
`

export const DoctorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const DoctorName = styled.h2`
  font-size: 26px;
  color: #1e293b;
  margin: 0;
`

export const DoctorSpecialization = styled.p`
  font-size: 18px;
  color: #475569;
  margin: 0;
`

export const DoctorExperience = styled.p`
  font-size: 16px;
  color: #334155;
  margin: 0;
`
