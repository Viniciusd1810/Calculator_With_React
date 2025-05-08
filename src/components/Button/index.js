import {ButtonContainer} from './styles'

const button = ({label, onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}

export default button;