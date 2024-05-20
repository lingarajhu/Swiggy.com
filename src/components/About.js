import UserInfo from "./UserInfo";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "defaultName",
    };

    console.log("Parent constructor");
  }

  onIncrement = () => {
    this.setState((preCount) => ({
      count: preCount.count + 1,
      name: (preCount.name = "MyName"),
    }));
  };

  componentDidMount() {
    console.log("parent Component");
  }

  componentDidUpdate() {
    console.log("parent Component did updated");
  }

  componentWillUnmount() {
    console.log("parent Component did unmount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>This is about page</h1>
        <h2>About Us</h2>
        <h1>Count: {this.state.count}</h1>
        <div className="font-bold">
          Logged in user
          <UserContext.Consumer>
            {({ defaultUser }) => <h1>{defaultUser}</h1>}
          </UserContext.Consumer>
        </div>

        <UserInfo
          name={this.state.name}
          count={this.state.count}
          increment={this.onIncrement}
          location={"Assam"}
        />
      </div>
    );
  }
}

export default About;
