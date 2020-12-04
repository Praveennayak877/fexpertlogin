import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Header.css";
import { Drawer } from "@material-ui/core";
import Login from "./login";
import IconButton from "@material-ui/core/IconButton";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import Signup from "./Signup";
import SearchResult from "./SearchResult";

function Header() {
  const [state, setstate] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setstate(open);
  };
  const [state1, setstate1] = useState(false);

  const toggleDrawer1 = (open) => (event) => {
    setstate1(open);
  };

  return (
    <div className="header">
      <Link to="/">
        <img src="/fexpertlogo.jpeg" alt="" height="50px" />
      </Link>

      <div className="header1">
        <Link to="/" class="Text">
          <button className="Link">FAQs</button>
        </Link>

        <Link to="/" class="Text">
          <button className="Link">Blog</button>
        </Link>

        <Link to="/" class="Text">
          <button className="Link">About Us</button>
        </Link>

        <Link to="/" class="Text">
          <button className="Link">Contact Us</button>
        </Link>
        <button className="headerButton" onClick={toggleDrawer1(true)}>
          <b> SignUp </b>
        </button>
        <button className="headerButton" onClick={toggleDrawer(true)}>
          <b> Login </b>
        </button>
      </div>

      <div>
        {/* <Button variant="text"
                color="inherit"
                onClick={toggleDrawer(true)}
    >Login</Button>*/}
      </div>
      <div className="Drawer">
        <Drawer
          anchor="right"
          open={state}
          onClose={toggleDrawer1(false)}
          variant="temporary"
          width="50%"
          fullwidth
        >
          <div>
            <IconButton onClick={toggleDrawer(false)}>
              <ClearOutlinedIcon fontSize="inherit" color="inherit" />
            </IconButton>
          </div>
          <div></div>

          <Login />
        </Drawer>
      </div>
      <div></div>
      <div className="Drawer">
        <Drawer
          anchor="right"
          open={state1}
          onClose={toggleDrawer1(false)}
          variant="temporary"
          width="50%"
          fullwidth
        >
          <div>
            <IconButton onClick={toggleDrawer1(false)}>
              <ClearOutlinedIcon fontSize="inherit" color="inherit" />
            </IconButton>
          </div>
          <div>
            <Signup />
          </div>
        </Drawer>
      </div>

      <div></div>
      <SearchResult />
    </div>
  );
}

export default Header;
