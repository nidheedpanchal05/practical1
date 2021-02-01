
import { Component } from 'react';

class Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'italian',
            price: 25,
            shape: 'circular'
        }
    }
    
    changePizzaType = () => {
        this.setState({
            type: 'american',
            price: 30,
        })
    }

    render(){
        return (
            <div>
            <h1>{this.state.type} Pizza</h1>
            <p>It cost {this.state.price}</p>
            <p>Anbd its shape is {this.state.shape}</p>
            <button type="button" onClick={this.changePizzaType}>Change to American</button>
            </div>
        )
    }
}

export default Pizza;
