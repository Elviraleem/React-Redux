// import React from "react";
// import Activity from "./Activity";

// export default class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isOpened: false };
//   }

//   toggle = () => {
//     this.setState({
//       isOpened: !this.state.isOpened
//     });
//   };

//   render() {
//     console.log(this.props);
//     // const { isOpened } = this.state;
//     // const textValue = isOpened ? "Close" : "View";
//     return (
//       <div>
//         {this.state.isOpened && <Activity itinerary={this.props.itinerary} />}
//         <button onClick={this.toggle}>{textValue}</button>
//       </div>
//     );
//   }
// }
