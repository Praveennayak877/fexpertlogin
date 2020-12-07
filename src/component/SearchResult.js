import React, { useState } from "react";
import { Link } from 'react-router-dom'
import PostData from "../post.json";
import "../SearchResult.css";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "../Header.css";


function SearchResult() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div className="SearchResult1">
     
        <div className="SearchResult">
          <div className="searchField">
            <input
              type="text"
              className="location"
              placeholder="Location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <input
              type="text"
              className="search"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              size="50"
            />
          </div>

          <div className="Filters">
            <button>
              <b>Sort by</b>
            </button>
            <button>
              <b>Filters</b>
            </button>
          </div>
          <h1 className="Result">10 results</h1>
          <div className="Wrapper">
            <img src="./avtar.png" alt="" class="image"></img>
          </div>
          {PostData.filter((postDetail) => {
            if (search === "" && location === "") {
              return postDetail;
            } else if (
              postDetail.Id.toLowerCase().includes(search.toLowerCase()) &&
              postDetail.Location.toLowerCase().includes(location.toLowerCase())
            ) {
              return postDetail;
            }
          }).map((postDetail, index) => {
            return (
              <div className="Search">
                <Link to={"/ExpertProfile"}>
                  <button className="ExpertName">
                    <h1>{postDetail.Id}</h1>
                  </button>
                </Link>

                <div className="Button1">
                  <button className="Sbutton">Video consultation</button>

                  <button className="Sbutton">Book appointment</button>
                </div>
                <h5>{postDetail.Title}</h5>
                <h5>Location:{postDetail.Location}</h5>
                <StarIcon fontSize="small" color="error"></StarIcon>
                <StarIcon fontSize="small" color="error"></StarIcon>
                <StarIcon fontSize="small" color="error"></StarIcon>
                <StarIcon fontSize="small" color="error"></StarIcon>
                <StarBorderIcon fontSize="small"> </StarBorderIcon>
                <p>Charges Rs: {postDetail.Charges}</p>
                <br />
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default SearchResult;
