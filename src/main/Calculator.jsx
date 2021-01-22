import React, { Component } from 'react'
import './Calculator.css'
import Display from '../Components/Display'
import Button from '../Components/Button'

const initialState = {
    displayValue: '0',
    operation: null,
    values: [0, 0],
    currentValue: 0,
    clearDisplay: false
}

export default class Calculator extends Component {

    state = { ...initialState }

    addDigit(dig) {
        if (dig === ',' && this.state.displayValue.includes(',')) return

        let displayValue = this.state.displayValue
        let clearDisplay = this.state.clearDisplay
        const currentValue = this.state.currentValue
        if (displayValue === '0' || clearDisplay) {
            displayValue = ''
            clearDisplay = false
        }

        displayValue += dig

        this.state.values[currentValue] = displayValue


        this.setState({ displayValue, clearDisplay })
    }

    clearMemory() {
        this.setState(initialState)
    }

    setOperation(operation) {
        if (this.state.currentValue === 0) {
            const clearDisplay = true
            const currentValue = 1
            this.setState({ operation, currentValue, clearDisplay })
        } else if (this.state.currentValue === 1) {
            const values = this.state.values
            const displayValue = this.calc(values, operation)
            const clearDisplay = true
            const currentValue = 0
            this.state.values[currentValue] = displayValue
            this.setState({ displayValue, clearDisplay, currentValue })
        }
    }

    calc(values, operation) {
        const nums = values.map(s => parseFloat(s))
        const [n1, n2] = nums
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