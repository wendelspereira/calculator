import React, { Component } from 'react'
import './Calculator.css'
import Display from '../Components/Display'
import Button from '../Components/Button'

export default class Calculator extends Component {
    render() {
        const labels = ['AC', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', ',', '=']

        const buttons = []
        labels.forEach(element => {
            return buttons.push(<Button key={element} label={element} />)
        })

        return (
            <div className='calculator'>
                <Display value={100} />
                {buttons}
            </div>

            


        )
    }
}