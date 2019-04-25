import React, { Component } from 'react';

class ClassComponent extends Component {


  render() {
    return (
      <div id="beef" style={{ 
        border: `1px solid ${this.props.color}`, 
        margin: 10, 
        textAlign: 'center' 
      }}>
        <p style={{ color: this.props.color }}>{this.props.name}</p>
        {this.props.children}
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  color: 'black'
}

export default ClassComponent;