import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

class FormClass extends Component {



    render() {
        console.log(this.props);
        return (
            <Form onChange={this.props.filteredData}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="select">Choose number of horns</Form.Label>
                    <Form.Select id="select" onChange={this.props.filteredData}>
                        <option id='' value = '0'>All</option>
                        <option id='1' value='1'>one</option>
                        <option id='2' value='2'>Two</option>
                        <option id='3' value='3'>Three</option>
                        <option id='100' value='100'>Wow</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        )
    }
}


export default FormClass;