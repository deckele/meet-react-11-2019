import React from 'react';
import './button.scss';

interface ButtonProps {
    onClick: (sign: string) => void;
    sign: string;
}

// export const Button: React.FC<ButtonProps> = ({ sign, onClick }) => {
//     function handleClick(): void {
//         onClick(sign)
//     }
//     return <button onClick={handleClick} className="calc-button">{sign}</button>;
// }

export class Button extends React.Component<ButtonProps> {
    // constructor(props: ButtonProps) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    handleClick = (): void => {
        const { sign, onClick } = this.props;
        onClick(sign)
    }
    render() {
        const {sign} = this.props
        return <button onClick={this.handleClick} className="calc-button">{sign}</button>;
    }
}
