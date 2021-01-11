import React, { Component } from "react";

import SecondComponent from "./second.component";

class FirstComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { someNumber: 1 };
  }

  render() {
    return (
      <div>
        <button onClick={this.changeState}>change first component state</button>
        <SecondComponent someNumber={this.state.someNumber} />
      </div>
    );
  }
}

export default FirstComponent;
