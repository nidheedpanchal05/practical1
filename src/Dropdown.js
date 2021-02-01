import {Component} from 'react';
class Dropdown extends Component{
    constructor(props) {
        super(props);
        this.state = {
            type: 'Hello',
        }
    }
    changeGreetingsType = () =>(
        this.setState({
            type: document.getElementById("texts").value,
        })
    )
    render() {
        return (
            <div>
                <p>Select Greetings :</p>
                <select class="select-opt" id="texts" onChange={this.changeGreetingsType}>
                    <option>Hello </option> 
                    <option>Namastay </option>
                    <option>Bonjour </option> 
                    <option>Yeoboseyo </option>
                    <option>Hola </option>
                </select>
                <h1 id="display">{this.state.type}, everyone. Welcome to our site.</h1>
            </div>
        )
    }
}


export default Dropdown;