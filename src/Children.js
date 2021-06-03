import React, { Component } from 'react';
import GrandSon from './GrandSon';
import GrandGirl from './GrandGirl';
export default class Son extends Component {
  render() {
    return (
      <div>
        Children
        <br />
        <GrandSon />
        <GrandGirl />
      </div>
    );
  }
}
