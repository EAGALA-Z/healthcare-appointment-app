import Slider from 'react-slick'
import {useNavigate} from 'react-router-dom'
import {
  HomeContainer,
  Banner,
  Title,
  Description,
  Button,
  Section,
  SectionTitle,
  AboutText,
  DoctorsContainer,
  DoctorCard,
  DoctorImage,
  DoctorName,
  DoctorSpecialization,
  StyledSliderWrapper,
  SlideImage
} from './styledComponents'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const topDoctors = [
  {
    id: 1,
    name: 'Dr. Ayesha Khan',
    speciality: 'Cardiologist',
    imageUrl: 'https://randomuser.me/api/portraits/men/20.jpg',
  },
  {
    id: 2,
    name: 'Dr. Ravi Kumar',
    speciality: 'Dermatologist',
    imageUrl: 'https://randomuser.me/api/portraits/men/30.jpg',
  },
  {
    id: 3,
    name: 'Dr. Isha Naik',
    speciality: 'Pediatrician',
    imageUrl: 'https://randomuser.me/api/portraits/women/18.jpg',
  },
  {
    id: 4,
    name: 'Dr. Mohan Das',
    speciality: 'Neurologist',
    imageUrl: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
  {
    id: 5,
    name: 'Dr. Pooja Iyer',
    speciality: 'Orthopedic',
    imageUrl: 'https://randomuser.me/api/portraits/women/39.jpg',
  },
]

const sliderImages = [
  'https://floridapolitics.com/wp-content/uploads/2020/05/doctors-ready-3500x1571.jpeg',
  'https://www.clinicone.com.np/wp-content/uploads/2020/08/Untitled-design.png',
  'https://media-ecn.s3.amazonaws.com/embedded_image/2016/11/patient%2012.jpg',
]

const Home = () => {
  const navigate = useNavigate()

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <HomeContainer>
      <Banner>
        <Title>Your Health, Our Priority</Title>
        <Description>
          Talk to top specialists from the comfort of your home. Book appointments with trusted professionals.
        </Description>
        <Button onClick={() => navigate('/alldoctors')}>Find a Doctor</Button>
      </Banner>

      <Section>
        <SectionTitle>Top 5 Doctors</SectionTitle>
        <DoctorsContainer>
          {topDoctors.map(doctor => (
            <DoctorCard key={doctor.id}>
              <DoctorImage src={doctor.imageUrl} alt={doctor.name} />
              <DoctorName>{doctor.name}</DoctorName>
              <DoctorSpecialization>{doctor.speciality}</DoctorSpecialization>
            </DoctorCard>
          ))}
        </DoctorsContainer>
      </Section>

      <Section>
        <SectionTitle>About Us</SectionTitle>
        <AboutText>
            We are committed to delivering world-class healthcare to your fingertips. Our team of highly qualified doctors is dedicated to providing you with the best possible care through online consultations and appointments.
            We prioritize patient safety, comfort, and convenience by offering seamless access to trusted specialists from the comfort of your home.
            With round-the-clock availability, personalized treatment plans, and secure digital records, we ensure a smooth and confidential healthcare experience.
            Whether it's routine check-ups, specialist opinions, or follow-up consultations, our platform is designed to make quality healthcare accessible, affordable, and efficient for everyone.
        </AboutText>
      </Section>

      <StyledSliderWrapper>
        <Slider {...sliderSettings}>
          {sliderImages.map((url, index) => (
            <div key={index}>
              <SlideImage src={url} alt={`slide-${index}`} />
            </div>
          ))}
        </Slider>
      </StyledSliderWrapper>
      
      <Section>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <AboutText>
            ✓ 24/7 access to expert medical professionals from various specialties. <br />
            ✓ Video consultations, prescription delivery, and instant appointment bookings. <br />
            ✓ Affordable pricing with transparent billing and no hidden charges. <br />
            ✓ Digital medical records to keep your health data organized and accessible. <br />
            ✓ Trusted by thousands of patients for fast, reliable, and professional care.
        </AboutText>
        </Section>

        <Section>
        <SectionTitle>How It Works</SectionTitle>
        <AboutText>
            1. Sign up or log in to your account. <br />
            2. Browse doctors by specialty or symptoms. <br />
            3. Book an appointment at your preferred time. <br />
            4. Connect via secure video call and receive expert care. <br />
            5. Download prescriptions and follow-ups instantly.
        </AboutText>
        </Section>

        <Section>
        <SectionTitle>Patient Testimonials</SectionTitle>
        <AboutText>
            "I booked an appointment within minutes and got the best consultation from home. Highly recommend!" — <i>Ravi S.</i> <br /><br />
            "Reliable, fast, and very professional doctors. The whole process was smooth and stress-free." — <i>Ananya P.</i>
        </AboutText>
        </Section>



    </HomeContainer>
  )
}

export default Home
