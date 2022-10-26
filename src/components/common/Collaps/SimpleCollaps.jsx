import React, { useState } from "react";
import { DownDubbleArrowIcon } from "../../../icons";

function SimpleCollaps({ data }) {
  const [open, setOpen] = useState(data?.show || false);
  return (
    <div
      className={` mb-5 overflow-hidden my-shadow-1 ease-in-out duration-300 bg-white`}
    >
      <div
        onClick={() => setOpen(!open)}
        className=" space-x-1 py-3 px-4 hover:bg-[#4b4b4b] hover:text-white cursor-pointer"
      >
        <DownDubbleArrowIcon width={15} className={`inline ${open ? "rotate-180" : ""}`} />
        <p className="inline font-bold text-xl space-x-1 ">
          {data.icon}
          <span>{data.ques}</span>
        </p>
      </div>
      <div className={`${
        open ? "h-auto" : "h-0"
      }`}>
        <div className={`px-4 pt-3 pb-5`}>
        <p>{data.ans}</p>
        {data.tag && <div className="flex mt-2.5  flex-wrap">
          {data.tag &&
            data.tag.map((el) => (
              <span
                className="text-white mr-2 mb-1 bg-[#323232] whitespace-nowrap text-sm rounded-full py-1 px-1.5"
                key={el}
              >
                {el}
              </span>
            ))}
        </div>}
        </div>
      </div>
    </div>
  );
}

export default SimpleCollaps;
