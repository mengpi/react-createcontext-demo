import React, { Component } from 'react';
import GrandParentContext from './utils/GrandParentContext';

export default class GrandSon extends Component {
  static contextType = GrandParentContext;

  render() {
    return (
      <div>
        ------------ <br />
        GrandSon
        <div>
          <h3>name:{this.context.name}</h3>
          <h3>age:{this.context.age}</h3>
        </div>
      </div>
    );
  }
}
