import React from "react";

class What extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countAgain: 0,
    };
  }

  incrementCountAgain() {
    this.setState({
      countAgain: this.state.countAgain + 1,
    });
  }

  render() {
    return (
      <div>
        <p>count: {this.state.countAgain}</p>
        <button onClick={() => this.incrementCountAgain()}>CLICK PLS</button>
      </div>
    );
  }

  // const title = this.props.title;
  // const beer = "This is my beer";
  // const showBeer = "beer";
  // const condit = true;

  // if (!condit) {
  //   return (
  //     <div>
  //       <h1>{title}</h1>
  //       <h1>{showBeer}</h1>
  //       <p>Manage your stuff</p>
  //     </div>
  //   );
  // } else {
  //   return <p>{beer}</p>;
  // }
}

// What.defaultProps = {
//   title: "not sure title",
// };

export default What;
