import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newOpacity = this.props.opacity;

    return (
      <div className="color-box" style={{ opacity: newOpacity }}>
        { newOpacity < 0.2 ? null : (
         <ColorBox opacity={newOpacity - 0.1} />
        )}
      </div>
    )
  }

}

