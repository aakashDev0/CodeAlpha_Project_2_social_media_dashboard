import React, { useState } from "react";
import axios from "axios";
import "./Style.css";

const YouTube = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            q: searchQuery,
            type: "video",
            maxResults: 9,
            key: "", //  Get an API key and enter here.====== removed =====
          },
        }
      );

      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      console.error("Error searching videos:", error);
    }
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="youtubeDiv">
      <h1>YouTube Video Search</h1>
      <div className="ytInput">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="tyvideo">
        {selectedVideo && (
          <iframe
            width="660"
            height="415"
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            title="YouTube Video Player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="ytresult">
        <h2>Search Results</h2>
        <ul>
          {videos.map((video) => (
            <li key={video.id.videoId}>
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
                onClick={() => handleVideoSelect(video)}
              />
              <p>{video.snippet.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default YouTube;
