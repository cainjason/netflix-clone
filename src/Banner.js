import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.acemetrix.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fblack-banner-vector21.png&f=1&nofb=1&ipt=7b5950bf649a22c6313e728aa198ea9ddfa7b4f12ca3650cf46ac759071fa52c&ipo=images')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test descriptionThis is a test description This is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test descriptionThis is a test description This
          is a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test description This is a test descriptionThis
          is a test descriptionThis is a test description`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
