import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: this.props.name,
        location: this.props.location,
        avatar_url: "http",
      },
    };

    console.log("Child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log("Child component");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(" child Component did updated");
  }

  render() {
    const { name, location, avatar_url } = this?.state?.userInfo;

    console.log("Child render");

    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserInfo;
