import React from 'react';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Data from './Components/data.json';
import SelectedBeast from './Components/SelectedBeast.js';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      filteredData : Data,
      show: false,
      title: '',
      discription: '',
      imgSrc: '',
    }
  }

  handleShow = (title) => {
    const data2 = Data.filter(item => {
      if (title === item.title) {
        console.log(item);
        return item;
      }
    })
    this.setState({
      show: true,
      data: data2

    })
  }

  selectedBeastsFun = (title, discription, imgSrc) => {
    this.setState({
      title: title,
      discription: discription,
      imgSrc: imgSrc,
    })

    console.log(title);
  }

  handleClose = () => {
    this.setState({
      show: false,
    })
  }

  getFilteredData = (item) =>{
    this.setState({
      filteredData : item,
    })
  }
  // listFunction = event => {

  //   this.setState({
  //     selectedlist: event.target.value,
  //   })

  //   // console.log(this.state.selectedlist);

  // }


  // this.setState({
  //   selectedData: filtered,

  // })


  render() {

    return (

      <div>
        <Header />

        <Main
          listFunction={this.listFunction}
          data={this.state.filteredData}
          


          selectedlist={this.selectedlist}
          handleShow={this.handleShow}
          selectedBeastsFun={this.selectedBeastsFun}
          getFilteredData={this.getFilteredData}


        />
        <SelectedBeast
          data={this.state.data}
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          discription={this.state.discription}
          imgSrc={this.state.imgSrc}
        />
        <Footer />
      </div>

    )
  }
}

export default App;
