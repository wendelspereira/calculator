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

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + dig
        this.setState({ displayValue, clearDisplay: false })

        const defOp = this.state.operation
        const value = this.state.values

        defOp ? value[1] = parseFloat(displayValue) :
            value[0] = parseFloat(displayValue)

        console.log(value[0], value[1], defOp)

    }

    clearMemory() {
        console.log(this.state)    }

    setOperation(operation) {
        this.setState({ operation })
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