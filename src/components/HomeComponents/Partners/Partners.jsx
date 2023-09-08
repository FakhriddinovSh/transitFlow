import { StyledLi } from './Partners.styled';

export const Partners = ({ backgroundImage, Logo }) => {
	return (
		<StyledLi className="col-3" $background={backgroundImage}>
			<img src={Logo} width="200" height="50" alt="Logo" />
		</StyledLi>
	);
};
