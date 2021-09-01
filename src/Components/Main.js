import React from 'react';
import HornedBeasts from './HornedBeasts';
// import Data from './Components/data.json' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Form from './Form';
import Data from './data.json'






class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedData: '',
      data : Data,
    }
    }

  filteredData = (event) => {
    let hornsNum  = event.target.value;
    let array = this.state.data;
    // let value = this.state.selectedlist;
    // console.log(hornsNum);
    let filtered = array.filter(item => {
      if (item.horns == hornsNum) {
        return item;
      }else if(0 == hornsNum) {
        return item;
    }
    }
    );
    // console.log(this.state.selectedlist);

    this.props.getFilteredData(filtered);


  }







  render() {
    console.log(this.props);
    return (

      <main>
        <Form
          filteredData={this.filteredData}
        />

        <Row xs={1} md={3} className="g-4">
          {this.props.data.map((item) => {

            return (<HornedBeasts title={item.title}
              imgSrc={item.image_url}
              description={item.description}
              handleShow={this.props.handleShow}
              selectedBeastsFun={this.props.selectedBeastsFun}
            />);

          })
          }
        </Row>
      </main>
    )
  }
}

export default Main;