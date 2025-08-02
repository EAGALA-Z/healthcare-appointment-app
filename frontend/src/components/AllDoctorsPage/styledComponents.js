// src/components/AllDoctorsPage/styledComponents.js
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AllDoctorsContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`

export const SearchBarWrapper = styled.div`
  background-image: url('https://i.pinimg.com/originals/b4/f4/a0/b4f4a05d6750ca3aa8496ec2c725631c.jpg');
  background-size: cover;
  heigth:25vh;
  background-position: center;
  padding: 80px 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 30px;
  
`


export const SearchInput = styled.input`
  flex: 1;
  min-width: 250px;
  padding: 8px;
  font-size: 16px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const SpecializationFilter = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`

export const SearchButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #2b6cb0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;


  &:hover {
    background-color: #2c5282;
  }
`

export const NoDoctorsText = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 50px;
  color: #666;
`

export const DoctorsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  
`
export const DoctorLinkCard = styled(Link)`
  text-decoration: none;
`

export const DoctorCard = styled.li`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  padding: 16px;
  width: 280px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`

export const DoctorImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
`

export const DoctorInfo = styled.div`
  margin-top: 12px;
`

export const DoctorName = styled.h3`
  font-size: 20px;
  margin: 8px 0 4px;
`

export const DoctorSpecialization = styled.p`
  font-size: 16px;
  color: #666;
`

export const DoctorExperience = styled.p`
  font-size: 14px;
  color: #999;
`

export const DoctorsListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`
export const Specialization = styled.option``

