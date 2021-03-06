import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

class Hello extends React.Component<Props, {}> {

    getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }

    render() {
        const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic');
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + this.getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={onIncrement}>+</button>
                    <button onClick={onDecrement}>-</button>
                </div>
            </div>
        );
    }

}

export default Hello;