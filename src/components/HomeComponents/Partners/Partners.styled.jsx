import styled from 'styled-components';

export const StyledLi = styled.li`
	height: 234px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: ${(props) =>
		`url(${props.$background})` ||
		'/src/assets/images/home/studio-green.png'};
	background-repeat: no-repeat;
	background-size: cover;
`;
