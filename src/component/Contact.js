import React from "react";
import Header from "./Header";
import "./Contact.css";

function Contact() {
  return (
    <div className="ContactMain">
      <div>
        <Header />
      </div>

      <div className="Contact">
        <h1>Contact us</h1>
      </div>
      <div className="Input">
        <label className="name">Name</label>
        <br />
        <input id="Name" className="input1" required="true"></input>
        <br />
        <label className="name">Email</label>
        <br />
        <input id="Email" className="input1" required="true"></input>
        <br />
        <label className="name">Message</label>
        <br />
        <textarea id="Message" className="input2" required="true"></textarea>
      </div>
      <button type="submit" className="button">
        Send
      </button>
      <div className="address">
        <textarea
          id="Address"
          type="text"
          placeholder="Address 1"
          className="input3"
        ></textarea>
        <br />
        <br />
        <textarea
          id="Address"
          type="text"
          placeholder="Address 2"
          className="input3"
        ></textarea>
      </div>

      <div className="Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3350463601796!2d75.89151466460713!3d22.752944082061642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1607362351636!5m2!1sen!2sin"
          // width="450"
          // height="325"
          frameborder="0"
          // style="border:0;"
          // allowfullscreen=""
          // aria-hidden="false"
          // tabindex="0"
          title="map"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
