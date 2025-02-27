import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [currentValue, setCurrentValue] = useState('0')
  const [pendingOperation, setPendingOperation] = useState(null)
  const [pendingValue, setPendingValue] = useState(null)
  const [completeOperation, setCompleteOperation] = useState('')

  const keypadNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const operations = ["+", "-", "*", "/"]

  const handleClick = (val) => {
    setCurrentValue(prevValue => {
        if (prevValue == 0) {
            return val
        } else {
            return prevValue + val
        }
    })

    setCompleteOperation((prevOperation) => prevOperation + val)
  }

  const handleClear = () => {
    setCurrentValue('0')
    setPendingOperation(null)
    setPendingValue(null)
    setCompleteOperation('')
  }

  const handleOperation = (operation) => {
    setCompleteOperation(currentValue + ' ' + operation + ' ')
    setPendingOperation(operation)
    setPendingValue(currentValue)
    setCurrentValue('0')
  }

  const handleCalculate = () => {
    if (!pendingOperation || !pendingValue) {
        return
    } else {
        const num1 = parseFloat(pendingValue)
        const num2 = parseFloat(currentValue)

        let result

        switch (pendingOperation) {
            case '+':
                result = num1 + num2
                break
            case '-':
                result = num1 - num2
                break
            case '*':
                result = num1 * num2
                break
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2
                } else {
                    setCurrentValue('Error')
                    setCompleteOperation('Error')
                    setPendingOperation(null)
                    setPendingValue(null)
                    return
                }
                break
            default:
                break
        }

        setCompleteOperation(`${pendingValue} ${pendingOperation} ${currentValue} = ${result}`)
        setCurrentValue(result.toString())
        setPendingOperation(null)
        setPendingValue(null)
    }
  }

  return (
    <div className="calculator">
        <div className="complete-operation">{completeOperation}</div>
        <div className="display">{currentValue}</div>
        <div className="buttons">
            {operations.map((operation) => (
                <button
                    key={operation}
                    className='button operations'
                    onClick={() => handleOperation(operation)}
                >{operation}</button>
            ))}

            {keypadNumbers.map((num) => (
                <button
                    key={num}
                    className='button numbers'
                    onClick={() => handleClick(num)}
                >{num}</button>
            ))}

            <button
                className='button clear'
                onClick={handleClear}
            >AC</button>
            
            <button
                className='button'
                onClick={handleCalculate}
            >=</button>
        </div>
    </div>
  )
}

export default Calculator