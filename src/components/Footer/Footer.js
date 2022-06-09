import { footerData, footerSocialData } from '../../data/footer';
import { Row, Section } from '../../globalStyles';

import {
    FooterContainer,
    FooterGrid,
    FooterColumn,
    FooterLogoContainer,
    FooterLogo,
    FooterAddress,
    FooterSocialIcon,
    FooterLinkItem,
    FooterLinkTitle,
    FooterLink,
    FooterRights
} from './footerStyles';

const Footer = () => {
  return (
    <Section padding="4rem 0 2rem 0">
        <FooterContainer>
            <FooterGrid justify="space-between">
                <FooterColumn id="footerLogo">
                    <FooterLogoContainer to="/">
                        <FooterLogo src="./assets/logo.png"/>
                    </FooterLogoContainer>
                    <FooterAddress>
                    47 Street, Delta Building, US Road, Los Angeles 365
                    </FooterAddress>

                    <Row align="center" margin="auto 0 0 0" gap="1rem">
                        {footerSocialData.map((social, index) => (
                            <FooterSocialIcon
                                key={index}
                                href="/"
                                target="_blank"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </FooterSocialIcon>
                        ))}
                    </Row>
                </FooterColumn>

                {footerData.map((footerItem, index) => (
                    <FooterLinkItem key={index}>
                        <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>

                        {footerItem.links.map((link, linkIndex) => (
                            <FooterLink key={linkIndex} to="/">
                                {link}
                            </FooterLink>
                        ))}
                    </FooterLinkItem>
                ))}
            </FooterGrid>

            <FooterRights>Delta &copy; 2022</FooterRights>
        </FooterContainer>
    </Section>
  )
}

export default Footer;