import React, { Component } from 'react'
import './Calculator.css'
import Display from '../Components/Display'
import Button from '../Components/Button'

export default class Calculator extends Component {
    calc(dig){

    }

    addDigit(dig){
        console.log(dig)
    }
    
    setOperation(operation){
        console.log(operation)
    }
    
    clearMemory(){
        console.log('clear')
    }
    
    render() {

        const setOperation = op => this.setOperation(op)
        const addDigit = n => this.addDigit(n)

        return (
            <div className='calculator'>
                <Display value={100} />
                <Button label={'AC'} triple click={()=>this.clearMemory()}/>
                <Button label={'/'} click={addDigit}operation />
                <Button label={'7'} click={addDigit}/>
                <Button label={'8'} click={addDigit}/>
                <Button label={'9'} click={addDigit}/>
                <Button label={'*'} click={addDigit} operation />
                <Button label={'4'} click={addDigit}/>
                <Button label={'5'} click={addDigit}/>
                <Button label={'6'} click={addDigit}/>
                <Button label={'-'} click={addDigit}operation />
                <Button label={'1'} click={addDigit}/>
                <Button label={'2'} click={addDigit}/>
                <Button label={'3'} click={addDigit}/>
                <Button label={'+'} click={addDigit}operation />
                <Button label={'0'} click={addDigit} double/>
                <Button label={','} click={addDigit}/>
                <Button label={'='} click={addDigit}/>
            </div>
        )
    }
}