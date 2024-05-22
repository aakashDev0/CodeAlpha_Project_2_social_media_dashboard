import React, { useEffect } from "react";
import Instafeed from "instafeed.js";

const Instagram = () => {
  useEffect(() => {
    const userFeed = new Instafeed({
      get: "user",
      target: "instafeed-container",
      resolution: "low_resolution",
      accessToken:
        "", // Get an Accses token and enter here.====== removed =====
      error: (error) => {
        console.error("Instafeed Error:", error);
      },
    });

    userFeed.run();
  }, []);

  return (
    <div className="instergramContainer">
      <h1>
        Instagram
      </h1>
      <div id="instafeed-container"></div>
    </div>
  );
};

export default Instagram;
