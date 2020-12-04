import React, { Component } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Container          } from "@material-ui/core";

import "./login";

class Saved extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />;
    }
    return (
      <Container maxWidth="sm">
        <div>
          <h1>User Profile</h1>
          Name:{this.props.name}
          <br></br>
          Email:{this.props.email} <br></br>
          <img src={this.props.imageUrl} alt={""} />
          <img src={this.props.url} alt={""} />
          <hr></hr>
         
          <div>
            <h2>Authenticate User</h2>

            {/* <Button onClick={this.props.logout}
                        variant="contained" 
                        color="primary"
            >Logout</Button>*/}
            <button className="button" onClick={this.props.logout}>
              Logout
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Saved);
