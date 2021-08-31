import React from 'react';
import HornedBeasts from './HornedBeasts';
// import Data from './Components/data.json' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';




class Main extends React.Component {

  render() {
    // console.log(this.props);
    return (
      
      <main>
        <Row xs={1} md={3} className="g-4">
          {this.props.data.map((item) => {

            return (<HornedBeasts title={item.title}
              imgSrc={item.image_url}
              description={item.description}
              handleShow = {this.props.handleShow}
              selectedBeastsFun = {this.props.selectedBeastsFun}
            />);

          })
          }
        </Row>
      </main>
    )
  }
}

export default Main;