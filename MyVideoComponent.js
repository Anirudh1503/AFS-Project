import React from "react";
import MyVideo from "./Video/about.mp4";

class MyVideoComponent extends React.Component {
    render() {
      return (
        <video width="100%" height="100%" controls>
          <source src={MyVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      );
    }
  }
  
  export default MyVideoComponent;
  