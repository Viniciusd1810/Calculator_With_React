import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row } from './styles'
import { useState } from 'react'

const App = () => {
  const [currentNumber, SetCurrentNumber] = useState(0);
  const [firstNumber, SetFirstNumber] = useState(0);
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    SetCurrentNumber('0')
    SetFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number) => {
    SetCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumber = (number) => {
    if (firstNumber === '0') {
      SetFirstNumber(currentNumber);
      SetCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      SetCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumber = (number) => {
    if (firstNumber === '0') {
      SetFirstNumber(currentNumber);
      SetCurrentNumber('0')
      setOperation('-')
    } else {
      const minus = Number(firstNumber) - Number(currentNumber)
      SetCurrentNumber(String(minus))
      setOperation('')
    }
  }

  const handleMultiplyNumber = (number) => {
    if (firstNumber === '0') {
      SetFirstNumber(currentNumber);
      SetCurrentNumber('0')
      setOperation('*')
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber)
      SetCurrentNumber(String(multiply))
      setOperation('')
    }
  }

   const handleDivisionNumber = (number) => {
    if (firstNumber === '0') {
      SetFirstNumber(currentNumber);
      SetCurrentNumber('0')
      setOperation('÷')
      console.log(handleDivisionNumber)
    } else {
      const division = Number(firstNumber) / Number(currentNumber)
      SetCurrentNumber(String(division))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
         case '*':
          handleMultiplyNumber();
          break;
        case '÷':
          handleDivisionNumber();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container className="App">
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="CE" onClick={() => handleOnClear()} />
          <Button label="←" onClick={() => handleOnClear()}/>
          <Button label="C" onClick={() => handleOnClear()}/>
          <Button label="÷" onClick={handleDivisionNumber}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x" onClick={handleMultiplyNumber}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumber}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumber} />
        </Row>
        <Row>
          <Button label="±" onClick={() => handleAddNumber('0')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;