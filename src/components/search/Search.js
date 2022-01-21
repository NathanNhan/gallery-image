import React, { useState } from "react";
import axios from "axios";
import ImageResults from "../imageResults/ImageResults";

export default function Search() {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [apiUrl, setApiUrl] = useState("https://pixabay.com/api");
  const [apiKey, setApiKey] = useState("17241914-90da7b93c0ccceb734849dcd1");

  const onTextChange = (value) => {
    setSearchText(value);

    if (searchText === "") {
      setImages([]);
    } else {
      axios
        .get(
          `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&safesearch=true`
        )
        .then((res) => setImages(res.data.hits))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <input
        type="text"
        style={{
          backgroundColor: "black",
          color: "white",
          marginLeft: 570,
          marginTop: 100,
          paddingTop: 20,
          paddingLeft: 70,
          fontSize: 30,
          borderTopStyle: "hidden",
          borderRightStyle: "hidden",
          borderLeftStyle: "hidden",
          outline: "none",
          borderBottomStyle: "groove",
        }}
        placeholder="Search for images"
        name="searchText"
        onChange={(e) => onTextChange(e.target.value)}
      />
      <br />
      {images && <ImageResults images={images} />}
    </div>
  );
}
