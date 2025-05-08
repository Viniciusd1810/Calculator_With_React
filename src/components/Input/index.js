import { InputContainer } from './styles'

const input = ({ value }) => {
  return (
    <InputContainer>
      <input disabled value={value}/>
    </InputContainer>
  );
}

export default input;