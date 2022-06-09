import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { Container, Section } from '../../globalStyles';
import {
    ContentRow,
    ContentColumn,
    ContentContainer,
    ContentTagline,
    ContentHeading,
    ContentBtn,
    ContentSubtitle,
    ImgContainer,
    ContentImg,
} from './contentStyles';

const Content = ({
    primary,
    tagline,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    inverse,
    reverse
}) => {
    const initial = { opacity: 0, y: 30 };
    const animation = useAnimation();

    const { ref, inView } = useInView({ threshhold: 0.2 });

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0
            });
        }
    })

    return (
        <Section inverse={inverse} ref={ref}>
            <Container>
                <ContentRow reverse={reverse}>
                    <ContentColumn>
                        <ContentContainer>
                            <ContentTagline
                                initial={initial}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                animate={animation}
                            >
                                {tagline.text}
                            </ContentTagline>
                            <ContentHeading
                                initial={initial}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                animate={animation}
                                inverse={inverse}
                            >
                                {headline}
                            </ContentHeading>
                            <ContentSubtitle
                                initial={initial}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                animate={animation}
                                inverse={inverse}
                            >
                                {description}
                            </ContentSubtitle>
                            <ContentBtn
                                initial={initial}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                animate={animation}
                                inverse={inverse}
                                primary={primary}
                            >
                                {buttonLabel}
                            </ContentBtn>
                        </ContentContainer>
                    </ContentColumn>
                    <ContentColumn>
                        <ImgContainer>
                            <ContentImg
                                src={img}
                                alt={alt}
                                whileHover={{ rotate: 2, scale: 1.02  }}
                                transition={{ duration: 0.5 }}
                            />
                        </ImgContainer>
                    </ContentColumn>
                </ContentRow>
            </Container>
        </Section>
    )
}

export default Content