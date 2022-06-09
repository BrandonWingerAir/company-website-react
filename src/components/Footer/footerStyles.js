import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Column } from '../../globalStyles';

export const FooterContainer = styled.div`
    max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
`;

export const FooterGrid = styled.div`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	justify-content: center;
	align-items: center;
`;

export const FooterColumn = styled(Column)`
    @media screen and (max-width: 999px) {
		align-items: center;
		grid-column: 1/-1;
	}
`;

export const FooterLogoContainer = styled(Link)`
    color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;

export const FooterLogo = styled.img`
    margin-right: 10px;
	width: 40px;
`;

export const FooterAddress = styled.div`
    color: white;
	margin: 0.4rem auto 0.4rem;
	max-width: 20rem;
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 2;
	text-align: center;

	@media screen and (min-width: 1000px) {
		margin-left: 0px;
		text-align: left;
		margin-right: 1rem;
	}
`;

export const FooterSocialIcon = styled.a`
    color: #fff;
	font-size: 24px;
`;

export const FooterLinkItem = styled.div`
    display: flex;
	flex-direction: column;
	margin: 16px;
	text-align: left;
	box-sizing: border-box;
	color: #fff;

	@media screen and (max-width: 1000px) {
		align-items: center;
	}
`;

export const FooterLink = styled(Link)`
    color: #fff;
	text-decoration: none;
	margin-bottom: 0.5rem;

	&:hover {
		color: #0467fb;
		transition: 0.3s ease-out;
	}
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`;

export const FooterRights = styled.div`
    color: #fff;
	margin-bottom: 16px;
	width: 100%;
	font-size: 0.8rem;
	text-align: center;
	border-top: 1px solid #2d3748;
	padding: 1rem 0;
	margin: 1rem 0 0;
`;