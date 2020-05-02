import Flippy, { FrontSide, BackSide } from 'react-flippy';
import React, { Component } from 'react';
import './Card.css'

// The flipping Card Component, taking properties of the image, name, intros from instances
class Card extends Component {
  render() {
    return (
      <div>
        <Flippy 
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={(r) => this.flippy = r}
          style={{ width: '240px', height: '300px' }}>
            <FrontSide
              style={{
              backgroundColor: 'white',
              alignItems: 'center',
              display: 'block',
              flexDirection: 'row'
            }}>
              {this.props.image}  
            </FrontSide>
            <BackSide
              style={{ backgroundColor: 'black'}}>
              <h4>{this.props.name}</h4>
              <h6>{this.props.intro1}</h6>
              <h6>{this.props.intro2}</h6>
              <h6>{this.props.intro3}</h6>
            </BackSide>
          </Flippy>
        </div>
    )
  }  
}

export default Card