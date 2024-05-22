import React, { useEffect } from "react";

const Facebook = () => {
  useEffect(() => {
    // Load the 1 Facebook SDK script
    const script1 = document.createElement("script");
    script1.src =
      "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v19.0&appId=1034413500993177"; // change according to the page
    script1.async = true;
    script1.defer = true;
    script1.crossOrigin = "anonymous";
    script1.nonce = "QVVOWZmR";
    document.getElementById("fb-root").appendChild(script1);

    // Load the 2 Facebook SDK script
    const script2 = document.createElement("script");
    script2.src =
      "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v19.0&appId=928417171808524";
    script2.async = true;
    script2.defer = true;
    script2.crossOrigin = "anonymous";
    script2.nonce = "ZBcsz9Y7";
    document.getElementById("fb-root").appendChild(script2);

    return () => {
      document.getElementById("fb-root").removeChild(script1);
      document.getElementById("fb-root").removeChild(script2);
    };
  }, []);

  return (
    <div className="facebookContainer">
      <div id="fb-root"></div>

      {/* 1 fb */}
      <div
        className="fb-page"
        data-href="https://www.facebook.com/facebook"
        data-tabs="timeline"
        data-width="500px"
        data-height="690px"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="true"
        style={{ width: "45%", float: "left", marginRight: "5%" }}
      >
        <blockquote
          cite="https://www.facebook.com/facebook"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/facebook">Facebook</a>
        </blockquote>
      </div>

      {/* 2 fb */}
      <div
        className="fb-page"
        data-href="https://www.facebook.com/Queen"
        data-tabs="timeline"
        data-width="500px"
        data-height="690px"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="true"
        style={{ width: "45%", float: "left" }}
      >
        <blockquote
          cite="https://www.facebook.com/Queen"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/Queen">Queen</a>
        </blockquote>
      </div>
    </div>
  );
};

export default Facebook;
