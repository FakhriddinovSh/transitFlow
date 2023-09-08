import styled from 'styled-components';

export const StyledLi = styled.li`
	background-color: ${(props) => (props.active ? '#091242' : '#F4F4F4')};
	color: ${(props) => (props.active ? '#fff' : '#1c1f35')};
	.pricing__subitem {
		border-color: ${(props) => (props.active ? '#1F2A69' : '#D6D6D6')};
	}
	.pricing__link {
		color: ${(props) => (props.active ? '#23212A' : '#fff')};
		background-color: ${(props) => (props.active ? '#ffb629' : '#1F2A69')};
	}
`;
