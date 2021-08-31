import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes: 0
        }
    }


    incrementnumberOfVotes = () => {
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1
        })
    }
    handleShow = ()=>{
        this.props.handleShow(this.props.title)
        this.props.selectedBeastsFun(this.props.title, this.props.discription, this.props.imgSrc)
    }


    render() {


        return (
            // <div>
            //     <h1>{this.props.title}</h1>
            //     <p>{this.props.description}</p>
            //     <img src={this.props.imgSrc} alt=""/>
            //     <h2>{this.props.keyword}</h2>
            //     <h2>{this.props.horns}</h2>
            // </div>
            // 
            <Col>
                <Card style={{ width: '18rem' }} onClick = {this.handleShow}>
                    <Card.Img variant="top" src={this.props.imgSrc} onClick={this.incrementnumberOfVotes} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            ❤️ : {this.state.numberOfVotes}
                        </Card.Text>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default HornedBeasts;