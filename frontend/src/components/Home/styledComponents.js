// src/components/Home/styledComponents.js
import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f8f9fa;
`

export const Banner = styled.section`
  background-image: url('https://i.pinimg.com/originals/b4/f4/a0/b4f4a05d6750ca3aa8496ec2c725631c.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  padding: 60px 30px;
  color: white;
  text-align: center;
  margin-bottom: 40px;
`

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`

export const Button = styled.button`
  background-color: #0b69ff;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #084ac4;
  }
`

export const Section = styled.section`
  margin: 40px 0;
`

export const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #2d2d2d;
  text-align: center;
`

export const AboutText = styled.p`
  font-size: 16px;
  color: #444;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
`

export const DoctorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`

export const DoctorCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  padding: 16px;
  text-align: center;
`

export const DoctorImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`

export const DoctorName = styled.h3`
  margin: 10px 0 4px;
  font-size: 18px;
  color: #1e1e1e;
`

export const DoctorSpecialization = styled.p`
  font-size: 14px;
  color: #666;
`

export const StyledSliderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto 40px;
`

export const SlideImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
`
