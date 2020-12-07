import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../Header.css";
import "../SearchResult.css";
import "./ExpertProfile.css";
import { Drawer } from "@material-ui/core";
import Login from "./login";
import IconButton from "@material-ui/core/IconButton";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import Signup from "./Signup";
import PostData from "../postData.json";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function ExpertProfile() {
  const [state, setstate] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setstate(open);
  };
  const [state1, setstate1] = useState(false);

  const toggleDrawer1 = (open) => (event) => {
    setstate1(open);
  };
  // const [search, setSearch] = useState("");
  // const [location, setLocation] = useState("");

  return (
    <div className="Expert">
      <div className="searchField2">
        <input
          type="text"
          className="location"
          placeholder="Location"
          // // onChange={(e) => {
          // //   setLocation(e.target.value);
          // }}
        />
        <input
          type="text"
          className="search"
          placeholder="Search"
          // // onChange={(e) => {
          // //   setSearch(e.target.value);
          // }}
          size="50"
        />
      </div>
      <div className="Filters"></div>
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
      </div>
      <div className="Container">
        <h2 class="item">
          Video Consultation <p className="slot">Afternoon (2 slots)</p>
          <br />
          <span className="Timming">12:00 - 1:00</span>
          <span className="Timming">1:00 - 2:00</span>
          <p className="slot">Evening (7 slots)</p>
          <br></br>
          <span className="Timming">12:00 - 1:00</span>
          <span className="Timming">1:00 - 2:00</span>
          <span className="Timming">12:00 - 1:00</span>
          <br />
          <br />
          <span className="Timming">12:00 - 1:00</span>
          <span className="Timming">1:00 - 2:00</span>
          <span className="Timming">12:00 - 1:00</span>
          <br />
          <br />
          <span className="Timming">12:00 - 1:00</span>
        </h2>
        <h2 class="item">
          Book offline appointment <p className="slot">Afternoon (2 slots)</p>
          <br />
          <span className="Timming">12:00 - 1:00</span>
          <span className="Timming">1:00 - 2:00</span>
          <p className="slot">Evening (7 slots)</p>
          <br></br>
          <span className="Timming">12:00 - 1:00</span>
          <span className="Timming">1:00 - 2:00</span>
          <span className="Timming">12:00 - 1:00</span>
          <br />
          <br />
          <span className="Timming">12:00 - 1:00</span>
          <span className="Timming">1:00 - 2:00</span>
          <span className="Timming">12:00 - 1:00</span>
          <br />
          <br />
          <span className="Timming">12:00 - 1:00</span>
        </h2>
      </div>

      <div className="imageWrapper">
        <img src="avtar.png" alt="" class="imageAvtar" />
      </div>

      <div className="Alignment">
        {PostData.map((postDetail, index) => {
          return (
            <div class="Alignment1">
              <h2>{postDetail.Id}</h2>
              <h5> {postDetail.Title} </h5>
              <h5>Location:{postDetail.Location}</h5>
              <StarIcon fontSize="small" color="error"></StarIcon>
              <StarIcon fontSize="small" color="error"></StarIcon>
              <StarIcon fontSize="small" color="error"></StarIcon>
              <StarIcon fontSize="small" color="error"></StarIcon>
              <StarBorderIcon fontSize="small"> </StarBorderIcon>
              <p>Charges Rs: {postDetail.Charges}</p>
            </div>
          );
        })}

        <h3>About Expert</h3>
        {/* <div className="Container">
          <h2 class="item">Video Consultation</h2>
          <h2 class="item">Book offline appointment</h2>
        </div> */}
        <div className="para">
          Moltz is an Entrepreneurship Hall of Famer--yes, that’s a real
          thing--known for his work as a speaker, author and adjunct professor.
          On his Twitter, he shares strategies for moving businesses forward,
          based on his own entrepreneurial experience.
        </div>
        <br />
        <div className="Firm">
          <h3>Firm</h3>
          <p>
            Address line 1 Address line 2
            <br />
            landmark, District <br /> City - Pin code
          </p>
          <p class="Time">
            Visiting time
            <br />
            <br />
            Working Days <br /> Timming
          </p>
          <p class="Time">
            Charges Rs
            <br />
            <br />
            Types of Payment available
          </p>
        </div>

        <div className="Review">
          <h3>Review</h3>
          <img src="/avtar.png" alt="" />
          <h5>Review Heading</h5>
          Moltz is an Entrepreneurship Hall of Famer--yes, that’s a real
          thing--known for his work as a speaker, author and adjunct professor.
          On his Twitter, he shares strategies for moving businesses forward,
          based on his own entrepreneurial experience.
          <br></br>
          <br /> <br />
          <img src="/avtar.png" alt="" />
          <h5>Review Heading</h5>
          Moltz is an Entrepreneurship Hall of Famer--yes, that’s a real
          thing--known for his work as a speaker, author and adjunct professor.
          On his Twitter, he shares strategies for moving businesses forward,
          based on his own entrepreneurial experience.
          <br></br>
          <br /> <br />
          <img src="/avtar.png" alt="" />
          <h5>Review Heading</h5>
          Moltz is an Entrepreneurship Hall of Famer--yes, that’s a real
          thing--known for his work as a speaker, author and adjunct professor.
          On his Twitter, he shares strategies for moving businesses forward,
          based on his own entrepreneurial experience.
          <br></br>
          <br /> <br />
          <img src="/avtar.png" alt="" />
          <h5>Review Heading</h5>
          Moltz is an Entrepreneurship Hall of Famer--yes, that’s a real
          thing--known for his work as a speaker, author and adjunct professor.
          On his Twitter, he shares strategies for moving businesses forward,
          based on his own entrepreneurial experience.
        </div>
      </div>
    </div>
  );
}

export default ExpertProfile;
