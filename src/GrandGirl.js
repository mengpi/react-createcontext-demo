import React, { Component } from 'react';
import GrandParentContext from './utils/GrandParentContext';

export default class GrandGirl extends Component {
  render() {
    return (
      <div>
        ------------ <br />
        GrandGirl
        <GrandParentContext.Consumer>
          {store => {
            return (
              <div>
                <h3>name:{store.name}</h3>
                <h3>age:{store.age}</h3>
              </div>
            );
          }}
        </GrandParentContext.Consumer>
      </div>
    );
  }
}
