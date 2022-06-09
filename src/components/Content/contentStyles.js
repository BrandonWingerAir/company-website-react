import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContentColumn = styled(motion.div)`
    margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const ContentContainer = styled(motion.div)`
    max-width: 540px;
	padding-top: 0;

	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
        display: flex;
        flex-direction: column;
        align-items: center;

		> h1, p {
			text-align: center;
		}
	}

	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const ContentRow = styled.div`
    display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

export const ContentTagline = styled(motion.div)`
    font-size: 0.9rem;
	line-height: 16px;
	font-weight: 550;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: #979797;
`;

export const ContentHeading = styled(motion.h2)`
    margin-bottom: 24px;
	font-size: 3rem;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const ContentSubtitle = styled(motion.p)`
    max-width: 440px;
	margin-bottom: 35px;
	line-height: 24px;
	color: ${({ inverse }) => (inverse ? '#6a6a6a' : 'white')};
`;

export const ContentBtn = styled(motion.button)`
    height: 3rem;
	padding: 16px 32px;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	font-weight: 700;
	font-size: 0.8rem;
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	cursor: pointer;
	background: none;
	color: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
	white-space: nowrap;
	outline: none;
	border: 2px solid ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
	border-radius: 4px;
	position: relative;
	overflow: hidden;

	&:before {
		background: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: ${({ inverse }) => (inverse ? 'white' : 'black')};
	}
`;


export const ImgContainer = styled(motion.div)`
    display: flex;
	justify-content: 'flex-end';
	max-height: 700px;
	justify-content: center;
	position: relative;
`;

export const ContentImg = styled(motion.img)`
    padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 700px;
	z-index: 1;
`;