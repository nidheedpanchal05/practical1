import React from 'react';

class Map_Array extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            name_list : [ "Google", "Tesla", "Microsoft", "Facebook", "Netflix", "Amazon"],
        }
    }

    eventHandler() {
        throw new Error("Event handler error")
    }

    render() {
        return (
            <div>
                <React.Fragment>
                <ul className="list" >
                    {this.state.name_list.map((list_item) => <li key={list_item} value={list_item}><h1>{list_item }</h1></li>)}
                </ul>
                
                <button className="btn" type="button" onClick={() => {this.eventHandler();}}>Error</button>
                <button className="btn" type="button" onClick={() => this.setState({name_list: this.state.name_list.sort()})}>Sort by name</button>
                </React.Fragment>
            </div>
        )
    }
}
/*
var list_numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
x = [2,3,4,5]

.map((i) =>{
<li> {i} </li>
})
*/
export default Map_Array;