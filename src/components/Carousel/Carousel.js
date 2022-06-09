import { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { carouselData, sliderSettings } from '../../data/carousel';
import { Row, Heading, Section, TextContainer } from '../../globalStyles';
import {
    ReviewSlider,
    ImgContainer,
    CarouselImg,
    BtnContainer,
    CardBtn
} from './carouselStyles';

const Carousel = () => {
    const [sliderRef, setSliderRef] = useState(null);

    return (
        <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
            <Row justify="space-between" align="center" margin="1rem" wrap="wrap">
                <Heading width="auto" inverse>
                    The Company
                </Heading>
                <BtnContainer>
                    <IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
                        <FaArrowCircleLeft onClick={sliderRef?.slickPrev}/>
                        <FaArrowCircleRight onClick={sliderRef?.slickNext}/>
                    </IconContext.Provider>
                </BtnContainer>
            </Row>

            <ReviewSlider {...sliderSettings} ref={setSliderRef}>
                {carouselData.map((el, index) => (
                    <ImgContainer key={index}>
                        <CarouselImg src={el.image}/>
                        <TextContainer size="1.1rem" margin="0.4rem 0 0" weight="bold">
                            {el.title}
                        </TextContainer>
                        <TextContainer size="0.9rem" margin="0.7rem" color="#4f4f4f">
                            {el.description}
                        </TextContainer>
                        <CardBtn>Learn More</CardBtn>
                    </ImgContainer>
                ))}
            </ReviewSlider>
        </Section>
    )
}

export default Carousel