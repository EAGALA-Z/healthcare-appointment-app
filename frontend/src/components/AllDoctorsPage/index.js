import {useEffect, useState} from 'react'
import axios from 'axios'

import {
  AllDoctorsContainer,
  SearchBarWrapper,
  SearchInput,
  SpecializationFilter,
  SearchButton,
  DoctorsList,
  DoctorCard,
  DoctorImage,
  DoctorInfo,
  DoctorName,
  DoctorSpecialization,
  DoctorExperience,
  NoDoctorsText,
  DoctorLinkCard,
} from './styledComponents'

const AllDoctorsPage = () => {
  const [doctors, setDoctors] = useState([])
  const [filteredDoctors, setFilteredDoctors] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpec, setSelectedSpec] = useState('')
  const [specializations, setSpecializations] = useState([])

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/doctors')
      setDoctors(response.data)
      setFilteredDoctors(response.data)
      const specs = [...new Set(response.data.map(doc => doc.specialization))]
      setSpecializations(specs)
    } catch (error) {
      console.error('Failed to fetch doctors:', error)
    }
  }

  useEffect(() => {
    fetchDoctors()
  }, [])

  const onClickSearch = () => {
    const filtered = doctors.filter(doc => {
      const matchesName = doc.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSpec = selectedSpec === '' || doc.specialization === selectedSpec
      return matchesName && matchesSpec
    })
    setFilteredDoctors(filtered)
  }

  return (
    <AllDoctorsContainer>
      <SearchBarWrapper>
        <SearchInput
          type="text"
          placeholder="Search doctor by name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <SpecializationFilter
          value={selectedSpec}
          onChange={e => setSelectedSpec(e.target.value)}
        >
          <option value="">All Specializations</option>
          {specializations.map(spec => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </SpecializationFilter>
        <SearchButton onClick={onClickSearch}>Search</SearchButton>
      </SearchBarWrapper>

      {filteredDoctors.length === 0 ? (
        <NoDoctorsText>No doctors found.</NoDoctorsText>
      ) : (
        <DoctorsList>
          {filteredDoctors.map(doctor => (
            <DoctorLinkCard key={doctor.id} to={`/doctors/${doctor.id}`}>
              <DoctorCard>
                <DoctorImage src={doctor.imageUrl} alt={doctor.name} />
                <DoctorInfo>
                  <DoctorName>{doctor.name}</DoctorName>
                  <DoctorSpecialization>{doctor.specialization}</DoctorSpecialization>
                  <DoctorExperience>{doctor.experience} years experience</DoctorExperience>
                </DoctorInfo>
              </DoctorCard>
            </DoctorLinkCard>
          ))}
        </DoctorsList>
      )}
    </AllDoctorsContainer>
  )
}

export default AllDoctorsPage
