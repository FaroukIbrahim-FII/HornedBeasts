import React from 'react';


class HornedBeasts extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <img src={this.props.imgSrc} alt=""/>
                <h2>{this.props.keyword}</h2>
                <h2>{this.props.horns}</h2>
            </div>
        )
    }
}

export default HornedBeasts;