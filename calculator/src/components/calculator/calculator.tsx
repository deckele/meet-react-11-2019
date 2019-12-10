import React, { useState } from 'react';
import './calculator.scss';
import { Screen } from './screen/screen';
import { Button } from './button/button';

interface CalculatorState {
    screenText: string;
    isPrinted: boolean;
}
export class Calculator extends React.Component<{}, CalculatorState> {
    state = {
        screenText: "",
        isPrinted: true
    }
    EQUALS_SIGN = "="
    BUTTONS_CONFIG: string[] = ["1","2","3"," + ","4","5","6"," - ","7","8","9"," * ",this.EQUALS_SIGN,"0","."," / "];

    onButtonClicked = (sign: string) => {
        if (sign === this.EQUALS_SIGN) {
            const result = eval(this.state.screenText);
            this.setState({
                screenText: result,
                isPrinted: true
            });
            return;
        }
        if (this.state.isPrinted) {
            this.setState({
                screenText: sign,
                isPrinted: false
            });
            return;
        }
        this.setState({
            screenText: this.state.screenText + sign
        });
    }
    render() {
        return (
            <div className='calc-container'>
                <Screen text={this.state.screenText}></Screen>
                <div className="buttons-container">
                    {this.BUTTONS_CONFIG
                        .map(sign => 
                            <Button 
                                sign={sign}
                                onClick={this.onButtonClicked} 
                                key={sign}>{sign}</Button>)
                    }
                </div>
            </div>
        );
    }
}