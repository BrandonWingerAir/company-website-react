import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from '../../globalStyles';
import { 
    HeroVideo, 
    HeroSection, 
    HeroText, 
    ButtonWrapper, 
    HeroButton 
} from './heroStyles';

const heroStyles = () => {
  return (
    <HeroSection>
        <HeroVideo src="./assets/hero.mp4" autoPlay muted loop/>
        <Container>
            <MainHeading>
                Your data is secure with us
            </MainHeading>
            <HeroText>
                We provide the best server security for clients all over the world
            </HeroText>
            <ButtonWrapper>
                <Link to='signup'>
                    <Button>Get Started</Button>
                </Link>
                <HeroButton>Find More</HeroButton>
            </ButtonWrapper>
        </Container>
    </HeroSection>
  )
}

export default heroStyles