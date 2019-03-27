import React from "react";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
  }

  toggle = () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  };

  render() {
    const { isOpened } = this.state;
    const textValue = isOpened ? "Close" : "View";
    return (
      <div>
        {this.state.isOpened && <h3>Activities:</h3>}
        <button onClick={this.toggle}>{textValue}</button>
      </div>
    );
  }
}
