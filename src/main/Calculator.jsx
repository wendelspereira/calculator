import React, { Component } from 'react'
import './Calculator.css'
import Display from '../Components/Display'
import Button from '../Components/Button'

const initialState = {
    displayValue: '0',
    operation: null,
    values: [0, 1],
    current: 0,
    clearDisplay: false
}

export default class Calculator extends Component {

    state = { ...initialState }

    addDigit(dig) {
        if (dig === ',' && this.state.displayValue.includes(',')) return
        let clearDisplay = this.state.displayValue === '0' ||
            this.state.clearDisplay
        let currentValue = this.state.displayValue
        if (clearDisplay) {
            currentValue = ''
            clearDisplay = !clearDisplay
        }
        const displayValue = currentValue + dig
        let values = { ...this.state.values }

        if (dig !== ',') {
            const i = this.state.current
            values[i] = parseFloat(displayValue)
        }

        this.setState({
            displayValue,
            values,
            clearDisplay,
        })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const values = [...this.state.values]

            const equals = operation === '='
            const currentOperation = this.state.operation
            values[0] = this.calc(values, currentOperation)
            values[1] = 0
            this.setState({
                displayValue: values[0],
                values,
                current: 1,
                operation: equals ? null : operation,
                clearDisplay: !equals
            })
        }
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    calc(values, operation) {
        const [n1, n2] = values
        switch (operation) {
            case '+': return n1 + n2;
            case '-': return n1 - n2;
            case '*': return n1 * n2;
            case '/': return n1 / n2;
        }
    }

    render() {

        const setOperation = op => this.setOperation(op)
        const addDigit = n => this.addDigit(n)

        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button label={'AC'} triple click={() => this.clearMemory()} />
                <Button label={'/'} click={setOperation} operation />
                <Button label={'7'} click={addDigit} />
                <Button label={'8'} click={addDigit} />
                <Button label={'9'} click={addDigit} />
                <Button label={'*'} click={setOperation} operation />
                <Button label={'4'} click={addDigit} />
                <Button label={'5'} click={addDigit} />
                <Button label={'6'} click={addDigit} />
                <Button label={'-'} click={setOperation} operation />
                <Button label={'1'} click={addDigit} />
                <Button label={'2'} click={addDigit} />
                <Button label={'3'} click={addDigit} />
                <Button label={'+'} click={setOperation} operation />
                <Button label={'0'} click={addDigit} double />
                <Button label={','} click={addDigit} />
                <Button label={'='} click={addDigit} />
            </div>
        )
    }
}




















// addDigit(dig) {
//     if (dig === ',' && this.state.displayValue.includes(',')) return

//     let displayValue = this.state.displayValue
//     let clearDisplay = this.state.clearDisplay
//     const currentValue = this.state.currentValue
//     if (displayValue === '0' || clearDisplay) {
//         displayValue = ''
//         clearDisplay = false
//     }

//     displayValue += dig

//     this.state.values[currentValue] = displayValue



//     this.setState({ displayValue, clearDisplay })
// }

// clearMemory() {

// }

// setOperation(operation) {
//     if (this.state.currentValue === 0) {
//         const clearDisplay = true
//         const currentValue = 1
//         this.setState({ operation, currentValue, clearDisplay })
//     } else if (this.state.currentValue === 1) {
//         const values = this.state.values
//         let displayValue
//         if (values[0] !== null && values[1] !== null)
//             displayValue = this.calc(values, operation)
//         console.log(values)
//         const clearDisplay = true
//         this.state.values[0] = displayValue
//         this.state.values[1] = null

//         this.setState({ displayValue, operation, clearDisplay })
//     }
// }


