import React from "react";
import galleyImages from "./galleryImages";
import Masnory, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masnory gutter="1rem">
        {galleyImages.map((item, index) => (
          <img
            className="masonry__img"
            src={item}
            key={index}
            alt=""
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masnory>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
