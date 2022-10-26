import React from "react";
import { RightArrowIcon } from "../../../icons";
import img1 from "../../../images/Capture.JPG";

function PreSale() {
  return (
    <div className="flex border-l-4 my-border-1 flex-col sm:flex-row items-center justify-center p-4 bg-white my-shadow-1 space-x-5 justify-between items-center">
      <div className="flex flex-col sm:flex-row items-center justify-center space-x-5">
          <img width="75" height={75} src={img1} alt="" />
        <div className="text-xl">
          <p className="text-xl">
            {" "}
            Pre-Sale progress: Only 5711 Plants left | 52 Plants reserved{" "}
          </p>
          <p>
            Location: Solothurn | Room: Zeus | Estimated grow start: Ende
            Q2/Anfang Q3 2023
          </p>
        </div>
      </div>
      <div className="pr-5 mt-4 sm:mt-0">
        <RightArrowIcon width={30} />
      </div>
    </div>
  );
}

export default PreSale;
