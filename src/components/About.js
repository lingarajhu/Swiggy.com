import UserInfo from "./UserInfo";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

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
        <div className="font-bold">
          Logged in user
          <UserContext.Consumer>
            {({ defaultUser }) => <h1>{defaultUser}</h1>}
          </UserContext.Consumer>
        </div>

        <UserInfo name={"Hamresh"} location={"Assam"} />
      </div>
    );
  }
}

export default About;
