import React, { useState } from "react";
import { useDispatch } from "react-redux";
const MyCarouselChild = () => {
  const [carouselImg, setCarouselImg] = useState();
  const [carouselTitle, setCarouselTitle] = useState();
  const [carouselDescription, setCarouselDescription] = useState();
  const myDispatch = useDispatch();

  return (
    <div style={{float: "right", margin: "15px"}}>
      <input
        type="text"
        placeholder="Add Shop Image Url"
        className="m-2"
        onChange={(e) => setCarouselImg(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add Shop Title"
        className="m-2"
        onChange={(e) => setCarouselTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add Description "
        className="m-2"
        onChange={(e) => setCarouselDescription(e.target.value)}
      />
      <button
        onClick={() =>
          myDispatch({
            type: "ADD_CAROUSEL",
            data: { carouselImg, carouselTitle, carouselDescription },
          })
        }
      >
        Add New Shop
      </button>
    </div>
  );
};

export default MyCarouselChild;
