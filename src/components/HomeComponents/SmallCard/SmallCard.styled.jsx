import styled from 'styled-components';

export const SmallCardItem = styled.li`
	flex-direction: ${(props) => (props.display ? 'column' : 'row')};
`;

export const SmallCardWrapper = styled.div`
	margin-left: ${(props) => (props.display ? '0' : '35px')};
	margin-top: ${(props) => (props.display ? '22px' : '0')};
	padding-left: ${(props) => (props.display ? '0' : '25px')};

	border-left: ${(props) => (props.display ? 'none' : '1px solid #d8d8d8')};
`;
