import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./loading.json";

export default class NotFound extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div className="loading-content">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}
