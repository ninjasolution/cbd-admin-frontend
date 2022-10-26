import React from "react";
import "./ContentTitle.css";

function ContentTitle({imgSrc, text}) {
  return (
    <div className="mt-2.5 text-center content-title flex items-center mb-16">
      <div className="inline-flex items-center space-x-2">
        <img src={imgSrc} alt=""/>
        <span className="text-4xl font-normal uppercase color-4">
         {text}
        </span>
      </div>
    </div>
  );
}

export default ContentTitle;
