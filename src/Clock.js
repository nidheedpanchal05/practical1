import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }
    changeTime = () =>(
        this.setState({
            date: new Date(),
        })
    )
    componentDidMount() {
        this.timerID = setInterval(
          () => this.changeTime(),
          1000
        );
      }
    componentWillUnmount() {
        clearInterval(this.timerID);
        alert("Cleared ");
    }
    render() {
        return (
            <h1>{this.state.date.toLocaleTimeString()}</h1>
   )
}
}
/*

const user = 'Nidhee';
function Home2()
{
const date = new Date()
const abc = <h1>{date.toLocaleTimeString()}</h1>
return abc
}*/
export default Clock;