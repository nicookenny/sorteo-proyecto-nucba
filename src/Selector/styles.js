import styled from 'styled-components';
import bgc from './bgc.jpg';

export const WrapperSelector = styled.div`
	width: 100vw;
	height: 100vh;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${bgc});
	background-size: cover;
`;

export const BoxSelector = styled.div`
	width: 50%;
	height: 50%;
	border-radius: 1em;
	background: rgba(255, 255, 255, 0.4);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	padding: 0.75em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Container1 = styled.div`
	height: 15%;
	width: 100%;
`;

export const Title = styled.h1`
	font-size: 1.75em;
	color: #ff005a;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container2 = styled.div`
	height: 60%;
	width: 100%;
	font-size: 2em;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	color: #ff005a;
`;
export const Container3 = styled.div`
	width: 100%;
	height: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.button`
	width: 20%;
	height: 70%;
	background-color: #ff005a;
	border-radius: 100em;
	border: none;
	outline: none;
	box-shadow: none;
	color: white;
	font-weight: bold;
	font-size: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.2s;
	border: 3px solid #ff005a;
	cursor: pointer;
	&:hover {
		background-color: transparent;
		transition: 0.2s;
	}
`;
