import { Container, Section } from '../../globalStyles';
import { featuresData }from '../../data/features';

import {
    FeaturesTitleContainer,
    FeaturesTitle,
    FeatureContainer,
    FeatureColumn,
    FeatureImageContainer,
    FeatureText,
    FeatureName
} from './featuresStyles';

const Features = () => {
    const initial = {
        y: 40,
        opacity: 0
    };

    const animate = {
        y: 0,
        opacity: 1
    };

    return (
        <Section smPadding="50px 10px" position="relative" inverse id="features">
            <Container>
                <FeaturesTitleContainer>
                    <FeaturesTitle>What We Offer</FeaturesTitle>
                </FeaturesTitleContainer>

                <FeatureContainer>
                    {featuresData.map((el, index) => (
                        <FeatureColumn
                            initial={initial}
                            animate={animate}
                            transition={{ duration: 0.5 + index * 0.1 }}
                            key={index}
                        >
                            <FeatureImageContainer className={el.imgClass}>
                                {el.icon}
                            </FeatureImageContainer>
                            <FeatureName>{el.name}</FeatureName>
                            <FeatureText>{el.description}</FeatureText>
                        </FeatureColumn>
                    ))}
                </FeatureContainer>
            </Container>
        </Section>
    );
}

export default Features