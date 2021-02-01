import {Component} from 'react';
class Square extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            value:'Double Click image to Like ',
        }
    }
    render()
    {
        return(
            <div align="center">
            <img src={this.props.value[0]} onDoubleClick={() => this.setState({value: 'Liked '})}  alt={this.props.value[1]} height="200px" width="280px" />
            <br/>
            <h1>{this.props.value[1]} </h1>
            <p >{this.state.value} &#128077;</p>
            </div>
        );
    }
}

class Board extends Component
{
    renderImage(value)
    {
        return <Square value={value} />;
    }
    render(){
        return(
            <div>
            {this.renderImage(["https://media.istockphoto.com/photos/taj-mahal-agra-india-picture-id952763206?k=6&m=952763206&s=612x612&w=0&h=cmvVE_-LPIU-yvJUo-ci6afoxzrW6qniskwTNQZHeMA=" ,"Taj Mahal"])}
            {this.renderImage(['https://media.istockphoto.com/photos/interior-of-mosque-jama-masjid-delhi-india-picture-id520494070?k=6&m=520494070&s=612x612&w=0&h=D0P2hGwBouw61gwTYNXrue2WF4gRBKWUPHMP5rESiw8=',"Indian Sculpture"])}
            {this.renderImage(['https://media.istockphoto.com/photos/the-bandraworli-sea-link-mumbai-india-picture-id860528756?k=6&m=860528756&s=612x612&w=0&h=wzdQnJrelzNpBVPUYhlRTG0WV0sAi6MOKmlefR7ed2Y=',"Mumbai City"])}
            </div>
        );
    }
}


export default Board;
